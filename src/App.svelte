<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'

  var screenWidth: number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  let canvasWidth = 100 - (Math.log(screenWidth**5));
</script>

<main>
  <div class="header"></div>
  <div class="canvas-container">
    <canvas id="canvas" style="width: {canvasWidth}%">$0</canvas>
  </div>
  <LayoutGrid>
    {#each Array(2) as _unused, _i}
      <Cell span={3} md=4>
        <div class="button-cell">
          LinkedIn
        </div>
      </Cell>
    {/each}
    <Cell spanDevices={{ desktop: 6, tablet: 2, phone: 2 }}>
      <div class="button-cell">
      Git
      </div>
    </Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 2, phone: 2 }}>
      <div class="button-cell">
      Soundcloud
      </div>
    </Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 2, phone: 2 }}>
      <div class="button-cell">
      StackOverflow
      </div>
    </Cell>
  </LayoutGrid>

  <LayoutGrid>
  {#each Array(2) as _unused, _i}
    <Cell span={6}>
      <div class="demo-cell">Span 6</div>
    </Cell>
  {/each}
  {#each Array(4) as _unused, _i}
    <Cell span={3}>
      <div class="demo-cell">Span 3</div>
    </Cell>
  {/each}
  {#each Array(6) as _unused, _i}
    <Cell span={2}>
      <div class="demo-cell">Span 2</div>
    </Cell>
  {/each}
  {#each Array(12) as _unused, _i}
    <Cell span={1}>
      <div class="demo-cell">Span 1</div>
    </Cell>
  {/each}
  <Cell span={7}>
    <div class="demo-cell">Span 7</div>
  </Cell>
  <Cell span={5}>
    <div class="demo-cell">Span 5</div>
  </Cell>
  <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>
    <div class="demo-cell" style="height: 80px;">
      Span 6 on desktop, 4 on tablet, 2 on phone (always half)
    </div>
  </Cell>
</LayoutGrid>



  <!--
  <div class="info">
    <h>Nemanja Lakicevic</h>
    <div class=button-container>
      <ul class="button-ul">
        <li class="button-il" id=""></li>
        <li class="button-il" id=""></li>
        <li class="button-il" id=""></li>
        <li class="button-il" id=""></li>
      </ul>
    </div>
  </div>
  <div class="bio"></div>
  <div class="contact">
    <ul>
      <li>
        <div class="li-icon">
        </div>
        <div class="li-text">
          <span class="li-title">Mail</span>
          <a class="li-content" href="mailto:post@lakicevic.no">post@lakicevic.no</a>
        </div>
      </li>
      <li>
        <div class="li-icon">
        </div>
        <div class="li-text">
          <span class="li-title">Mail</span>
          <a class="li-content" href="mailto:post@lakicevic.no">post@lakicevic.no</a>
        </div>
      </li>
    </ul>
  </div>
-->
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .demo-cell {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--mdc-theme-secondary, #333);
    color: var(--mdc-theme-on-secondary, #fff);
  }

  #canvas {
    background: #ca0164;
    margin: auto;
    border: 2px solid darkgray;
    border-radius: 8px;
    display: flex;
    justify-content: center;
  }

  #canvas:before {
    content:"";
    display: block;
    padding-top: 40%;
  }

   .button-cell {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    color: white;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
