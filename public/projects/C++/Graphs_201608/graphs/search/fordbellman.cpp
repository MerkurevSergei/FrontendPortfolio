//**
//* Search in graph for list of edges
//* ford_bellma - search with weight, directed with circle
//* @params:
//*     graph - граф, как список ребер
//*     m     - количество вершин
//*     start - начальная вершина
//* @return pair(предыдущая вершина на кратчайшем пути, длина пути)
//**
#include "fordbellman.h"

namespace msn {
// start namespace
pair<vector<unsigned>, vector<int> >
ford_bellman(vector<pair<unsigned, pair<unsigned, int> > > graph, unsigned m, unsigned start)
{
    vector<int> len (m, 32000);
    vector<unsigned> pred(m, INF_UNSIGNED);
    len[start] = 0;
    for (size_t i = 0; i<m-1; ++i)
    {
        for (auto it = graph.begin(); it != graph.end(); ++it)
        {
            unsigned parent      = it->first;
            unsigned child       = it->second.first;
            int weightpath  = it->second.second;
            if (len[parent] == 32000) continue;
            if (len[child] > len[parent] + weightpath)
            {
                len[child] = len[parent] + weightpath;
                pred[child] = parent;
            }
        }
    }
    //
    for (auto it = graph.begin(); it != graph.end(); ++it)
    {
        unsigned parent      = it->first;
        unsigned child       = it->second.first;
        int weightpath  = it->second.second;
        if (len[parent] == 32000) continue;
        if (len[child] > len[parent] + weightpath)
        {
            len[child] = len[parent] + weightpath;
            pred[child] = parent;
            len.push_back(len[child]);
            pred.push_back(parent);
        }
    }
    return make_pair(pred,len);
}
// end namespace
}
