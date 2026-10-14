import type { Localized } from "./shared";

/*
 * Detail page content for the undergraduate thesis (TCC).
 *
 * TODO: results (metrics, figures, and any statement about model
 * performance or generalization — even qualitative) go in only after
 * TCC 2 is complete. Until then this page shows the problem, the
 * methodology with its documented numbers (dataset sizes, resolutions,
 * splits, hyperparameters), limitations and next steps.
 */

export type DatasetRow = {
  name: string;
  role: Localized<string>;
  images: Localized<string>;
};

export type PcosDetail = {
  title: string;
  problem: string;
  approach: string[];
  training: string[];
  totalImages: string;
  resultsPending: string;
  limitations: string;
  nextStep: string;
};

export const pcosDatasets: DatasetRow[] = [
  {
    name: "PCOSGen",
    role: { en: "Training + internal test", pt: "Treino + teste interno" },
    images: { en: "3,200 train / 1,468 test", pt: "3.200 treino / 1.468 teste" },
  },
  {
    name: "Kaggle",
    role: { en: "External validation 1", pt: "Validação externa 1" },
    images: { en: "3,856", pt: "3.856" },
  },
  {
    name: "Figshare",
    role: { en: "External validation 2", pt: "Validação externa 2" },
    images: { en: "11,784", pt: "11.784" },
  },
];

export const pcosDetail: Localized<PcosDetail> = {
  en: {
    title:
      "Generalization of Deep Learning Models for PCOS Detection in Ultrasound Images — A Multi-Dataset Evaluation with a Federated Approach",
    problem:
      "Deep learning models in medical imaging are almost always evaluated with internal validation only — test data drawn from the same source as the training data. That overestimates their real ability to generalize to images acquired elsewhere.",
    approach: [
      "ResNet-50 pretrained on ImageNet, with full fine-tuning in PyTorch / torchvision.",
      "An exploratory analysis of three public datasets came first. It found a source bias: in Figshare, there is a systematic resolution gap between classes — 718×608 px for “normal” images vs. 272×267 px for “PCOS” images — something a model could learn instead of the anatomy.",
      "Because of that, PCOSGen was chosen as the training base, and the other two datasets were reassigned to external validation.",
    ],
    training: [
      "Class weighting",
      "Dropout 0.5",
      "Weight decay 1e-3",
      "Adam, learning rate 1e-4",
      "Batch size 32",
      "ReduceLROnPlateau",
      "Early stopping",
      "Seed 42",
    ],
    totalImages: "~20,000 images in total",
    resultsPending: "Results will be released after TCC 2 is complete.",
    limitations:
      "Work in progress, evaluated with a single architecture (ResNet-50) and a single training dataset (PCOSGen).",
    nextStep:
      "Federated training with Flower, comparing FedAvg and FedProx, to test whether distributed multi-source training makes the model more robust across data sources.",
  },
  pt: {
    title:
      "Generalização de Modelos de Deep Learning na Detecção de PCOS em Imagens de Ultrassom — Avaliação Multibase com Abordagem Federada",
    problem:
      "Modelos de deep learning em imagem médica quase sempre são avaliados só por validação interna — dados de teste da mesma fonte do treino. Isso superestima a capacidade real de generalizar para imagens adquiridas em outros lugares.",
    approach: [
      "ResNet-50 pré-treinada na ImageNet, com fine-tuning completo em PyTorch / torchvision.",
      "Antes do treino, uma análise exploratória de três datasets públicos identificou viés de fonte: no Figshare há disparidade sistemática de resolução entre classes — 718×608 px nas imagens “normais” vs. 272×267 px nas “PCOS” — algo que um modelo poderia aprender no lugar da anatomia.",
      "Por isso o PCOSGen foi escolhido como base de treino, e os outros dois datasets foram realocados para validação externa.",
    ],
    training: [
      "Ponderação de classes",
      "Dropout 0,5",
      "Weight decay 1e-3",
      "Adam, taxa de aprendizado 1e-4",
      "Batch 32",
      "ReduceLROnPlateau",
      "Early stopping",
      "Seed 42",
    ],
    totalImages: "~20 mil imagens no total",
    resultsPending: "Os resultados serão divulgados após a conclusão do TCC 2.",
    limitations:
      "Trabalho em andamento, avaliado com uma única arquitetura (ResNet-50) e uma única base de treino (PCOSGen).",
    nextStep:
      "Treinamento federado com Flower, comparando FedAvg e FedProx, para testar se o treino distribuído multi-fonte torna o modelo mais robusto entre bases de origens diferentes.",
  },
};
