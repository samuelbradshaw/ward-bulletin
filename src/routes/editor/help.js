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
          Several options, including this help screen, are available from the
          sidebar menu which you can open with the <i class="icon-menu" />{" "}
          button at the upper/right.
        </Body>
        <Title>Publish</Title>
        <Body>
          When you have finished making changes to the bulletin, tap the{" "}
          <i class="icon-upload-cloud" />
          Publish button in the sidebar menu to upload the bulletin. Changes you
          make do not appear for everyone else until you publish.
        </Body>
        <Title>Sections</Title>
        <Body>
          The ward bulletin is divided up into separate sections such as
          Program, Announcements, and Calendar. Tap the <i class="icon-menu" />{" "}
          icon to the right of the section name to show the section toolbar. Use
          the toolbar to add, delete, or move the section up or down. Tap the{" "}
          <i class="icon-angle-down" /> indicator to hide the section while
          editing so it's easier to see other sections.
        </Body>
        <Title>Items</Title>
        <Body>
          Each section has multiple items, depending on the section type, such
          as Title, Person, Announcement, or Calendar Event. Make changes to an
          item and you will see those changes in the preview pane on the right.
        </Body>
        <Body>
          Tap the <i class="icon-menu" /> icon to the right of the item to show
          the toolbar. Use the toolbar to add, clone, delete, or move the item
          up or down. When adding, items you can add that are relevant to the
          section you are working in will be listed at the top. Tap the Clone
          button to make a copy of the item.
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
        <Title>Styled Text</Title>
        <Body>
          Article and Styled Text items allow you to enter styled text, images,
          and links. You can also paste styled text that is copied from other
          sources such as web browser, word processor, email, etc.
        </Body>
        <Body>
          To insert an image, tap the Image button, then enter the URL for the
          image. To enter a link, select the text that will be the link, then
          tap the Link button to enter the URL.
        </Body>
        <Title>Printing</Title>
        <Body>
          To print, press the <i class="icon-print" />
          Print button in the sidebar menu or select Print from your web browser
          menu. By default, the bulletin will print in 2 columns. Be sure to
          select landscape mode when printing. To adjust the margins, open the
          settings by pressing the <i class="icon-cog" /> button in the sidebar
          menu and set the center and edge margins.
          <Title>Sidebar Menu Items</Title>
        </Body>
        The following items are avilable in the sidebar menu.
        <Body />
        <Body>
          <b>Undo/Redo</b>: Undo or redo changes to the bulletin
        </Body>
        <Body>
          <b>Publish</b>: Publish changes online so others can download
        </Body>
        <Body>
          <b>Reload</b>: Reload the bulletin to load the last published version.
          Use this to start over or to download changes someone else has made.
        </Body>
        <Body>
          <b>Recent Bulletins</b>: Download a bulletin that was published within
          the past several weeks.
        </Body>
        <Body>
          <b>Print</b>: Print the bulletin. By default, the bulletin will print
          in 2 columns. Be sure to select landscape mode when printing.
        </Body>
        <Body>
          <b>Save Template</b>: Save one or more sections of the bulletin for
          later use. It's useful to save various versions of the Program section
          that are different from the normal program such as Fast and Testimony
          Meeting, Primary Program, Christmas program, etc.
        </Body>
        <Body>
          <b>Load Template</b>: Load a template that has been saved. Loading a
          template will overwrite all sections that were saved.
        </Body>
        <Body>
          <b>Help</b>: This screen
        </Body>
        <Body>
          <b>Settings</b>: Various settings for this bulletin
        </Body>
        <Body>
          <b>Logout</b>: If you are managaging multiple bulletins, you can log
          out to log in as a different user.
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
