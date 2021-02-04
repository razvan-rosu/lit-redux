import { css } from 'lit-element';

export default css`
  :host {
    display: inline-block;
  }

  @-webkit-keyframes spinner {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .Spinner {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .Spinner::before {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 1px solid rgba(22, 160, 133, 1);
    border-top-color: rgba(142, 68, 173, 1);
    border-right-color: rgba(241, 196, 15, 1);
    border-bottom-color: rgba(192, 57, 43, 1);
    -webkit-animation: spinner 0.6s linear infinite;
    animation: spinner 0.6s linear infinite;
  }

  .Label {
    display: inline-block;
    line-height: 20px;
    vertical-align: middle;
    margin-left: 4px;
  }
`;
