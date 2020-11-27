## ORM avec NestJS

## One-To-One

- One-to-One:\
    Cette relation est utilisée pour lier deux entités de type Parent Fils.\
    L'entité parent précède l'entité fils, i.e. Parent peut exister sans Fils.\
    - `@OneToOne()` est placé dans l'entité Fils.
    - `@JoinColumn()` est placé dans l'entité Fils. On dit ainsi que l'entité Fils est owner de la relation.\
    La table Fils aura le foreign key de Parent.
    
    - On peut placer @OneToOne() dans l'entité Parent, pour permettre d'avoir des informations de son fils.\
    Dans ce cas, dans `findOne({relations: ['fils']})` retournera Parent et aussi les informations de Fils.
    - `@OneToOne(type => Fils, {eager: true})` aussi retournera les informations de Fils dans Parent même si on ne spécifie pas relations.\
    **Voir Photo et PhotoMetaData**
    

## One-to-Many/Many-to-One
- One-to-Many:\
    Cette relation est utilisée pour lier une entité Parent à plusieurs entités Enfant-s.
- Many-to-One:\
    Cette relation est utilisée pour lier Plusieurs Enfant-s à une entité Parent.
    
    - `OneToMany()` est placé dans l'entité Parent
    
    - `ManyToOne()` et `JoinColumn()` sont placés dans l'entité Enfant
    **Voir User et Photo**
    
## Many-to-Many
- Many-To-Many:\
    Cette relation est utilisée pour lier plusieurs entités Parent à plusieurs entités Enfants.
    
    - `ManytoMany()` est placé dans les deux Entités
    
    - `JoinTable()` est placé dans l'entité Enfant
    **Voir Photo Album**
    

