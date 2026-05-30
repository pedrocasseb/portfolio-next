---
id: 1
title: "Cancer Detection ML - Detecção de Tumores"
category: "Backend / APIs"
period: "ABR 2026 - MAI 2026"
description: "Projeto de machine learning de alta precisão para detecção e classificação de tumores cerebrais em imagens de ressonância magnética (MRI), divididos entre tumores ativos e normais."
tags: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"]
github: "https://github.com/pedrocasseb"
featured: true
slug: "cancer-detection-ml"
---

## 📌 Descrição  
Projeto de machine learning para detecção de tumores cerebrais em imagens de ressonância magnética (MRI), classificando de forma automatizada entre "tumor" (yes) e "não tumor" (no).  
  
## 🎯 Objetivo  
Criar um modelo convolucional robusto capaz de auxiliar profissionais de saúde na rápida identificação e triagem de possíveis casos de câncer cerebral a partir de exames de imagem.  
  
## 🗂️ Dataset  
- **Tipo**: Imagens de Ressonância Magnética (MRI)
- **Classes**:  
  - `yes` → Com tumor diagnosticado
  - `no` → Sem tumor (exame normal)
  
## ⚙️ Tecnologias Principais  
- **TensorFlow** (>= 2.16)
- **OpenCV-Python** (>= 4.8)
- **SciKit-Learn** (>= 1.3)
- **Pillow** (>= 10) & **Matplotlib** (>= 3.8)

## 🏗️ Estrutura do Repositório

```
CANCER-DETECTION/  
├── data/  
│   └── brain-mri/  
│       ├── no/                   # Imagens de controle (sem tumor)  
│       └── yes/                  # Imagens clínicas (com tumor)  
├── src/  
│   ├── artifacts/            # Modelos salvos e outputs gerais  
│   ├── predict.py            # Script de inferência e predição  
│   ├── train.py              # Pipeline de treinamento da rede  
│   └── training_curves.png   # Gráficos de acurácia e perda  
├── requirements.txt        # Dependências Python  
```

## 🚀 Como rodar  
  
### Treinar o modelo  
```bash 
python src/train.py
```

### Fazer Predição
```bash
python src/predict.py data/brain-mri/yes/imagem.jpg
```
