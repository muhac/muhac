---
title: Artificial Intelligence (2) · Reasoning
date: 2019-11-16 00:30:42
tags: [Artificial Intelligence]
categories: [Open Course, Artificial Intelligence]
---

### 课程信息

MIT OPEN COURSE WARE  
6.034, Fall 2010, **Artificial Intelligence,** *Patrick H. Winston*  
[Youtube](https://www.youtube.com/watch?v=TjZBTDzGeGg&list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi) / [Bilibili](https://www.bilibili.com/video/av75097245)

<br>

本节内容：目标树，产生式系统

<!-- more -->

<br>

#### 第二讲 目标树与问题求解

#### Problem Reduction

**Goal Tree** (also called **and/or tree**, **problem reduction tree**)

![GoalTree](Artificial-Intelligence-Patrick-Winston-2/GoalTree.jpg)

PROCEDURE:

![math](Artificial-Intelligence-Patrick-Winston-2/math.png)

Safe transformations, Heuristic transformations

<br>

#### CATECHISM

- WHAT KIND
- HOW REPRESENTED
- HOW USED
- HOW MUCH
- WHAT EXACTLY

<br>

#### Modeling Problem Solving

- Generate and Test
- Problem Reduction

<br>

### 第三讲 目标树和基于规则的专家系统（产生式）

#### 移放方块问题

![box](Artificial-Intelligence-Patrick-Winston-2/box.jpg)

**Goal tree can answer certain kinds of questions about its own behavior.**

![box](Artificial-Intelligence-Patrick-Winston-2/gt.jpg)

<br>

#### Simon's Ant

The complexity of the behavior is a consequence of the complexity of the environment, not the complexity of the program.

**C(behavior) = max{C(program), C(environment)}**

<br>

#### RULE-BASED SYSTEM

*BUILDING A GOAL TREE*

![ExpertSystem](Artificial-Intelligence-Patrick-Winston-2/ExpertSystem.jpg)

- **FORWARD-CHAINING RULE-BASED “EXPERT” SYSTEM**

  work forward from facts

  ![ExpertSystem](Artificial-Intelligence-Patrick-Winston-2/ExpertSystem1.jpg)

- **BACKWARD-CHAINING RULE-BASED “EXPERT” SYSTEM**

  work backward from a hypothesis

  ![ExpertSystem](Artificial-Intelligence-Patrick-Winston-2/ExpertSystem2.jpg)

**Deduction(演绎) System:** working with facts to produce new facts

<br>

#### 建立规则库

1. 将专家做法转化为 IF-THEN 条件语句
2. 考虑个例（而 1 中只得到了总体的规则）
3. 考虑看起来相同但实际处理不同的东西
4. 运行系统，看它在什么情况下会出错

<br>

{% cq %}

Knowledge **about knowledge** is power.

{% endcq %}

<br>
