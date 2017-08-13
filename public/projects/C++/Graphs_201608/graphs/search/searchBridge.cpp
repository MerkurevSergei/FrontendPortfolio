
//** FOR BRIDGES
//* Search in graph for list of adjacensy
//* Depth-First Search FOR BRIDGES
//* @params:
//*     graph - граф, как список смежности
//*     used  - список вершин, в которых побывали
//*     start - вершина, с которой начинается поиск
//*@return dfsForBridge
//*     vector<pair<unsigned, unsigned> > - вектор
//*     мостов и точек сочленения
//**
#include "searchBridge.h"

namespace msn
{
// start namespace
    vector<pair<unsigned,unsigned> > searchBridge(const vector<vector<unsigned> >& graph)
    {
        vector<pair<unsigned,unsigned> > vecAns;
        vector<char>                     used(graph.size(),false);


        for (size_t i = 0; i < graph.size(); ++i ) {
            if (!used[i]) {
                vector<unsigned> tmp1(graph.size());
                vector<unsigned> tmp2(graph.size());
                auto tmp = dfsForBridge(graph, used, 0, tmp1, tmp2,-1,i);
                vecAns.insert(vecAns.end(), tmp.begin(), tmp.end());
            }
        }
        return vecAns;
    }

    // For bridge DFS
        vector<pair<unsigned, unsigned> >
        dfsForBridge(const vector<vector<unsigned> >&  graph, vector<char>&     used,
                     unsigned timer, vector<unsigned>& tin,   vector<unsigned>& fup,
                     unsigned prev, unsigned start)
        {
            vector<pair<unsigned, unsigned> > ans;      // Вектор-результат
            used[start] = true;                         // Устанавливаем true для текущей вершины
                                                        // т.к. она становиться посещённой
            tin[start] = fup[start] = timer++;          // время входа и специальная функция
            for (auto it = graph[start].begin(); it != graph[start].end(); ++it) {
                                                        // цикл по связанным вершинам
                                                        // от вершины start
                if (*it == prev) continue;
                if (used[*it])                         // Если в вершине уже побывали
                    fup[start] = std::min(fup[start], tin[*it]);
                else
                {
                    auto tmp = dfsForBridge(graph, used, timer, tin, fup, start, *it);   // Рекурсивный вызов DFS
                    fup[start] = std::min(fup[start], fup[*it]);
                    if (tin[start] < fup[*it])
                        ans.push_back({start, *it}); // Если мост

                    ans.insert(ans.end(), tmp.begin(), tmp.end()); // Добавляем предыдущие вершины
                }
            }
            return ans;
        }
// end namespace
}
