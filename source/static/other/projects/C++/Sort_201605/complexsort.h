#ifndef COMPLEXSORT
#define COMPLEXSORT

#include "general.h"
#include "simplesort.h"



namespace msalg {

vector<int> &SortShells(vector<int> &data); // Сортировка Шелла

vector<int> &SortHeap(vector<int> &data);   // Пирамидальная сортировка
void CreateHeap(int n, vector<int> &data);  // Построение пирамиды
void SiftDown(int i, int n, vector<int> &data);    // Просеивание вниз

vector<int> &SortQuick(vector<int> &data);  // Быстрая сортировка (вызов)
void SortQuick(int left, int right, vector<int> &data); // Быстрая сортировка (основная)

}

#endif // COMPLEX

