//**
//* Search in graph for list of adjacensy
//* bfs - Breadth-First Search
//* @params:
//*     graph - граф, как список смежности
//*     start - вершина, с которой начинается поиск
//*@return
//*     vector<unsigned> - вектор кратчайших путей
//**
#ifndef BFS_H
#define BFS_H

#include <vector>
#include <queue>
#include "general.h"

using std::vector;
using std::queue;

namespace msn {
    vector<unsigned> bfs(const vector<vector<unsigned> >& graph, vector<char> &used, unsigned start = 0);
}
#endif // BFS_H
