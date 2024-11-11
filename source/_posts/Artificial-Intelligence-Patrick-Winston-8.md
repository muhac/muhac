---
title: Artificial Intelligence (8) · Learning · III
date: 2020-01-04 09:17:08
tags: [Artificial Intelligence]
categories: [Open Course, Artificial Intelligence]
mathjax: true
---

### 课程信息

MIT OPEN COURSE WARE  
6.034, Fall 2010, **Artificial Intelligence,** *Patrick H. Winston*  
[Youtube](https://www.youtube.com/watch?v=TjZBTDzGeGg&list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi) / [Bilibili](https://www.bilibili.com/video/av75097245)

<br>

本节内容：遗传算法、模拟退火、稀疏空间

<!-- more -->

<br>

### 第十三讲 遗传算法

#### GENETIC ALGORITHMS

##### NAIVE EVOLUTION

![Mitosis vs Meiosis](Artificial-Intelligence-Patrick-Winston-8/MitosisMeiosis.jpg)

<br>

##### MIMICKING

![mimic](Artificial-Intelligence-Patrick-Winston-8/mimic.jpg)

- **存活概率的计算机制**

  1. $ P_{i}=\dfrac {f_{i}}{\sum _{j}f_{j}} $
  2. **RANK SPACE**
     P<sub>1</sub> = P<sub>c</sub>
     P<sub>2</sub> = (1 - P<sub>c</sub>) P<sub>c</sub>
     P<sub>3</sub> = (1 - P<sub>c</sub>)<sup>2</sup> P<sub>c</sub>
     ...
     P<sub>n-1</sub> = (1 - P<sub>c</sub>)<sup>n-2</sup> P<sub>c</sub>
     P<sub>n</sub> = (1 - P<sub>c</sub>)<sup>n-1</sup>
  3. MEASURE **DIVERSITY**
     ![DIVERSITY](Artificial-Intelligence-Patrick-Winston-8/m3.jpg)

- **模拟退火算法（Simulated Annealing）**

<br>ASK WHERE THE CREDIT ***LIES***

**Rich with Solutions**

<br>

### 第十四讲 稀疏空间、音韵学

BASIC METHODS → NAIVE MIMICRY → FOCUS ON PROBLEM → FOCUS ON THEORY FIOS (for its own sake)

#### Phonology

![phonology](Artificial-Intelligence-Patrick-Winston-8/141.png)

##### Propagators

|     (4/14)     |  K  |  A  |  T  |   S   |
| :------------: | :-: | :-: | :-: | :---: |
|  **SYLLABIC**  |  –  |  +  |  +  |   –   |
|   **VOICED**   |  –  |  +  |  –  |   –   |
| **CONTINUANT** |  –  |  +  |  –  |   +   |
|  **STRIDENT**  |  –  |  –  |  –  | **+** |

1. **COLLECT + & – EXAMPLES**
2. **PICK + SEED**
3. **GENERALIZE <sup>(+ → x, – → x) </sup>**
   **UNTIL COVER –**

|     (4/14)     |  K  |  A  |   T   |   S   |
| :------------: | :-: | :-: | :---: | :---: |
|  **SYLLABIC**  |  x  |  x  |   x   |   –   |
|   **VOICED**   |  x  |  x  | **–** |   –   |
| **CONTINUANT** |  x  |  x  |   x   |   +   |
|  **STRIDENT**  |  x  |  x  | **–** | **+** |

|     (4/14)     |  D  |  O  |   G   |   Z   |
| :------------: | :-: | :-: | :---: | :---: |
|  **SYLLABIC**  |  x  |  x  |   x   |   –   |
|   **VOICED**   |  x  |  x  | **+** |   +   |
| **CONTINUANT** |  x  |  x  |   x   |   +   |
|  **STRIDENT**  |  x  |  x  |   x   | **–** |

<span style="color:gray">btw fyi 如果要借机学英语的话，strident **+** 对应的是 **-es**，如 peach -> peaches</span>

<br>

#### SPARSE SPACE

在稀疏空间中很容易找到一个超平面分开两组例子

![SPARSE SPACE](Artificial-Intelligence-Patrick-Winston-8/142.jpg)

<br>

#### Marr's Catechism

1. **PROBLEM**
2. **REPRESENTATION**
   - EXPLICIT
   - EXPOSE CONSTRAINT
   - LOCALNESS CRITERIA
3. **APPROACH / METHOD**
4. **MECHANISM / ALGORITHM**
5. **EXPERIMENT**
