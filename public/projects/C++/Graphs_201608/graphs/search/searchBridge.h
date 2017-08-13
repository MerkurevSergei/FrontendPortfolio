
//** FOR BRIDGES
//* Search in graph for list of adjacensy
//* Depth-First Search FOR BRIDGES
//* @params:
//*     graph - граф, как список смежности
//*     used  - список вершин, в которых побывали
//*     start - вершина, с которой начинается поиск
//*@return dfsForBridge
//*     vector<pair<unsigned, unsigned> > - вектор
//*     мостов и точек сочленения
//**
#ifndef SEARCHBRIDGE_H
#define SEARCHBRIDGE_H


#include <algorithm>
#include <vector>
#include "general.h"
#include "getgraph.h"
#include "search/dfs.h"

using std::vector;
using std::pair;

namespace msn
{
// start namespace

vector<pair<unsigned,unsigned> >  searchBridge(const vector<vector<unsigned> >& graph);

// Вспомогательная процедура для поиска мостов
vector<pair<unsigned, unsigned> > dfsForBridge(const vector<vector<unsigned> >& graph,
                                               vector<char>& used, unsigned timer,
                                               vector<unsigned>& tin,   vector<unsigned> &fup,
                                               unsigned prev = -1, unsigned    start = 0);

// end namespace
}

#endif // SEARCHBRIDGE_H
