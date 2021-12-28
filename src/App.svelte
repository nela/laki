<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="header"></div>
  <div class="canvas-container">
    <canvas id="canvas" >$0</canvas>
  </div>
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

  #canvas {
    margin: auto;
    width: 50%;
    height: 280px;
    border: 2px solid darkgray;
    border-radius: 8px;
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
