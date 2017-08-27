//**
//* Search in graph for list of adjacensy
//* Depth-First Search
//* @params:
//*     graph - граф, как список смежности
//*     used  - список вершин, в которых побывали
//*     start - вершина, с которой начинается поиск
//*@return dfs
//*     vector<unsigned> - вектор кратчайших путей

#ifndef DFS_H
#define DFS_H

#include <algorithm>
#include <vector>
using std::vector;
namespace msn
{
// start namespace

vector<unsigned> dfs(const vector<vector<unsigned> >& graph, vector<char>& used,
                     unsigned start = 0);
// end namespace
}



#endif // DFS_H
