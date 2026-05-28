---
title: "GSAP + React: Guia definitivo para animações de alto desempenho"
excerpt: "Aprenda a estruturar animações complexas, sequenciamento de timelines e controle de renderização no React sem perder performance."
date: "24 de Maio, 2026"
readTime: "8 min de leitura"
category: "Performance"
slug: "gsap-react-guia-animacoes-suaves"
---

Adicionar animações a uma interface web é uma das formas mais eficazes de elevar o nível de profissionalismo e encantar os usuários. No entanto, em aplicações React, gerenciar estados de animação, evitar loops de renderização e garantir que os elementos não fliquem (FOUC) pode ser desafiador.

O **GSAP (GreenSock Animation Platform)** é a biblioteca padrão da indústria para animações robustas. Neste guia, vamos entender as melhores práticas para integrar o GSAP no React.

---

## 1. O Ciclo de Vida e a Referência de Elementos

No React, nunca devemos manipular o DOM diretamente usando `document.querySelector` dentro de nossos componentes se pudermos evitar. Em vez disso, usamos o hook `useRef` para guardar a referência do elemento ou do container que desejamos animar.

```tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function AnimatedBox() {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animação simples de rotação
        gsap.to(boxRef.current, {
            rotate: 360,
            duration: 1.5,
            ease: "power2.out"
        });
    }, []);

    return <div ref={boxRef} className="w-16 h-16 bg-primary" />;
}
```

---

## 2. A Importância de Limpar os Efeitos (Timeline Cleanup)

Um dos erros mais comuns de vazamento de memória (Memory Leak) no React ocorre quando uma animação continua rodando ou guardando referências em cache após o componente ter sido desmontado (unmount).

Sempre retorne uma função de limpeza no seu `useEffect` para matar as animações ativas:

```tsx
useEffect(() => {
    const tl = gsap.timeline();

    tl.to(element, { opacity: 1, y: 0 });

    // Função de limpeza essencial!
    return () => {
        tl.kill();
    };
}, []);
```

---

## 3. Conclusão

Dominar a dobradinha **GSAP + React** permite que você crie portfólios incríveis e sites altamente interativos que mantêm uma taxa de quadros estável (60 FPS) tanto em desktops potentes quanto em celulares mais modestos.
