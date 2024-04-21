const mjml2html = require("mjml");

function WelcomeEmail({ confirmUrl }) {
  const baseUrl = `https://${process.env.BASE_URL}`;
  const { html } = mjml2html(
  `<mjml>
    <mj-head>
      <mj-preview>Welcome to our site!</mj-preview>
      <mj-style inline="inline">
        .bg {
        background-color: #0f2027;
        background-image: linear-gradient(240deg, #2c5364, #203a43, #0f2027);
        height: 80%;
        padding: 10px;
        }
        .wrapper {
        border-radius: 8px;
        overflow: hidden;
        color: #333;
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }
        .my-20 { margin: 20px; }
        .b-top {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        }
        .b-bottom {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        }
        .header-bg { background-color: #0f2027; }
        .footer-bg { background-color: #eee; }
      </mj-style>
    </mj-head>
  
    <mj-body css-class="bg">
      <mj-wrapper css-class="wrapper" padding="0" background-color="#fff">
        <mj-section css-class="header-bg">
          <mj-column>
            <mj-image width="128px" height="98px" src="${baseUrl}/images/logo.png" alt="Site Logo" href="${baseUrl}" />
          </mj-column>
        </mj-section>
  
        <mj-section padding-bottom="0">
          <mj-column>
            <mj-text font-size="14px" line-height="1.5">Welcome to our site! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sed optio ipsum quod aspernatur quidem incidunt ipsam quam debitis, commodi illo nobis ex suscipit expedita, aperiam laborum consequuntur molestias.</mj-text>
          </mj-column>
        </mj-section>
  
        <mj-section padding-top="0">
          <mj-column>
            <mj-button background-color="#fbbf24" color="#000" padding-top="20px" font-weight="500" text-transform="uppercase" border-radius="8px" href="${confirmUrl}"> Go main </mj-button>
          </mj-column>
        </mj-section>
  
        <mj-section css-class="b-radius" background-color="#eee">
          <mj-column width="100%">
            <mj-text align="center" font-size="18px" font-weight="bold" line-height="1.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sed optio ipsum quod aspernatur quidem incidunt ipsam quam debitis, commodi illo nobis ex suscipit expedita, aperiam laborum consequuntur molestias.</mj-text>
            <mj-text align="center" font-size="10px" line-height="1.25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sed optio ipsum quod aspernatur quidem incidunt ipsam quam debitis, commodi illo nobis ex suscipit expedita, aperiam laborum consequuntur molestias.</mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    </mj-body>
  </mjml>`, { minify: true });

  return html;
}

module.exports = WelcomeEmail;
