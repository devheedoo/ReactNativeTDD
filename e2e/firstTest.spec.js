describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should add ToDoItem', async () => {
    const text = 'a new ToDo Item';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();
    await expect(element(by.text(text).withAncestor(by.id('ToDoList')))).toBeVisible();
  });

  it('should complete ToDoItem', async () => {
    const text = 'a new ToDo Item';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();
    await element(by.id('completeButton')).multiTap(2);
    await expect(element(by.id('completed').and(by.text(text)).withAncestor(by.id('ToDoList')))).toBeVisible();
  });

  it('should delete ToDoItem', async () => {
    const text = 'a new ToDo Item';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();
    await element(by.id('deleteButton')).multiTap(2);
    await expect(element(by.id('deleted').and(by.text(text)).withAncestor(by.id('ToDoList')))).toBeNotVisible();
  });
});
