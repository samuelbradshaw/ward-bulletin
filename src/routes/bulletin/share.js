import { h, Component } from "preact";

const ShareItem = ({ title, url, color, path }) => {
  return (
    <a
      style={{
        display: "inline-block",
        textDecoration: "none",
        color: "#fff",
        margin: "0.5em"
      }}
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={title}
    >
      <div
        style={{
          backgroundColor: color,
          borderColor: color,
          borderRadius: "5px",
          transition: "25ms ease-out",
          padding: "0.5em 0.75em",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
        }}
      >
        <div
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "1em",
            height: "1em",
            marginRight: "0.4em",
            verticalAlign: "top",
            fill: "#fff",
            stroke: "none"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {path}
          </svg>
        </div>
        {title}
      </div>
    </a>
  );
};

const Share = ({ unit, name }) => {
  let message = `Here is the ward bulletin for ${name}`;
  return (
    <div>
      <h4 class="w3-center">Share</h4>
      <p>Share your bulletin with other ward members</p>

      <ShareItem
        title="Facebook"
        url={`https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwardbulletin.app%2F%23${unit}`}
        color="#2d4373"
        path={
          <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z" />
        }
      />

      <ShareItem
        title="Twitter"
        url={`https://twitter.com/intent/tweet/?text=${message}&url=https%3A%2F%2Fwardbulletin.app%2F%23${unit}`}
        color="#55acee"
        path={
          <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
        }
      />

      <ShareItem
        title="E-Mail"
        url={`mailto:?subject=${message}&body=https%3A%2F%2Fwardbulletin.app%2F%23${unit}`}
        color="#777777"
        path={
          <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm8 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8z" />
        }
        path2={
          <path d="M17.9 8.18c-.2-.2-.5-.24-.72-.07L12 12.38 6.82 8.1c-.22-.16-.53-.13-.7.08s-.15.53.06.7l3.62 2.97-3.57 2.23c-.23.14-.3.45-.15.7.1.14.25.22.42.22.1 0 .18-.02.27-.08l3.85-2.4 1.06.87c.1.04.2.1.32.1s.23-.06.32-.1l1.06-.9 3.86 2.4c.08.06.17.1.26.1.17 0 .33-.1.42-.25.15-.24.08-.55-.15-.7l-3.57-2.22 3.62-2.96c.2-.2.24-.5.07-.72z" />
        }
      />

      <ShareItem
        title="Pinterest"
        url={`https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwardbulletin.app%2F%23${unit}&media=https%3A%2F%2Fwardbulletin.app%2F%23${unit}&description=${message}`}
        color="#bd081c"
        path={
          <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm1.4 15.56c-1 0-1.94-.53-2.25-1.14l-.65 2.52c-.4 1.45-1.57 2.9-1.66 3-.06.1-.2.07-.22-.04-.02-.2-.32-2 .03-3.5l1.18-5s-.3-.6-.3-1.46c0-1.36.8-2.37 1.78-2.37.85 0 1.25.62 1.25 1.37 0 .85-.53 2.1-.8 3.27-.24.98.48 1.78 1.44 1.78 1.73 0 2.9-2.24 2.9-4.9 0-2-1.35-3.5-3.82-3.5-2.8 0-4.53 2.07-4.53 4.4 0 .5.1.9.25 1.23l-1.5.82c-.36-.64-.54-1.43-.54-2.28 0-2.6 2.2-5.74 6.57-5.74 3.5 0 5.82 2.54 5.82 5.27 0 3.6-2 6.3-4.96 6.3z" />
        }
      />

      <ShareItem
        title="LinkedIn"
        url={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwardbulletin.app%2F%23${unit}&title=${message}&summary=${message}&source=https%3A%2F%2Fwardbulletin.app%2F%23${unit}`}
        color="#0077b5"
        path={
          <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M9.5,16.5h-2v-7h2V16.5z M8.5,7.5 c-0.553,0-1-0.448-1-1c0-0.552,0.447-1,1-1s1,0.448,1,1C9.5,7.052,9.053,7.5,8.5,7.5z M18.5,16.5h-3V13c0-0.277-0.225-0.5-0.5-0.5 c-0.276,0-0.5,0.223-0.5,0.5v3.5h-3c0,0,0.031-6.478,0-7h3v0.835c0,0,0.457-0.753,1.707-0.753c1.55,0,2.293,1.12,2.293,3.296V16.5z" />
        }
      />

      <ShareItem
        title="WhatsApp"
        url={`whatsapp://send?text=${message}%20https%3A%2F%2Fwardbulletin.app%2F%23${unit}`}
        color="#25D366"
        path={
          <path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z" />
        }
      />

      <ShareItem
        title="Telegram"
        url={`https://telegram.me/share/url?text=${message}&url=https%3A%2F%2Fwardbulletin.app%2F%23${unit}`}
        color="#54A9EB"
        path={
          <path
            d="M12 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5.5 5.65.5 12 5.65 23.5 12 23.5zM2.505 11.053c-.31.118-.505.738-.505.738s.203.62.513.737l3.636 1.355 1.417 4.557a.787.787 0 0 0 1.25.375l2.115-1.72a.29.29 0 0 1 .353-.01L15.1 19.85a.786.786 0 0 0 .746.095.786.786 0 0 0 .487-.573l2.793-13.426a.787.787 0 0 0-1.054-.893l-15.568 6z"
            fill-rule="evenodd"
          />
        }
      />

      <ShareItem
        title="Tumblr"
        url={`https://www.tumblr.com/widgets/share/tool?posttype=link&title=${message}&caption=${message}&content=https%3A%2F%2Fwardbulletin.app%2F%23${unit}&canonicalUrl=https%3A%2F%2Fwardbulletin.app%2F%23${unit}&shareSource=tumblr_share_button`}
        color="#222d3c"
        path={
          <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.492,17.616C11.401,19.544,9.5,17,9.5,14.031 V9.5h-2V8.142c0.549-0.178,1.236-0.435,1.627-0.768c0.393-0.334,0.707-0.733,0.943-1.2c0.238-0.467,0.401-0.954,0.49-1.675H12.5v3h2 v2h-2v3.719c0,2.468,1.484,2.692,2.992,1.701V17.616z" />
        }
      />
    </div>
  );
};

export default Share;
