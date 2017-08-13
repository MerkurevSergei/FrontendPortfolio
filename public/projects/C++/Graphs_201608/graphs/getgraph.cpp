#include "getgraph.h"
using std::vector;
using std::pair;

namespace msn {
// start namespace

// Adjacensy list, undirected
vector <vector<unsigned> > getGraph_listAdjacency_undirected()
{
    vector <vector<unsigned> > graph;
    graph.push_back(vector<unsigned>( {1, 2}       ) ); //0
    graph.push_back(vector<unsigned>( {0, 3, 4,5}  ) ); //1
    graph.push_back(vector<unsigned>( {0, 6}       ) ); //2
    graph.push_back(vector<unsigned>( {1, 7}       ) ); //3
    graph.push_back(vector<unsigned>( {1, 7}       ) ); //4
    graph.push_back(vector<unsigned>( {1, 8}       ) ); //5
    graph.push_back(vector<unsigned>( {2, 8,9}     ) ); //6
    graph.push_back(vector<unsigned>( {3, 4,10}    ) ); //7
    graph.push_back(vector<unsigned>( {5 ,6,10,11} ) ); //8
    graph.push_back(vector<unsigned>( {6, 11}      ) ); //9
    graph.push_back(vector<unsigned>( {7, 8,12}    ) ); //10
    graph.push_back(vector<unsigned>( {8, 9,13}    ) ); //11
    graph.push_back(vector<unsigned>( {10}         ) ); //12
    graph.push_back(vector<unsigned>( {11}         ) ); //13
    graph.push_back(vector<unsigned>( {15}         ) ); //14
    graph.push_back(vector<unsigned>( {14}         ) ); //15

    return graph;
}

// Adjacensy list, directed
vector <vector<unsigned> > getGraph_listAdjacency_directedNoCircle()
{
    vector <vector<unsigned> > graph;
    graph.push_back(vector<unsigned>( {1, 2}   ) ); //0
    graph.push_back(vector<unsigned>( {3, 4,5} ) ); //1
    graph.push_back(vector<unsigned>( {6}      ) ); //2
    graph.push_back(vector<unsigned>( {7}      ) ); //3
    graph.push_back(vector<unsigned>( {7}      ) ); //4
    graph.push_back(vector<unsigned>( {8}      ) ); //5
    graph.push_back(vector<unsigned>( {8,9}    ) ); //6
    graph.push_back(vector<unsigned>( {10}     ) ); //7
    graph.push_back(vector<unsigned>( {10,11}  ) ); //8
    graph.push_back(vector<unsigned>( {11}     ) ); //9
    graph.push_back(vector<unsigned>( {12}     ) ); //10
    graph.push_back(vector<unsigned>( {13}     ) ); //11
    graph.push_back(vector<unsigned>(          ) ); //12
    graph.push_back(vector<unsigned>(          ) ); //13
    graph.push_back(vector<unsigned>( {15}     ) ); //14
    graph.push_back(vector<unsigned>(          ) ); //15
    return graph;
}

// Adjacensy list, directed, circle
vector <vector<unsigned> > getGraph_listAdjacency_directedhasCircle()
{
    vector <vector<unsigned> > graph;
    graph.push_back(vector<unsigned>( {1, 2}   ) ); //0
    graph.push_back(vector<unsigned>( {3, 5}   ) ); //1
    graph.push_back(vector<unsigned>( {6}      ) ); //2
    graph.push_back(vector<unsigned>( {9, 7}   ) ); //3
    graph.push_back(vector<unsigned>( {1}      ) ); //4
    graph.push_back(vector<unsigned>( {1, 8}   ) ); //5
    graph.push_back(vector<unsigned>( {0, 8,12}) ); //6
    graph.push_back(vector<unsigned>( {4, 10}  ) ); //7
    graph.push_back(vector<unsigned>( {11}     ) ); //8
    graph.push_back(vector<unsigned>( {13}     ) ); //9
    graph.push_back(vector<unsigned>( {8, 14}  ) ); //10
    graph.push_back(vector<unsigned>( {8, 15}  ) ); //11
    graph.push_back(vector<unsigned>(          ) ); //12
    graph.push_back(vector<unsigned>( {9}      ) ); //13
    graph.push_back(vector<unsigned>( {7}      ) ); //14
    graph.push_back(vector<unsigned>( {11}     ) ); //15
    return graph;
}

// Transponse graph, listAdjacency
vector <vector<unsigned> > getTransponseGraph_listAdjacency(const vector <vector<unsigned> >& graph)
{
    vector <vector<unsigned> > tgraph(graph.size());
    for (size_t i = 0; i<graph.size(); ++i)
        for (size_t j=0; j<graph[i].size(); ++j)
            tgraph[graph[i][j]].push_back(i);
    return tgraph;
}

// Adjacensy list, undirected, weight
vector<vector<pair<unsigned, int> > > getGraph_listAdjacency_undirectedWeight()
{
    vector<vector<pair<unsigned, int> > > graph;
    vector<pair<unsigned, int> > child;

    // 0
    child.clear();
    child.push_back ({ 1, 1});
    child.push_back ({ 2, 3});
    graph.push_back(child);

    // 1
    child.clear();
    child.push_back ({ 0, 1});
    child.push_back ({ 3, 4});
    child.push_back ({ 4, 6});
    child.push_back ({ 5, 1});
    graph.push_back(child);

    // 2
    child.clear();
    child.push_back ({ 0, 3});
    child.push_back ({ 6, 0});
    graph.push_back(child);

    // 3
    child.clear();
    child.push_back ({ 1, 4});
    child.push_back ({ 7, 2});
    graph.push_back(child);

    // 4
    child.clear();
    child.push_back ({ 1, 6});
    child.push_back ({ 7, 1});
    graph.push_back(child);

    // 5
    child.clear();
    child.push_back ({ 1, 1});
    child.push_back ({ 8, 2});
    graph.push_back(child);

    // 6
    child.clear();
    child.push_back ({ 2, 0});
    child.push_back ({ 8, 0});
    child.push_back ({ 9, 1});
    graph.push_back(child);

    // 7
    child.clear();
    child.push_back ({ 3, 2});
    child.push_back ({ 4, 1});
    child.push_back ({10, 1});
    graph.push_back(child);

    // 8
    child.clear();
    child.push_back ({ 5, 2});
    child.push_back ({ 6, 0});
    child.push_back ({11, 2});
    child.push_back ({12, 4});
    graph.push_back(child);

    // 9
    child.clear();
    child.push_back ({ 6, 1});
    child.push_back ({11, 0});
    graph.push_back(child);

    // 10
    child.clear();
    child.push_back ({ 7, 1});
    child.push_back ({12, 0});
    graph.push_back(child);

    // 11
    child.clear();
    child.push_back ({ 8, 2});
    child.push_back ({ 9, 0});
    child.push_back ({13, 0});
    graph.push_back(child);

    // 12
    child.clear();
    child.push_back ({ 8, 4});
    child.push_back ({10, 0});
    graph.push_back(child);

    // 13
    child.clear();
    child.push_back ({11, 0});
    graph.push_back(child);

    // 14
    child.clear();
    child.push_back ({15, 1});
    graph.push_back(child);

    // 15
    child.clear();
    child.push_back ({14, 1});
    graph.push_back(child);

    return graph;
}

// Adjacensy list, directed, circle, weight
vector<vector<pair<unsigned, int> > > getGraph_listAdjacency_directedCircleWeight()
{
    vector<vector<pair<unsigned, int> > > graph;
    return graph;
}

// List of edges with weight
vector<pair<unsigned, pair<unsigned,int> > > getGraph_listEdges_directedWeight()
{
    vector<pair<unsigned, pair<unsigned,int> > > graph;
    graph.push_back({ 0, { 1, 1}}); // (0-1), 1
    graph.push_back({ 0, { 2, 2}}); // (0-1), 2

    graph.push_back({ 1, { 3, 1}}); // (1-3), 1
    graph.push_back({ 1, { 5, 1}}); // (1-5), 1

    graph.push_back({ 2, { 6, 1}}); // (2-6), 1

    graph.push_back({ 3, { 7, 1}}); // (3-7), 1
    graph.push_back({ 3, { 9, 1}}); // (3-9), 1

    graph.push_back({ 4, { 1, 0}}); // (4-7), 0

    graph.push_back({ 5, { 1, 1}}); // (5-1), 2
    graph.push_back({ 5, { 8, 1}}); // (5-8), 1

    graph.push_back({ 6, { 0,-1}}); // (6-0 ),-1
    graph.push_back({ 6, { 8,-3}}); // (6-8 ),-3
    graph.push_back({ 6, {12, 1}}); // (6-12), 1

    graph.push_back({ 7, { 4, 1}}); // (7-4 ), 1
    graph.push_back({ 7, {10, 1}}); // (7-10), 1

    graph.push_back({ 8, {11, 1}}); // (8-11), 1

    graph.push_back({ 9, {13,-1}}); // (9-13),-1

    graph.push_back({10, {14, 1}}); // (10-14),1

    graph.push_back({11, { 8, 1}}); // (11-8 ),1
    graph.push_back({11, {15, 1}}); // (11-15),1

    graph.push_back({13, { 9,-1}}); // (13-9),-1

    graph.push_back({15, {11, 1}}); // (15-11),1

    return graph;

}

// end namespace
}

