#include <QTime>

#include <iostream>
#include <vector>

#include "simplesort.h"
#include "complexsort.h"
#include "mergesort.h"

int compare(vector<int> &temp); // вызов всех сортировок
void testres(vector<int> temp); // проверка на корректность сортировки
using namespace std;

int main()
{
    QTime midnight(0,0,0);
    qsrand(midnight.secsTo(QTime::currentTime()));

    vector<int> temp1(100);
    vector<int> temp2(1000);
    vector<int> temp3(10000);

    for (int i=0;i<10000;i++)
    {
        if (i<100)  temp1[i] = qrand()%32000;
        if (i<1000) temp2[i] = qrand()%32000;
        temp3[i] = qrand()%32000;
    }

    cout << "count 100:"<<endl;
    compare(temp1);
    cout << endl;

    cout << "count 1000:"<<endl;
    compare(temp2);
    cout << endl;

    cout << "count 10000:"<<endl;
    compare(temp3);
    cout << endl;

//    cout<<"After sort:"<<endl;
//    for (int i=0;i!=temp1.size();++i)
//        cout << temp1[i] << " ";
//    cout <<endl;
    return 0;
}

// ==========================================================================//
// ================= Сортируем, сравниваем, тестируем =======================//
// ==========================================================================//
int compare(vector<int> &temp)
{
    // Создаем копии массивов для разных сортировок
    vector<int> temp1(temp);
    vector<int> temp2(temp);
    vector<int> temp3(temp);
    vector<int> temp4(temp);
    vector<int> temp5(temp);
    vector<int> temp6(temp);
    vector<int> temp7(temp);
    vector<int> temp8(temp);
    vector<int> temp9(temp);
    vector<int> temp10(temp);

    // Простые сортировки
    QTime time;

    time.start();
    temp1 = msalg::SortInserts(temp1);
    cout << time.elapsed() << " - sort inserters" << std::endl;
    testres(temp1);

    time.restart();
    temp2 = msalg::SortBinaryInserts(temp2);
    cout << time.elapsed() << " - sort binary inserters" << std::endl;
    testres(temp2);

    time.restart();
    temp3 = msalg::SortSelection(temp3);
    cout << time.elapsed() << " - sort selection" << std::endl;
    testres(temp3);

    time.restart();
    temp4 = msalg::SortBubble(temp4);
    cout << time.elapsed() << " - sort bubble" << std::endl;
    testres(temp4);

    time.restart();
    temp5 = msalg::SortiBubble(temp5);
    cout << time.elapsed() << " - sort i bubble" << std::endl;
    testres(temp5);

    time.restart();
    temp6 = msalg::SortShaker(temp6);
    cout << time.elapsed() << " - sort shacker" << std::endl;
    testres(temp6);

    // Улучшенные сортировки
    time.restart();
    temp7 = msalg::SortShells(temp7);
    cout << time.elapsed() << " - sort shell" << std::endl;
    testres(temp7);

    time.restart();
    temp8 = msalg::SortHeap(temp8);
    cout << time.elapsed() << " - sort heap" << std::endl;
    testres(temp8);

    time.restart();
    temp9 = msalg::SortQuick(temp9);
    cout << time.elapsed() << " - sort quick" << std::endl;
    testres(temp9);

    // Сортировка слиянием
    time.restart();
    temp10 = msalg::SortMergeSimple(temp10);
    cout << time.elapsed() << " - sort merge" << std::endl;
    testres(temp10);

    return 0;
}

// Тест правильности сортировки
void testres(vector<int> temp)
{
    int n = temp.size();
    for (int i = 0; i<n-1; ++i)
    {
        if (temp[i]>temp[i+1])
        {
            cout << "PREVENT SORT ERR" <<endl;
            break;
        }
    }
    return;
}

