#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

typedef struct node
{
    char *value;
    struct node *next;
} node;

node *appendToList(node *list, char *newvalue );
int search(node *list , char *searchfor);

int main()
{
    node *list = malloc(sizeof(node));
    
    if(list == NULL)
    {
        printf("malloc error");
        return 1;
    }
    
    list->value = "Test";
    list->next = NULL;
    
    list = appendToList(list,"Test2");
    list = appendToList(list,"Test3");
    
    printf("Hello World %s \n", list->value);
    
    char searchfor[99];
    scanf("%s", &searchfor); 
    int result = search(list , searchfor);
    if( result == 1 )
    {
        printf("Found \n");
    }else {
        printf("Not Found \n");
    }

    return 0;
}

node *appendToList(node *list , char *newvalue)
{
    node *item = malloc(sizeof(node));
    if(item == NULL)
    {
        printf("malloc error");
        return 0;
    }
    item->value = newvalue;
    item->next = list;
    
    list = item;
    
    
    
    return list;
}

int search(node *list , char *searchfor)
{
    
    if(strlen(searchfor) == 0 )
    {
        return -2;
    }
    
    while(list != NULL)
    {
        if( strcmp(list->value, searchfor) == 0)
        {
            return 1;
        }
        list = list->next;
    }
    
    
    return 0;
}
