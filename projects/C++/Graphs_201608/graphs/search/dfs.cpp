//**
//* Search in graph for list of adjacensy
//* Depth-First Search
//* @params:
//*     graph - граф, как список смежности
//*     used  - список вершин, в которых побывали
//*     start - вершина, с которой начинается поиск
//*@return dfs
//*     vector<unsigned> - вектор кратчайших путей

#include "./search/dfs.h"

using std::vector;
namespace msn
{
// start namespace
    vector<unsigned>
    dfs(const vector<vector<unsigned> >& graph, vector<char>& used,
        unsigned start)
    {
        vector<unsigned> vec;                       // Вектор-результат
        used[start] = true;                         // Устанавливаем true для текущей вершины
                                                    // т.к. она становиться посещённой
        for (auto it = graph[start].begin(); it != graph[start].end(); ++it) {
                                                    // цикл по связанным вершинам
                                                    // от вершины start
            if (!used[*it]) {                       // Если в вершине ещё не побывали
                auto tmp = dfs(graph, used, *it);   // Рекурсивный вызов DFS
                vec.insert(vec.end(), tmp.begin(), tmp.end()); // Добавляем предыдущие вершины
            }
        }
        vec.push_back(start); // Если рекурсия в тупике, добавляем вершину
        return vec;
    }
// end namespace
}

