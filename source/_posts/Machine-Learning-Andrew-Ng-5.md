---
title: Machine Learning (5) · Neural Networks · II
date: 2020-12-12 04:08:39
tags: [Artificial Intelligence, Machine Learning, Neural Networks]
categories: [Computer Science, Machine Learning]
mathjax: true
---

Stanford University, **Machine Learning,** *Andrew Ng,* [Coursera](https://www.coursera.org/learn/machine-learning/home/info)

***Week 5:*** Neural Networks: Learning

### Neural Networks: Learning

#### Cost Function and Backpropagation

**Binary Classification**

$y = 0 \textrm{ or } 1$, 1 output unit: $h_\Theta \left(x\right) \in \mathbb{R} \quad s_L=1$

- ***L:*** total number of layers in network
- ***s<sub>l</sub>:*** number of units in layer l

**Multi-class Classification**

$y \in \mathbb{R} ^K$, K output units: $h_\Theta \left(x\right) \in \mathbb{R} ^K \quad s_L=K$

<!-- more -->

##### Cost Function

**Logistic Regression**

$\begin{aligned} J\left(\theta\right) = - \dfrac{1}{m} \sum_{i=1}^{m} \left[ y^{\left(i\right)} \log \left( h_\theta\left( x^{\left(i\right)} \right)\right) + \left(1-y^{\left(i\right)}\right) \log \left(1- h_\theta\left( x^{\left(i\right)} \right)\right) \right] + \dfrac{\lambda}{2m} \sum_{j=1}^{n} \theta_j^{\,2} \end{aligned}$

**Neural Network**

$\begin{aligned} J\left(\Theta\right) = - \dfrac{1}{m} \sum_{i=1}^{m} \sum_{k=1}^{K} \left[ y^{\left(i\right)}_k \log \left( h_\Theta\left( x^{\left(i\right)} \right)\right) _k + \left(1-y^{\left(i\right)}_k \right) \log \left(1- \left( h_\Theta\left( x^{\left(i\right)} \right) \right)  _k \right) \right] + \dfrac{\lambda}{2m} \sum_{l=1}^{L-1}\sum_{i=1}^{s_l}\sum_{j=1}^{s_l+1} \left( \Theta_{ji}^{\left(l\right)} \right)^{2} \end{aligned}$

##### Backpropagation Algorithm

***Gradient Computation:*** $\min_\Theta J\left(\Theta\right)$, need to compute: $J\left(\Theta\right),\, \dfrac{\partial}{\partial \, \Theta_{ji}^{\left(l\right)}} J\left(\Theta\right)$

$\begin{aligned} & \textsf{Training set } \left\{ \left( x^{\left(1\right)},\,y^{\left(1\right)} \right) ,\,\dots,\, \left( x^{\left(m\right)},\,y^{\left(m\right)} \right) \right\} \\ & \textsf{Set } \Delta_{ij}^{\left(l\right)} = 0 \textsf{ for all } l,\,i,\,j \\ & \textsf{For } i=1 \textsf{ to } m \\ & \qquad \textsf{Set } a^{\left(1\right)} = x^{\left(i\right)} \\ & \qquad \textsf{Perform forward propagation to compute } a^{\left(l\right)} = g\left( \Theta^{\left(l-1\right)}a^{\left(l-1\right)} \right) \textsf{ for } l=2,\,3,\,\dots,\,L \\ & \qquad \textsf{Using } y^{\left(i\right)}  \textsf{ compute } \delta^{\left(L\right)}=a^{\left(L\right)}-y^{\left(i\right)} \\ & \qquad \textsf{Compute } \delta^{\left(l\right)} = \left(\Theta^{\left(l\right)}\right) ^\mathsf{T} \delta^{\left(l+1\right)} \odot g' \left(z^{\left(l\right)}\right) \textsf{ for } l=L-1,\,L-2,\,\dots,\,2 \\ & \qquad \Delta_{ij}^{\left(l\right)} := \Delta_{ij}^{\left(l\right)} + a_j^{\left(l\right)} \delta_i^{\left(l+1\right)} \quad\rightarrow\textsf{ vectorized: } \Delta^{\left(l\right)} := \Delta^{\left(l\right)} + \delta^{\left(l+1\right)} \left[a^{\left(l\right)}\right] ^\mathsf{T} \\ & \begin{aligned} D_{ij}^{\left(l\right)} &:= \dfrac{1}{m} \Delta_{ij}^{\left(l\right)} + \lambda \Theta_{ij}^{\left(l\right)} & \textsf{ if } n \neq 0 \\ D_{ij}^{\left(l\right)} &:= \dfrac{1}{m} \Delta_{ij}^{\left(l\right)} & \textsf{ if } n=0 \end{aligned} \qquad \Rightarrow \quad \dfrac{\partial}{\partial \, \Theta_{ji}^{\left(l\right)}} J\left(\Theta\right) = D_{ij}^{\left(l\right)} \end{aligned}$

#### Backpropagation in Practice

##### Gradient Checking

$\dfrac{\partial}{\partial \, \Theta_j} J\left(\Theta_1 ,\,\dots,\, \Theta_j ,\,\dots,\, \Theta_n\right) \approx \dfrac{J\left(\Theta_1 ,\,\dots,\, \Theta_j+\varepsilon ,\,\dots,\, \Theta_n\right) - J\left(\Theta_1 ,\,\dots,\, \Theta_j-\varepsilon ,\,\dots,\, \Theta_n\right)}{2 \varepsilon} \qquad \left( \varepsilon \sim 10^{-4} \right)$

*turn off gradient checking before training, use backprop code for learning*

##### Random Initialization

- ***Zero initialization:*** after each update, parameters corresponding to inputs going into each of two hidden units are **identical**
- ***Random initialization:*** symmetry breaking: initialize each $\Theta_{ji}^{\left(l\right)}$ to a random value in $\left[-\varepsilon,\,\varepsilon\right]$

##### Putting it Together

**Training a Neural Network**

1. Pick a network architecture
2. Randomly initialize weights
3. Implement forward propagation to get $h_\Theta \left( x^{\left(i\right)} \right)$ for any $x^{\left(i\right)}$
4. Implement code to compute cost function $J\left(\Theta\right)$
5. Implement backprop to compute partial derivatives $\dfrac{\partial}{\partial \, \Theta_{ji}^{\left(l\right)}} J\left(\Theta\right)$
6. Use gradient checking to compare $\dfrac{\partial}{\partial \, \Theta_{ji}^{\left(l\right)}} J\left(\Theta\right)$ computed using backprop versus using numerical estimate of gradient of $J\left(\Theta\right)$, and then disable gradient checking code
7. Use gradient descent or advanced optimization methods with back propagation to try to minimize $J\left(\Theta\right)$ as a function of parameters $\Theta$
