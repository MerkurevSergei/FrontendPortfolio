#ifndef MERGESORT_H
#define MERGESORT_H


#include "general.h"
#include <QList>

using namespace std;

namespace msalg {

vector<int> &SortMergeSimple(vector<int> &data); // Сортировка простыми слияниями
void        SortMergeSimple (vector<int> &data, int p, int r); // Вспомогательная процедура

}

#endif // MERGESORT_H
