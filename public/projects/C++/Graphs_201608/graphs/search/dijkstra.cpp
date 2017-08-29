//**
//* Search in graph for list of adjacensy
//* Dijkstra - search with weight, directed or undirected
//* @params:
//*     graph - граф, как список смежности
//*     start - вершина, с которой начинается поиск
//*@return dfs
//*     vector<unsigned> - вектор кратчайших путей
#include "dijkstra.h"
using std::size_t;
using std::make_pair;

namespace msn {
// start namespace

//**
//* Search in graph for list of adjacensy
//* Dijkstra - search with weight, directed or undirected
//* Вариант №1 - очередь с приоритетами как массив
//* @params:
//*     graph - граф, как список смежности
//*     start - вершина, с которой начинается поиск
//*@return dfs
//*     vector<unsigned> - вектор кратчайших путей
vector<unsigned> dijkstra_one(const vector<vector<pair<unsigned, int> > >& graph, unsigned start)
{
    vector<unsigned> len (graph.size(), INF_UNSIGNED);  // Вес кратчайшего пути
    vector<unsigned> pred(graph.size(), INF_UNSIGNED);  // Предыдущая вершина на кратчайшем пути
    vector<char>     used(graph.size(), false);         // Помеченные вершины, в которых побывали

    len[start] = 0;                                     // Кратчайший путь до первой вершины - 0
    for (size_t i = 0; i < graph.size(); ++i)           // Проход по всем вершинам
    {
        used[start] = true;                             // Помечаем как посещённую
        //
        for (auto it = graph[start].begin(); it < graph[start].end(); ++it)  // Цикл по связанным вершинам
        {
            if (len[start]+it->second < len[it->first]) // Пробуем ослабить вершину
            {                                           // если можно ослабить, то:
                len[it->first]  = len[start] + it->second; // на данный момент - как кратчайший путь
                pred[it->first] = start;                   // на данный момент - как предыдущая вершина
                                                           // в кратчайшем пути
            }
        }
        //
        start = INF_UNSIGNED;
        for (size_t j = 0; j < used.size(); ++j)        // Выбираем следующую вершину
        {
            if (used[j]) continue;                      // из не помеченных
            if (start == INF_UNSIGNED || len[start] > len[j]) start = j; // должна быть минимальной
        }
        if (start == INF_UNSIGNED || len[start] == INF_UNSIGNED) break; // Если все помеченны, или
                                                                     // равна бесконечности (т.е. недостижима), break
    }
    return pred;
}

//**
//* Search in graph for list of adjacensy
//* Dijkstra - search with weight, directed or undirected
//* Вариант №2 - очередь с приоритетами как map
//* @params:
//*     graph - граф, как список смежности
//*     start - вершина, с которой начинается поиск
//*@return dfs
//*     vector<unsigned> - вектор кратчайших путей
vector<unsigned> dijkstra_two(const vector<vector<pair<unsigned, int> > >& graph, unsigned start)
{
    vector<unsigned> len (graph.size(), INF_UNSIGNED); // Вес кратчайшего пути
    vector<unsigned> pred(graph.size(), INF_UNSIGNED); // Предыдущая вершина на кратчайшем пути
    std::multimap<unsigned,unsigned> q;                // Очередь с приоритетом следующих вершин
                                                       // минимальная вершина всплывает (сортировка map, O(log))

    len[start] = 0;                                    // Кратчайший путь до первой вершины - 0
    q.emplace(len[start],start);                       // Добавляем в очередь первую вершину

    while(!q.empty())                                  // Пока очередь не пуста
    {
        unsigned start = q.begin()->second;            // Выбираем вершину с минимальным путем
        q.erase(q.begin());                            // и удаляем её

        for (auto it = graph[start].begin(); it < graph[start].end(); ++it) // Цикл по связанным вершинам
        {
            if (len[start]+it->second < len[it->first])              // Пробуем ослабить вершину
            {                                                        // если получилось, то:
                auto disp = q.equal_range(len[it->first]);           // ищем эту вершину в очереди
                for (auto it2 = disp.first; it2!=disp.second; ++it2) // ...
                    if (it2->first == it->first) q.erase(it2);       // и удаляем

                len[it->first]  = len[start] + it->second;  // на данный момент - как кратчайший путь
                pred[it->first] = start;                    // на данный момент - как предыдущая вершина
                                                            // в кратчайшем пути

                q.emplace(len[it->first], it->first);       // добавляем ослабленную вершину в очередь
                                                            // с приоритетами
            }
        }
    }
    return pred;
}

// end namespace
}
