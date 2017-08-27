//**
//* Search in graph connected component
//* Use BFS for graph with circle
//* Use DFS for graph without circle
//* Use Strongly for directed graph
//**
#include "searchComponent.h"

using std::vector;
namespace msn
{
// start namespace

//**
//* SearchComponentsBFS with circle
//* @params:
//*     graph - граф, как список смежности
//*@return searchComponentsBFS
//*     vector<vector<unsigned>> -
//*     - вектор векторов компонент связности
//**
vector<vector<unsigned> >
searchComponentsBFS(const vector<vector<unsigned> >& graph)
{
    vector<vector<unsigned> >  vecAns;                   // вектор-результат
    vector<char>               used(graph.size(),false); // посещенные вершины
    vector<unsigned>           tmp(graph.size());        // суммируем результаты, для
                                                         // несвязанных компонент
    for (size_t i = 0; i < graph.size(); ++i ) {         // обход всех вершин
        if (!used[i]){                                   // если не посетили
            tmp = bfs(graph, used, i);                   // вызываем bfs (used передаем,
                                                         // чтоб отмечать, что посещаем)
            auto it = std::find(used.begin()+i,used.end(),false);
            vecAns.push_back(vector<unsigned>(tmp.begin()+i,
                                              tmp.begin() + (it - used.begin()))); // добавляем к ответу
        }
    }
    return vecAns;
}

//**
//* SearchComponentsDFS without circle
//* @params:
//*     graph - граф, как список смежности
//*@return searchComponentsDFS
//*     vector<vector<unsigned>> -
//*     - вектор векторов компонент связности
//**
vector<vector<unsigned> >
searchComponentsDFS(const vector<vector<unsigned> >& graph)
{
    vector<vector<unsigned> >  vecAns;                   // вектор-результат
    vector<char>               used(graph.size(),false); // посещенные вершины

    for (size_t i = 0; i < graph.size(); ++i ) {         // обход всех вершин
        if (!used[i]) {                                  // если не посетили
            auto tmp = dfs(graph, used, i);              // вызываем dfs (used передаем,
            vecAns.push_back(tmp);                       // чтоб отмечать, что посещаем)
        }
    }
    return vecAns;
}

//**
//* searchComponentsStrongly
//* in oriented graph with circle, use DFS
//* @params:
//*     graph - граф, как список смежности
//*@return searchComponentsDFS
//*     vector<vector<unsigned>> -
//*     - вектор векторов компонент связности
//**
vector<vector<unsigned> > searchComponentsStrongly(const vector<vector<unsigned> >& graph)
{
    vector<vector<unsigned> >  vecAns;                       // вектор-результат
    vector<unsigned>           order;                        // порядок, для обхода
                                                             // транспонированного графа
    vector<char>               used(graph.size(),false);     // посещенные вершины
    auto tgraph = getTransponseGraph_listAdjacency(graph);   // транспонированный граф (т-граф)

    for (size_t i = 0; i < graph.size(); ++i ) {             // обход всех вершин
        if (!used[i]) {                                      // если не посетили
            auto tmp = dfs(graph, used, i);                  // вызываем dfs (used передаем,
                                                             // чтоб отмечать, что посещаем)
            order.insert(order.end(),tmp.begin(),tmp.end()); // добавляем в порядок обхода
        }
    }
    std::reverse(order.begin(),order.end());                 // реверс, так проще обходить

                                                             // ОБХОД ПО Т-ГРАФУ
    used.assign(tgraph.size(),false);                        // обнуляем посещенные вершины
    for (size_t i = 0; i < tgraph.size(); ++i ) {            // обход всех вершин т-графа
        if (!used[order[i]]) {                               // если не посетили
            auto tmp = dfs(tgraph, used, order[i]);          // вызываем dfs, used передаем
                                                             // стартовая вершина отличается от обхода
                                                             // обычного графа - order[i]
            vecAns.push_back(tmp);
        }
    }

    return vecAns;
}

// end namespace
}


