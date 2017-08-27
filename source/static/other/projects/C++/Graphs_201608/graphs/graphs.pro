TEMPLATE = app
CONFIG += console
CONFIG -= app_bundle
CONFIG -= qt
CONFIG += C++11

SOURCES += main.cpp \
    getgraph.cpp \
    search/bfs.cpp \
    search/dfs.cpp \
    search/tSort.cpp \
    search/searchComponent.cpp \
    search/searchBridge.cpp \
    search/dijkstra.cpp \
    search/fordbellman.cpp

include(deployment.pri)
qtcAddDeployment()

HEADERS += \
    general.h \
    search/bfs.h \
    search/dfs.h \
    getgraph.h \
    search/tSort.h \
    search/searchComponent.h \
    search/searchBridge.h \
    search/dijkstra.h \
    search/fordbellman.h

