#ifndef GETGRAPH_H
#define GETGRAPH_H

#include <vector>
#include <map>

namespace msn {
// start namespace

// Adjacensy list
std::vector <std::vector<unsigned> > getGraph_listAdjacency_undirected();
std::vector <std::vector<unsigned> > getGraph_listAdjacency_directedNoCircle();
std::vector <std::vector<unsigned> > getGraph_listAdjacency_directedhasCircle();
std::vector <std::vector<unsigned> > getTransponseGraph_listAdjacency(const std::vector <std::vector<unsigned> >& graph);
// Adjacensy list with weight
std::vector<std::vector<std::pair<unsigned, int> > > getGraph_listAdjacency_undirectedWeight();
std::vector<std::vector<std::pair<unsigned, int> > > getGraph_listAdjacency_directedCircleWeight();
// List of edges with weight
std::vector<std::pair<unsigned, std::pair<unsigned, int> > > getGraph_listEdges_directedWeight();

// end namespace
}


#endif // GETGRAPH_H
