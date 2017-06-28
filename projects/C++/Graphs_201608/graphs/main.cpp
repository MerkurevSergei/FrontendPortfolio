#include <iostream>
#include <iomanip>
#include "getgraph.h"
#include "./search/bfs.h"
#include "./search/dfs.h"
#include "./search/dijkstra.h"
#include "./search/fordbellman.h"
#include "./search/searchcomponent.h"
#include "./search/searchBridge.h"
#include "./search/tSort.h"

#include <set>
#include <map>
using namespace std;
using namespace msn;
int main()
{

    auto graph   = getGraph_listAdjacency_undirected();
    auto graph2  = getGraph_listAdjacency_directedNoCircle();
    auto graph3  = getGraph_listAdjacency_directedhasCircle();
    auto graphuw = getGraph_listAdjacency_undirectedWeight();
    auto graphdwc= getGraph_listEdges_directedWeight();

    cout << "************************************************************************" << endl;
    cout << "***************************** SEARCH PATH ******************************" << endl;
    cout << "************************************************************************" << endl;
    // * BFS - graph has circle *//
        cout << "                        ------------------------" << endl;
        cout << "                        # BFS search in graph: #" << endl;
        cout << "                        ------------------------" << endl;
        vector<char> used(graph.size());
        auto pathsGraph = bfs(graph, used);
        for (auto it = pathsGraph.begin(); it != pathsGraph.end(); ++it)
        {
            cout << setw(2) << it -pathsGraph.begin() << " : " <<*it << endl;
        }
        cout << endl << endl; 
    // **
    // * Search best path
    // * Graph undirected with weight
    // **
        cout << "                    ------------------------------" << endl;
        cout << "                    # Dijkstra search best path: #" << endl;
        cout << "                    ------------------------------" << endl;
        auto pathsGraph2 = dijkstra_one(graphuw);
        for (auto it = pathsGraph2.begin(); it != pathsGraph2.end(); ++it)
        {
            cout << setw(2) << it -pathsGraph2.begin() << " : " <<*it << endl;
        }
        cout << endl << endl;
    // **
    // * Search best path
    // * Graph undirected with weight
    // **
        cout << "                   --------------------------------" << endl;
        cout << "                   # Dijkstra 2 search best path: #" << endl;
        cout << "                   --------------------------------" << endl;
        auto pathsGraph3 = dijkstra_one(graphuw);
        for (auto it = pathsGraph3.begin(); it != pathsGraph3.end(); ++it)
        {
            cout << setw(2) << it -pathsGraph3.begin() << " : " <<*it << endl;
        }
        cout << endl << endl;
    // **
    // * Search best path
    // * Graph directed with weight and circle
    // **
        cout << "                  ----------------------------------" << endl;
        cout << "                  # Bellman-Ford search best path: #" << endl;
        cout << "                  ----------------------------------" << endl;
        auto predlen = ford_bellman(graphdwc, 16);
        auto pred0 = predlen.first;
        auto len0 = predlen.second;

        for (size_t i7 = 0; i7<16; ++i7)
        {
            cout << setw(2) << i7 << ": "<< pred0[i7] << " : " <<len0[i7] << endl;
        }
        cout << endl << "Nodes in cycles:" << endl;
        for (size_t i8 = 16; i8 < len0.size(); ++i8)
        {
            cout << setw(2) << pred0[i8] << " : " <<len0[i8] << endl;
        }
        cout << endl << endl;



    cout << "************************************************************************" << endl;
    cout << "*************************** SEARCH COMPONENT ***************************" << endl;
    cout << "************************************************************************" << endl;
    // * Search component - based on BFS
    // * Graph has circle
        cout << "                ---------------------------------------" << endl;
        cout << "                # Search component - used BFS search: #" << endl;
        cout << "                ---------------------------------------" << endl;
        auto vecComps = searchComponentsBFS(graph);
        int i = 0;
        for (auto comp : vecComps) {
            int i2 = 0;
            cout << "Component N" << ++i << endl;
            for (auto elem : comp) {
                cout << setw(2) << i2++ << " : " << elem << endl;
            }
        }
        cout << endl;
    // **
    // * Search component - based on DFS
    // * Graph hasn't circle
    // **
        cout << "                ---------------------------------------" << endl;
        cout << "                # Search component - used DFS search: #" << endl;
        cout << "                ---------------------------------------" << endl;
        auto vecComps2 = searchComponentsDFS(graph);
        int i3 = 0;
        for (auto comp : vecComps2) {
            int i4 = 0;
            cout << "Component N" << ++i3 << endl;
            for (auto elem : comp) {
                cout << setw(2) << i4++ << " : " << elem << endl;
            }
        }
        cout << endl;
    // **
    // * Search stongly component - used DFS
    // * Graph has circle
    // **
        cout << "            -------------------------------------------------" << endl;
        cout << "            # Search STRONGLY components - used DFS search: #" << endl;
        cout << "            -------------------------------------------------" << endl;
        auto vecStrongComps = searchComponentsStrongly(graph3);
        int i5 = 0;
        for (auto comp : vecStrongComps) {
            int i6 = 0;
            cout << "Component N" << ++i5 << endl;
            for (auto elem : comp) {
                cout << setw(2) << i6++ << " : " << elem << endl;
            }
        }
        cout << endl << endl;

    // **
    // * Search stongly component - used DFS
    // * Graph has circle
    // **
        cout << "               -------------------------------------------" << endl;
        cout << "               # Search bridges and articulation points: #" << endl;
        cout << "               -------------------------------------------" << endl;
        auto bridge = searchBridge(graph);
        for (auto comp : bridge) {
            cout << setw(2) << comp.first << " : " << comp.second << endl;
        }
        cout << endl;
        cout << endl << endl;


    cout << "************************************************************************" << endl;
    cout << "********************************* SORT *********************************" << endl;
    cout << "************************************************************************" << endl;
    // **
    // * Topologial sort - based on DFS
    // * Graph hasn't circle
    // **
        cout << "-----------------------------------" << endl;
        cout << "Topological sort - used DFS search:" << endl;
        cout << "-----------------------------------" << endl;
        auto ansSort = tSort(graph2);
        for (auto it = ansSort.begin(); it != ansSort.end(); ++it)
        {
            cout << setw(2) << it - ansSort.begin() << " : " << *it << endl;

        }
        cout << endl;

    multimap<int,int> tr;
    tr.emplace(1,1);
    tr.emplace(1,2);
    tr.emplace(1,3);
    return 0;
}

