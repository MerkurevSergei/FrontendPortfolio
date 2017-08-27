#include "complexsort.h"

namespace msalg {

// ---=== Сортировка Шелла ===--- //
vector<int> &SortShells(vector<int> &data)
{
    int i;
    size_t size;
    vector<int> ranges;
    i = 0;
    size = data.size();
    // по формуле Седжвика вычисляем интервалы
    do
    {
        if(!(i%2)) // четное i
            ranges.push_back(9*pow(2,i) - 9*pow(2,i/2) + 1);
        else // нечетное i
            ranges.push_back(8*pow(2,i) - 6*pow(2,(i+1)/2) + 1);
       ++i;
    } while (3*ranges.at(i-1) < size);
    ranges.pop_back();

    // сортируем используя вычисленные интервалы
    while (!ranges.empty())
    {
        int rang = ranges.back(); // получаем интервал
        ranges.pop_back();
        for (int i=rang; i<size; ++i) // проходим по сортируемому массиву
        {                             // начиная с первого (не нулевого)
            int j = i;                // элемента группы
            int x = data.at(j);
            while (j>0 && j-rang>=0 && x<data.at(j-rang)) // начинаем сравнивать и при
            {                                // необходимости обменивать элементы
                data.at(j) = data.at(j-rang);

                j -=rang;
                //cout << "j4-rang: " <<j-rang<< endl;
                //cout << "j5: " <<j<< endl;
            }
            data.at(j) = x;
        }

    }
    return data;
}

// ---=== Пирамидальная сортировка ===--- //
vector<int> &SortHeap(vector<int> &data)
{
    int i, n;
    n = data.size();
    if (n == 0) return data;
    CreateHeap(n, data);
    while (n>0)
    {
        SiftDown(0, n, data);
        swap(data[n-1],data[0]);
        --n;
    }

    return data;
}

void CreateHeap(int n, vector<int> &data)
{
    int i = n/2-1;
    while (i>=0)
    {
        SiftDown(i, n, data);
        --i;
    }
}
void SiftDown(int i, int n, vector<int> &data)
{
    // Если лист один или их нет, проверяем на больше/меньше и уходим
    if (2*i+2 > n-1)
    {
        if (2*i+1 > n-1) return; // листьев нет
        data[i] = (data[i]<data[2*i+1]) ? data[2*i+1]:data[i];
        return;
    }

    // Иначе сверяем листья и узел
    int maxleaf = data[2*i+1]>data[2*i+2] ? 2*i+1:2*i+2;
    if (data[i] < data[maxleaf])
    {
        swap(data[i],data[maxleaf]);
        SiftDown(maxleaf, n, data); // Просеиваем дальше
    }
    return;
}

// ---=== Быстрая сортировка ===--- //
vector<int> &SortQuick(vector<int> &data)
{
    int n; // размер выборки
    n = data.size();
    if (n == 0) return data;
    SortQuick(0,n-1,data);
    return data;
}
void SortQuick(int left, int right, vector<int> &data)
{
    int x; // опорный элемент
    int i,j; // переменные цикла
    i = left; j = right;
    x = data.at((right-left)/2 + left);

    while (i<j)
    {
        while (data.at(i)<x) ++i;
        while (data.at(j)>x) --j;
        if (i<j)
        {
            swap(data.at(i),data.at(j));
            ++i; --j;
        }
    }

    if (right-left <= 1) return;
    SortQuick(left, j, data);
    SortQuick(i, right, data);
    return;
}

}
