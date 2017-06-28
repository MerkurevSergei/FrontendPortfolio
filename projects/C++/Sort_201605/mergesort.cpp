#include "mergesort.h"

namespace msalg {

vector<int> &SortMergeSimple(vector<int> &data)
{
    SortMergeSimple(data, 0, data.size()-1);
    return data;
}

void SortMergeSimple (vector<int> &data, int p, int r)
{
    int q;

    if (p>=r) return;
    q = p + (r-p)/2;

    SortMergeSimple(data, p, q);
    SortMergeSimple(data, q+1, r);

    // Слияние
    vector<int> dataleft;
    vector<int> dataright;

    for (int i=p; i<=q; ++i)
        dataleft.push_back(data.at(i));

    for (int i=q+1; i<=r; ++i)
        dataright.push_back(data.at(i));

    dataleft.push_back(INFINITY);
    dataright.push_back(INFINITY);
    for (int i=p; i<=r; ++i)
    {
        if (dataleft.front() <= dataright.front())
        {
            data[i] = dataleft.front();
            dataleft.erase(dataleft.begin());
        }
        else
        {
            data[i] = dataright.front();
            dataright.erase(dataright.begin());
        }
    }
    return;
}

//
}

