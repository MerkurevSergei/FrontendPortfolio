//**
//* Topological sort
//* Used DFS
//**
#ifndef SEARCHGRAPH_H
#define SEARCHGRAPH_H

#include <vector>
#include <queue>
#include "general.h"
#include "search/dfs.h"

namespace msn
{
// start namespace

    std::vector<unsigned>
    tSort (const std::vector<std::vector<unsigned> >& graph);

// end namespace
}
#endif // SEARCHGRAPH_H
