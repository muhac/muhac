---
title: Machine Learning (10) · Recommender Systems
date: 2021-02-15 11:49:22
tags: [Artificial Intelligence, Machine Learning, Recommender Systems]
categories: [Computer Science, Machine Learning]
mathjax: true
---

Stanford University, **Machine Learning,** *Andrew Ng,* [Coursera](https://www.coursera.org/learn/machine-learning/home/info)

***Week 9:*** Anomaly Detection, Recommender Systems <sup> `Part 2`</sup>

### Recommender Systems

#### Predicting Movie Ratings

##### Problem Formulation

|        Movie         | Alice (1) | Bob (2) | Carol (3) | Dave (4) |  $x_1$   |  $x_2$   |
| :------------------: | :-------: | :-----: | :-------: | :------: | :------: | :------: |
| $x^{\left(1\right)}$ |     5     |    5    |     0     |    0     | **0.9**  |  **0**   |
| $x^{\left(2\right)}$ |     5     |    ?    |     ?     |    0     | **1.0**  | **0.01** |
| $x^{\left(3\right)}$ |     ?     |    4    |     0     |    ?     | **0.99** |  **0**   |
| $x^{\left(4\right)}$ |     0     |    0    |     5     |    4     | **0.1**  | **1.0**  |
| $x^{\left(5\right)}$ |     0     |    0    |     5     |    ?     |  **0**   | **0.9**  |

<!-- more -->

##### Content-Based Recommendations

For each user $j$, learn a parameter $\theta^{\left(j\right)} \in\mathbb{R}^{n+1}$. Predict user $j$ as rating movie $i$ with $\left( \theta^{\left(j\right)} \right)^\mathsf{T} x^{\left(i\right)}$ stars.

$\qquad y^{\left(1,\,3\right)} = \left( \theta^{\left(1\right)} \right)^\mathsf{T} x^{\left(3\right)} = \begin{bmatrix} 0\\5\\0 \end{bmatrix} ^\mathsf{T} \begin{bmatrix} 1\\0.99\\0 \end{bmatrix} = 4.95$

**Problem Formulation**

- $n_u$: number of users
- $n_m$: mumber of movies
- $m^{\left(j\right)}$: number of movies rated by user $j$
- $r\left(i,\,j\right)$: $1$ if user $j$ has rated movie $i$
- $y^{\left(i,\,j\right)}$: rating given by user $j$ to movie $i$, defined only if $r\left(i,\,j\right)=1$
- $\theta^{\left(j\right)}$: parameter vector for user $j$
- $x^{\left(i\right)}$: feature vector for movie $i$

For user $j$, movie $i$, predicted rating: $\left( \theta^{\left(j\right)} \right)^\mathsf{T} \left( x^{\left(i\right)} \right)$  
To learn $\theta^{\left(j\right)}$:  
$\qquad \displaystyle\min_{\theta^{\left(j\right)}} \: \dfrac{1}{2\,{\color{lightgrey} {m^{\left(j\right)}} }} \displaystyle\sum_{i:\:r\left(i,\,j\right)=1} \left( { \theta^{\left(j\right)} }^\mathsf{T} x^{\left(i\right)} -y^{\left(i,\,j\right)} \right)^2 +\dfrac{\lambda}{2\,{\color{lightgrey} {m^{\left(j\right)}} }} \displaystyle\sum_{k=1}^{n} \left(\theta_k^{\left(j\right)}\right)^2$  
To learn $\theta^{\left(1\right)} ,\, \theta^{\left(2\right)} ,\, \dots ,\, \theta^{\left(n_u\right)}$:  
$\qquad \displaystyle\min_{\theta^{\left(1\right)} ,\, \dots ,\, \theta^{\left(n_u\right)}} \: \dfrac{1}{2} \displaystyle\sum_{j=1}^{n_u} \displaystyle\sum_{i:\:r\left(i,\,j\right)=1} \left( { \theta^{\left(j\right)} }^\mathsf{T} x^{\left(i\right)} -y^{\left(i,\,j\right)} \right)^2 +\dfrac{\lambda}{2} \displaystyle\sum_{j=1}^{n_u} \displaystyle\sum_{k=1}^{n} \left(\theta_k^{\left(j\right)}\right)^2$  
Gradient descent update:
$\qquad \begin{aligned} & \theta_k^{\left(j\right)} := \theta_k^{\left(j\right)} - \alpha \left( \sum_{i:\:r\left(i,\,j\right)=1} \left( { \theta^{\left(j\right)} }^\mathsf{T} x^{\left(i\right)} -y^{\left(i,\,j\right)} \right) x_k^{\left(i\right)} \right) & \textrm{for }k=0 \\ & \theta_k^{\left(j\right)} := \theta_k^{\left(j\right)} - \alpha \left( \sum_{i:\:r\left(i,\,j\right)=1} \left( { \theta^{\left(j\right)} }^\mathsf{T} x^{\left(i\right)} -y^{\left(i,\,j\right)} \right) x_k^{\left(i\right)} +\lambda\,\theta_k^{\left(j\right)} \right) & \textrm{for }k\neq0 \end{aligned}$

#### Collaborative Filtering

##### Collaborative Filtering

Given $\theta^{\left(1\right)} ,\, \theta^{\left(2\right)} ,\, \dots ,\, \theta^{\left(n_u\right)}$  
To learn $x ^{\left(i\right)}$:
$\qquad \displaystyle\min_{x ^{\left(i\right)}} \: \dfrac{1}{2} \displaystyle\sum_{j:\:r\left(i,\,j\right)=1} \left( { \theta ^{\left(j\right)} }^\mathsf{T} x ^{\left(i\right)} -y^{\left(i,\,j\right)} \right)^2 +\dfrac{\lambda}{2} \displaystyle\sum_{k=1}^{n} \left(x_k ^{\left(i\right)}\right)^2$  
To learn $x^{\left(1\right)} ,\, x^{\left(2\right)} ,\, \dots ,\, x^{\left(n_m\right)}$:  
$\qquad \displaystyle\min_{x ^{\left(1\right)} ,\, \dots ,\, x ^{\left(n_m\right)}} \: \dfrac{1}{2} \displaystyle\sum_{i=1}^{n_m} \displaystyle\sum_{j:\:r\left(i,\,j\right)=1} \left( { \theta ^{\left(j\right)} }^\mathsf{T} x ^{\left(i\right)} -y ^{\left(i,\,j\right)} \right)^2 +\dfrac{\lambda}{2} \displaystyle\sum_{i=1}^{n_m} \displaystyle\sum_{k=1}^{n} \left(x_k ^{\left(i\right)}\right)^2$

- Given $x ^{\left(1\right)} ,\, x ^{\left(2\right)} ,\, \dots ,\, x ^{\left(n_m\right)}$, can estimate $\theta ^{\left(1\right)} ,\, \theta ^{\left(2\right)} ,\, \dots ,\, \theta ^{\left(n_u\right)}$
- Given $\theta ^{\left(1\right)} ,\, \theta ^{\left(2\right)} ,\, \dots ,\, \theta ^{\left(n_u\right)}$, can estimate $x ^{\left(1\right)} ,\, x ^{\left(2\right)} ,\, \dots ,\, x ^{\left(n_m\right)}$

$\textsf{Guess } \theta \rightarrow x \rightarrow \theta \rightarrow x \rightarrow \theta \rightarrow x \rightarrow \cdots \textsf{until converge}$

##### Collaborative Filtering Algorithm

- Given $x ^{\left(1\right)} ,\, x ^{\left(2\right)} ,\, \dots ,\, x ^{\left(n_m\right)}$, estimate $\theta ^{\left(1\right)} ,\, \theta ^{\left(2\right)} ,\, \dots ,\, \theta ^{\left(n_u\right)}$:

  $\displaystyle\min_{\theta ^{\left(1\right)} ,\, \dots ,\, \theta ^{\left(n_u\right)}} \: \dfrac{1}{2} \displaystyle\sum_{j=1}^{n_u} \displaystyle\sum_{i:\:r\left(i,\,j\right)=1} \left( { \theta ^{\left(j\right)} }^\mathsf{T} x ^{\left(i\right)} -y ^{\left(i,\,j\right)} \right)^2 +\dfrac{\lambda}{2} \displaystyle\sum_{j=1}^{n_u} \displaystyle\sum_{k=1}^{n} \left(\theta_k ^{\left(j\right)}\right)^2$

- Given $\theta ^{\left(1\right)} ,\, \theta ^{\left(2\right)} ,\, \dots ,\, \theta ^{\left(n_u\right)}$, estimate $x ^{\left(1\right)} ,\, x ^{\left(2\right)} ,\, \dots ,\, x ^{\left(n_m\right)}$:

  $\displaystyle\min_{x ^{\left(1\right)} ,\, \dots ,\, x ^{\left(n_m\right)}} \: \dfrac{1}{2} \displaystyle\sum_{i=1}^{n_m} \displaystyle\sum_{j:\:r\left(i,\,j\right)=1} \left( { \theta ^{\left(j\right)} }^\mathsf{T} x ^{\left(i\right)} -y ^{\left(i,\,j\right)} \right)^2 +\dfrac{\lambda}{2} \displaystyle\sum_{i=1}^{n_m} \displaystyle\sum_{k=1}^{n} \left(x_k ^{\left(i\right)}\right)^2$

Minimizing $x^{\left(1\right)} ,\, x^{\left(2\right)} ,\, \dots ,\, x^{\left(n_m\right)}$ and $\theta^{\left(1\right)} ,\, \theta^{\left(2\right)} ,\, \dots ,\, \theta^{\left(n_u\right)}$ simultaneously:  
$\qquad \displaystyle\min_{ \substack{ x^{\left(1\right)} ,\,\dots,\, x^{\left(n_m\right)} , \\ \theta^{\left(1\right)} ,\,\dots,\, \theta^{\left(n_u\right)} } } J\left( x^{\left(1\right)} ,\,\dots,\, x^{\left(n_m\right)} ,\, \theta^{\left(1\right)} ,\,\dots,\, \theta^{\left(n_u\right)} \right)$ $\qquad x \in \mathbb{R}^n ,\ \theta \in \mathbb{R}^n$  
$\qquad \begin{aligned}J\left( x^{\left(1\right)} ,\,\dots,\, x^{\left(n_m\right)} ,\, \theta^{\left(1\right)} ,\,\dots,\, \theta^{\left(n_u\right)} \right) &= \dfrac{1}{2} \displaystyle\sum_{\left(i,\,j\right):\:r\left(i,\,j\right)=1} \left( { \theta^{\left(j\right)} }^\mathsf{T} x^{\left(i\right)} -y^{\left(i,\,j\right)} \right)^2 \\ &+\dfrac{\lambda}{2} \displaystyle\sum_{i=1}^{n_m} \displaystyle\sum_{k=1}^{n} \left(x_k^{\left(i\right)}\right)^2 +\dfrac{\lambda}{2} \displaystyle\sum_{j=1}^{n_u} \displaystyle\sum_{k=1}^{n} \left(\theta_k^{\left(j\right)}\right)^2\end{aligned}$

**Collaborative Filtering Algorithm**

1. Initialize $x^{\left(1\right)} ,\,\dots,\, x^{\left(n_m\right)} ,\, \theta^{\left(1\right)} ,\,\dots,\, \theta^{\left(n_u\right)}$ to small random values.

2. Minimize $J\left( x^{\left(1\right)} ,\,\dots,\, x^{\left(n_m\right)} ,\, \theta^{\left(1\right)} ,\,\dots,\, \theta^{\left(n_u\right)} \right)$ using gradient descent (or advanced optimization algorithms).

   $\begin{aligned} & x_k^{\left(i\right)} := x_k^{\left(i\right)} - \alpha \left( \sum_{j:\:r\left(i,\,j\right)=1} \left( { \theta^{\left(j\right)} }^\mathsf{T} x^{\left(i\right)} -y^{\left(i,\,j\right)} \right) x_k^{\left(i\right)} +\lambda\,x_k^{\left(i\right)} \right) & \textrm{for every } j=1,\,\dots,\,n_u \\ & \theta_k^{\left(j\right)} := \theta_k^{\left(j\right)} - \alpha \left( \sum_{i:\:r\left(i,\,j\right)=1} \left( { \theta^{\left(j\right)} }^\mathsf{T} x^{\left(i\right)} -y^{\left(i,\,j\right)} \right) x_k^{\left(i\right)} +\lambda\,\theta_k^{\left(j\right)} \right) & \textrm{for every } i=1,\,\dots,\,n_m \end{aligned}$

3. For a user with parameters $\theta$ and a movie with *learned* features $x$, predict a star rating of $\theta^\mathsf{T}x$.

#### Low-Rank Matrix Factorization

##### Vectorization: Low-Rank Matrix Factorization

$X = \begin{bmatrix} \substack{\rule{25pt}{0.5pt}\\\\} \ \left( x^{\left(1\right)} \right) ^\mathsf{T} \ \substack{\rule{25pt}{0.5pt}\\\\} \\ \substack{\rule{25pt}{0.5pt}\\\\} \ \left( x^{\left(2\right)} \right) ^\mathsf{T} \ \substack{\rule{25pt}{0.5pt}\\\\} \\ \vdots \\ \substack{\rule{25pt}{0.5pt}\\\\} \ \left( x^{\left(n_m\right)} \right) ^\mathsf{T} \ \substack{\rule{25pt}{0.5pt}\\\\} \end{bmatrix} \qquad\qquad \Theta = \begin{bmatrix} \substack{\rule{25pt}{0.5pt}\\\\} \ \left( \theta^{\left(1\right)} \right) ^\mathsf{T} \ \substack{\rule{25pt}{0.5pt}\\\\} \\ \substack{\rule{25pt}{0.5pt}\\\\} \ \left( \theta^{\left(2\right)} \right) ^\mathsf{T} \ \substack{\rule{25pt}{0.5pt}\\\\} \\ \vdots \\ \substack{\rule{25pt}{0.5pt}\\\\} \ \left( \theta^{\left(n_u\right)} \right) ^\mathsf{T} \ \substack{\rule{25pt}{0.5pt}\\\\} \end{bmatrix}$

Predicted ratings: $X\Theta^\mathsf{T}$

**Finding Related Movies**

small distance $\left\| x^{\left(i\right)} - x^{\left(j\right)} \right\|$ $\rightarrow$ "similar" movies

##### Implementational Detail: Mean Normalization

users who have not rated any movies

$\qquad \displaystyle\min_{ \substack{ x^{\left(1\right)} ,\,\dots,\, x^{\left(n_m\right)} , \\ \theta^{\left(1\right)} ,\,\dots,\, \theta^{\left(n_u\right)} } } \dfrac{\lambda}{2} \displaystyle\sum_{j=1}^{n_u} \displaystyle\sum_{k=1}^{n} \left(\theta_k^{\left(j\right)}\right)^2 \:\Rightarrow\: \theta=\vec{0} \:\Rightarrow\: \theta^\mathsf{T}x=0$

**Mean Normalization**

$\quad \begin{aligned} & Y=\begin{bmatrix} 5&5&0&0&? \\ 5&?&?&0&? \\ ?&4&0&?&? \\ 0&0&5&4&? \\ 0&0&5&0&? \end{bmatrix} \qquad \mu=\begin{bmatrix} 2.5\\2.5\\2\\2.25\\1.25 \end{bmatrix} \\ \:\rightarrow\: & Y=\begin{bmatrix} 2.5&2.5&-2.5&-2.5&? \\ 2.5&?&?&-2.5&? \\ ?&2&-2&?&? \\ -2.25&-2.25&2.75&1.75&? \\ -1.25&-1.25&3.75&-1.25&? \end{bmatrix} \:\rightarrow\: \textsf{learn } \theta^{\left(j\right)},\,x^{\left(i\right)} \end{aligned}$

For user $j$ on movie $i$, predict $\left(\theta^{\left(j\right)}\right)\left(x^{\left(i\right)}\right)+\mu_i$  
$\qquad$new users: $\theta=\vec{0} \:\Rightarrow\: \left(\theta^{\left(j\right)}\right)\left(x^{\left(i\right)}\right)+\mu_i = \mu_i$
