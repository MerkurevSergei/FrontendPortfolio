//**
//* Search in graph for list of adjacensy
//* bfs - Breadth-First Search
//* @params:
//*     graph - граф, как список смежности
//*     start - вершина, с которой начинается поиск
//*@return
//*     vector<unsigned> - вектор кратчайших путей
//**
#include "bfs.h"

namespace msn {
// start namespace
vector<unsigned> bfs(const vector<vector<unsigned> >& graph, vector<char>& used, unsigned start)
{
    vector<unsigned> prev(graph.size(),INF_UNSIGNED);// Вектор кратчайших путей,
    queue<unsigned> q;                               // Очередь "горящих" вершин
    q.push(start);
    used[start] = true;
    while (!q.empty()) {
        int node = q.front();       // Берем "горящую" вершину
        q.pop();                    // удаляем из очереди
        for (auto it = graph[node].begin(); it!=graph[node].end(); ++it) {
        // идем по дочерним вершинам
            if (used[*it] == false) { // Если не "горит"
                q.push(*it);        // в очередь, для поиска дочерних
                prev[*it] = node;   // заносим как кратчайший путь
                used[*it] = true;   // "зажигаем" и, что равнозначно,
            }
        }
    }
    return prev;
}

// end namespace
}

