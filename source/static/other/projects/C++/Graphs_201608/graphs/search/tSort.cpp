//**
//* Topological sort
//* Used DFS
//**
#include "./search/tSort.h"

using std::vector;
using std::queue;
namespace msn
{
// start namespace
    vector<unsigned>
    tSort(const vector<vector<unsigned> >& graph)
    {
        vector<unsigned> vecAns;
        vector<char> used(graph.size(),false);
        for (auto it = used.begin(); it!=used.end();++it) {
            if (!(*it)) {
                auto tmp = dfs(graph, used,it - used.begin());
                vecAns.insert(vecAns.end(), tmp.begin(), tmp.end());
            }
        }
        return vecAns;
    }

// end namespace
}
