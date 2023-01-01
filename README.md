<p align="center">
  <a href="https://example.com/">
    <img src="https://via.placeholder.com/72" alt="Logo" width=72 height=72>
  </a>

<h3 align="center">Logo</h3>

  <p align="center">
    Short description
    <br>
    <a href="https://reponame/issues/new?template=bug.md">Report bug</a>
    ·
    <a href="https://reponame/issues/new?template=feature.md&labels=feature">Request feature</a>
  </p>
</p>

## Next.js 13 - Meta Messenger

> Let’s build META Messenger 2.0 with Next.js 13 (Upstash, TypeScript, Redis, Tailwind, NextAuth)

### Tutorial info

|            | `                                                                                                   |
|------------|-----------------------------------------------------------------------------------------------------|
| `title`    | **Let’s build META Messenger 2.0 with Next.js 13 (Upstash, TypeScript, Redis, Tailwind, NextAuth)** |
| `author`   | [Sonny Sangha](https://www.youtube.com/@SonnySangha)                                                |
| `link`     | [click](https://www.youtube.com/watch?v=T2jKJF4BZOY&ab_channel=SonnySangha)                         |
| `progress` | 02:40 / 3:09                                                                                        |

### Notes

* Every interactive element should be a client component,
* ```ts 
    interface Props {
      // 🔥 - amazing way for getting fn's return type! 
      providers: Awaited<ReturnType<typeof getProviders>>;
    }
    ```

### New tools I learned

* Redis
* Upstash
* optimistic update
* SWR
* Pusher (pop submodule)
* Flowbite
