import { h, Component } from "preact";
import style from "./style";

const Help = () => {
  return (
    <div>
      <h5>Help</h5>
      <div class="w3-card w3-container">
        <div class="w3-container" />

        <Title>Overview</Title>
        <Body>
          The bulletin editor allows you to create and update your ward
          bulletin. If you are using a device with a large screen, such as a
          computer or tablet, you will see a preview of the bulletin on the
          right. Smaller devices, such as a mobile phones, will only show the
          editor.
        </Body>
        <Body>
          Changes you make do not appear for everyone else until you tap the
          Publish button on the toolbar at the buttom of the screen. If you make
          a mistake, you can tap the Undo button. The Logout button is only used
          if you have multiple accounts.
        </Body>

        <Title>Sections</Title>
        <Body>
          The ward bulletin is divided up into separate sections such as
          Program, Articles, and Calendar. Tap the <i class="icon-angle-down" />{" "}
          indicator to the right of the section name to show the section
          toolbar. Use the toolbar to add, delete, or move the section up or
          down.
        </Body>

        <Title>Items</Title>
        <Body>
          Each section has multiple items, depending on the section type, such
          as Title, Person, Announcement, or Calendar Event. Make changes to an
          item and you will see those changes in the preview pane on the right.
        </Body>
        <Body>
          To add a new item, tap the <i class="icon-angle-down" /> indicator to
          the right of the item and tap the Add button. Items you can add that
          are relevant to the section you are working in will be listed at the
          top.
        </Body>

        <Title>Cover Section</Title>
        <Body>
          If you would like your bulletin to have a cover page, add a Cover
          Section. You may add Title items to include your ward name and the
          current date. You can also add an Image item.
        </Body>

        <Title>Image Item</Title>
        <Body>
          To add an image, you will need a URL for and image that is already
          available online. You can usually get an image URL by right-clicking
          on the image and select "Copy Image Address." To use an image from the
          LDS Media Library, tap the Media button and select the image you would
          like to use.
        </Body>

        <Title>Gap Item</Title>
        <Body>
          Use a Gap item to add spacing between items. Move the slider to
          increase or decrease the spacing.
        </Body>

        <Title>Hymn Item</Title>
        <Body>
          When you add or change a hymn item, enter the hymn number and the
          title will be filled in automatically. This works currently only for
          the English hymns.
        </Body>

        <Title>Article Item</Title>
        <Body>
          An Article item allows you to enter styled text, images, and links. To
          insert an image, tap the Image button, then enter the URL for the
          image. To enter a link, select the text that will be the link, then
          tap the Link button to enter the URL.
        </Body>

        <p />
      </div>
    </div>
  );
};

function Title({ children }) {
  return <h5 class={style.helptitle}>{children}</h5>;
}

function Body({ children }) {
  return <div class={style.helpbody + " w3-serif"}>{children}</div>;
}

export default Help;
