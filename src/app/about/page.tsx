import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Artur Bixiga',
  description: 'About Artur Bixiga',
};

export default function About() {
  return (
    <div className="prose prose-lg dark:prose-invert mx-auto">
      <h1>Sobre mim</h1>
      <p>
        Olá! Eu sou Artur Bixiga.
      </p>
      <p>
        Sou desenvolvedor de software com mais de 10 anos de experiência em programação. Atualmente trabalho como Desenvolvedor Sênior especialista em Frontend na netLex, com foco principalmente em Angular e no desenvolvimento de aplicações frontend escaláveis e bem estruturadas.
      </p>
      <p>
        Ao longo da minha carreira atuei por muitos anos como desenvolvedor full stack, trabalhando principalmente com .NET, C#, Angular e React. Já participei de projetos para empresas como Vale, MRV e Gerdau, além de ter colaborado em projetos internacionais.
      </p>
      <p>
        Sou formado em Engenharia Mecatrônica, formação que acabou influenciando bastante a forma como penso software: com uma visão mais de engenharia de sistemas, organização e estrutura.
      </p>

      <h2>Por que este blog existe</h2>
      <p>
        Eu sempre gostei muito de programação e tecnologia, mas existe um outro tema que me interessa tanto quanto: como aprendemos coisas complexas.
      </p>
      <p>
        Tenho grande interesse por temas como aprendizado, memória, didática e formas de explicar conceitos difíceis de maneira clara. Gosto de estudar como as pessoas aprendem e aplicar essas ideias quando estou explicando algum conceito técnico.
      </p>
      <p>
        Este blog nasce justamente da interseção entre essas duas coisas.
      </p>
      <p>
        Aqui você vai encontrar artigos técnicos sobre programação, principalmente voltados para Angular e desenvolvimento frontend, com um foco especial em conteúdos mais avançados.
      </p>
      <p>
        A ideia não é produzir tutoriais básicos, mas sim explorar conceitos mais profundos de forma didática, quebrando ideias complexas em explicações claras, muitas vezes utilizando analogias e estruturas que ajudem o conteúdo a ser realmente entendido e lembrado.
      </p>
      <p>
        O público principal deste blog são desenvolvedores intermediários a experientes que querem aprofundar sua compreensão sobre desenvolvimento de software.
      </p>

      <h2>Um pouco mais sobre mim</h2>
      <p>
        Eu moro em Diamantina, Minas Gerais.
      </p>
      <p>
        Além de programação, gosto bastante de aprender sobre engenharia de software, arquitetura de sistemas e como o conhecimento é construído e transmitido.
      </p>
      <p>
        Se você gosta de explicações técnicas profundas, mas bem estruturadas e didáticas, provavelmente vai se sentir em casa por aqui.
      </p>
      <p>
        Se quiser trocar uma ideia ou acompanhar meu trabalho, me encontre no{' '}
        <a href="https://www.linkedin.com/in/arturquirino/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>.
      </p>
    </div>
  );
}
