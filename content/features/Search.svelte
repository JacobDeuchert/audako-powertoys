<script lang="ts">
  import Dialog, { Content, InitialFocus } from '@smui/dialog';
  import Textfield from '@smui/textfield';
  import List, { Item, Separator, Text } from '@smui/list';

  let searchOpen: boolean = false;
  let searchString: string = "";
  let selectedItem: number = 0;

  function inputChange(string) {
    console.log('Search', string);
  }

  $: inputChange(searchString)

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    console.log(event);
    if (event.ctrlKey && event.code === 'Space') {
      console.log('OpenDialog');
      searchOpen = true;
    }

    if (searchOpen && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      const textField = document.getElementsByClassName('search-text-field').item(0);
      
      if (textField) {
        const input = textField.getElementsByTagName('input').item(0);

        console.log(document.activeElement);
        if (document.activeElement !== input) {
          console.log('focus');
          input.focus();
        }
      }
    }
  }); 

  window.addEventListener('keyup', (event: KeyboardEvent) => {
    console.log(event);
    if (event.code === 'ArrowUp') {
      
    }

    if (event.code === 'ArrowDown') {

    }
  });

  
</script>


<Dialog class="search-dialog" bind:open="{searchOpen}">
  <Content style="padding: 12px" class="search-dialog-content">
    <Textfield class="search-text-field" use={[InitialFocus]} style="width: 100%" bind:value="{searchString}" variant="outlined" type="text" label="Search"></Textfield>

    <div style="margin-top: 20px;">
      <List class="demo-list">
        <Item><Text>Thing 1</Text></Item>
        <Separator />
        <Item><Text>Thing 2</Text></Item>
        <Item><Text>Thing 3</Text></Item>
        <Separator />
        <Item><Text>Thing 4</Text></Item>
      </List>
    </div>
  </Content>


</Dialog>


<style>
</style>