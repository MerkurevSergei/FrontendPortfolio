//**
//* Search in graph for list of edges
//* ford_bellma - search with weight, directed with circle
//* @params:
//*     graph - граф, как список ребер
//*     m     - количество вершин
//*     start - начальная вершина
//* @return pair(предыдущая вершина на кратчайшем пути, длина пути)
//**
#ifndef FORDBELLMAN_H
#define FORDBELLMAN_H

#include <map>
#include <vector>
#include "general.h"
using std::vector;
using std::pair;
namespace msn {
    pair<vector<unsigned>, vector<int> > ford_bellman(vector<pair<unsigned, pair<unsigned,int> > > graph,
                                         unsigned m, unsigned start = 0);
}


#endif // FORDBELLMAN_H
