---
title: Machine Learning (2) · Linear Regression · II
date: 2020-04-21 00:13:20
tags: [Artificial Intelligence, Machine Learning, Linear Regression]
categories: [Computer Science, Machine Learning]
mathjax: true
---

Stanford University, **Machine Learning,** *Andrew Ng,* [Coursera]( https://www.coursera.org/learn/machine-learning/home/info )

***Week 2:*** Multivariate Linear Regression

### Linear Regression with Multiple Variables

- ***m:*** number of training examples
- ***n:*** number of features
- ***x<sup>(i)</sup>:*** input features of i<sup>th</sup> training example
- ***x<sub>j</sub><sup>(i)</sup>:*** value of feature j in i<sup>th</sup> training example

<!-- more -->

#### Multivariate Linear Regression

$h_\theta \left(x\right) = \theta_0 + \theta_1x_1 + \theta_2x_2 + \dots + \theta_nx_n$

$\begin{aligned}& x_0 = 0, \quad x = \left[ \begin{matrix} x_0 \\ x_1 \\ x_2 \\ \vdots \\ x_n \end{matrix} \right] \in \mathbb{R} ^{n+1} \qquad \theta= \left[ \begin{matrix} \theta_0 \\ \theta_1 \\ \theta_2 \\ \vdots \\ \theta_n \end{matrix} \right] \in \mathbb{R} ^{n+1} \\ & h_\theta \left(x\right) ^{\strut} = \theta_0 + \theta_1x_1 + \theta_2x_2 + \dots + \theta_nx_n = \theta^{\mathsf{T}} x \end{aligned}$

#### Gradient Descent

##### Cost Function

$\begin{aligned} J\left(\theta\right) = \dfrac{1}{2m} \sum_{i=1}^{m} \left( h_\theta\left( x^\left(i\right) \right) - y^\left(i\right) \right) ^2 \end{aligned}$

##### Gradient Descent

$\begin{aligned} & \textsf{repeat:} \\ & \qquad \theta_j := \theta_j - \alpha \cdot \dfrac{\partial}{\partial \theta_j} J\left(\theta\right) = \theta_j - \alpha \cdot \dfrac{1}{m} \sum_{i=1}^{m} \left( h_\theta\left( x^\left(i\right) \right) - y^\left(i\right) \right) x_j ^\left(i\right) \\ & \qquad \text{simultaneously update for every } j=0,\,\dots,\,n \end{aligned}$

##### Feature Scaling

make sure features are on a similar scale
get every feature into approximately a [-1, 1] range

##### Mean Normalization

replace x<sub>i</sub> with x<sub>i</sub> - μ<sub>i</sub> to make features have approximately zero mean
*(do not apply to x<sub>0</sub> = 1)*

$x_i = \dfrac{x_i - \mu_i}{s_i}$

- ***μ<sub>i</sub>:*** average value of x<sub>i</sub>
- ***s<sub>i</sub>:*** range of x<sub>i</sub> (max - min) or standard deviation

##### Learning Rate

plot (J - #iters) to fix overshooting problems

##### Polynomial Regression

$x_1 = x \quad x_2 = x^2 \quad x_3 = x^3$

### Normal Equation

$\textrm{Solve for } \theta_0,\,\theta_1,\,\dots,\,\theta_n\ \ s.t.\ \ \frac{\partial}{\partial \theta_j} J\left(\theta\right) = 0 \textrm{  for every } j$

$\begin{aligned} X &= \left[ \begin{matrix} 1&2104&5&1&45 \\ 1&1416&3&2&40 \\ 1&1534&3&2&30 \\ 1&852&2&1&36 \end{matrix} \right] \qquad y= \left[ \begin{matrix} 460\\232\\315\\178 \end{matrix} \right] _{m=4} \\\\ x &= \left[ \begin{matrix} x_0^{\left(i\right)} \\ x_1^{\left(i\right)} \\ \vdots \\ x_n^{\left(i\right)} \end{matrix} \right] \in \mathbb{R} ^{n+1} \qquad X = \left[ \begin{matrix} \rule[3pt]{3em}{0.05em} & \left( x^{\left(1\right)}\right) ^{\mathsf{T}} & \rule[3pt]{3em}{0.05em} \\ \rule[3pt]{3em}{0.05em} & \left( x^{\left(2\right)}\right) ^{\mathsf{T}} & \rule[3pt]{3em}{0.05em} \\ &\vdots& \\ \rule[3pt]{3em}{0.05em} & \left( x^{\left(m\right)}\right) ^{\mathsf{T}} & \rule[3pt]{3em}{0.05em} \end{matrix} \right] \in \mathbb{R} ^{m \times \left(n+1\right)} \qquad y= \left[ \begin{matrix} y^{\left(1\right)} \\ y^{\left(2\right)} \\ \vdots \\ y^{\left(m\right)} \end{matrix} \right] \in \mathbb{R} ^{m} \\ & \Rightarrow ^{\strut} \quad \theta = \left(X^{\mathsf{T}}X\right)^{-1} X^{\mathsf{T}} y \end{aligned}$

- **Gradient Descent**
  - need to choose α
  - needs many iterations
  - work well even when n is large
- **Normal Equation**
  - no need to choose α
  - do not need to iterate
  - need to compute (X<sup>T</sup>X)<sup>-1</sup>
  - slow if n is very large