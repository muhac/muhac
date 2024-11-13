---
title: Artificial Intelligence (8) · Learning · III
date: 2020-01-04 09:17:08
tags: [Artificial Intelligence, Neural Networks]
categories: [Computer Science, Artificial Intelligence]
mathjax: true
---

### 课程信息

MIT OPEN COURSE WARE  
6.034, Fall 2010, **Artificial Intelligence,** *Patrick H. Winston*  
[Youtube](https://www.youtube.com/watch?v=TjZBTDzGeGg&list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi) / [Bilibili](https://www.bilibili.com/video/av75097245)

本节内容：遗传算法、模拟退火、稀疏空间

<!-- more -->

### 第十三讲 遗传算法

#### GENETIC ALGORITHMS

##### NAIVE EVOLUTION

![Mitosis vs Meiosis](Artificial-Intelligence-Patrick-Winston-8/MitosisMeiosis.jpg)

##### MIMICKING

![mimic](Artificial-Intelligence-Patrick-Winston-8/mimic.jpg)

- **存活概率的计算机制**

  1. $P_{i}=\dfrac {f_{i}}{\sum _{j}f_{j}}$
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

ASK WHERE THE CREDIT ***LIES***

**Rich with Solutions**

### 第十四讲 稀疏空间、音韵学

BASIC METHODS → NAIVE MIMICRY → FOCUS ON PROBLEM → FOCUS ON THEORY FIOS (for its own sake)

#### Phonology

<svg viewBox="0 0 800 170" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <marker id="arrow" markerWidth="12" markerHeight="8" 
                refX="10" refY="4" orient="auto">
            <path d="M 0 0 L 10 4 L 0 8" 
                  fill="none" stroke="black" stroke-width="1"/>
        </marker>
    </defs>

   <!-- 矩形节点 -->
   <rect x="20" y="40"
         width="120" height="90" rx="5"
         fill="transparent" stroke="black"/>
   <text x="80" y="75"
         text-anchor="middle"
         dominant-baseline="middle">
      <tspan x="80" dy="0">5 PIECES</tspan>
      <tspan x="80" dy="20">OF MEAT</tspan>
   </text>

   <!-- 箭头连接线 -->
   <path d="M 140,85 L 210,85" stroke="black" marker-end="url(#arrow)" fill="none"/>

   <rect x="210" y="40"
         width="120" height="90" rx="5"
         fill="transparent" stroke="black"/>
   <text x="270" y="75"
         text-anchor="middle"
         dominant-baseline="middle">
      <tspan x="270" dy="0">SOUND</tspan>
      <tspan x="270" dy="20">WAVE</tspan>
   </text>

   <!-- 箭头连接线 -->
   <path d="M 330,85 L 400,85" stroke="black" fill="none"/>

   <rect x="400" y="40"
         width="180" height="90" rx="5"
         fill="transparent" stroke="black"/>
   <text x="490" y="65"
         text-anchor="middle"
         dominant-baseline="middle">
      <tspan x="490" dy="0">SEQUENCE OF</tspan>
      <tspan x="490" dy="20">DISTINCTIVE</tspan>
      <tspan x="490" dy="20">FEATURE VECTORS</tspan>
   </text>

   <!-- 箭头连接线 -->
   <path d="M 580,85 L 650,85" stroke="black" fill="none"/>

   <rect x="650" y="40"
         width="120" height="90" rx="5"
         fill="transparent" stroke="black"/>
   <text x="710" y="85"
         text-anchor="middle"
         dominant-baseline="middle">
      MEANING
   </text>

   <!-- 箭头连接线 -->
   <path d="M 615,5 L 615,85" stroke="black" fill="none"/>
   <path d="M 615,5 L 490,5" stroke="black" fill="none"/>
   <path d="M 490,5 L 490,40" stroke="black" marker-end="url(#arrow)" fill="none"/>
   <path d="M 490,165 L 490,130" stroke="black" marker-end="url(#arrow)" fill="none"/>

</svg>

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

#### SPARSE SPACE

在稀疏空间中很容易找到一个超平面分开两组例子

![SPARSE SPACE](Artificial-Intelligence-Patrick-Winston-8/142.jpg)

#### Marr's Catechism

1. **PROBLEM**
2. **REPRESENTATION**
   - EXPLICIT
   - EXPOSE CONSTRAINT
   - LOCALNESS CRITERIA
3. **APPROACH / METHOD**
4. **MECHANISM / ALGORITHM**
5. **EXPERIMENT**
