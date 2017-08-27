TEMPLATE = app
CONFIG += console
CONFIG -= app_bundle


SOURCES += main.cpp \
    simplesort.cpp \
    complexsort.cpp \
    mergesort.cpp

include(deployment.pri)
qtcAddDeployment()

HEADERS += \
    general.h \
    simplesort.h \
    complexsort.h \
    mergesort.h

