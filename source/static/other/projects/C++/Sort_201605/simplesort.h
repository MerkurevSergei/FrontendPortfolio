#ifndef SIMPLESORT
#define SIMPLESORT

#include "general.h"

using namespace std;

namespace msalg {

// Две самые простые сортировки
vector<int> &SortInserts(vector<int> &data);
vector<int> &SortBinaryInserts(vector<int> &data);
// Немного улучшаем, за счет уменьшения обменов
vector<int> &SortSelection(vector<int> &data);

// Пузырьковая сортировка, iПузырьковая и её улучшение шейк-сортировка
vector<int> &SortBubble(vector<int> &data);
vector<int> &SortiBubble(vector<int> &data);
vector<int> &SortShaker(vector<int> &data);
}
#endif // SIMPLESORT

