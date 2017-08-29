#include "simplesort.h"

namespace msalg {

// ---=== Сортировка вставками и двоичными вставками (улучшение) ===--- //
vector<int>& SortInserts(vector<int> &data)
{
    size_t size = data.size();

    for (int i=1; i<size; ++i)
    {
        int j = i;
        int x = data[j];
        while (j>0 && x<data[j-1])
            data[j] = data[--j];

        data[j] = x;
    }
    return data;
}
vector<int>& SortBinaryInserts(vector<int> &data)
{
    size_t size = data.size();

    for (int i=1; i<size; ++i)
    {
        int L = 0; int R = i; int j = i;
        int x = data[j];
        // Поиск в отсортированной последовательности
        while (L<R)
            if (data[j] < data[(L+R)/2])
                R = (L+R)/2;
            else
                L = ((L+R)/2) + 1;
        // Сдвигаем элементы, со вставкой последнего элементав нужную позицию
        // В результате чего последовательность сохраняет упорядоченность
        for (j = i; j!=L; j--)
            data[j] = data[j-1];
        data[L] = x;
    }
    return data;
}

// ---=== Сортировка выбором ===--- //
vector<int> &SortSelection(vector<int> &data)
{
    size_t size = data.size();

    // Первый цикл - один проход от первого элемента до предпоследнего
    for (int i = 0; i<(size-1); ++i)
    {
        int x = data[i]; int poz = i;
        // Внутренние циклы от позиции i до конца массива - в поиске минимума
        for (int j = i; j<size; ++j)
            if (x > data[j]) {poz = j;  x = data[j];}

        data[poz] = data[i]; // Обмен
        data[i] = x;

    }
    return data;

}

// ---=== Пузырьковая сортировка и её улучшения - классика :-) ===--- //
vector<int> &SortBubble(vector<int> &data)
{
    size_t size = data.size();

    for (int i = 0; i<size; i++)
    {
        for(int j=size-1; j>i; --j)
            if (data[j-1] > data[j])
            {
                int x=data[j-1];
                data[j-1]=data[j];
                data[j]=x;
            }
    }
    return data;
}
vector<int> &SortiBubble(vector<int> &data) // немного улучшим
{
    size_t size = data.size();

    for (int i = 0; i<size; i++)
    {
        int oneswap = 0;
        for(int j=size-1; j>i; --j)
            if (data[j-1] > data[j])
            {
                if (oneswap == 0) oneswap = 1;
                int x=data[j-1];
                data[j-1]=data[j];
                data[j]=x;
            }
        if (oneswap == 0) break;
    }
    return data;
}
vector<int> &SortShaker(vector<int> &data) // Шейкер
{
    size_t size = data.size();
    int L = 1;
    int R = size-1;

    while (L<R)
    {
        int oneswap = 0;
        for(int i=L; i<=R; ++i)
        {
            if (data[i-1] > data[i])
            {
                if (oneswap == 0) oneswap = 1;
                int x=data[i-1];
                data[i-1]=data[i];
                data[i]=x;
            }
        }
        ++L;
        for(int j=R; j>=L-1; --j)
        {
            if (data[j-1] > data[j])
            {
                if (oneswap == 0) oneswap = 1;
                int x=data[j-1];
                data[j-1]=data[j];
                data[j]=x;
            }
        }
        --R;
        if (oneswap == 0) break;
    }
    return data;
}



}
