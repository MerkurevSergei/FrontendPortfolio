//**
//* Search in graph for list of adjacensy
//* Dijkstra - search with weight, directed or undirected
//* @params:
//*     graph - граф, как список смежности
//*     start - вершина, с которой начинается поиск
//*@return dfs
//*     vector<unsigned> - вектор кратчайших путей
#ifndef DIJKSTRA_H
#define DIJKSTRA_H

#include <map>
#include <vector>
#include "general.h"
using std::vector;
using std::pair;
namespace msn {
// start namespace
    // Вариант №1 - очередь с приоритетами как массив
    vector<unsigned> dijkstra_one(const vector<vector<pair<unsigned, int> > >& graph, unsigned start = 0);
    // Вариант №2 - очередь с приоритетами как бинарное дерево
    vector<unsigned> dijkstra_two(const vector<vector<pair<unsigned, int> > >& graph, unsigned start = 0);
// end namespace
}

#endif // DIJKSTRA_H
