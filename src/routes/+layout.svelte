<nav>
    <a href="/home">dashboard</a>
    <a href="/login">login</a>
    <a href="/onboarding">onboarding</a>
    <a href="/settings">settings</a>
    <a href="/notifications">notifications</a>
    <a href="/plants">plants</a>
    <a href="/plant">plant</a>
    <a href="/reminders">reminders</a>
</nav>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Press+Start+2P&display=swap" rel="stylesheet">
</svelte:head>

<style>
    nav{
        display: flex;
        justify-content: center;
        gap: 10px; 
        position: fixed;
        left: 50%;
        transform: translate(-50%, 50%);
        
    }
    :global(html, body){
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        white-space: nowrap;
        font-family: 'Press Start 2P', cursive;
    }
</style>

<slot></slot>