//**
//* Search in graph connected component
//* Use BFS for graph with circle
//* Use DFS for graph without circle
//* Use Strongly for directed graph
//**
#ifndef SEARCHCOMPONENT_H
#define SEARCHCOMPONENT_H

#include <algorithm>
#include <vector>
#include "general.h"
#include "getgraph.h"
#include "search/bfs.h"
#include "search/dfs.h"
using std::vector;

namespace msn
{
// start namespace
    // Для неориентированных графов с циклами
    vector<vector<unsigned> > searchComponentsBFS(const vector<vector<unsigned> >& graph);
    // Для неориентированных графов без циклов
    vector<vector<unsigned> > searchComponentsDFS(const vector<vector<unsigned> >& graph);
    // Для ориентированных графов, поиск компонент сильной связности
    vector<vector<unsigned> > searchComponentsStrongly(const vector<vector<unsigned> >& graph);

// end namespace
}

#endif // SEARCHCOMPONENT_H
