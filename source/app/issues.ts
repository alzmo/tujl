export const issue081: Issue = {
  "number": "081",
  "date": "2026-11-26",
  "readingTime": "约 8 分钟",
  "windowStart": "2026-11-25T01:55:00Z",
  "windowEnd": "2026-11-26T01:55:00Z",
  "heading": "聊天界面把项目收进文件夹工作区，DeepMind 用技能把质谱收到结构，训练库按教师蒸馏并教模型读钟，编程助手为 GPT-6.2 换上系统提示",
  "noteTitle": "三则用 GitHub 的 published_at 计时，质谱一条用文章的 datePublished。",
  "noteZh": "本期按北京时间11月25日09:55至11月26日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。080期已经覆盖到25日09:55，该时刻及之前的条目留在窗外，26日09:55之后的条目也不计入。只收录严格晚于 2026-11-25T01:55:00Z、且不晚于 2026-11-26T01:55:00Z 的条目。Open WebUI、TRL 与 OpenCode 都以 GitHub 发布记录的 published_at 为准，分别为 2026-11-25T09:37:55Z、2026-11-25T17:28:02Z 与 2026-11-26T00:59:05Z。三条记录的 created_at 分别为 2026-11-25T09:37:38Z、2026-11-25T17:02:15Z 与 2026-11-25T23:52:48Z，都落在窗口内，本期仍以 published_at 计时。这三则都没有被 GitHub 标成预发布。079期已经使用 OpenCode v2.4.0 的网址。本期使用 v2.4.2，不重述 079期已经写过的内置桌面浏览器。Mass Spec Skills 这一条的来源是 Google DeepMind 博客《From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity》。页面 JSON-LD 的 datePublished 为 2026-11-25T17:00:00+00:00。同一页的 article:published_time 也是 2026-11-25T17:00:00+00:00。可见日期是 November 25, 2026，没有钟点。这次抓取没有另见 meta name=\"published_time\"。本期以 datePublished 计时，不把没有钟点的可见日期当作发布时间。同一页的 dateModified 为 2026-11-25T17:09:07.120692+00:00，也在窗口内，本条仍以 datePublished 计时。Unsloth v0.1.925-beta 的 published_at 为 2026-11-25T14:13:35Z，created_at 为 2026-11-25T14:00:39Z，都在窗口内。GitHub 没有把它标成预发布，尽管标签名带有 beta。080期已经使用 v0.1.924-beta 的网址。把两份说明对齐之后，正文只多出要点里的第一行：Bug fixes for finetuning Inkling 2 Mini + other bugs, MXC sandbox upgraded。其余句子与 v0.1.924-beta 相同，包括 Full Changelog 仍指向比较范围 v0.1.923-beta...v0.1.924-beta。本期不单列 v0.1.925-beta，不重述 080期已经写过的倍数和显存数字，也不把该网址列为来源。pydantic-ai v2.75.0 的 published_at 为 2026-11-25T18:21:00Z，created_at 为 2026-11-25T17:13:11Z，GitHub 没有把它标成预发布。比较范围是 v2.74.0...v2.75.0。v2.74.0 的 published_at 为 2026-11-24T23:22:14Z，created_at 为 2026-11-24T22:59:34Z，早于本窗口起点。v2.75.0 的兼容说明写明：低于 operator 权限的工作区文件不再进入 RepoContext、Skills 与 Memory 的 instructions；空的或无法读取的模型回复改为抛出 ModelEmptyResponseError 与 ModelInvalidResponseError，于是默认的 FallbackModel 与 ModelFallback 会改走回退；经 Gemini API 对 gemini-2.5-flash 设置 thinking=False 时，改为发送 thinking_budget=128 而不是 0，说明把这写在改路由到 gemini-3.5-flash-lite 之前，并写出日期 2026-12-01。本期已有四则，不单列，也不把该网址列为来源。goose 的发布页在 aaif-goose/goose。v1.61.0 的 published_at 为 2026-11-25T03:31:49Z，created_at 为 2026-11-25T00:59:06Z，早于本窗口起点，published_at 在窗口内。GitHub 没有把它标成预发布。功能里写明把 Gemini 4 Neon 加入模型目录，可导入 MCP 的 server.json，并向 Gemini 4 及更新模型发送思考力度，包括 xhigh。同日更晚的 v1.61.1，published_at 为 2026-11-26T00:09:20Z，created_at 为 2026-11-25T23:12:59Z，也没有被标成预发布。它的说明是导入会话时丢掉工具批准状态，以免加载会话就自动执行工具。本期不单列这两个标签，也不把网址列为来源。Zed v1.30.2 的 published_at 为 2026-11-25T17:43:29Z，created_at 为 2026-11-25T15:48:16Z，GitHub 没有把它标成预发布。开篇写明本周包括降低全应用的 GPU 用量、在 Git 面板里为提交说明选择模型，以及支持 GPT-6.1 Terra。同日的 v1.31.0-pre，published_at 为 2026-11-25T18:02:11Z，GitHub 把它标成预发布。本期不单列。OpenHands v1.46.0 的 published_at 为 2026-11-25T14:13:07Z，created_at 为 2026-11-25T13:53:11Z，GitHub 没有把它标成预发布。功能写明列出并取消分享给团队组织的对话、加上反馈按钮，以及给自动化加一个 Git Sync 开关。发布页在 OpenHands/OpenHands。本期不单列。MLX v0.32.5 的 published_at 为 2026-11-25T07:24:28Z，created_at 为 2026-11-24T23:18:53Z，早于本窗口起点。GitHub 没有把它标成预发布。说明里有滑动窗口注意力和多处内核修复。本期不单列。node-llama-cpp v3.22.4 的 published_at 为 2026-11-25T15:38:36Z，created_at 为 2026-11-25T12:43:17Z，GitHub 没有把它标成预发布。说明是嵌入上下文的批量、语法字符串和 BOS 等修复，并写明随 llama.cpp 的 v1.0.0 一起交付。本期不单列，也不把那个 v1.0.0 的网址列为来源。claude-agent-sdk-python v0.2.189 的 published_at 为 2026-11-25T02:22:26Z，created_at 为 2026-11-25T02:22:22Z。说明只有安装行。本期不单列。Qwen Code v1.0.0-preview.2 的 published_at 为 2026-11-25T06:37:49Z，created_at 为 2026-11-25T06:21:32Z，GitHub 把它标成预发布。要点写明把 Qwen4-Max 加入订阅目录，上下文窗口为 1M，并接受图像和视频输入。本期不单列。LangChain 这次抓取里落在窗口内的正式标签有 langchain-core==1.8.5，published_at 为 2026-11-25T21:52:39Z，created_at 为 2026-11-25T21:42:31Z，说明写明在后续流式片段上复用提供方的消息 id；以及 langchain-anthropic==1.7.13，published_at 为 2026-11-25T21:41:59Z，created_at 为 2026-11-25T21:38:33Z，说明写明接受自定义的 HTTP 与 SDK 客户端。LangGraph 的 cli==0.4.44，published_at 为 2026-11-25T20:52:34Z，created_at 为 2026-11-25T20:48:14Z。三则都没有被标成预发布。本期不单列。本次抓取看到的、落在窗口内的 llama.cpp 标签都被标成预发布，published_at 最晚的是 b12751，为 2026-11-25T23:29:28Z。同一次抓取还有 b12701（2026-11-25T02:24:02Z）、b12703（2026-11-25T02:41:40Z）、b12704（2026-11-25T02:53:12Z）、b12706（2026-11-25T03:07:24Z）、b12707（2026-11-25T03:21:51Z）、b12708（2026-11-25T03:35:55Z）、b12709（2026-11-25T03:50:38Z）、b12711（2026-11-25T04:04:20Z）、b12716（2026-11-25T04:27:39Z）、b12719（2026-11-25T05:59:50Z）、b12720（2026-11-25T06:44:26Z）、b12721（2026-11-25T07:48:02Z）、b12722（2026-11-25T10:37:37Z）、b12723（2026-11-25T14:00:27Z）、b12726（2026-11-25T14:42:12Z）、b12728（2026-11-25T15:18:35Z）、b12732（2026-11-25T21:51:00Z）、b12734（2026-11-25T22:14:54Z）与 b12738（2026-11-25T22:35:44Z）。b12701 写的是 Inkling 2 Mini 的 mix() 加权和，b12720 写的是 Inkling 2 DSpark，b12723 写的是 inkling2 图里 mix() 与 control() 的算子更少。其中 published_at 不晚于 b12722 的 13 个标签，created_at 早于本窗口起点；b12723 及更晚的 7 个，created_at 也在窗口内。080期的 Ollama 说明写的是升到 b12651，不是这些预发布标签。本期不单列。Hugging Face 博客《Where scientists draw the line on AI agents》的 JSON-LD datePublished 为 2026-11-25T18:52:55.409Z，也在窗口内。署名是 Kyle Wiggers。文章写明访谈了 17 位科学家，并写明这项研究是探索性的，不是代表性调查，也不是对具体代理的实证评测。本期不单列，不转述访谈，也不把该网址列为来源。Ollama 最新返回的标签仍是 v0.40.18，published_at 为 2026-11-24T04:18:13Z，早于起点，080期已经使用该网址。Transformers 最新返回的标签仍是 v5.24.1，published_at 为 2026-11-24T16:13:08Z，早于起点，080期已经使用该网址。Gemini CLI 最新返回的正式标签仍是 v0.71.1，published_at 为 2026-11-24T03:50:24Z，早于起点。LiteLLM 这次抓取里 published_at 最晚的是 v1.111.0，为 2026-11-25T01:42:50Z，早于本窗口起点，并落在 080期窗口内；080期在编者说明里提到它，但没有把网址列为来源。Claude Code 最新返回的标签仍是 v2.1.332，published_at 为 2026-11-25T01:32:14Z，早于起点；080期同样只在说明里提到它。速度、准确率、token 和显存说法均来自各原文，本刊未独立复跑，也没有安装 Mass Spec Skills 或调用 Antigravity。我们的编辑判断是：把 Open WebUI 说明里 34 倍、0.32 秒、10.9 秒以及 533 MB 到 2 KB 这些数字，当作该说明里那次 PostgreSQL 测试的说法；把 DeepMind 正文里大约 97% 的尝试、低于 4% 的准确率，以及 Flash、Argon、Carbon 上的 token 降幅，和同一页图注里的三次尝试、一小时时限、排除瞬时基础设施与配额错误分开，并按 datePublished 计时，不把只有日期的可见行当作钟点；把 TRL 表格里 SDPA 从 2.06 秒到 1.02 秒，和 flash attention 2 从 0.828 秒到 0.832 秒分开，不把节标题里的 2 倍套到后一行上；把 OpenCode v2.4.2 写明的 GPT-6.2 系统提示和大约 700 token，与 079期已经记录的内置浏览器分开；再把 Unsloth v0.1.925-beta 多出来的那一行修复，和仍指向 v0.1.924-beta 的比较链接、以及 080期已经记录的倍数分开，放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 25, 09:55 to November 26, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 080 already covered through 09:55 on November 25, so items at or before that moment stay outside this window, as do items after 09:55 on November 26. Items must be strictly after 2026-11-25T01:55:00Z and at or before 2026-11-26T01:55:00Z. The Open WebUI, TRL and OpenCode items use published_at from the GitHub release records: 2026-11-25T09:37:55Z, 2026-11-25T17:28:02Z and 2026-11-26T00:59:05Z. created_at on those three records is 2026-11-25T09:37:38Z, 2026-11-25T17:02:15Z and 2026-11-25T23:52:48Z. All three fall inside the window, and this issue still times each of those releases by published_at. GitHub does not mark any of those three as a pre-release. Issue 079 already used the OpenCode v2.4.0 URL. This issue uses v2.4.2 and does not restate the built-in desktop browser already recorded in issue 079. The Mass Spec Skills item uses the Google DeepMind blog post From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity. The page's JSON-LD datePublished is 2026-11-25T17:00:00+00:00. article:published_time on the same page is also 2026-11-25T17:00:00+00:00. The visible dateline is November 25, 2026, with no clock time. This fetch did not find a separate meta name=\"published_time\". This issue times the post by datePublished and does not treat the date-only visible dateline as the publication instant. dateModified on the same page is 2026-11-25T17:09:07.120692+00:00, also inside the window; this item still times the post by datePublished. Unsloth v0.1.925-beta has published_at 2026-11-25T14:13:35Z and created_at 2026-11-25T14:00:39Z, both inside the window. GitHub does not mark it as a pre-release, even though the tag name includes beta. Issue 080 already used the v0.1.924-beta URL. Aligning the two note bodies, the only added line is the first highlight: Bug fixes for finetuning Inkling 2 Mini + other bugs, MXC sandbox upgraded. The remaining sentences match v0.1.924-beta, including a Full Changelog link that still points at the compare range v0.1.923-beta...v0.1.924-beta. This issue does not give v0.1.925-beta an item, does not restate the speed and VRAM figures already recorded in issue 080, and does not list that URL as a source. pydantic-ai v2.75.0 has published_at 2026-11-25T18:21:00Z and created_at 2026-11-25T17:13:11Z, and GitHub does not mark it as a pre-release. The compare range is v2.74.0...v2.75.0. v2.74.0 has published_at 2026-11-24T23:22:14Z and created_at 2026-11-24T22:59:34Z, before this window's start. The v2.75.0 compatibility notes say workspace files below operator authority no longer reach the instructions in RepoContext, Skills and Memory; empty or unreadable model responses now raise ModelEmptyResponseError and ModelInvalidResponseError, so FallbackModel and ModelFallback fall back on them with the default fallback_on; and thinking=False on gemini-2.5-flash through the Gemini API now sends thinking_budget=128 instead of 0, which the notes place ahead of a reroute to gemini-3.5-flash-lite and date as 2026-12-01. This issue already has four items, does not give v2.75.0 an item, and does not list that URL as a source. The goose release pages are in aaif-goose/goose. v1.61.0 has published_at 2026-11-25T03:31:49Z and created_at 2026-11-25T00:59:06Z, before this window's start, with published_at inside the window. GitHub does not mark it as a pre-release. Its features include adding Gemini 4 Neon to the model catalog, importing MCP server.json, and sending thinking levels to Gemini 4 and later, including xhigh. The later same-day tag v1.61.1 has published_at 2026-11-26T00:09:20Z and created_at 2026-11-25T23:12:59Z, and GitHub does not mark it as a pre-release. Its notes drop tool-approval state from imported sessions so loading a session does not run tools automatically. This issue does not give either tag an item and does not list those URLs as sources. Zed v1.30.2 has published_at 2026-11-25T17:43:29Z and created_at 2026-11-25T15:48:16Z, and GitHub does not mark it as a pre-release. The opening says this week's release includes reduced GPU usage across the app, a model picker for commit messages in the Git panel, and support for GPT-6.1 Terra. The same-day tag v1.31.0-pre has published_at 2026-11-25T18:02:11Z, and GitHub marks it as a pre-release. This issue does not give them an item. OpenHands v1.46.0 has published_at 2026-11-25T14:13:07Z and created_at 2026-11-25T13:53:11Z, and GitHub does not mark it as a pre-release. Its features say the app can list and unshare conversations shared with a team org, add a feedback button, and add a Git Sync switch for automations. The release page is in OpenHands/OpenHands. This issue does not give it an item. MLX v0.32.5 has published_at 2026-11-25T07:24:28Z and created_at 2026-11-24T23:18:53Z, before this window's start. GitHub does not mark it as a pre-release. The notes include sliding-window attention and a number of kernel fixes. This issue does not give it an item. node-llama-cpp v3.22.4 has published_at 2026-11-25T15:38:36Z and created_at 2026-11-25T12:43:17Z, and GitHub does not mark it as a pre-release. Its notes are fixes for embedding batch size, grammar string literals and the BOS token, and they say the package ships with llama.cpp v1.0.0. This issue does not give it an item and does not list that v1.0.0 URL as a source. claude-agent-sdk-python v0.2.189 has published_at 2026-11-25T02:22:26Z and created_at 2026-11-25T02:22:22Z. Its notes are only an install line. This issue does not give it an item. Qwen Code v1.0.0-preview.2 has published_at 2026-11-25T06:37:49Z and created_at 2026-11-25T06:21:32Z, and GitHub marks it as a pre-release. The highlights say Qwen4-Max is added to the subscription catalog, with a 1M context window and image and video input. This issue does not give it an item. The regular LangChain tags this fetch saw inside the window are langchain-core==1.8.5, published_at 2026-11-25T21:52:39Z, created_at 2026-11-25T21:42:31Z, whose notes say a provider message id is reused on later stream chunks; and langchain-anthropic==1.7.13, published_at 2026-11-25T21:41:59Z, created_at 2026-11-25T21:38:33Z, whose notes say custom HTTP and SDK clients are accepted. LangGraph cli==0.4.44 has published_at 2026-11-25T20:52:34Z and created_at 2026-11-25T20:48:14Z. GitHub does not mark any of those three as a pre-release. This issue does not give them an item. The llama.cpp tags this fetch saw inside the window are marked as pre-releases. The latest published_at among them is b12751 at 2026-11-25T23:29:28Z. The same fetch also returned b12701 (2026-11-25T02:24:02Z), b12703 (2026-11-25T02:41:40Z), b12704 (2026-11-25T02:53:12Z), b12706 (2026-11-25T03:07:24Z), b12707 (2026-11-25T03:21:51Z), b12708 (2026-11-25T03:35:55Z), b12709 (2026-11-25T03:50:38Z), b12711 (2026-11-25T04:04:20Z), b12716 (2026-11-25T04:27:39Z), b12719 (2026-11-25T05:59:50Z), b12720 (2026-11-25T06:44:26Z), b12721 (2026-11-25T07:48:02Z), b12722 (2026-11-25T10:37:37Z), b12723 (2026-11-25T14:00:27Z), b12726 (2026-11-25T14:42:12Z), b12728 (2026-11-25T15:18:35Z), b12732 (2026-11-25T21:51:00Z), b12734 (2026-11-25T22:14:54Z) and b12738 (2026-11-25T22:35:44Z). b12701 is the Inkling 2 Mini mix() weighted sum, b12720 is Inkling 2 DSpark, and b12723 is fewer ops in mix() and control() in the inkling2 graph. On the 13 tags whose published_at is at or before b12722, created_at is before this window's start. On the 7 tags from b12723 onward, created_at is also inside the window. The Ollama notes in issue 080 say the bump is to b12651, which is not one of those pre-release tags. This issue does not give them an item. The Hugging Face post Where scientists draw the line on AI agents has JSON-LD datePublished 2026-11-25T18:52:55.409Z, also inside the window. The byline is Kyle Wiggers. The post says it interviewed 17 scientists, and that the study is exploratory, not a representative survey and not an empirical evaluation of specific agents. This issue does not give it an item, does not restate the interviews, and does not list that URL as a source. The newest Ollama tag returned is still v0.40.18, with published_at 2026-11-24T04:18:13Z, before the start, and issue 080 already used that URL. The newest Transformers tag returned is still v5.24.1, with published_at 2026-11-24T16:13:08Z, before the start, and issue 080 already used that URL. The newest regular Gemini CLI tag returned is still v0.71.1, with published_at 2026-11-24T03:50:24Z, before the start. The latest LiteLLM published_at this fetch saw is v1.111.0 at 2026-11-25T01:42:50Z, before this window's start and inside issue 080's window. Issue 080 mentioned it in the editor's note without listing that URL as a source. The newest Claude Code tag returned is still v2.1.332, with published_at 2026-11-25T01:32:14Z, before the start. Issue 080 likewise mentioned it only in the note. Speed, accuracy, token and memory claims come from the cited pages. TUJL did not independently rerun them and did not install Mass Spec Skills or call Antigravity. Our editorial view: keep the 34×, the 0.32 seconds, the 10.9 seconds and the drop from 533 MB to 2 KB in the Open WebUI notes as claims from that note's PostgreSQL test; keep the post's roughly 97% of attempts, the accuracy below 4%, and the token cuts on Flash, Argon and Carbon apart from the figure caption's three attempts, one-hour limit, and exclusion of transient infrastructure and quota errors, and time the post by datePublished rather than the date-only visible line; keep the TRL table's SDPA row, 2.06 seconds to 1.02 seconds, apart from the flash attention 2 row, 0.828 seconds to 0.832 seconds, and do not apply the section heading's 2× to that second row; keep the GPT-6.2 system prompt and the about 700 tokens stated in OpenCode v2.4.2 apart from the built-in browser already recorded in issue 079; and keep the one added fix line on Unsloth v0.1.925-beta apart from the compare link that still names v0.1.924-beta and from the multipliers already recorded in issue 080 — then check those distinctions against your own work.",
  "stories": [
    {
      "index": "01",
      "label": "聊天界面 / Chat interface",
      "source": "Open WebUI · GitHub Release",
      "date": "2026.11.25 17:37:55 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-25T09:37:55Z",
      "zhTitle": "Open WebUI v0.13.5 把项目收进文件夹工作区，并写明长聊天发送快 34 倍",
      "enTitle": "Open WebUI v0.13.5 adds folder workspaces and says a long-chat send is 34× faster",
      "href": "https://github.com/open-webui/open-webui/releases/tag/v0.13.5",
      "zh": "Open WebUI v0.13.5 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-25T09:37:55Z。同一记录的 created_at 为 2026-11-25T09:37:38Z，也在窗口内，本条仍以 published_at 计时。新增一节写明文件夹工作区：可以在终端里跑项目的测试，在浏览器里试应用，聊天仍开在旁边；为这个文件夹选定一次计算机和项目目录；即便文件夹是共享的，每个人仍回到自己的标签和布局。说明写明，若用过独立的 Open WebUI Computer（cptr）应用，那套流程现在做进了 Open WebUI（#34804、#34805、#34800、#34803）。项目说明与技能一节写明：在 AGENTS.md 或 CLAUDE.md 里写一次项目怎么运转，该项目文件夹里的每个新聊天都会读这些说明。用 Open Terminal 0.18.0 或更新版本连上项目机器后，助手还可以遵循称为 skills 的可复用项目说明，在终端里跑检查，并在浏览器标签里查看结果。长聊天性能一节写明，在他们 130 MB 的 PostgreSQL 测试聊天里，发送一条消息快了 34 倍：服务器用 0.32 秒接受，原先是 10.9 秒，因为现在只保存有变化的消息；每条消息的数据库写入从 533 MB 降到 2 KB（#34689、#34671）。自动选择模型一节写明，可以在聊天的模型选择器里放一个路由器，把编程问题发给一个模型，把写作请求发给另一个。管理员用文本模式，或描述每类问题该由哪个模型处理。若没有匹配，路由器使用列表上的第一个模型，或随机挑一个。说明还写：引用可以放在聊天旁边，悬停来源编号能看摘录，点击后在答案旁边读依据；若 Codex 或 Claude Code 开始改错文件，可以在同一次聊天里发送文字更正，编码代理能在作业进行时处理这条纯文字的后续消息，带附件的后续消息则等到下一轮，以便指令和文件一起送达。可以从聊天经 SSH 使用远程计算机上的文件和命令行。说明写明这需要 Open Terminal 0.17.21 或更新版本，并支持 x86-64 或 ARM64 的 Linux，以及 Apple 芯片的 Mac。上述 34 倍、0.32 秒、10.9 秒和 533 MB 到 2 KB 来自这一标签的发布说明，本刊未复跑。说明在这些条目之后还有更多新增、修复和变更。本条不把其余条目改写成另一份清单。GitHub published_at 为 2026-11-25T09:37:55Z。",
      "en": "Open WebUI v0.13.5 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-25T09:37:55Z. created_at on the same record is 2026-11-25T09:37:38Z, also inside the window; this item still times the release by published_at. The added section on folder workspaces says you can run a project's tests in a terminal and try the app in a browser while the chat stays open beside them. The computer and project directory are chosen once for the folder. Even in a shared folder, each person returns to their own tabs and layout. The notes say that if you used the standalone Open WebUI Computer (cptr) app, that workflow is now built into Open WebUI (#34804, #34805, #34800, #34803). The project-instructions section says you tell the assistant how the project works once in an AGENTS.md or CLAUDE.md file, and every new chat in that project folder reads those instructions. With the project machine connected through Open Terminal 0.18.0 or later, the assistant can also follow reusable project instructions called skills, run checks in the terminal, and inspect the result in the browser tab. The long-chat section says sending a message was 34× faster in their 130 MB PostgreSQL test chat. The server accepted it in 0.32 seconds, down from 10.9, because it now saves just the messages that changed. Database writes fell from 533 MB to 2 KB per message (#34689, #34671). The automatic-model section says one router in the chat's model picker can send coding questions to one model and writing requests to another. Admins choose text patterns or describe the kind of question each model should handle. If nothing matches, the router uses the first model on its list or picks one at random. The notes also say citations can sit beside the chat: hovering a source number shows an excerpt, and clicking it reads the evidence beside the answer. If Codex or Claude Code starts editing the wrong file, a text correction can be sent in the same chat. The coding agent can act on a text follow-up while the job is running. A follow-up with attachments waits for the next turn so the agent receives the instruction and the files together. A remote computer can be used over SSH from chat, for its files and command-line tools. The notes say this requires Open Terminal 0.17.21 or later, and supports Linux on x86-64 or ARM64 and Apple silicon Macs. The 34×, the 0.32 seconds, the 10.9 seconds and the drop from 533 MB to 2 KB come from this tag's release notes. TUJL did not rerun them. The notes continue with more additions, fixes and changes after these items. This item does not turn the rest into a second list. GitHub published_at is 2026-11-25T09:37:55Z."
    },
    {
      "index": "02",
      "label": "质谱 / Mass spectrometry",
      "source": "Google DeepMind · Blog",
      "date": "2026.11.26 01:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-25T17:00:00Z",
      "zhTitle": "DeepMind 发布 Mass Spec Skills，把串联质谱收到候选分子结构",
      "enTitle": "DeepMind releases Mass Spec Skills to take tandem mass spectra to candidate structures",
      "href": "https://deepmind.google/blog/interpreting-mass-spectra-with-google-antigravity/",
      "zh": "Google DeepMind 博客《From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity》宣布，当天在 Google Antigravity 上提供 Mass Spec Skills。页面标题是 Identifying Molecules with Mass Spec Skills for Antigravity。署名依次是 Robert Brunck、Stefan Ganscha、Swaroop Guntupalli、Dariusz Lasecki、Gabriella Marfani、Jack Mason、Hussain Masoom、Rose Mirshafian、Eliseo Papa 与 Zoi Tsangalidou。计时以该页 JSON-LD 的 datePublished 为准，为 2026-11-25T17:00:00+00:00。同一页的 article:published_time 也是这个时刻。可见日期是 November 25, 2026，没有钟点，本条不以可见日期计时。文章写明，这些技能把 Gemini 的化学推理和既有的质谱工具、对公共化学数据库的查询放在一起，由 Antigravity 运行技能、合并结果，并铺开证据给化学家核对。文章写，已经收录在数据库里的分子会识别得更快；尚未收录的分子则缩小分子式，以及碎片所支持的结构部分。文章给出的一次端到端示例写成分子式 C20H21ClN6O，并在 PubChem 里为这个分子式排列 845 个异构体。文章写，若干高分候选都能解释预处理后 19 个峰里的 14 个，合计碎片强度的 97.7%，因此只按谱覆盖率不能把它们分开，代理还去核对断裂途径。评测一节写明，样本是 MoNA 里 Enamine REAL MS/MS 集合中的 100 个化合物，结构也在 PubChem 里，并滤掉几乎没有碎裂的记录。三种设置是：没有网络也没有技能、只有用户许可的网络，以及同样的网络再加上 Mass Spec Skills。三个模型是较轻的 Gemini 3.8 Flash，以及 Gemini 4 Argon 与 Gemini 4 Carbon。文章写，没有网络也没有技能时，三个模型的准确率都低于 4%。只给网络时，前沿模型会漏掉四分之一到三分之一的谱，较轻的模型漏掉四分之三以上。加上技能后，三个模型都在大约 97% 的尝试里识别并核对到同一个分子，较轻的模型与前沿模型的准确率相当。token 一节写明，技能把每次尝试生成的 token 降下来：Flash 上将近四倍，Argon 上大约一半，Carbon 上将近五分之一。图 5 的图注写明，每个谱尝试三次；超过一小时墙钟预算的尝试记为失败；瞬时的基础设施和配额错误被排除。这些句子是文章和图注中的说法，本刊没有重跑这 100 个化合物。文章还写，镜像分子和一些相近的异构体无法只靠一张 LC-MS/MS 谱区分，数据库里没有的新分子也不能由 Antigravity 自行确认结构。文章写 Mass Spec Skills 当天已可在 Google Antigravity 使用，并写申请已经开放：在资格、容量和筛选的前提下，滚动接收 10,000 名科学家，提供 6 个月最高用量档。文中另有校外研究者的引语。本条不转述那些引语。datePublished 为 2026-11-25T17:00:00+00:00。",
      "en": "The Google DeepMind blog post From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity says Mass Spec Skills are available on Google Antigravity that day. The page title is Identifying Molecules with Mass Spec Skills for Antigravity. The byline is Robert Brunck, Stefan Ganscha, Swaroop Guntupalli, Dariusz Lasecki, Gabriella Marfani, Jack Mason, Hussain Masoom, Rose Mirshafian, Eliseo Papa and Zoi Tsangalidou. This item times the post by the page's JSON-LD datePublished, 2026-11-25T17:00:00+00:00. article:published_time on the same page is the same instant. The visible dateline is November 25, 2026, with no clock time, and this item does not time the post by that line. The post says the skills pair Gemini's chemical reasoning with established mass spectrometry tools and queries of public chemical databases. Antigravity runs the skills, combines their results, and lays out the evidence for a chemist to review. It says identification is much faster for molecules already catalogued in a database. For molecules that are not, the agent narrows the formula and the parts of the structure supported by the fragments. One end-to-end example in the post is written as the formula C20H21ClN6O, and the post says the agent ranked 845 PubChem isomers of that formula. It says several high-scoring candidates each accounted for 14 of 19 preprocessed peaks, 97.7% of summed fragment intensity, so spectral coverage alone did not separate them, and the agent also checked fragmentation pathways. The evaluation section says the sample is 100 compounds from the Enamine REAL MS/MS collection in MoNA, with structures also in PubChem, after filtering out recordings that barely fragmented. The three setups are no internet and no skills, user-permitted internet only, and that same internet access plus the Mass Spec Skills. The three models are the lightweight Gemini 3.8 Flash, and Gemini 4 Argon and Gemini 4 Carbon. The post says that with no internet and no skills, accuracy stayed below 4% on all three models. With internet only, the frontier models missed a quarter to a third of the spectra, and the lightweight model missed more than three-quarters. With the skills added, all three models identified and verified the exact molecule in around 97% of attempts, and the lightweight model matched the frontier models' accuracy. The token section says the skills cut generated tokens per attempt: by nearly four times on Flash, by about half on Argon, and by nearly a fifth on Carbon. The caption of Figure 5 says there were three attempts per spectrum, attempts past a one-hour wall-clock budget were scored as failures, and transient infrastructure and quota errors were excluded. Those sentences are the post's and the caption's claims. TUJL did not rerun the 100 compounds. The post also says mirror-image molecules and some close isomers cannot be told apart from one LC-MS/MS spectrum, and a new molecule that is not in a database cannot be confirmed by Antigravity on its own. It says Mass Spec Skills are available on Google Antigravity that day, and that applications are open to onboard 10,000 scientists, on a rolling basis, to the highest usage tier free for 6 months, subject to eligibility, capacity and selection. The post also quotes researchers outside the byline. This item does not restate those quotes. datePublished is 2026-11-25T17:00:00+00:00."
    },
    {
      "index": "03",
      "label": "训练库 / Training library",
      "source": "TRL · GitHub Release",
      "date": "2026.11.26 01:28:02 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-25T17:28:02Z",
      "zhTitle": "TRL v1.19.0 按 teacher_id 选教师，并写明读钟例从 0% 到 87.0%",
      "enTitle": "TRL v1.19.0 picks a teacher by teacher_id and says a clock example goes from 0% to 87.0%",
      "href": "https://github.com/huggingface/trl/releases/tag/v1.19.0",
      "zh": "TRL v1.19.0 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-25T17:28:02Z。同一记录的 created_at 为 2026-11-25T17:02:15Z，也在窗口内，本条仍以 published_at 计时。比较范围是 v1.18.0...v1.19.0。功能一节写明，DistillationTrainer 接受一个教师字典，每条样本的 teacher_id 列决定由哪一位教师给这次完成打分，并称这是 MOPD 的融合阶段。它也接受 environment_factory，约定与 GRPOTrainer 相同，因此可以对照有状态的环境蒸馏代理。Inkling 2 Mini 一节写明支持 thinkingmachines/Inkling-2-Mini，并有一个教它读模拟时钟的示例。说明写，在一张 H100 上做 LoRA SFT，53 分钟把它从 0% 提高到留出时钟里 87.0% 能读到秒。这一节写明需要 transformers 不低于 5.24.0。AsyncGRPO 一节写明，在 Qwen3-1.7B 的数学 rollout 上（4 张 B300），规划和打包从每次 18 秒降到 1 秒，训练 token 每秒增加 28%，批次逐位相同。同一节还写 Nemotron-H 的树状打包现在覆盖 Mamba2 层，点名 Nemotron-H、Granite-4.0-H 与 Bamba。打包的 SFT 一节标题写成使用 SDPA 时快 2 倍。表格把 packing_strategy 为 bfd 时的每步秒数分成三行：H100 上 Qwen3-1.7B 配 SDPA，从 v1.18 的 2.06 到 v1.19 的 1.02；同一模型配 flash attention 2，从 0.828 到 0.832；Trainium2 上 Qwen3-0.6B 的编译运行，从崩溃到 3.2。本条按表格并列这三行，不把节标题里的 2 倍套到 flash attention 那一行上。说明还写，SFTTrainer 会在聊天模板的回合结束 token 没有被列为停止 token 时，把它补进 generation_config.eos_token_id；并写已在下载量最高的 3000 个 Hub 仓库里，核对了 348 个匹配的检查点。要求一节写明支持 vLLM 0.34.x，范围写成 vllm 不低于 0.23.0、低于 0.35.0。文档里的 vllm serve 命令现在传入 --gpu-memory-utilization 0.9，因为 0.34 把新的默认值改成 1.0，第一次同步权重时会耗尽显存。修复一节写明，为 vLLM 权重同步把 LoRA 适配器在原处之外合并；服务器模式下 Qwen2.5-0.5B 的对数概率差距从 0.19 到 0.24 降到 0.02 到 0.04。说明还列出一个 s3 多智能体聚合示例，留出团队成功率从 4.7% 到 60.9%。上述百分比、秒数和 token 吞吐来自这一标签的发布说明，本刊未复跑。说明其余部分还有更多聊天模板、修复，以及 CI 用的小型模型。本条不把那些清单改写成另一份。GitHub published_at 为 2026-11-25T17:28:02Z。",
      "en": "TRL v1.19.0 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-25T17:28:02Z. created_at on the same record is 2026-11-25T17:02:15Z, also inside the window; this item still times the release by published_at. The compare range is v1.18.0...v1.19.0. The features section says DistillationTrainer takes a dict of teachers, and each example's teacher_id column picks the teacher that scores that completion. The notes call this the fusion stage of MOPD. It also takes environment_factory, with the same contract as GRPOTrainer, so agents can be distilled against stateful environments. The Inkling 2 Mini section says thinkingmachines/Inkling-2-Mini is supported, with an example that teaches it to read analog clocks. The notes say LoRA SFT on one H100 in 53 minutes takes it from 0% to 87.0% of held-out clocks read to the second. That section says it needs transformers at or above 5.24.0. The AsyncGRPO section says that on Qwen3-1.7B math rollouts, on 4×B300, planning plus packing goes from 18 seconds to 1 second per pass, with 28% more trained tokens per second, and bit-identical batches. The same section says Nemotron-H tree packing now covers Mamba2 layers, naming Nemotron-H, Granite-4.0-H and Bamba. The packed-SFT section is titled 2x faster with SDPA. Its table splits seconds per step, with packing_strategy set to bfd, into three rows: on an H100, Qwen3-1.7B with SDPA goes from 2.06 in v1.18 to 1.02 in v1.19; the same model with flash attention 2 goes from 0.828 to 0.832; and a compiled run of Qwen3-0.6B on Trainium2 goes from a crash to 3.2. This item keeps those three rows side by side and does not apply the section title's 2x to the flash-attention row. The notes also say SFTTrainer adds a chat template's end-of-turn token to generation_config.eos_token_id when that token is not already listed as a stop token, and that this was checked on the 348 matching checkpoints among the 3000 most-downloaded Hub repos. The requirements section says vLLM 0.34.x is supported, with the range written as vllm at or above 0.23.0 and below 0.35.0. Documented vllm serve commands now pass --gpu-memory-utilization 0.9, because 0.34's new default of 1.0 runs out of memory on the first weight sync. A fix says LoRA adapters are merged out of place for the vLLM weight sync, and that the server-mode log-prob gap on Qwen2.5-0.5B drops from 0.19–0.24 to 0.02–0.04. The notes also list an s3 multi-agent aggregation example, with held-out team success from 4.7% to 60.9%. The percentages, seconds and token throughput above come from this tag's release notes. TUJL did not rerun them. The rest of the notes list more chat templates, fixes, and tiny models used in CI. This item does not turn those lists into a second inventory. GitHub published_at is 2026-11-25T17:28:02Z."
    },
    {
      "index": "04",
      "label": "编程助手 / Coding agent",
      "source": "OpenCode · GitHub Release",
      "date": "2026.11.26 08:59:05 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-26T00:59:05Z",
      "zhTitle": "OpenCode v2.4.2 为 GPT-6.2 换上系统提示，并把始终允许收窄到该站点",
      "enTitle": "OpenCode v2.4.2 adds a GPT-6.2 system prompt and limits always-allow to that site",
      "href": "https://github.com/anomalyco/opencode/releases/tag/v2.4.2",
      "zh": "OpenCode v2.4.2 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-26T00:59:05Z。同一记录的 created_at 为 2026-11-25T23:52:48Z，也在窗口内，本条仍以 published_at 计时。079期已经使用 v2.4.0 的网址。本条记录 v2.4.2，不重述 079期已经写过的内置桌面浏览器，也不把 v2.4.1 的说明折进来。要点写明：GPT-6.2 Sol 与 Astra，以及名为 gpt-latest 的别名，使用一份为 GPT-6.2 写的系统提示（#66297）。接上 OpenCode 之后，模型选择器把 OpenCode Go 列在第一位（#66363）。若输入框是空的，在模型还没有写出内容或调用工具之前用 Esc 停掉回复，会撤下你的上一条消息并放回输入框，图像也算在内，便于改完再发（#65505）。升级说明写明：对一次网页抓取选择始终允许，现在只允许那一个站点，原先会允许每一个网址；更早版本保存的批准保持原样（#66000）。一次自动化运行失败后仍会继续，失败被记下来，下一次按计划运行；创建它的会话或目录没了，或设置不再有效时，自动化仍会暂停。自动化代码里的 shell 命令若超过时限，现在会被停掉并使这次调用失败，而不再转到后台（#66422、#65626）。向一个已归档的会话发送内容会取消归档，包括消息、命令、技能和 shell 命令，经 API 发送的也一样（#66348）。Plan 模式的规则放在系统提示里；已经处于 Plan 模式的会话，升级后会再获得一次这些规则（#63669）。核心改进写明，generate_image 与 generate_video 改为在 Code Mode 里运行，而不再作为顶层工具，因此它们的定义不再给每一次请求加上大约 700 token（#66465）。移动会话时，子代理一并移动（#66215）。若某个服务档次列出了自己的价格，费用估计使用那些价格，包括其长上下文费率（#65861、#65984）。桌面一节写明，在 macOS 和 Windows 上，桌面更新只下载应用里有变化的部分，而不再重新下载完整安装包（#66042）。上述大约 700 token 来自这一标签的发布说明，本刊未运行该程序。说明其余部分还有 TUI、桌面和插件修复。本条不把那些修复逐条改写成新行为。GitHub published_at 为 2026-11-26T00:59:05Z。",
      "en": "OpenCode v2.4.2 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-26T00:59:05Z. created_at on the same record is 2026-11-25T23:52:48Z, also inside the window; this item still times the release by published_at. Issue 079 already used the v2.4.0 URL. This item records v2.4.2, does not restate the built-in desktop browser already recorded in issue 079, and does not fold the v2.4.1 notes into it. The highlights say GPT-6.2 Sol and Astra, and the aliases named gpt-latest, use a system prompt written for GPT-6.2 (#66297). After OpenCode is connected, the model picker lists OpenCode Go first (#66363). If the composer is empty, stopping a response with Esc before the model has written anything or called a tool removes the last message and puts it back in the composer, images included, so it can be edited and sent again (#65505). The upgrade notes say that choosing always allow for a web fetch now allows that site only. It used to allow every URL. Approvals saved by earlier versions stay as they were (#66000). Automations keep running after a failed run. The failure is recorded and the next run stays on schedule. They still pause when the session that created them or their directory is gone, or when their setup is no longer valid. A shell command in an automation's code that runs past its timeout is now stopped and fails the call, instead of moving to the background (#66422, #65626). Sending to an archived session unarchives it. That covers messages, commands, skills and shell commands, including ones sent through the API (#66348). Plan mode's rules are in the system prompt. Sessions already in Plan mode get the rules once more after upgrading (#63669). A core improvement says generate_image and generate_video run inside Code Mode instead of as top-level tools, so their definitions no longer add about 700 tokens to every request (#66465). Moving a session also moves its subagents (#66215). Cost estimates for service tiers that list their own prices use those prices, including their long-context rates (#65861, #65984). The desktop section says that on macOS and Windows, desktop updates download only the parts of the app that changed, instead of the full installer again (#66042). The figure of about 700 tokens comes from this tag's release notes. TUJL did not run the program. The rest of the notes include TUI, desktop and plugin fixes. This item does not rewrite each of those fixes as new behavior. GitHub published_at is 2026-11-26T00:59:05Z."
    }
  ]
};

export const issue080: Issue = {
  "number": "080",
  "date": "2026-11-25",
  "readingTime": "约 8 分钟",
  "windowStart": "2026-11-24T01:55:00Z",
  "windowEnd": "2026-11-25T01:55:00Z",
  "heading": "本地运行时加快 Inkling 的 Metal 路径，微调写明 Inkling 2 Mini 少用一半显存，模型库补上 vLLM 远程代码，DeepMind 用 544 题测每次都答对",
  "noteTitle": "三则用 GitHub 的 published_at 计时，Humanity’s First Exam 一条用文章的 datePublished。",
  "noteZh": "本期按北京时间11月24日09:55至11月25日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。079期已经覆盖到24日09:55，该时刻及之前的条目留在窗外，25日09:55之后的条目也不计入。只收录严格晚于 2026-11-24T01:55:00Z、且不晚于 2026-11-25T01:55:00Z 的条目。Ollama、Unsloth 与 Transformers 都以 GitHub 发布记录的 published_at 为准，分别为 2026-11-24T04:18:13Z、2026-11-24T14:38:51Z 与 2026-11-24T16:13:08Z。Unsloth 与 Transformers 的 created_at 分别为 2026-11-24T14:21:30Z 与 2026-11-24T16:05:00Z，都落在窗口内，这两条仍以 published_at 计时。Ollama 的 created_at 为 2026-11-24T01:35:09Z，早于本窗口起点，并落在 079期窗口内；079期按 published_at 计时，没有使用这个网址。本条仍以 published_at 计时。这三则都没有被 GitHub 标成预发布。Unsloth 的标签名是 v0.1.924-beta，但发布记录的 prerelease 为 false；079期已经使用 v0.1.923-beta 的网址，本期使用 v0.1.924-beta。Humanity’s First Exam 这一条的来源是 Google 博客《We’re launching Humanity’s First Exam and a Kaggle hackathon to test LLM reliability》。页面 JSON-LD 的 datePublished 为 2026-11-24T19:30:00+00:00。同一页的 article:published_time 只有日期 2026-11-24，没有钟点；可见日期也是 Nov 24, 2026，没有钟点。另一处 meta name=\"published_time\" 为 2026-11-24T19:30:00+00:00，与 datePublished 相同。本期以 datePublished 计时，不把没有钟点的 article:published_time 当作发布时间。同一页的 dateModified 为 2026-11-24T19:30:00.265911+00:00，也在窗口内，本条仍以 datePublished 计时。Ollama v0.40.18 发布页把 Full Changelog 指到比较范围 v0.40.17...v0.40.18-rc0。本期的来源是 v0.40.18 标签页，不把 v0.40.17 或 v0.40.18-rc0 的网址列为来源。067期已经使用 v0.40.16 的网址。说明里的四行都没有写出倍数，本条不补。Gemini CLI 的正式标签 v0.71.1，published_at 为 2026-11-24T03:50:24Z，created_at 为 2026-11-24T03:42:45Z，GitHub 没有把它标成预发布。说明只有一行：把 aafdfdf 拣选到 release/v0.71.0-pr-30420，用来修补 v0.71.0 并做成 0.71.1（#30429）。079期已经写过更早的 v0.71.0 落在上一窗口且未单列。本期不单列 v0.71.1，也不把它的网址列为来源。本次 LiteLLM 发布列表抓取里，落在窗口内的标签有：v1.110.3，published_at 为 2026-11-24T04:11:03Z，created_at 为 2026-11-24T01:50:19Z；v1.109.4，published_at 为 2026-11-24T04:15:26Z，created_at 为 2026-11-24T01:50:13Z；v1.112.0-rc.1，published_at 为 2026-11-24T22:30:00Z，created_at 为 2026-11-24T18:39:17Z，GitHub 把它标成预发布；v1.108.17，published_at 为 2026-11-24T22:56:05Z，created_at 为 2026-11-24T20:34:32Z；v1.110.4，published_at 为 2026-11-25T00:31:02Z，created_at 为 2026-11-24T22:58:20Z；v1.109.5，published_at 为 2026-11-25T00:59:30Z，created_at 为 2026-11-25T00:05:21Z；v1.111.0，published_at 为 2026-11-25T01:42:50Z，created_at 为 2026-11-24T21:27:02Z。除 v1.112.0-rc.1 外，这些记录都没有被标成预发布。v1.110.3 与 v1.109.4 的 created_at 早于本窗口起点，published_at 在窗口内。077期已经使用 v1.108.15 的网址，076期已经使用 v1.110.2 的网址，079期在编者说明里提到 v1.108.16 但没有把那个网址列为来源。本期不单列这些 LiteLLM 标签，也不把它们的网址列为来源。Claude Code v2.1.332 的 published_at 为 2026-11-25T01:32:14Z，created_at 为 2026-11-25T01:31:52Z，GitHub 没有把它标成预发布。说明的第一条写明增加来自 MCP 服务器的技能（beta），在 / 菜单里显示为 server:skill。本期已有四则，不单列，也不把其余修复折进来，不把该网址列为来源。本次 llama.cpp 发布列表抓取里，落在窗口内的标签都被标成预发布，其中 published_at 最晚的是 b12686，为 2026-11-24T22:45:15Z。同一次抓取里还有 b12683（2026-11-24T22:30:42Z）、b12682（2026-11-24T22:11:58Z）、b12681（2026-11-24T19:12:13Z）、b12680（2026-11-24T18:41:10Z）、b12679（2026-11-24T18:24:27Z）、b12678（2026-11-24T18:07:00Z）与 b12676（2026-11-24T13:24:35Z）。Ollama 说明写的是升到 b12651，不是这些预发布标签。本期不单列。openai-python v3.59.0 的 published_at 为 2026-11-24T19:18:59Z，created_at 为 2026-11-24T19:13:07Z；anthropic-sdk-python v2.14.0 的 published_at 为 2026-11-24T21:00:57Z，created_at 为 2026-11-24T20:59:11Z。两则都没有被标成预发布。本期不单列，也不把网址列为来源。OpenAI 页面《GPT-6 models demonstrate intrinsic protein-design capabilities》的可见日期是 November 24, 2026。这次抓取没有找到该文的 JSON-LD datePublished 或 article:published_time，因此不收入，也不转述正文。速度、显存、步时和“过去 6 个月有明显进展”的说法均来自各原文，本刊未独立复跑，也没有打开 Humanity’s First Exam 的排行榜或技术报告。我们的编辑判断是：把 Ollama 的 published_at 和落在 079期窗口里的 created_at 分开，且不把说明里没有写出的倍数补上；把 Unsloth 开篇的 1.8 到 3.1 倍和要点里的 3 倍分开，都当作原文中的说法；把 Transformers v5.24.1 的远程代码修补和 077期已经记录的 v5.24.0 分开；把 Humanity’s First Exam 按 datePublished 计时，并不把同一页上只有日期的 article:published_time 当作发布时间，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 24, 09:55 to November 25, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 079 already covered through 09:55 on November 24, so items at or before that moment stay outside this window, as do items after 09:55 on November 25. Items must be strictly after 2026-11-24T01:55:00Z and at or before 2026-11-25T01:55:00Z. The Ollama, Unsloth and Transformers items use published_at from the GitHub release records: 2026-11-24T04:18:13Z, 2026-11-24T14:38:51Z and 2026-11-24T16:13:08Z. created_at on the Unsloth and Transformers records is 2026-11-24T14:21:30Z and 2026-11-24T16:05:00Z. Both fall inside the window, and those two items still time each release by published_at. created_at on the Ollama record is 2026-11-24T01:35:09Z, before this window's start and inside issue 079's window. Issue 079 times releases by published_at and did not use this URL. This item still times the release by published_at. GitHub does not mark any of those three as a pre-release. The Unsloth tag name is v0.1.924-beta, but the release record has prerelease set to false. Issue 079 already used the v0.1.923-beta URL; this issue uses v0.1.924-beta. The Humanity’s First Exam item uses the Google blog post We’re launching Humanity’s First Exam and a Kaggle hackathon to test LLM reliability. The page's JSON-LD datePublished is 2026-11-24T19:30:00+00:00. article:published_time on the same page is only the date 2026-11-24, with no clock time; the visible dateline is also Nov 24, 2026, with no clock time. A separate meta name=\"published_time\" is 2026-11-24T19:30:00+00:00, the same instant as datePublished. This issue times the post by datePublished and does not treat the date-only article:published_time as the publication instant. dateModified on the same page is 2026-11-24T19:30:00.265911+00:00, also inside the window; this item still times the post by datePublished. The Ollama v0.40.18 release page points Full Changelog at the compare range v0.40.17...v0.40.18-rc0. This issue's source is the v0.40.18 tag page. It does not list a v0.40.17 or v0.40.18-rc0 URL as a source. Issue 067 already used the v0.40.16 URL. None of the four changed lines states a multiplier, and this issue does not add one. Gemini CLI's regular tag v0.71.1 has published_at 2026-11-24T03:50:24Z and created_at 2026-11-24T03:42:45Z, and GitHub does not mark it as a pre-release. Its notes are a single line: cherry-pick aafdfdf onto release/v0.71.0-pr-30420 to patch v0.71.0 and create 0.71.1 (#30429). Issue 079 already recorded that the earlier v0.71.0 fell in the previous window and was not given an item. This issue does not give v0.71.1 an item and does not list its URL as a source. The LiteLLM tags this fetch of the releases list saw inside the window are: v1.110.3, published_at 2026-11-24T04:11:03Z, created_at 2026-11-24T01:50:19Z; v1.109.4, published_at 2026-11-24T04:15:26Z, created_at 2026-11-24T01:50:13Z; v1.112.0-rc.1, published_at 2026-11-24T22:30:00Z, created_at 2026-11-24T18:39:17Z, which GitHub marks as a pre-release; v1.108.17, published_at 2026-11-24T22:56:05Z, created_at 2026-11-24T20:34:32Z; v1.110.4, published_at 2026-11-25T00:31:02Z, created_at 2026-11-24T22:58:20Z; v1.109.5, published_at 2026-11-25T00:59:30Z, created_at 2026-11-25T00:05:21Z; and v1.111.0, published_at 2026-11-25T01:42:50Z, created_at 2026-11-24T21:27:02Z. Aside from v1.112.0-rc.1, GitHub does not mark those records as pre-releases. created_at on v1.110.3 and v1.109.4 is before this window's start; published_at is inside it. Issue 077 already used the v1.108.15 URL, issue 076 already used the v1.110.2 URL, and issue 079 mentioned v1.108.16 in the editor's note without listing that URL as a source. This issue does not give these LiteLLM tags an item and does not list their URLs as sources. Claude Code v2.1.332 has published_at 2026-11-25T01:32:14Z and created_at 2026-11-25T01:31:52Z, and GitHub does not mark it as a pre-release. The first line of its notes says skills from MCP servers are added in beta and show as server:skill in the / menu. This issue already has four items, does not give v2.1.332 an item, does not fold the rest of those fixes into another item, and does not list that URL as a source. The llama.cpp tags this fetch of the releases list saw inside the window are marked as pre-releases. The latest published_at among them is b12686 at 2026-11-24T22:45:15Z. The same fetch also returned b12683 (2026-11-24T22:30:42Z), b12682 (2026-11-24T22:11:58Z), b12681 (2026-11-24T19:12:13Z), b12680 (2026-11-24T18:41:10Z), b12679 (2026-11-24T18:24:27Z), b12678 (2026-11-24T18:07:00Z) and b12676 (2026-11-24T13:24:35Z). The Ollama notes say the bump is to b12651, which is not one of those pre-release tags. This issue does not give them an item. openai-python v3.59.0 has published_at 2026-11-24T19:18:59Z and created_at 2026-11-24T19:13:07Z. anthropic-sdk-python v2.14.0 has published_at 2026-11-24T21:00:57Z and created_at 2026-11-24T20:59:11Z. GitHub does not mark either as a pre-release. This issue does not give them an item and does not list those URLs as sources. OpenAI's page GPT-6 models demonstrate intrinsic protein-design capabilities has a visible date of November 24, 2026. This fetch did not find a JSON-LD datePublished or an article:published_time for that article, so it is not included and its body is not restated. Speed, memory, step-time and the claim of significant progress over the last 6 months come from the cited pages. TUJL did not independently rerun them and did not open the Humanity’s First Exam leaderboard or technical report. Our editorial view: keep Ollama's published_at apart from the created_at that falls inside issue 079's window, and do not supply a multiplier the notes do not state; keep Unsloth's opening range of 1.8x to 3.1x apart from the highlight's 3x, both as claims from that text; keep the remote-code fixes in Transformers v5.24.1 apart from the v5.24.0 item already recorded in issue 077; and time Humanity’s First Exam by datePublished, without treating the date-only article:published_time on the same page as a clock time — then check those distinctions against your own work.",
  "stories": [
    {
      "index": "01",
      "label": "本地运行 / Local runtime",
      "source": "Ollama · GitHub Release",
      "date": "2026.11.24 12:18:13 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-24T04:18:13Z",
      "zhTitle": "Ollama v0.40.18 加快 Inkling 2 的 Metal 路径，并把 llama.cpp 升到 b12651",
      "enTitle": "Ollama v0.40.18 speeds the Inkling 2 Metal path and bumps llama.cpp to b12651",
      "href": "https://github.com/ollama/ollama/releases/tag/v0.40.18",
      "zh": "Ollama v0.40.18 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-24T04:18:13Z。同一记录的 created_at 为 2026-11-24T01:35:09Z，早于本窗口起点，并落在 079期窗口内。079期按 published_at 计时，没有使用这个网址。本条仍以 published_at 计时，不把 created_at 当作发布时间。067期已经使用 v0.40.16 的网址。本期使用 v0.40.18。发布页上的 Full Changelog 链接指向比较范围 v0.40.17...v0.40.18-rc0。本条的来源网址是 v0.40.18 标签页，不把 v0.40.17 或 v0.40.18-rc0 的网址列为来源。变更写明四项：在 Metal 上融合 Inkling 的残差混合（#19808）；mlxrunner 在各架构之间共用张量辅助函数和模型设置（#19805）；把 llama.cpp 升到 b12651，并去掉 jetpack5 支持（#19865）；Inkling 2 的 Metal 解码、预填充和草稿轮次更快（#19843）。这四行都没有写出倍数。上述范围来自这一标签的发布说明，本刊未运行该程序。GitHub published_at 为 2026-11-24T04:18:13Z。",
      "en": "Ollama v0.40.18 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-24T04:18:13Z. created_at on the same record is 2026-11-24T01:35:09Z, before this window's start and inside issue 079's window. Issue 079 times releases by published_at and did not use this URL. This item still times the release by published_at and does not treat created_at as the publication instant. Issue 067 already used the v0.40.16 URL. This issue uses v0.40.18. The Full Changelog link on the release page points at the compare range v0.40.17...v0.40.18-rc0. This item's source URL is the v0.40.18 tag page. It does not list a v0.40.17 or v0.40.18-rc0 URL as a source. The changes name four items: fuse Inkling residual mixing on Metal (#19808); share tensor helpers and model setup across architectures in mlxrunner (#19805); bump llama.cpp to b12651 and remove jetpack5 support (#19865); and faster Metal decode, prefill and draft rounds for Inkling 2 (#19843). None of those four lines states a multiplier. The scope above comes from this tag's release notes. TUJL did not run the program. GitHub published_at is 2026-11-24T04:18:13Z."
    },
    {
      "index": "02",
      "label": "本地训练 / Local training",
      "source": "Unsloth · GitHub Release",
      "date": "2026.11.24 22:38:51 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-24T14:38:51Z",
      "zhTitle": "Unsloth v0.1.924-beta 写明可微调 Inkling 2 Mini，并少用一半显存",
      "enTitle": "Unsloth v0.1.924-beta says Inkling 2 Mini can be fine-tuned with half the VRAM",
      "href": "https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta",
      "zh": "Unsloth v0.1.924-beta 的发布记录里，GitHub 没有把它标为预发布，尽管标签名带有 beta。计时以 published_at 为准，为 2026-11-24T14:38:51Z。同一记录的 created_at 为 2026-11-24T14:21:30Z，也在窗口内，本条仍以 published_at 计时。比较范围是 v0.1.923-beta...v0.1.924-beta。079期已经使用 v0.1.923-beta 的网址。本期使用 v0.1.924-beta，不重述 079期已经写过的解码加速。开篇写明：现在可以用 LoRA 或 QLoRA 微调 Inkling 2 Mini，速度是 1.8 倍到 3.1 倍，显存少用 50%，然后导出为 GGUF 或合并后的 16 位模型；它可以在 Kaggle 免费的 2 张 T4 上训练，并支持跨 GPU 的张量、流水线与上下文并行。同一开篇还写到更快的 adamw_8bit 步骤、T4 上更快的 Z-Image LoRA 训练，以及聊天里思考模型的修复。要点另写一行：在 Unsloth Desktop 里微调 Inkling 2 Mini 快 3 倍，并且显存少用 50%。本条并列这两处倍数，不把 1.8 到 3.1 倍和 3 倍合成一个数字。要点还写明：修正了错误的最大上下文长度，推理快 2 到 3 倍；adamw_8bit 在小批量上每步少用最多 12% 的时间；T4 上的 Z-Image LoRA 训练每步快 1.7 倍；对聊天微调运行 unsloth eval 时，会按模型自己的聊天格式给自有数据集打分。训练一节写明：Inkling 2 Mini 的 LoRA 或 QLoRA 包括视觉层，在 Kaggle 的 2 张 T4 上大约每步 26 秒，但放不进一张 15 GB 的 T4；Inkling 2 Small 也受支持，但 4 位大约需要 290 GB 显存。save_pretrained_merged 的 merged_16bit 和 save_pretrained_gguf 现在适用于 Inkling 2，merged_4bit 仍然不受支持。微调后的 Inkling 2 Mini 可导出为 17.5 GB 的 q4_k_m GGUF，并在 llama.cpp 里运行；导出大约需要 150 GB 空闲磁盘，因此说明建议用 Colab A100，而不是 Kaggle。在 NVIDIA Ampere 或更新的 GPU 上，Inkling 2 训练使用 FlexAttention，在 L4 上大约每步快 15%。同一节还写明：optim = \"adamw_8bit\" 现在一次更新每个参数组，在 L4 的小批量上每步少用最多 12% 的时间；带 16 位 LoRA 的 GRPO rollout 在 L4 上每个 token 大约快 20%；原生 FSDP2 全量微调在 2 张 T4 上每步少用 17% 到 21% 的时间；AsyncGRPO 的树状打包现在也覆盖 Mamba2 模型，例如 Nemotron-H 和 Granite-4.0-H，以及 LFM2，并配合更新的 TRL。左侧填充的训练批次不再让填充位置看到未来的 token。对自己的 .jsonl、.json 或 .csv 做聊天微调评测时，分数不再接近 0。在绑定嵌入的模型上执行 add_new_tokens 之后，合并导出和 GGUF 导出不再丢掉训练过的 lm_head。Phi-3 与 Phi-3.5 的训练文本重新以 EOS token 结尾。使用 speaker 和 text 这类自定义键的聊天数据，不再把 role 和 content 对调。图像与视频一节写明：T4 上的 Z-Image LoRA 训练每步快 1.7 倍；在 24 GB GPU 上，MiniMax-H3-Image 现在把一次多图请求里的图像一起去噪，而不是一张一张来；MiniMax-H3 的视频在使用同一段参考片段或关键帧重渲染时跳过重新编码；FLUX.3 Klein base 增加可选的 Fast CFG，渲染大约快 10%，图像有小的变化；在 AMD Strix Halo 上，FLUX.2 klein 4B 的 LoRA 训练每步大约少用 11% 的时间；在内存有限的 T4 机器上，Krea 2 加载时不再被杀掉。聊天与桌面一节写明：unsloth start --continue 会在同一模型和设置上重新打开上一次的代理会话；Inkling 2 Mini 不再在几次聊天之后冻住只有 8 GB 显存和 16 GB 内存的笔记本；思考模型不再在聊了几轮之后把推理截短；删除的一轮不再在另一个标签打开同一聊天时回来；套用聊天预设不再清掉自定义聊天模板；在 X11 上使用 NVIDIA 590 及更新驱动时，Unsloth Desktop 的聊天滚动重新变顺；Settings > System and Engine > Compute backend 会把无法运行的后端变灰，并说明原因；Linux 安装程序现在给 RX 9060 XT 安装 ROCm 版 torch，而不是 CPU 版 torch。上述速度、显存、步时和容量数字来自这一标签的发布说明，本刊未复跑。GitHub published_at 为 2026-11-24T14:38:51Z。",
      "en": "On the Unsloth v0.1.924-beta release record, GitHub does not mark it as a pre-release, even though the tag name includes beta. This item times it by published_at, 2026-11-24T14:38:51Z. created_at on the same record is 2026-11-24T14:21:30Z, also inside the window; this item still times the release by published_at. The compare range is v0.1.923-beta...v0.1.924-beta. Issue 079 already used the v0.1.923-beta URL. This issue uses v0.1.924-beta and does not restate the decoding speedups already recorded in issue 079. The opening says Inkling 2 Mini can now be fine-tuned 1.8x to 3.1x faster and with 50% less VRAM using LoRA or QLoRA, then exported to GGUF or a merged 16-bit model. It trains on Kaggle's free 2x T4 and supports tensor, pipeline and context parallel across GPUs. The same opening also names faster adamw_8bit steps, faster Z-Image LoRA training on T4, and fixes for thinking models in chat. A highlight line separately says fine-tuning Inkling 2 Mini in Unsloth Desktop is 3x faster with 50% less VRAM. This item keeps those two multipliers side by side and does not merge 1.8x to 3.1x with 3x. The highlights also say an incorrect max context length is fixed, for 2x to 3x faster inference; adamw_8bit takes up to 12% less time per step on small batches; Z-Image LoRA training on T4 is 1.7x faster per step; and unsloth eval on chat fine-tunes scores your own datasets in the model's chat format. The training section says LoRA or QLoRA for Inkling 2 Mini includes the vision layers, fits on Kaggle's 2x T4 at about 26 seconds per step, and does not fit on a single 15 GB T4. Inkling 2 Small is supported too but needs about 290 GB of GPU memory in 4-bit. save_pretrained_merged with merged_16bit and save_pretrained_gguf now work for Inkling 2. merged_4bit is still not supported. A fine-tuned Inkling 2 Mini exports to a 17.5 GB q4_k_m GGUF that runs in llama.cpp. The export needs about 150 GB of free disk, so the notes say to use a Colab A100 instead of Kaggle. On NVIDIA Ampere or newer GPUs, Inkling 2 training uses FlexAttention, about 15% faster per step on L4. The same section also says optim = \"adamw_8bit\" now updates each parameter group in one step, up to 12% less time per step on L4 with small batches; GRPO rollouts with a 16-bit LoRA decode about 20% faster per token on L4; native FSDP2 full fine-tuning takes 17% to 21% less time per step on 2x T4; and AsyncGRPO tree packing now also covers Mamba2 models such as Nemotron-H and Granite-4.0-H, and LFM2, with newer TRL. Left-padded training batches no longer let pad positions see future tokens. unsloth eval on a chat fine-tune with your own .jsonl, .json or .csv dataset no longer scores near 0. After add_new_tokens on a tied-embedding model, merged and GGUF exports no longer drop the trained lm_head. Phi-3 and Phi-3.5 training text now ends with the EOS token again. Chat datasets with custom keys such as speaker and text no longer get role and content swapped. The images and video section says Z-Image LoRA training on T4 is 1.7x faster per step; on 24 GB GPUs, MiniMax-H3-Image now denoises the images of a multi-image request together instead of one by one; MiniMax-H3 video re-renders with the same reference clip or keyframe skip re-encoding it; FLUX.3 Klein base has an opt-in Fast CFG switch, about 10% faster renders with a small image change; on AMD Strix Halo, FLUX.2 klein 4B LoRA training takes about 11% less time per step; and Krea 2 no longer gets killed while loading on T4 machines with limited RAM. The chat and desktop section says unsloth start --continue reopens the last agent session on the same model and settings; Inkling 2 Mini no longer freezes laptops with 8 GB of VRAM and 16 GB of RAM after a few chats; thinking models no longer get their reasoning cut short a few turns into a chat; a deleted chat turn no longer comes back when the same chat is open in another tab; applying a chat preset no longer clears a custom chat template; on Linux with NVIDIA drivers 590 and newer on X11, chat scrolling in Unsloth Desktop is smooth again; Settings > System and Engine > Compute backend greys out a backend it cannot run and says why; and the Linux installer now gives the RX 9060 XT ROCm torch instead of CPU torch. The speed, memory, step-time and capacity figures above come from this tag's release notes. TUJL did not rerun them. GitHub published_at is 2026-11-24T14:38:51Z."
    },
    {
      "index": "03",
      "label": "模型库 / Model library",
      "source": "Transformers · GitHub Release",
      "date": "2026.11.25 00:13:08 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-24T16:13:08Z",
      "zhTitle": "Transformers v5.24.1 修补 vLLM 用的远程代码，并修 Llama 4 与 dory",
      "enTitle": "Transformers v5.24.1 patches remote code used by vLLM, plus Llama 4 and dory",
      "href": "https://github.com/huggingface/transformers/releases/tag/v5.24.1",
      "zh": "Transformers v5.24.1 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-24T16:13:08Z。同一记录的 created_at 为 2026-11-24T16:05:00Z，也在窗口内，本条仍以 published_at 计时。比较范围是 v5.24.0...v5.24.1。077期已经使用 v5.24.0 的网址。本期使用 v5.24.1，不重述 077期已经写过的缓存参数改名。说明称这是一份补丁，用来修 vLLM 的一批问题、几处分布式问题，以及模型修复（llama4、dory）。与 vLLM 相关的四行写明：修复远程代码在缓存改名之后的向后兼容（#51085）；为远程代码恢复 modeling_attn_mask_utils，并注明这是一次性的，用来解除 vLLM 的阻塞（#51124）；在 MBartDecoderLayer.forward 的签名里暴露 past_key_values，供远程代码使用（#51177）；OmniASR 支持把 padding_mask 留在 CPU 上的音频编码器（#51100）。模型修复写明：Llama 4 在缺少 image_outputs 时不再在前向里崩溃（#51144）；修复 dory 的静态缓存（#50993）。分布式写明：允许在 tp_plan={} 时单独使用专家并行（#50996）；修复 PyTorch 2.9 上跨步读取检查点的问题（#51042）。上述范围来自这一标签的发布说明，本刊未运行该库。GitHub published_at 为 2026-11-24T16:13:08Z。",
      "en": "Transformers v5.24.1 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-24T16:13:08Z. created_at on the same record is 2026-11-24T16:05:00Z, also inside the window; this item still times the release by published_at. The compare range is v5.24.0...v5.24.1. Issue 077 already used the v5.24.0 URL. This issue uses v5.24.1 and does not restate the cache-argument rename already recorded in issue 077. The notes call it a patch to fix a bunch of stuff for vLLM, a few distributed issues, and some model fixes (llama4, dory). The four vLLM-related lines say: fix backward compatibility of the cache rename for remote code (#51085); restore modeling_attn_mask_utils for remote code, noted as a one-off to unblock vLLM (#51124); expose past_key_values in the MBartDecoderLayer.forward signature for remote code (#51177); and, for OmniASR, support a padding_mask kept on the CPU in the audio encoder (#51100). The model fixes say the Llama 4 forward pass no longer crashes when image_outputs is missing (#51144), and the dory static cache is fixed (#50993). The distributed lines say expert parallelism can be used alone with tp_plan={} (#50996), and strided checkpoint reads are fixed on PyTorch 2.9 (#51042). The scope above comes from this tag's release notes. TUJL did not run the library. GitHub published_at is 2026-11-24T16:13:08Z."
    },
    {
      "index": "04",
      "label": "评测 / Evaluation",
      "source": "Google DeepMind · Blog",
      "date": "2026.11.25 03:30:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-24T19:30:00Z",
      "zhTitle": "DeepMind 发布 Humanity’s First Exam，用 544 道基础题测模型是否每次都答对",
      "enTitle": "DeepMind launches Humanity’s First Exam, 544 elementary prompts on being right every time",
      "href": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/humanitys-first-exam/",
      "zh": "Google DeepMind 博客《We’re launching Humanity’s First Exam and a Kaggle hackathon to test LLM reliability》宣布，当天在 Kaggle 上发布 Humanity’s First Exam（HFE），用来衡量大语言模型回答直白、日常问题时有多可靠。署名是 Google DeepMind 研究科学家 Oran Kelly。计时以该页 JSON-LD 的 datePublished 为准，为 2026-11-24T19:30:00+00:00。同一页的 article:published_time 只有日期 2026-11-24，没有钟点，本条不以它计时。另一处 meta name=\"published_time\" 为 2026-11-24T19:30:00+00:00，与 datePublished 相同，本条仍以 datePublished 计时。文章写明：当前前沿模型擅长复杂的数学、编程和科学，多数评测量的是这些领域里的能力上限；HFE 不看模型能否把一道题做对一次，而看它能否每次都做对同一件事，以及轻微的变体。数据集有 544 道基础的文字和图像提示，覆盖 20 项基础能力。文章写，过去 6 个月里前沿模型在 HFE 上有明显进展。这句话是文章中的说法，本刊没有给该评测打分。文章请读者查看实时排行榜或阅读技术报告。本条不打开这两页，也不把它们列为来源。为了让数据集保持更新，文章邀请社区参加为期三周、直到 December 15 的 Kaggle 竞赛，提交今天的模型仍然会做错的日常问题。文章没有在 December 15 旁边写年份。文中给出的一道公开数据集示例是：按顺序用分号列出霓虹灯招牌里每个词第三个字母的颜色。给出的答案是 green; yellow; white; blue; blue。文章没有在正文里列出那 20 项能力的名称。上述范围来自这篇博客，本刊未复跑该评测。datePublished 为 2026-11-24T19:30:00+00:00。",
      "en": "The Google DeepMind blog post We’re launching Humanity’s First Exam and a Kaggle hackathon to test LLM reliability says Humanity’s First Exam (HFE) is launching on Kaggle that day, to measure how reliably large language models answer straightforward, everyday questions. The byline is Oran Kelly, Research Scientist, Google DeepMind. This item times the post by the page's JSON-LD datePublished, 2026-11-24T19:30:00+00:00. article:published_time on the same page is only the date 2026-11-24, with no clock time, and this item does not time the post by that field. A separate meta name=\"published_time\" is 2026-11-24T19:30:00+00:00, the same instant as datePublished; this item still times the post by datePublished. The post says current frontier models excel at complex math, coding and science, and most benchmarks measure those domain-specific capability ceilings. HFE does not ask whether a model can solve a task once. It measures whether models can solve the same task, and slight variations of it, every time. The dataset consists of 544 elementary text and image prompts across 20 foundational capabilities. The post says that over the last 6 months, frontier models have made significant progress on HFE. That sentence is the post's claim. TUJL did not score the benchmark. The post points readers to a live leaderboard or a technical report. This item does not open those pages and does not list them as sources. To keep the dataset up to date, the post invites the community to a three-week Kaggle competition through December 15, submitting everyday questions that today’s models still get wrong. The post does not write a year next to December 15. One example it gives from the public dataset asks for the color of the third letter of each word in a neon sign, in order, separated by a semicolon. The answer it gives is green; yellow; white; blue; blue. The post does not name the 20 capabilities in the body. The scope above comes from this blog post. TUJL did not rerun the benchmark. datePublished is 2026-11-24T19:30:00+00:00."
    }
  ]
};

export const issue079: Issue = {
  "number": "079",
  "date": "2026-11-24",
  "readingTime": "约 7 分钟",
  "windowStart": "2026-11-23T01:55:00Z",
  "windowEnd": "2026-11-24T01:55:00Z",
  "heading": "编程助手加上内置桌面浏览器，登记处把 1.8.15 推上生产，本地训练加快 Inkling 解码，Gemini API 可按页切片",
  "noteTitle": "三则用 GitHub 的 published_at 计时，Gemini API 一条用文章的 datePublished。",
  "noteZh": "本期按北京时间11月23日09:55至11月24日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。078期已经覆盖到23日09:55，该时刻及之前的条目留在窗外，24日09:55之后的条目也不计入。只收录严格晚于 2026-11-23T01:55:00Z、且不晚于 2026-11-24T01:55:00Z 的条目。OpenCode、MCP registry 与 Unsloth 都以 GitHub 发布记录的 published_at 为准，分别为 2026-11-23T09:22:21Z、2026-11-23T13:49:28Z 与 2026-11-23T15:40:51Z。三条记录的 created_at 分别为 2026-11-23T08:24:58Z、2026-11-23T13:45:01Z 与 2026-11-23T15:38:32Z，都落在窗口内，本期仍以 published_at 计时。这三则都没有被 GitHub 标成预发布。Unsloth 的标签名是 v0.1.923-beta，但发布记录的 prerelease 为 false；076期已经使用 v0.1.922-beta 的网址，本期使用 v0.1.923-beta。Gemini API 这一条的来源是 Google 博客《Introducing file slicing controls in the Gemini API》。页面 JSON-LD 的 datePublished 为 2026-11-23T16:12:00+00:00。同一页的 article:published_time 只有日期 2026-11-23，没有钟点；可见日期也是 Nov 23, 2026，没有钟点。本期以 datePublished 计时，不把没有钟点的那一项当作发布时间。同一页的 dateModified 为 2026-11-23T18:29:01.747856+00:00，也在窗口内，本条仍以 datePublished 计时。OpenCode 同日更晚还有正式标签 v2.4.1，published_at 为 2026-11-23T15:57:40Z，created_at 为 2026-11-23T14:55:43Z，GitHub 没有把它标成预发布。说明写的是 macOS 12 上的会话保存、仅在配置里声明的提供方，以及 /btw 未读标记。本期采用写明内置桌面浏览器和 automations 的 v2.4.0，不把 v2.4.1 的网址列为来源，也不把那份说明折进这一条。sst/opencode 仓库列出了相同的标签和相同的时间戳；本期使用 anomalyco/opencode 发布页上的网址。078期已经使用 MCP registry v1.8.12 的网址，并在编者说明里提到 v1.8.13、v1.8.14 与 v1.8.15，但没有把这三个网址列为来源。本期使用 v1.8.16，不重述 078期已经写过的 OSV 检查。LiteLLM v1.108.16 的 published_at 为 2026-11-23T22:12:26Z，created_at 为 2026-11-23T19:58:01Z，GitHub 没有把它标成预发布；077期已经使用 v1.108.15 的网址。本期不单列。Gemini CLI 的正式标签 v0.71.0，published_at 为 2026-11-24T01:16:44Z，created_at 为 2026-11-24T01:06:00Z，落在窗口内。同窗口还有被标成预发布的 v0.72.0-preview.0（published_at 为 2026-11-24T00:34:15Z）与夜间标签 v0.71.0-nightly.20261124.gaafdfdfb5（published_at 为 2026-11-24T01:13:47Z）。本期不单列这三则。DeepMind 博客《Finding faster quantum algorithms with agents and formal verification》的 datePublished 为 2026-11-23T17:00:00+00:00，也在窗口内，本期已有四则，不单列。Anthropic 介绍 Claude Ship 的页面，JSON-LD 的 datePublished 与 article:published_time 都只有日期 2026-11-23，没有钟点，因此不收入。OpenAI 介绍 Shirudo 的页面可见日期是 November 23, 2026，这次抓取没有找到该文自己的 datePublished 或 article:published_time，因此不收入。速度、费用和切片省 token 的说法均来自各原文，本刊未独立复跑，也未调用 Gemini API。我们的编辑判断是：把 OpenCode v2.4.0 写明的内置浏览器与 automations，和同日更晚 v2.4.1 的补丁说明分开；把 MCP registry v1.8.16 写明的生产提升与编辑时数据库工作，和 078期已经记录的 OSV 检查分开；把 Unsloth 说明里的加速数字当作原文中的说法，而不是本刊测得的结果；把 Gemini API 这一条按 datePublished 计时，并不把同一页上只有日期、没有钟点的 article:published_time 当作发布时间，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 23, 09:55 to November 24, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 078 already covered through 09:55 on November 23, so items at or before that moment stay outside this window, as do items after 09:55 on November 24. Items must be strictly after 2026-11-23T01:55:00Z and at or before 2026-11-24T01:55:00Z. The OpenCode, MCP registry and Unsloth items use published_at from the GitHub release records: 2026-11-23T09:22:21Z, 2026-11-23T13:49:28Z and 2026-11-23T15:40:51Z. created_at on those three records is 2026-11-23T08:24:58Z, 2026-11-23T13:45:01Z and 2026-11-23T15:38:32Z. All three fall inside the window, and this issue still times each of those releases by published_at. GitHub does not mark any of those three as a pre-release. The Unsloth tag name is v0.1.923-beta, but the release record has prerelease set to false. Issue 076 already used the v0.1.922-beta URL; this issue uses v0.1.923-beta. The Gemini API item uses the Google blog post Introducing file slicing controls in the Gemini API. The page's JSON-LD datePublished is 2026-11-23T16:12:00+00:00. article:published_time on the same page is only the date 2026-11-23, with no clock time; the visible dateline is also Nov 23, 2026, with no clock time. This issue times the post by datePublished and does not treat the date-only field as the publication instant. dateModified on the same page is 2026-11-23T18:29:01.747856+00:00, also inside the window; this item still times the post by datePublished. A later same-day OpenCode tag, v2.4.1, has published_at 2026-11-23T15:57:40Z and created_at 2026-11-23T14:55:43Z, and GitHub does not mark it as a pre-release. Its notes cover session saving on macOS 12, providers declared only in config, and an unread mark for /btw. This issue uses v2.4.0, which states the built-in desktop browser and automations, does not list the v2.4.1 URL as a source, and does not fold those notes into this item. The sst/opencode repository lists the same tags at the same timestamps; this issue uses the URL on the anomalyco/opencode release page. Issue 078 already used the MCP registry v1.8.12 URL, and mentioned v1.8.13, v1.8.14 and v1.8.15 in the editor's note without listing those three URLs as sources. This issue uses v1.8.16 and does not restate the OSV checks already recorded in issue 078. LiteLLM v1.108.16 has published_at 2026-11-23T22:12:26Z and created_at 2026-11-23T19:58:01Z, and GitHub does not mark it as a pre-release. Issue 077 already used the v1.108.15 URL. This issue does not give v1.108.16 an item. Gemini CLI's regular tag v0.71.0 has published_at 2026-11-24T01:16:44Z and created_at 2026-11-24T01:06:00Z, inside the window. The same window also includes the pre-release tags v0.72.0-preview.0 (published_at 2026-11-24T00:34:15Z) and v0.71.0-nightly.20261124.gaafdfdfb5 (published_at 2026-11-24T01:13:47Z). This issue does not give those three an item. The DeepMind post Finding faster quantum algorithms with agents and formal verification has datePublished 2026-11-23T17:00:00+00:00, also inside the window; this issue already has four items and does not give it a fifth. Anthropic's page introducing Claude Ship has a JSON-LD datePublished and an article:published_time that are only the date 2026-11-23, with no clock time, so it is not included. OpenAI's page introducing Shirudo has a visible date of November 23, 2026, but this fetch did not find a datePublished or article:published_time for that article, so it is not included. Speed, cost and token-saving claims come from the cited pages. TUJL did not independently rerun them and did not call the Gemini API. Our editorial view: keep the built-in browser and automations stated in OpenCode v2.4.0 separate from the later v2.4.1 patch notes; keep the production promotion and the reduced database work in MCP registry v1.8.16 separate from the OSV checks already recorded in issue 078; keep the speed figures in the Unsloth notes as claims from that text, not as measurements TUJL reran; and time the Gemini API item by datePublished, without treating the date-only article:published_time on the same page as a clock time — then check those distinctions against your own work.",
  "stories": [
    {
      "index": "01",
      "label": "编程助手 / Coding agent",
      "source": "OpenCode · GitHub Release",
      "date": "2026.11.23 17:22:21 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-23T09:22:21Z",
      "zhTitle": "OpenCode v2.4.0 加上内置桌面浏览器，并可按定时或 MCP 事件运行",
      "enTitle": "OpenCode v2.4.0 adds a built-in desktop browser and runs jobs on a timer or MCP event",
      "href": "https://github.com/anomalyco/opencode/releases/tag/v2.4.0",
      "zh": "OpenCode v2.4.0 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-23T09:22:21Z。同一记录的 created_at 为 2026-11-23T08:24:58Z，也在窗口内，本条仍以 published_at 计时。发布页在 anomalyco/opencode 仓库。同日更晚的 v2.4.1 见编者说明。本条只记录 v2.4.0，不把 v2.4.1 的说明折进来。要点写明：内置桌面浏览器可从 Chrome、Edge、Firefox 或 Safari 导入登录状态和浏览历史，并从 Chromium 浏览器或 Chrome、Edge 商店添加扩展；这些内容留在同一个持久的桌面配置里，聊天里的链接会在已登录状态下打开，标签在重启后仍在，代理可以读取并驱动这些页面，而不必换到别的应用（#63002、#65073）。可以让代理按定时器、cron，或在 MCP 服务器发出事件时运行提示、脚本或 shell 命令，并用 /automation 管理；若不需要，可在配置里设置 \"automations\": false（#65296、#65186）。若已连接的提供方有视频模型，代理可用 generate_video 制作视频；渲染期间它继续工作，完成后把文件存进工作区（#63666、#65664）。TUI 的新设计默认打开，opencode 主题改为新主题；若要保留原先颜色，可在 Theme 里选择 opencode-classic（#64988）。在 Windows 上，任务栏按钮会显示会话进度、需要处理的会话数量，并在等待许可或提问时闪烁（#65317、#65318、#65319）。升级说明还写明：experimental_image_generate 已改名为 generate_image；带旧名称的权限规则会自动映射，但已保存的“始终允许”不会映射，因此会再询问一次（#65682）。按版本跟踪的插件会在启动时以及每 24 小时检查，并安装、重新加载匹配的新版本；若新版本加载失败，仍运行原来的版本（#64764、#65052、#65056）。GitHub Copilot 不再读取 GITHUB_TOKEN，需设置 COPILOT_GITHUB_TOKEN 或用 OAuth 登录（#64697）。没有 protocol 设置的 MCP 服务器会先探测最新协议，再回退到旧握手；表现异常的服务器可设置 protocol: \"legacy\"（#65282）。上述行为来自这一标签的发布说明，本刊未运行该程序。GitHub published_at 为 2026-11-23T09:22:21Z。",
      "en": "OpenCode v2.4.0 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-23T09:22:21Z. created_at on the same record is 2026-11-23T08:24:58Z, also inside the window; this item still times the release by published_at. The release page is in the anomalyco/opencode repository. The later same-day tag v2.4.1 is in the editor's note. This item records only v2.4.0 and does not fold the v2.4.1 notes into it. The highlights say: a built-in desktop browser can import sign-ins and browsing history from Chrome, Edge, Firefox or Safari, and add extensions from Chromium browsers or the Chrome and Edge stores; everything stays in one persistent desktop profile, chat links open signed in, tabs survive restarts, and the agent can read and drive the same pages without switching apps (#63002, #65073). The agent can run a prompt, a script or a shell command on a timer, on a cron schedule or when an MCP server sends an event, and manage them with /automation; set \"automations\": false in the config if they are not wanted (#65296, #65186). When a connected provider has a video model, the agent can make videos with generate_video; it keeps working while the video renders and saves the files into the workspace when they are ready (#63666, #65664). The TUI's new designs are on by default, and the opencode theme is the new one; pick opencode-classic in Theme to keep the previous colors (#64988). On Windows, the taskbar button shows session progress, counts sessions that need attention, and flashes when a permission or question is waiting (#65317, #65318, #65319). The upgrade notes also say experimental_image_generate is now generate_image; permission rules with the old name are mapped automatically, but saved always-allow approvals are not, so it asks again once (#65682). Plugins that follow a version are checked on startup and every 24 hours, and a newer match is installed and reloaded; if a new version fails to load, the previous one keeps running (#64764, #65052, #65056). GitHub Copilot no longer reads GITHUB_TOKEN; set COPILOT_GITHUB_TOKEN or sign in with OAuth (#64697). An MCP server without a protocol setting is probed for the newest protocol before falling back to the legacy handshake; set protocol: \"legacy\" on a server that misbehaves (#65282). The behavior above comes from this tag's release notes. TUJL did not run the program. GitHub published_at is 2026-11-23T09:22:21Z."
    },
    {
      "index": "02",
      "label": "工具登记 / Tool registry",
      "source": "MCP registry · GitHub Release",
      "date": "2026.11.23 21:49:28 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-23T13:49:28Z",
      "zhTitle": "MCP registry v1.8.16 把 v1.8.15 推上生产，并减轻编辑时的数据库负担",
      "enTitle": "MCP registry v1.8.16 promotes v1.8.15 to production and cuts database work on edits",
      "href": "https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.16",
      "zh": "MCP registry v1.8.16 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-23T13:49:28Z。同一记录的 created_at 为 2026-11-23T13:45:01Z，也在窗口内，本条仍以 published_at 计时。比较范围是 v1.8.15...v1.8.16。078期已经使用 v1.8.12 的网址，并在编者说明里提到同日更晚的 v1.8.13、v1.8.14 与 v1.8.15，但没有把这三个网址列为来源。本期使用 v1.8.16，不重述 078期已经写过的 OSV 检查，也不把那三个网址列为来源。变更写明：把 registry v1.8.15 提升到生产（#1904）；减少编辑时的数据库工作，并跳过仅有文档变更的预发布部署（#1908）；在各阶段把用量收集器与备份身份分开（#1909）；在已撤回的服务器版本上保留版主的搁置（#1910）。上述范围来自这一标签的发布说明，本刊未运行该登记处。GitHub published_at 为 2026-11-23T13:49:28Z。",
      "en": "MCP registry v1.8.16 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-23T13:49:28Z. created_at on the same record is 2026-11-23T13:45:01Z, also inside the window; this item still times the release by published_at. The compare range is v1.8.15...v1.8.16. Issue 078 already used the v1.8.12 URL, and mentioned the later same-day tags v1.8.13, v1.8.14 and v1.8.15 in the editor's note without listing those three URLs as sources. This issue uses v1.8.16, does not restate the OSV checks already recorded in issue 078, and does not list those three URLs as sources. The changes say: promote registry v1.8.15 to production (#1904); reduce database work during edits and skip documentation-only staging deploys (#1908); separate the usage collector and backup identities in stages (#1909); and preserve moderator holds on withdrawn server versions (#1910). The scope above comes from this tag's release notes. TUJL did not run the registry. GitHub published_at is 2026-11-23T13:49:28Z."
    },
    {
      "index": "03",
      "label": "本地训练 / Local training",
      "source": "Unsloth · GitHub Release",
      "date": "2026.11.23 23:40:51 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-23T15:40:51Z",
      "zhTitle": "Unsloth v0.1.923-beta 加快 Inkling 2 Mini 解码，并缩短 AsyncGRPO 训练时间",
      "enTitle": "Unsloth v0.1.923-beta speeds Inkling 2 Mini decoding and shortens AsyncGRPO training",
      "href": "https://github.com/unslothai/unsloth/releases/tag/v0.1.923-beta",
      "zh": "Unsloth v0.1.923-beta 的发布记录里，GitHub 没有把它标为预发布，尽管标签名带有 beta。计时以 published_at 为准，为 2026-11-23T15:40:51Z。同一记录的 created_at 为 2026-11-23T15:38:32Z，也在窗口内，本条仍以 published_at 计时。076期已经使用 v0.1.922-beta 的网址。本期使用 v0.1.923-beta，不重述 076期已经写过的规模说法。要点写明：Inkling 2 Mini 在所有 GPU 上解码最高可加快到 1.9 倍，并改进了 RTX Spark。在 8 GB 和 12 GB 的 GPU 上，Auto 现在把更多的 Inkling 2 Mini 放到 GPU 上，回复最高可加快到 1.19 倍；当每个专家都能放进 GPU 时，Inkling 2 处理提示最高可加快到 1.9 倍。Inkling 2 的推测解码默认改为起草 2 个 token，比没有草稿模型快 1.15 倍到 1.19 倍。带 fast_inference=True 的 AsyncGRPO 每步少用 29% 到 40% 的时间，做法是在内存里把适配器交给 vLLM，而不再经过文件。在 AMD Strix Halo 上，GRPO rollout 在 Linux 和 Windows 上快 2 倍。多 GPU 的 diffusion LoRA 训练在两张 GPU 上大约可达到两倍的每秒样本数。可运行 nvidia/Qwen-Image-Flash，按默认值比 Qwen-Image 每张图大约快 14 倍；FastWan 用 3 步，端到端比其基础模型快 2.5 倍到 3 倍以及 5.9 倍。设置里新增 Knowledge 页面，用于管理知识库并查看各库已嵌入的比例。可以把翻译画在图片上，并翻译音频和字幕。上述速度数字来自这一标签的发布说明，本刊未复跑。GitHub published_at 为 2026-11-23T15:40:51Z。",
      "en": "On the Unsloth v0.1.923-beta release record, GitHub does not mark it as a pre-release, even though the tag name includes beta. This item times it by published_at, 2026-11-23T15:40:51Z. created_at on the same record is 2026-11-23T15:38:32Z, also inside the window; this item still times the release by published_at. Issue 076 already used the v0.1.922-beta URL. This issue uses v0.1.923-beta and does not restate the size wordings already recorded in issue 076. The highlights say Inkling 2 Mini runs up to 1.9x faster on all GPUs for decoding, with RTX Spark improvements. On 8 GB and 12 GB GPUs, Auto now puts more of Inkling 2 Mini on the GPU, for up to 1.19x faster replies; when every expert fits on the GPUs, Inkling 2 processes prompts up to 1.9x faster. Speculative decoding for Inkling 2 now drafts 2 tokens by default, 1.15x to 1.19x faster than no draft model. AsyncGRPO with fast_inference=True takes 29 to 40% less time per step, by passing the adapter to vLLM in memory instead of through files. On AMD Strix Halo, GRPO rollouts run 2x faster on Linux and Windows. Multi-GPU diffusion LoRA training is about 2x the samples per second on two GPUs. The notes say to run nvidia/Qwen-Image-Flash, about 14x faster per image than Qwen-Image at its defaults, and FastWan in 3 steps, 2.5x to 3x and 5.9x faster end to end than their base models. Settings adds a Knowledge page to manage knowledge bases and see how much of each one is embedded. Translation can be drawn over an image, and audio and subtitles can be translated. The speed figures above come from this tag's release notes. TUJL did not rerun them. GitHub published_at is 2026-11-23T15:40:51Z."
    },
    {
      "index": "04",
      "label": "模型接口 / Model API",
      "source": "Google Blog",
      "date": "2026.11.24 00:12:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-23T16:12:00Z",
      "zhTitle": "Gemini API 增加服务端文件切片，并可直接上传 Office 与 OpenDocument",
      "enTitle": "Gemini API adds server-side file slicing and native Office and OpenDocument uploads",
      "href": "https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/",
      "zh": "Google 博客《Introducing file slicing controls in the Gemini API》宣布，Gemini API 现在提供原生的文件切片控制，可在服务端指定要加载的页、表格范围和媒体片段，并同时支持直接上传 Microsoft Office 与 OpenDocument 格式。计时以该页 JSON-LD 的 datePublished 为准，为 2026-11-23T16:12:00+00:00。同一页的 article:published_time 只有日期 2026-11-23，没有钟点，本条不以它计时。文章写明：可以把 PDF、Office 文件（文档、幻灯片、表格）、音频和视频直接交给 Gemini API，并只请求需要的页、单元格、媒体片段和图层；上下文会集中在相关部分，并且只为 Gemini 检查到的部分计费 token。用 Files API 上传一次后，可在多轮对话和工具调用里重复使用该 URI。接口允许代理在函数返回里直接指定要检查的部分。也可以先用提取的文本、低分辨率预览或转写做浏览，再把高分辨率 token 用在图表、密集版式和关键帧上。切片可按范围、图层、分辨率和帧率进行。文章还写，若模型接口只能摄入整份文件，代理往往要在客户端环境里运行 LibreOffice、PDF 渲染器和 ffmpeg；有了这项能力，可以把 Files API 的 URI 放在用户轮次或 function_result 里，由接口在服务端切片、渲染和分词。文章称这些控制已在 Google AI Studio 和 Gemini 平台的 API 中提供。文中有一段示例使用 page_options 的 start_page、end_page 和 content_layers。上述能力与计费说法来自这篇博客，本刊未调用该 API。datePublished 为 2026-11-23T16:12:00+00:00。",
      "en": "The Google blog post Introducing file slicing controls in the Gemini API says the Gemini API now has native file slicing controls, so developers can specify targeted pages, sheet ranges and media segments for the model to load server-side, and it also adds native upload support for Microsoft Office and OpenDocument formats. This item times the post by the page's JSON-LD datePublished, 2026-11-23T16:12:00+00:00. article:published_time on the same page is only the date 2026-11-23, with no clock time, and this item does not time the post by that field. The post says you can pass PDFs, Office files (docs, slides, spreadsheets), audio and video directly to the Gemini API and request only the pages, spreadsheet cells, media segments and layers you need; this keeps context focused on the relevant parts of a file while billing tokens only for the parts Gemini inspects. After a file is uploaded once with the Files API, its URI can be reused across turns and tool calls. The API lets the agent specify what parts of a file to inspect directly inside a function response. You can skim first with extracted text, low-resolution previews or transcripts, then spend high-resolution tokens only on the charts, dense layouts and frames that matter. Slicing can be done by range, layer, resolution and frame rate. The post also says that when model APIs only ingest whole files, agents often run LibreOffice, PDF renderers and ffmpeg inside the client harness; with this capability, a Files API URI can be passed on a user turn or inside a function_result, and the API slices, renders and tokenizes the file server-side. It says the controls are available today via the API in Google AI Studio and the Gemini platform. An example in the post uses start_page, end_page and content_layers in page_options. The capabilities and billing claims above come from this blog post. TUJL did not call the API. datePublished is 2026-11-23T16:12:00+00:00."
    }
  ]
};

export const issue078: Issue = {
  "number": "078",
  "date": "2026-11-23",
  "readingTime": "约 7 分钟",
  "windowStart": "2026-11-22T01:55:00Z",
  "windowEnd": "2026-11-23T01:55:00Z",
  "heading": "多模态服务拒绝 v1 运行器，编程助手补上工件库，浏览器代理把判分并进同一轮，登记处按 OSV 检查包",
  "noteTitle": "四则都以 GitHub 发布记录的 published_at 计时。",
  "noteZh": "本期按北京时间11月22日09:55至11月23日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。077期已经覆盖到22日09:55，该时刻及之前的条目留在窗外，23日09:55之后的条目也不计入。只收录严格晚于 2026-11-22T01:55:00Z、且不晚于 2026-11-23T01:55:00Z 的条目。browser-use、MCP registry、Qwen Code 与 vLLM-Omni 都以 GitHub 发布记录的 published_at 为准，分别为 2026-11-22T03:30:41Z、2026-11-22T08:38:33Z、2026-11-22T12:04:21Z 与 2026-11-22T12:46:29Z。前三条记录的 created_at 分别为 2026-11-22T03:30:22Z、2026-11-22T02:01:59Z 与 2026-11-22T11:51:07Z，都落在窗口内。vLLM-Omni 同一记录的 created_at 为 2026-11-21T10:35:16Z，早于本窗口起点，也落在077期按 published_at 划定的窗口里；077期没有使用这个网址。本期仍以 published_at 计时，不把 created_at 当作发布时间。四则都没有被标成预发布。070期已经用过 browser-use 1.0.5 的网址，071期已经用过 1.0.6 的网址。本期使用 1.0.8。1.0.7 的 published_at 为 2026-11-20T20:01:20Z，created_at 为 2026-11-20T20:01:07Z，早于本窗口；1.0.8rc1 的 published_at 为 2026-11-20T22:48:28Z，GitHub 把它标为预发布，也早于起点。本期不补记 1.0.7，也不单列该 rc。072期已经用过 vLLM v0.34.0 的网址。本期使用 vllm-omni 仓库里的 v0.34.0，不重述 072期已经写过的 vLLM 升级表。Qwen Code 同日还有桌面标签 desktop-v0.28.4，published_at 为 2026-11-22T12:52:42Z，created_at 与 v0.28.4 同为 2026-11-22T11:51:07Z，GitHub 没有把它标为预发布。它的说明是一份生成的拉取请求列表。本期采用带要点的 v0.28.4，不把桌面标签的网址列为来源，也不把那份列表写进编程助手这一条。MCP registry 同日更晚还有三个正式标签：v1.8.13 的 published_at 为 2026-11-22T16:29:50Z，created_at 为 2026-11-22T13:33:28Z；v1.8.14 的 published_at 为 2026-11-22T21:02:28Z，created_at 为 2026-11-22T20:47:31Z；v1.8.15 的 published_at 为 2026-11-22T22:00:43Z，created_at 为 2026-11-22T21:48:32Z。本期采用写明 OSV 检查的 v1.8.12，不把后三个网址列为来源，也不把后三个说明折进这一条。本次从 GitHub 发布列表里看到的、落在窗口内的 llama.cpp 标签都被标成预发布。其中最晚的 b12642，published_at 为 2026-11-23T01:47:24Z，created_at 为 2026-11-22T19:04:21Z。本期不单列。Gemini CLI 的夜间标签 v0.71.0-nightly.20261123.geecccfcd5，published_at 为 2026-11-23T01:21:53Z，created_at 为 2026-11-23T01:14:29Z，说明只有比较链接，GitHub 把它标为预发布，本期不单列。LobeHub v2.3.5 的 published_at 为 2026-11-22T09:47:39Z，created_at 为 2026-11-22T09:46:34Z，说明是封面色回迁和一项分享锁测试。本期不单列。sherpa-onnx v2.0.3 的 published_at 为 2026-11-22T10:53:37Z，created_at 为 2026-11-22T10:36:20Z。本期不单列。codecompanion.nvim v20.3.0 的 published_at 为 2026-11-22T20:23:02Z，created_at 为 2026-11-22T20:22:39Z，说明是 ACP 子代理，以及在结束代理进程前发送 session/close。本期不单列。Claude Code 最新返回的标签仍是 v2.1.330，published_at 为 2026-11-20T22:32:56Z，早于起点。Cline 最新返回的标签仍是 v4.1.27，published_at 为 2026-11-21T06:05:04Z，早于起点。Transformers 最新返回的标签仍是 v5.24.0，published_at 为 2026-11-21T12:28:26Z，早于起点。LiteLLM 最新返回的标签是 v1.112.0-dev.2，published_at 为 2026-11-21T20:13:44Z，GitHub 把它标为预发布，早于起点。prime-rl v0.11.0 的 published_at 为 2026-11-22T01:49:08Z，早于起点，077期已经使用该网址。pydantic-ai 最新稳定标签仍是 v2.71.0，published_at 为 2026-11-19T02:13:05Z；列表里更靠前的 clai2-bleeding 被标为预发布，published_at 为 2026-10-06T01:25:23Z，created_at 为 2026-11-23T01:17:47Z。本期按 published_at 计时，不把它算进窗口。Hugging Face 博客《DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency》的可见日期是 November 18, 2026，没有钟点。《Introducing harness adapters》的可见日期是 November 20, 2026，没有钟点。两个日期都早于本窗口，本期不使用这两篇的网址。费用、缓存和检查行为均来自各原文，本刊未独立复跑。我们的编辑判断是：把 vLLM-Omni 说明里按阶段拒绝 model_runner: v1 这件事，和 072期已经记录的 vLLM 本体去掉 Model Runner V1 分开；把 Qwen Code 说明里已经实现的工件库页面，和同一份说明里仍写成尚未实现的文档状态分开；把 browser-use 1.0.8 里改为走缓存的判分，和 070期、071期已经记录的判分字段与默认模型分开；把 v1.8.12 写明的 OSV 检查，和同日更晚三个标签里才写明的生产扫描分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 22, 09:55 to November 23, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 077 already covered through 09:55 on November 22, so items at or before that moment stay outside this window, as do items after 09:55 on November 23. Items must be strictly after 2026-11-22T01:55:00Z and at or before 2026-11-23T01:55:00Z. The browser-use, MCP registry, Qwen Code and vLLM-Omni items use published_at from the GitHub release records: 2026-11-22T03:30:41Z, 2026-11-22T08:38:33Z, 2026-11-22T12:04:21Z and 2026-11-22T12:46:29Z. created_at on the first three records is 2026-11-22T03:30:22Z, 2026-11-22T02:01:59Z and 2026-11-22T11:51:07Z. All three fall inside the window. created_at on the vLLM-Omni record is 2026-11-21T10:35:16Z, before this window's start and inside the window issue 077 timed by published_at. Issue 077 did not use this URL. This issue still times the release by published_at and does not treat created_at as the publication instant. None of the four is marked as a pre-release. Issue 070 already used the browser-use 1.0.5 URL, and issue 071 already used the 1.0.6 URL. This issue uses 1.0.8. The 1.0.7 tag has published_at 2026-11-20T20:01:20Z and created_at 2026-11-20T20:01:07Z, before this window. The 1.0.8rc1 tag has published_at 2026-11-20T22:48:28Z, is marked as a pre-release, and is also before the start. This issue does not backfill 1.0.7 and does not give the rc an item. Issue 072 already used the vLLM v0.34.0 URL. This issue uses v0.34.0 in the vllm-omni repository and does not restate the vLLM upgrade table issue 072 already recorded. The same-day Qwen Code desktop tag desktop-v0.28.4 has published_at 2026-11-22T12:52:42Z and the same created_at as v0.28.4, 2026-11-22T11:51:07Z. GitHub does not mark it as a pre-release. Its notes are a generated pull-request list. This issue uses v0.28.4, which has a highlight section, does not list the desktop URL as a source, and does not copy that list into the coding-agent item. Three later MCP registry tags the same day are regular releases: v1.8.13 has published_at 2026-11-22T16:29:50Z and created_at 2026-11-22T13:33:28Z; v1.8.14 has published_at 2026-11-22T21:02:28Z and created_at 2026-11-22T20:47:31Z; v1.8.15 has published_at 2026-11-22T22:00:43Z and created_at 2026-11-22T21:48:32Z. This issue uses v1.8.12, the tag whose notes state the OSV check, does not list the later three URLs as sources, and does not fold those notes into this item. The llama.cpp tags this search saw inside the window are marked as pre-releases. The latest of them, b12642, has published_at 2026-11-23T01:47:24Z and created_at 2026-11-22T19:04:21Z. This issue does not give it an item. The Gemini CLI nightly tag v0.71.0-nightly.20261123.geecccfcd5 has published_at 2026-11-23T01:21:53Z and created_at 2026-11-23T01:14:29Z. Its notes are only a compare link, and GitHub marks it as a pre-release, so this issue does not give it an item. LobeHub v2.3.5 has published_at 2026-11-22T09:47:39Z and created_at 2026-11-22T09:46:34Z. Its notes are a cover-color backport and a share-lock test. This issue does not give it an item. sherpa-onnx v2.0.3 has published_at 2026-11-22T10:53:37Z and created_at 2026-11-22T10:36:20Z. This issue does not give it an item. codecompanion.nvim v20.3.0 has published_at 2026-11-22T20:23:02Z and created_at 2026-11-22T20:22:39Z. Its notes add ACP subagents and send session/close before the agent process ends. This issue does not give it an item. The newest Claude Code tag returned is still v2.1.330, with published_at 2026-11-20T22:32:56Z, before the start. The newest Cline tag returned is still v4.1.27, with published_at 2026-11-21T06:05:04Z, before the start. The newest Transformers tag returned is still v5.24.0, with published_at 2026-11-21T12:28:26Z, before the start. The newest LiteLLM tag returned is v1.112.0-dev.2, with published_at 2026-11-21T20:13:44Z. GitHub marks it as a pre-release, and it is before the start. prime-rl v0.11.0 has published_at 2026-11-22T01:49:08Z, before the start, and issue 077 already used that URL. The newest stable pydantic-ai tag returned is still v2.71.0, with published_at 2026-11-19T02:13:05Z. The clai2-bleeding tag higher in that list is marked as a pre-release, with published_at 2026-10-06T01:25:23Z and created_at 2026-11-23T01:17:47Z. This issue times releases by published_at, so that tag stays outside the window. The visible date on the Hugging Face post DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency is November 18, 2026, with no clock time. The visible date on Introducing harness adapters is November 20, 2026, with no clock time. Both dates are before this window, so this issue does not use those URLs. Cost, cache and check claims come from the cited pages and were not independently rerun by TUJL. Our editorial view: keep the stage-level rejection of model_runner: v1 in the vLLM-Omni notes apart from the vLLM project's own removal of Model Runner V1, already recorded in issue 072; keep the artifact-library page the Qwen Code notes say is implemented apart from the documentation line in the same notes that still says it is not implemented yet; keep the cache-backed judge in browser-use 1.0.8 apart from the verdict fields and the default model already recorded in issues 070 and 071; and keep the OSV check stated on v1.8.12 apart from the production sweep stated only on the three later tags from the same day, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "浏览器代理 / Browser agent",
      "source": "browser-use · GitHub Release",
      "date": "2026.11.22 11:30:41 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-22T03:30:41Z",
      "zhTitle": "browser-use 1.0.8 把判分并进同一轮，并缩小网关预留额度",
      "enTitle": "browser-use 1.0.8 judges inside the same turn and reserves less gateway credit",
      "href": "https://github.com/browser-use/browser-use/releases/tag/1.0.8",
      "zh": "browser-use 1.0.8 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-22T03:30:41Z。同一记录的 created_at 为 2026-11-22T03:30:22Z，也在窗口内，本条仍以 published_at 计时。安装行是 pip install 'browser-use==1.0.8'。070期已经记录 1.0.5 的判分字段，071期已经记录 1.0.6 把默认模型改成 BU 4.0。本条记录 1.0.8，不重述那些字段和价格。说明写明，判分改为这一次运行里的多一轮，因此提供方从自己的缓存读取这次运行，而不再把轨迹重新计费。返回的仍是同一组判分字段，包括 gotchas（#6457）。没有 API key 时，在 SSH 或无界面机器上，运行会打印一个链接和一个代码，在任意设备上批准后继续（#6427）。DeepSeek 与 Qwen 处于思考模式时，如果模型在步数上限处拒绝被强制的最后一次调用，代理会不再强制、再问一次，于是这次运行能返回它的答案（#6453）。bu.type 不再打印密码字段的值（#6455）。Browser(cdp_url=...) 改为附着已经打开的那一个页面，而不再新开空白标签（#6456）。Browser Use 网关调用改为为 16,384 个输出 token 预留额度，原先是 32,768，因此较小的余额不会在运行中途被拒绝（#6461）。说明还列出拉取请求 #6489 与 #6504，没有写出这两处改了什么。本条不展开这两个编号。1.0.7 的发布时间早于本窗口，见编者说明，本条不把 1.0.7 的行为写进来。上述行为来自这一标签的发布说明，本刊未运行该库。GitHub published_at 为 2026-11-22T03:30:41Z。",
      "en": "browser-use 1.0.8 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-22T03:30:41Z. created_at on the same record is 2026-11-22T03:30:22Z, also inside the window; this item still times the release by published_at. The install line is pip install 'browser-use==1.0.8'. Issue 070 already recorded the 1.0.5 verdict fields, and issue 071 already recorded 1.0.6 making BU 4.0 the default model. This item records 1.0.8 and does not restate those fields or prices. The notes say the judge asks as one more turn of the run, so the provider reads the run from its cache instead of billing the trace again. It returns the same verdict fields, gotchas included (#6457). With no API key over SSH or on a headless machine, the run prints a link and a code to approve on any device, then continues (#6427). For DeepSeek and Qwen in thinking mode, when the model refuses the forced final call at the step limit, the agent asks again without forcing, so the run returns its answer (#6453). bu.type never prints a password field's value (#6455). Browser(cdp_url=...) attaches the one page already open instead of a new blank tab (#6456). Browser Use gateway calls reserve credit for 16,384 output tokens instead of 32,768, so small balances are not refused mid-run (#6461). The notes also list pull requests #6489 and #6504 without saying what those two change. This item does not expand those numbers. The 1.0.7 publication time is before this window; see the editor's note. This item does not import 1.0.7 behavior. The behavior above comes from this tag's release notes. TUJL did not run the library. GitHub published_at is 2026-11-22T03:30:41Z."
    },
    {
      "index": "02",
      "label": "工具登记 / Tool registry",
      "source": "MCP registry · GitHub Release",
      "date": "2026.11.22 16:38:33 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-22T08:38:33Z",
      "zhTitle": "MCP registry v1.8.12 打开用量收集，并按 OSV 检查包",
      "enTitle": "MCP registry v1.8.12 turns on usage collection and checks packages against OSV",
      "href": "https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.12",
      "zh": "MCP registry v1.8.12 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-22T08:38:33Z。同一记录的 created_at 为 2026-11-22T02:01:59Z，也在窗口内，本条仍以 published_at 计时。比较范围是 v1.8.11...v1.8.12。同日更晚的 v1.8.13、v1.8.14 与 v1.8.15 见编者说明。本条只记录 v1.8.12，不把后三个说明折进来。变更写明：把 registry v1.8.11 提升到生产，并打开用量收集器（#1886）；去掉四块已被相邻面板覆盖的仪表板（#1887）；生产环境的告警规则和 Discord 联系点改由仓库管理（#1888）；用量历史备份若一天没有成功则告警（#1890）；发布时以及每天，对照 OSV 的恶意软件记录检查包（#1889）。说明还列出两组依赖更新（#1879、#1867）。本条不展开那两组依赖的版本号。上述范围来自这一标签的发布说明，本刊未运行该登记处。GitHub published_at 为 2026-11-22T08:38:33Z。",
      "en": "MCP registry v1.8.12 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-22T08:38:33Z. created_at on the same record is 2026-11-22T02:01:59Z, also inside the window; this item still times the release by published_at. The compare range is v1.8.11...v1.8.12. The later same-day tags v1.8.13, v1.8.14 and v1.8.15 are in the editor's note. This item records only v1.8.12 and does not fold those three notes into it. The changes say: promote registry v1.8.11 to production and switch on the usage collector (#1886); remove four dashboard panels that their neighbours already cover (#1887); manage production's alert rules and Discord contact point from the repository (#1888); alert when the usage history backup has not succeeded for a day (#1890); and check packages against OSV malware records on publish and daily (#1889). The notes also list two dependency-group bumps (#1879, #1867). This item does not expand the version numbers in those bumps. The scope above comes from this tag's release notes. TUJL did not run the registry. GitHub published_at is 2026-11-22T08:38:33Z."
    },
    {
      "index": "03",
      "label": "编程助手 / Coding agent",
      "source": "Qwen Code · GitHub Release",
      "date": "2026.11.22 20:04:21 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-22T12:04:21Z",
      "zhTitle": "Qwen Code v0.28.4 加上工件库页面，并在启动时收紧状态目录",
      "enTitle": "Qwen Code v0.28.4 adds an artifact library and tightens the state directory at spawn",
      "href": "https://github.com/QwenLM/qwen-code/releases/tag/v0.28.4",
      "zh": "Qwen Code v0.28.4 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-22T12:04:21Z。同一记录的 created_at 为 2026-11-22T11:51:07Z，也在窗口内，本条仍以 published_at 计时。比较范围是 v0.28.3...v0.28.4。同日较晚的桌面标签见编者说明。本条只记录 v0.28.4，不引进桌面说明里的拉取请求列表。破坏性变更一节写明没有已知的破坏性变更。要点写明：Web Shell 的本地 daemon 模式增加工作区工件库页面，带渐进扫描和流式更新（#18071）；Web Shell 聊天增加共用的 ChatSurface、Continue 标记、建议芯片，并修正会话的移动端布局（#17952、#18044、#17918、#17883、#18011）；核心加入内置的 Gemini 4 推理默认值（#18039），这一行没有写出具体力度；Local Runtime 改为在进程启动时创建状态目录，权限为 owner-private，而不再等到创建提供方时（#17964）；命令迁移只创建 Markdown 目标，目标冲突时保留原来的 TOML（#17873）；扩展现在能加载带 UTF-8 BOM 保存的清单（#15786）。Web Shell 一节还写明：思考行展开后会画出 Mod 改写，同时保留存储的原始思考和收起后的 Done thinking 行（#17920）；侧栏对上一轮被打断、需要继续的会话显示 Continue 标记（#18044）；ChatSurface 的准入锁限定在所属会话，并绑定 loadOlder（#18066）。托管代理一节写明：空白的 workspace-cwd 在预检里视为未配置，而不再使用当前工作目录（#17965）；Hosted Harness 在构建、关闭和接管那个延迟创建的客户端时使用同一把锁（#17961）；托管遥测增加一个客户端通道值，用来把 Managed Agent 会话和普通 daemon 流量区分开（#18022）；OSS 对象键改用可读的租户、工作区和会话标识（#18048）。ACP 通道把忙碌的代理在更长时间内视为健康，并在通道关闭时记下证据（#18028）。自动修复在展示失败检查的证据之前，去掉日志摘录里的终端控制字符和 Unicode 双向控制符（#16748）。文档一节写明，正在运行的交互会话会自动采用 mcpServers 的变更，重启只留作排障（#17743）。同一份说明的其他变更里还有两行文档：一行提议只读的工作区工件库页面（#18036），另一行把该设计标成已接受但尚未实现（#18063）。功能列表则把 #18071 写成实现了本地 daemon 的工件库页面。本条按说明并列这三处，不把它们合成一个实现状态。完整变更列表写明 54 个拉取请求。本条不把其余 CI 与测试改动逐条改写成新行为。上述范围来自这一标签的发布说明，本刊未运行该助手。GitHub published_at 为 2026-11-22T12:04:21Z。",
      "en": "Qwen Code v0.28.4 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-22T12:04:21Z. created_at on the same record is 2026-11-22T11:51:07Z, also inside the window; this item still times the release by published_at. The compare range is v0.28.3...v0.28.4. The later desktop tag from the same day is in the editor's note. This item records only v0.28.4 and does not import the pull-request list in the desktop notes. The breaking-changes section says there are no known breaking changes. The highlights say Web Shell local daemon mode adds a workspace artifact library page with progressive scanning and streaming updates (#18071); Web Shell chat adds a shared ChatSurface, Continue badges, suggestion chips, and mobile layout fixes for sessions (#17952, #18044, #17918, #17883, #18011); core adds built-in Gemini 4 reasoning defaults (#18039), and that line does not state the effort levels; Local Runtime now creates its state directory at process spawn with owner-private permissions, instead of during provider creation (#17964); command migration creates Markdown destinations exclusively and preserves the original TOML on destination conflicts (#17873); and extensions now load manifests saved with a UTF-8 BOM (#15786). The Web Shell section also says expanded thinking rows draw Mod rewrites while preserving the original stored thought and the collapsed Done thinking line (#17920); the sidebar shows a Continue badge for sessions whose last turn was interrupted and needs continuation (#18044); and ChatSurface admission locks are scoped to the owning session, with loadOlder bound (#18066). The managed-agent section says a blank workspace-cwd is treated as unconfigured in preflight instead of using the current working directory (#17965); Hosted Harness uses one lock when building, closing, and adopting the lazily built client (#17961); managed telemetry adds a client-channel value so Managed Agent sessions can be distinguished from ordinary daemon traffic (#18022); and OSS object keys use readable tenant, workspace, and session identifiers (#18048). ACP channel liveness treats busy agents as healthy longer and records evidence when channels are closed (#18028). Autofix strips terminal control characters and Unicode bidi overrides from failed-check log excerpts before display (#16748). A documentation line says running interactive sessions automatically pick up mcpServers changes, with restart kept only as a troubleshooting fallback (#17743). Two other documentation lines in the same notes propose a read-only workspace artifact library page (#18036) and mark that design accepted but not yet implemented (#18063). The feature list instead says #18071 implements the local-daemon artifact library page. This item keeps those three lines as the notes write them and does not merge them into one implementation status. The complete change list says 54 pull requests. This item does not rewrite the remaining CI and test changes as new behavior. The scope above comes from this tag's release notes. TUJL did not run the assistant. GitHub published_at is 2026-11-22T12:04:21Z."
    },
    {
      "index": "04",
      "label": "多模态推理 / Multimodal inference",
      "source": "vLLM-Omni · GitHub Release",
      "date": "2026.11.22 20:46:29 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-22T12:46:29Z",
      "zhTitle": "vLLM-Omni v0.34.0 把阶段改到 Model Runner V2，并拒绝 v1",
      "enTitle": "vLLM-Omni v0.34.0 moves stages to Model Runner V2 and rejects v1",
      "href": "https://github.com/vllm-project/vllm-omni/releases/tag/v0.34.0",
      "zh": "vLLM-Omni v0.34.0 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-22T12:46:29Z。同一记录的 created_at 为 2026-11-21T10:35:16Z，早于本窗口起点。077期的窗口覆盖这个 created_at，但 077期按 published_at 计时，没有使用这个网址。本条仍以 published_at 计时，不把 created_at 当作发布时间。072期已经用过 vLLM v0.34.0 的网址。本条记录的是 vllm-omni 仓库里的 v0.34.0，不重述 072期已经写过的 vLLM 升级表。说明写明，此版包含 776 个已合并的拉取请求，来自 185 位贡献者，其中 61 位是第一次贡献。它写明 vLLM-Omni v0.34.0 变基到 vLLM 0.34.0，并把自回归阶段和生成阶段改到 Model Runner V2。新增的模型包括 MiniMax-H3-Image、FLUX.3（Klein）、PAN2、Hy-Nomas-Diffusers、Haru-4B，以及 Ming-3.0 语音模型，同时有分布式双工会话和实时视频流。要点写明，阶段副本可以部署到彼此独立的运行时，每个会话仍固定在自己的副本组；外部编排器也可以把阶段分开跑，并通过实验性的 /v1/run 选择副本（#10422、#6883、#9729）。CausVid 可以在生成进行时送出已经解码的片段。Noisy Pipeline Parallelism 可以跨请求批处理兼容的工作，同时保留每个会话的 KV 状态（#9926、#10049、#10122）。模型一节写明：MiniMax-H3-Image 经 Images API 做文生图和多参考编辑；FLUX.3（Klein）带原生 BF16 流水线（#10120、#9523）。PAN2 做文生视频和图生视频；Hy-Nomas-Diffusers 做受相机控制的自回归视频流；Kandinsky 6 增加 Lite 与 Pro Distil 检查点，并集成 HD 与 Full HD 超分（#8602、#9338、#9027）。语音部分写明 Haru-4B 做全双工口语对话，Ming-3.0-TTS Tiny 做流式语音和声音克隆，Ming-3.0 Audio Flash 做语音识别和流式口语回复，Stable Audio 3 Medium 做立体声文生音频（#10301、#9119、#9130、#3973）。分割与深度部分写明 SAM 3 与 SAM 3.1 做可提示的图像分割，SAM 3 做视频分割和跟踪，Video Depth Anything 做视频深度（#9543、#9579、#9714）。机器人部分写明加入 NVIDIA Alpamayo 2 Super，以及面向 DROID 与 YAM 的原生 Runway Praxis-1 策略，恢复 π0.5，并让多阶段策略经 OpenPI 提供（#9133、#10197、#10204、#9080、#9120）。运行时部分写明降低并发请求下的 Omni 前缀缓存开销，并为自回归 KV 缓存以及下游语音阶段需要的隐藏状态加入 LMCache 的 CPU 卸载（#9162、#9193、#1330）。兼容且放在一起的 HunyuanImage3 自回归阶段和 DiT 阶段可以通过 CUDA IPC 共享一份骨干权重（#9333、#9761、#9850）。实时部分写明扩大了双工工具调用控制，为轮次式 Realtime 加入语义语音活动检测，并改进 /v1/realtime 的协议兼容（#9909、#9170、#9265）。实验性的 Mooncake 可以在支持的 Qwen3-Omni 轮次式和双工部署里复用 KV 与隐藏状态。MiniCPM-o 4.5 Talker 可以重放多帧 CUDA 图（#10107、#10321、#10288）。扩散部分写明 MiniMax-H3 增加更多 FastH3 检查点、ControlNet Union 服务，以及跨请求从缓存 latent 继续视频（#9167、#7479、#9342）。实验性的 Physis Same-Step 流水线覆盖 Wan、LTX 与 MiniMax-H3；支持的扩散流水线也可以在单个 rank 上、一次去噪调用里跑分类器无关引导的两个分支（#9154、#9797）。量化部分写明，在 CUDA 上为扩散 transformer 加入 ConvRot INT8 与 INT4，并支持 MiniMax-H3 的 AutoRound 检查点，其 DiT 为 MXFP8、文本编码器为 MXFP4（#9343、#9363）。服务部分写明加入 OpenTelemetry 推理追踪，并为支持的音频生成加入可选的 AudioSeal 水印（#8836、#7366）。平台部分写明 Ascend 栈更新到 vLLM-Ascend 0.34.0，为支持的 ROCm 工作负载加入 Model Runner V2 部署配置，并打开 Intel XPU 的睡眠模式和扩散图捕获（#10773、#10819、#10820、#5485、#9306）。破坏性变更写明必须使用 Model Runner V2。任何阶段解析到 model_runner: v1 的部署会在启动时失败。受影响的配置包括完整的 Drama 3 与 Fish-Omni 语音服务、PersonaPlex 双工、VibeVoice、LFM3-Omni，以及 Qwen3-TTS 与 Qwen3-Omni 的 MUSA 覆盖。说明同时去掉 JoyAI-Image-Edit 的第一方支持，并去掉 --shm-threshold-bytes 这个命令行选项（#10365、#10393、#9992）。本条不把那 776 个拉取请求改写成另一份清单。上述范围来自这一标签的发布说明，本刊未运行该服务。GitHub published_at 为 2026-11-22T12:46:29Z。",
      "en": "vLLM-Omni v0.34.0 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-22T12:46:29Z. created_at on the same record is 2026-11-21T10:35:16Z, before this window's start. That created_at falls inside issue 077's window, but issue 077 times releases by published_at and did not use this URL. This item still times the release by published_at and does not treat created_at as the publication instant. Issue 072 already used the vLLM v0.34.0 URL. This item records v0.34.0 in the vllm-omni repository and does not restate the vLLM upgrade table issue 072 already recorded. The notes say this release includes 776 merged pull requests from 185 contributors, including 61 first-time contributors. They say vLLM-Omni v0.34.0 rebases onto vLLM 0.34.0 and moves autoregressive and generation stages to Model Runner V2. The new models named are MiniMax-H3-Image, FLUX.3 (Klein), PAN2, Hy-Nomas-Diffusers, Haru-4B, and Ming-3.0 speech models, alongside distributed duplex serving and realtime video streaming. The highlights say stage replicas can be deployed across independent runtimes while each session stays pinned to its replica group, and external orchestrators can run stages independently and select replicas through the experimental /v1/run API (#10422, #6883, #9729). CausVid can deliver decoded chunks while generation is in progress. Noisy Pipeline Parallelism can batch compatible work across requests while preserving each session's KV state (#9926, #10049, #10122). The model section says MiniMax-H3-Image does text-to-image generation and multi-reference editing through the Images API, and FLUX.3 (Klein) has a native BF16 pipeline (#10120, #9523). PAN2 does text-to-video and image-to-video. Hy-Nomas-Diffusers does camera-controlled autoregressive video streaming. Kandinsky 6 gains Lite and Pro Distil checkpoints with integrated HD and Full HD super-resolution (#8602, #9338, #9027). The speech section says Haru-4B does full-duplex spoken dialogue, Ming-3.0-TTS Tiny does streaming speech and voice cloning, Ming-3.0 Audio Flash does speech recognition and streamed spoken responses, and Stable Audio 3 Medium does stereo text-to-audio (#10301, #9119, #9130, #3973). The segmentation and depth section says SAM 3 and SAM 3.1 do promptable image segmentation, SAM 3 does video segmentation and tracking, and Video Depth Anything does video depth estimation (#9543, #9579, #9714). The robotics section says the release adds NVIDIA Alpamayo 2 Super and native Runway Praxis-1 policies for DROID and YAM, restores π0.5, and serves multi-stage policies over OpenPI (#9133, #10197, #10204, #9080, #9120). The runtime section says Omni prefix-cache overhead under concurrent requests is reduced, and LMCache CPU offloading is added for the autoregressive KV cache and for the hidden states downstream speech stages need (#9162, #9193, #1330). Compatible, colocated HunyuanImage3 autoregressive and DiT stages can share one copy of the backbone weights through CUDA IPC (#9333, #9761, #9850). The realtime section says duplex tool-call controls are expanded, semantic voice activity detection is added to turn-based Realtime, and /v1/realtime protocol compatibility is improved (#9909, #9170, #9265). Experimental Mooncake can reuse KV cache and hidden state for supported Qwen3-Omni turn-based and duplex deployments. The MiniCPM-o 4.5 Talker can replay multi-frame CUDA graphs (#10107, #10321, #10288). The diffusion section says MiniMax-H3 gains more FastH3 checkpoints, ControlNet Union serving, and video continuation from cached latents across requests (#9167, #7479, #9342). Experimental Physis Same-Step pipelines cover Wan, LTX, and MiniMax-H3. Supported diffusion pipelines can also run both classifier-free guidance branches in one denoiser call on a single rank (#9154, #9797). The quantization section says ConvRot INT8 and INT4 are added for diffusion transformers on CUDA, and the MiniMax-H3 AutoRound checkpoint is supported, with an MXFP8 DiT and an MXFP4 text encoder (#9343, #9363). The serving section says OpenTelemetry inference tracing is added, and AudioSeal watermarking is opt-in for supported audio generation (#8836, #7366). The platform section says the Ascend stack is updated to vLLM-Ascend 0.34.0, Model Runner V2 deployment profiles are added for supported ROCm workloads, and Intel XPU sleep mode and diffusion graph capture are enabled (#10773, #10819, #10820, #5485, #9306). The breaking-change section says Model Runner V2 is required. Deployments that resolve any stage to model_runner: v1 fail at startup. The affected profiles named are full Drama 3 and Fish-Omni speech serving, PersonaPlex duplex, VibeVoice, LFM3-Omni, and the Qwen3-TTS and Qwen3-Omni MUSA overrides. The notes also remove first-party support for JoyAI-Image-Edit and drop the --shm-threshold-bytes CLI option (#10365, #10393, #9992). This item does not turn those 776 pull requests into a second list. The scope above comes from this tag's release notes. TUJL did not run the server. GitHub published_at is 2026-11-22T12:46:29Z."
    }
  ]
};

export type Story = { index: string; label: string; source: string; date: string; publishedAt?: string; zhTitle: string; enTitle: string; zh: string; en: string; href: string };
export type Issue = { number: string; date: string; windowStart?: string; windowEnd?: string; readingTime: string; heading: string; noteTitle: string; noteZh: string; noteEn: string; stories: Story[] };

export const issue077: Issue = {
  "number": "077",
  "date": "2026-11-22",
  "readingTime": "约 7 分钟",
  "windowStart": "2026-11-21T01:55:00Z",
  "windowEnd": "2026-11-22T01:55:00Z",
  "heading": "模型库把缓存参数改名为 cache，编程扩展放宽 read_files，LTS 网关让无密钥部署返回 401，训练库换上 Mega MoE",
  "noteTitle": "四则都以 GitHub 发布记录的 published_at 计时。",
  "noteZh": "本期按北京时间11月21日09:55至11月22日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。076期已经覆盖到21日09:55，该时刻及之前的条目留在窗外，22日09:55之后的条目也不计入。只收录严格晚于 2026-11-21T01:55:00Z、且不晚于 2026-11-22T01:55:00Z 的条目。Cline、Transformers、LiteLLM 与 prime-rl 都以 GitHub 发布记录的 published_at 为准，分别为 2026-11-21T06:05:04Z、2026-11-21T12:28:26Z、2026-11-21T21:35:07Z 与 2026-11-22T01:49:08Z。四条记录的 created_at 分别为 2026-11-21T05:37:41Z、2026-11-21T12:09:57Z、2026-11-21T19:25:12Z 与 2026-11-22T01:48:59Z，都落在窗口内，本期仍以 published_at 计时。四则都没有被标成预发布。069期已经用过 Transformers v5.23.0 的网址，本期使用 v5.24.0。070期已经用过 LiteLLM v1.108.9 的网址，076期已经把 v1.110.2 单列。本期使用 1.108 长期支持线上更后的 v1.108.15。它的 published_at 晚于 v1.110.2，本条不把它写成 1.110.2 的后继版本。同日的 v1.112.0-dev.2，published_at 为 2026-11-21T20:13:44Z，GitHub 把它标为预发布，本期不单列。Cline 同日更早还有三个正式标签：sdk/sdk/v0.2.1 的 published_at 为 2026-11-21T05:19:22Z，created_at 为 2026-11-21T05:19:10Z；cli-v3.0.75 的 published_at 为 2026-11-21T05:30:43Z，created_at 为 2026-11-21T05:20:47Z；desktop-v0.0.50 的 published_at 为 2026-11-21T05:54:06Z，created_at 为 2026-11-21T05:35:52Z。扩展、CLI 与桌面说明有多处相同的句子。SDK 说明写明目录从 6,457 个模型改为 7,621 个，并把文件内容上限写成 50k；扩展说明没有这两处数字。CLI 说明写明，一次性运行（提示参数或管道里的标准输入）改为从 yolo 模式开始，而不再是 act 模式，并列出保持 act 模式的情形。本期采用较晚的扩展标签 v4.1.27，不把另外三个网址列为来源，也不把 SDK 的两个数字写进扩展这一条。本次从 GitHub 发布列表里看到的、落在窗口内的 llama.cpp 标签都被标成预发布。其中最晚的 b12624，published_at 为 2026-11-22T01:47:52Z，created_at 为 2026-11-21T21:27:25Z。本期不单列。LMCache v0.5.8rc3 的 ROCm 标签，published_at 为 2026-11-21T03:21:39Z，created_at 为 2026-11-21T01:05:05Z，早于起点；说明是一张 rc 轮子的安装命令。同一分钟内还有另外几份平台标签。本期不单列。Phoenix 的 arize-phoenix-v22.0.1，published_at 为 2026-11-21T20:28:01Z，说明只有一项修复，变更日志标题里的日期是 2026-11-21，没有钟点。本期不单列。Prime CLI v0.23.1，published_at 为 2026-11-21T23:45:46Z，说明是依赖更新，其中写明把 anyio 升到 4.14.2，并标出 GHSA-82r6-8w77-94w6。本期不展开该公告，也不单列。Qwen Code 的夜间标签 v0.28.3-nightly.20261121.56ef346859，published_at 为 2026-11-21T22:28:14Z；Gemini CLI 的夜间标签 v0.71.0-nightly.20261122.geecccfcd5，published_at 为 2026-11-22T01:20:22Z；LanceDB v0.42.0-beta.21，published_at 为 2026-11-21T09:42:13Z。三则都被标成预发布，本期不单列。Claude Code 最新返回的标签仍是 v2.1.330，published_at 为 2026-11-20T22:32:56Z，早于起点。OpenAI 开发者博客《Time awareness and async input for personal agents》在本次抓取的页面里没有 JSON-LD 的 datePublished，也没有 article:published_time，因此不收入。NVIDIA Nemotron-Labs-Sigma 模型卡写明的 Hugging Face 发布日期是 11/12/2026，早于本窗口。076期已经写过 Inkling 2 Mini 在 Unsloth 说明里的两处规模，以及那两篇博客早于当时窗口的 datePublished。本期的模型库一条只采用 Transformers v5.24.0 的发布说明，不引进那两篇博客的参数，也不把博客网址列为来源。速度、内存、并发和费用说法均来自各原文，本刊未独立复跑。我们的编辑判断是：把 Transformers 写明的重命名期限和仍可用的旧参数名、Cline 扩展说明里的字符上限与同日 SDK 说明里的另一处上限、LiteLLM 这条 LTS 补丁和 076期已经记录的 1.110.2、以及 prime-rl 说明里的测量和它标成破坏性变更的默认值分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 21, 09:55 to November 22, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 076 already covered through 09:55 on November 21, so items at or before that moment stay outside this window, as do items after 09:55 on November 22. Items must be strictly after 2026-11-21T01:55:00Z and at or before 2026-11-22T01:55:00Z. The Cline, Transformers, LiteLLM and prime-rl items use published_at from the GitHub release records: 2026-11-21T06:05:04Z, 2026-11-21T12:28:26Z, 2026-11-21T21:35:07Z and 2026-11-22T01:49:08Z. created_at on those four records is 2026-11-21T05:37:41Z, 2026-11-21T12:09:57Z, 2026-11-21T19:25:12Z and 2026-11-22T01:48:59Z. All four fall inside the window, and this issue still times each release by published_at. None of the four is marked as a pre-release. Issue 069 already used the Transformers v5.23.0 URL; this issue uses v5.24.0. Issue 070 already used the LiteLLM v1.108.9 URL, and issue 076 gave v1.110.2 its own item. This issue uses the later tag v1.108.15 on the 1.108 long-term line. Its published_at is later than v1.110.2, and this issue does not describe it as the successor of 1.110.2. The same-day tag v1.112.0-dev.2 has published_at 2026-11-21T20:13:44Z and is marked as a pre-release, so this issue does not give it an item. Three earlier Cline tags the same morning are regular releases: sdk/sdk/v0.2.1 has published_at 2026-11-21T05:19:22Z and created_at 2026-11-21T05:19:10Z; cli-v3.0.75 has published_at 2026-11-21T05:30:43Z and created_at 2026-11-21T05:20:47Z; desktop-v0.0.50 has published_at 2026-11-21T05:54:06Z and created_at 2026-11-21T05:35:52Z. The extension, CLI and desktop notes share several sentences. The SDK notes state a catalog change from 6,457 models to 7,621 and a 50k file-content cap. The extension notes do not state those two figures. The CLI notes say one-shot runs, a prompt argument or piped stdin, now start in yolo mode instead of act mode, and they list the cases that stay in act mode. This issue uses the later extension tag v4.1.27, does not list the other three URLs as sources, and does not copy the SDK's two figures into the extension item. The llama.cpp tags this search saw inside the window are marked as pre-releases. The latest of them, b12624, has published_at 2026-11-22T01:47:52Z and created_at 2026-11-21T21:27:25Z. This issue does not give it an item. The LMCache v0.5.8rc3 ROCm tag has published_at 2026-11-21T03:21:39Z and created_at 2026-11-21T01:05:05Z, before the start. Its notes are an install command for an rc wheel. Other platform tags of the same rc were published within the same minute. This issue does not give them an item. Phoenix arize-phoenix-v22.0.1 has published_at 2026-11-21T20:28:01Z. Its notes are a single fix, and the changelog heading date is 2026-11-21 with no clock time. This issue does not give it an item. Prime CLI v0.23.1 has published_at 2026-11-21T23:45:46Z. Its notes are dependency updates, including a bump of anyio to 4.14.2 marked GHSA-82r6-8w77-94w6. This issue does not expand on that advisory and does not give the tag an item. The Qwen Code nightly tag v0.28.3-nightly.20261121.56ef346859 has published_at 2026-11-21T22:28:14Z. The Gemini CLI nightly tag v0.71.0-nightly.20261122.geecccfcd5 has published_at 2026-11-22T01:20:22Z. LanceDB v0.42.0-beta.21 has published_at 2026-11-21T09:42:13Z. All three are marked as pre-releases, so this issue does not give them items. The newest Claude Code tag returned is still v2.1.330, with published_at 2026-11-20T22:32:56Z, before the start. The OpenAI Developers post Time awareness and async input for personal agents had no JSON-LD datePublished and no article:published_time on the page fetched for this issue, so it is not included. The NVIDIA Nemotron-Labs-Sigma model card states a Hugging Face release date of 11/12/2026, before this window. Issue 076 already recorded the two size wordings for Inkling 2 Mini in the Unsloth notes, and the datePublished values of those two blog posts were before that window. The model-library item in this issue uses only the Transformers v5.24.0 release notes. It does not import figures from those posts and does not list the blog URLs as sources. Speed, memory, concurrency and cost claims come from the cited pages and were not independently rerun by TUJL. Our editorial view: keep the rename deadlines and the old argument names Transformers still accepts, the character cap in the Cline extension notes and the other cap in the same-day SDK notes, this LiteLLM LTS patch and the 1.110.2 item already recorded in issue 076, and the measurements in the prime-rl notes and the defaults those notes mark as breaking, apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "编程助手 / Coding agent",
      "source": "Cline · GitHub Release",
      "date": "2026.11.21 14:05:04 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-21T06:05:04Z",
      "zhTitle": "Cline v4.1.27 放宽 read_files，并按模型拟合推理力度",
      "enTitle": "Cline v4.1.27 stops cutting read_files and fits reasoning effort to the model",
      "href": "https://github.com/cline/cline/releases/tag/v4.1.27",
      "zh": "Cline v4.1.27 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-21T06:05:04Z。同一记录的 created_at 为 2026-11-21T05:37:41Z，也在窗口内，本条仍以 published_at 计时。同日更早的 SDK、CLI 与桌面标签见编者说明。本条只记录扩展标签 v4.1.27，不引进 SDK 说明里的模型总数和 50k 上限。新增部分写明：LM Studio 设置增加 API key 字段，供打开 Require Authentication 的服务器使用；MCP 选项卡在服务器把工具声明为只读时显示 read-only 标记；账户视图增加指向 Cline 网页应用数据使用偏好的 Privacy settings 链接；扩展包现在包含第三方许可声明。变更部分写明：没有已保存模型时，Cline 提供方改为从第一个免费模型开始，而不再是 Claude Sonnet 5.5，已保存的选择不动；推理力度下拉框显示新任务实际会使用的力度，并有一个 Default 项用来清除已保存的设置；保存提供方的 API key 或 base URL 之后会刷新模型列表，刷新失败（例如密钥被拒绝）会在模型选择器里显示为错误。read_files 的结果在送往模型的路上不再被截到 8k 字符。一次读取会完整到达，上限是该工具自己的 2000 行或大约 48k 字符。模型目录更新写明：从 models.dev 增加 94 个提供方，并去掉 Lilac 与 Tempr。Cline 推荐列表加入 Muse Ember。免费列表去掉 Reflection Beam、Laguna S 2.1 与 Solar Mini 4。ClinePass 去掉 DeepSeek V4.1 Flash、Mimo V2.6 Flash、Mimo V2.6 Pro、MiniMax M3、Qwen3.7 Plus 与 Qwen3.7 Max。另外 67 个提供方的默认模型有变动，多数改为 Kimi K3.1 Pro、Gemini 4 Neon（包括 gemini 与 vertex 提供方）或 DeepSeek V4.1 Flash 1017。修复部分写明：把推理力度选成 None 现在会被保存并发送；在此之前，Azure 上的 GPT-6 会保留默认力度并拒绝工具调用。关闭推理现在能到达带有已保存 Model Configuration 覆盖的自定义模型；在此之前，gpt-5.6 与 gpt-6 的 chat-completions 端点会拒绝每一次工具调用。在原生 OpenAI 提供方上，推理级别会按每个模型支持的范围拟合，因此 GPT-5.x 与 o 系列不再拒绝 max 与 Extra High。Reflection Beam 不再在压缩或切换模型之后，每一轮都返回 400 Missing required parameter: messages[n].reasoning_content。对目录没有描述的模型，压缩不再退回基本摘要。对 LiteLLM，当模型报告 max_output_tokens 时，不再把旧的 max_tokens 字段当作输入预算。被取消或失败的那一轮里的推理文本，不再出现在下一轮推理的开头。提交搜索把查询作为参数交给 git，因此带引号的搜索会匹配完整短语。安全一项写明 undici 升到 7.30.1，并写明它修复两个进程崩溃问题。本条不补充公告编号，也不描述触发方式。上述行为来自这一标签的发布说明，本刊未运行该扩展。GitHub published_at 为 2026-11-21T06:05:04Z。",
      "en": "Cline v4.1.27 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-21T06:05:04Z. created_at on the same record is 2026-11-21T05:37:41Z, also inside the window; this item still times the release by published_at. The earlier SDK, CLI and desktop tags from the same morning are in the editor's note. This item records only the extension tag v4.1.27 and does not import the SDK notes' model count or 50k cap. The added items say LM Studio settings gain an API key field for servers with Require Authentication turned on; the MCP tab shows a read-only badge on tools whose server declares them read-only; the Account view has a Privacy settings link to the Cline web app's data-use preferences; and the extension package now includes its third-party license notices. The changes say that, with no saved model, the Cline provider now starts on the first free model instead of Claude Sonnet 5.5, and saved selections are untouched. The reasoning-effort dropdown shows the effort a new task will actually use, and it has a Default entry that clears the saved setting. A provider's model list refreshes after its API key or base URL is saved, and a failed refresh, such as a rejected key, shows as an error in the model picker. read_files results are no longer cut to 8k characters on the way to the model. A read now arrives in full, up to the tool's own limit of 2000 lines or about 48k characters. The catalog refresh says it adds 94 providers from models.dev and drops Lilac and Tempr. The Cline recommended list adds Muse Ember. The free list drops Reflection Beam, Laguna S 2.1 and Solar Mini 4. ClinePass drops DeepSeek V4.1 Flash, Mimo V2.6 Flash, Mimo V2.6 Pro, MiniMax M3, Qwen3.7 Plus and Qwen3.7 Max. Default models change for 67 other providers, mostly to Kimi K3.1 Pro, Gemini 4 Neon, including the gemini and vertex providers, or DeepSeek V4.1 Flash 1017. The fixes say picking None for reasoning effort is now saved and sent. Before, GPT-6 on Azure kept its default effort and rejected tool calls. Turning reasoning off now reaches custom models that have saved Model Configuration overrides. Before, gpt-5.6 and gpt-6 chat-completions endpoints rejected every tool call. On the native OpenAI provider, the reasoning level is fitted to what each model supports, so max and Extra High are no longer rejected by GPT-5.x and o-series models. Reflection Beam no longer fails every turn with 400 Missing required parameter: messages[n].reasoning_content after a compaction or a model switch. Compaction no longer falls back to the basic summary on models the catalog does not describe. For LiteLLM, the legacy max_tokens field is no longer used as the input budget when the model reports max_output_tokens. Reasoning text from a turn that was cancelled or failed no longer shows up at the start of the next turn's reasoning. Commit search passes the query to git as arguments, so a quoted search matches the exact phrase. The security line says undici is raised to 7.30.1 and that this fixes two process-crash issues. This item adds no advisory numbers and does not describe how those crashes are reached. The behavior above comes from this tag's release notes. TUJL did not run the extension. GitHub published_at is 2026-11-21T06:05:04Z."
    },
    {
      "index": "02",
      "label": "模型库 / Model library",
      "source": "Transformers · GitHub Release",
      "date": "2026.11.21 20:28:26 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-21T12:28:26Z",
      "zhTitle": "Transformers v5.24.0 接入一批新模型，并把缓存参数改名为 cache",
      "enTitle": "Transformers v5.24.0 adds a set of models and renames the cache argument to cache",
      "href": "https://github.com/huggingface/transformers/releases/tag/v5.24.0",
      "zh": "Transformers v5.24.0 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-21T12:28:26Z。同一记录的 created_at 为 2026-11-21T12:09:57Z，也在窗口内，本条仍以 published_at 计时。069期已经用过 v5.23.0 的网址。本条记录 v5.24.0。说明里的新模型包括 Inkling 2 Mini。它被写成 Thinking Machines Lab 的多模态模型，接受文本和图像，生成文本，是 v5.23.0 里 Inkling 2 Small 的较小版本。解码器层数是 24 而不是 48。第 6 层到第 17 层运行三次，作为补偿。一个学到的消息传递机制，把上一遍的残差混进每个循环层的注意力和混合专家输入。解码器隐藏维度是 2304，每个 token 路由到 128 个专家中的 8 个。图像编码器、分词器和处理器与 Inkling 2 Small 相同。研究检查点 TML-d24-varloop-research 架构相同，但循环次数可变。两份检查点都含 NVFP4 与 MXFP8 量化层，加载时反量化。076期已经记录 Unsloth 说明里的 26.4B 与 26B（5.4 active）。本条不引进那两个写法，也不把说明里链到的两篇博客当作额外来源。Apertus 1.5 来自 Swiss AI Initiative，接受文本、图像和音频，生成文本。图像用 EMU3.5 视觉分词器，音频用 WavTokenizer。媒体分词器把图像和音频变成离散 token，与文本放在同一个输入词表里。输出词表只有文本 token，因此不支持图像和音频生成。WavTokenizer 把 24 kHz 单声道音频编成离散 token，码本只有一个，按检查点为每秒 40 或 75 个 token，也可以从这些 token 重建音频。训练该编解码器不受支持。每秒 40 token 的变体是 Apertus 1.5 的音频分词器。Dory 是 NVIDIA 的循环语言模型，用归一化 GPT 架构，滑动窗口注意力与全注意力交替。同一组层被反复使用，循环次数可以在同一检查点上在推理时更改。HY4-VL 把 HYV4 混合专家文本骨干和视觉编码器合在一起，支持动态分辨率，并用 mRoPE 表示时间和空间位置。Omnilingual ASR 来自 Meta FAIR，说明写明覆盖 1,600 种以上语言。CTC 头做非自回归贪心解码，音频语言模型头把音频嵌入投到 Llama 解码器。两种都有 300M、1B、3B 与 7B。语言代码是可选项。Lara Mini 来自 Translated，总参数 7.2B，每个 token 活跃参数 0.6B。权重以 CC BY-NC-SA 4.0 发布在有门禁的仓库，说明写明非商业使用。SarvamMLA 是 Sarvam-105B 的架构，105B 参数，128 个路由专家、每个 token 8 个活跃，另有 1 个共享专家，YaRN 上下文写明到 131K token。SarvamMoE 是 Sarvam-30B 的架构，30B 参数，128 个路由专家、每个 token 6 个活跃，另有 1 个共享专家。自动类用 GLM-4-MoE 的实现加载它。EXAONE 覆盖 LG AI Research 的 EXAONE 3.0、EXAONE 3.5 与 EXAONE Deep。架构与 Llama 相同，加载和保存时会在检查点名与 Llama 名之间转换，因此不再需要 trust_remote_code=True。Ling 3.1 Flash 现在像 v5.20.0 里的 Ling 3.0 一样，经 BailingHybrid 原生加载。破坏性变更写明，past_key_values 与 cache_params 在库内改名为 cache。旧名字仍可用，并给出一次弃用警告。模型的 forward 与 prepare_inputs_for_generation 接受旧名字直到 v5.40.0，generate 接受旧名字直到 v6.0.0。同时传入旧名字和 cache 会抛出 ValueError。outputs.past_key_values、outputs.cache_params 以及 outputs 里的 past_key_values 键仍返回缓存。现在要求 peft 0.22.0 或更高。生成式多模态模型改为返回共用的输出类，包括 MultimodalBaseModelOutputWithPast、MultimodalCausalLMOutputWithPast 及其 MoE 变体。modeling_attn_mask_utils.py 已删除。导出的 ONNX、OpenVINO 与 ExecuTorch 程序加载时不需要 trust_remote_code。被 pickle 的 .pt2 程序现在需要 trust_remote_code=True。说明还列出缓存、生成、连续批处理、对话模板和服务、流水线、视觉、音频、量化与并行方面的修复。本条不把那些修复逐条改写成新的测量。上述范围来自这一标签的发布说明，本刊未运行该库。GitHub published_at 为 2026-11-21T12:28:26Z。",
      "en": "Transformers v5.24.0 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-21T12:28:26Z. created_at on the same record is 2026-11-21T12:09:57Z, also inside the window; this item still times the release by published_at. Issue 069 already used the v5.23.0 URL. This item records v5.24.0. The new models in the notes include Inkling 2 Mini. The notes call it a multimodal model from Thinking Machines Lab that accepts text and image inputs and generates text. It is a smaller sibling of Inkling 2 Small, added in v5.23.0. It has 24 decoder layers instead of 48. Layers 6 to 17 run three times. A learned message-passing mechanism mixes the residuals of the previous pass into the attention and mixture-of-experts inputs of each loop layer. The decoder hidden size is 2304, and each token is routed to 8 of 128 experts. The image encoder, tokenizer and processor are the same as Inkling 2 Small's. The research checkpoint TML-d24-varloop-research has the same architecture but a variable number of loop passes. Both checkpoints contain NVFP4 and MXFP8 quantized layers, which are dequantized at load time. Issue 076 already recorded the 26.4B and 26B (5.4 active) wordings in the Unsloth notes. This item does not import those wordings, and it does not treat the two blog posts linked from these notes as extra sources. Apertus 1.5, from the Swiss AI Initiative, accepts text, images and audio and generates text. Images use the EMU3.5 vision tokenizer and audio uses WavTokenizer. The media tokenizers turn images and audio into discrete tokens in a shared input vocabulary. The output vocabulary contains only text tokens, so image and audio generation are not supported. WavTokenizer encodes 24 kHz mono audio into discrete tokens with a single codebook, at 40 or 75 tokens per second depending on the checkpoint, and can reconstruct audio from those tokens. Training the codec is not supported. The 40-token-per-second variant is the audio tokenizer of Apertus 1.5. Dory is a looped language model from NVIDIA. It uses a normalized-GPT architecture with interleaved sliding-window and full attention. A shared block of layers is applied repeatedly, and the loop count can be changed at inference time on the same checkpoint. HY4-VL combines the HYV4 mixture-of-experts text backbone with a vision encoder, supports dynamic-resolution visual inputs, and uses mRoPE for temporal and spatial positions. Omnilingual ASR, from Meta FAIR, is described as covering more than 1,600 languages. The CTC head decodes non-autoregressively with greedy CTC. The audio language-model head projects audio embeddings into a Llama decoder. Both variants come in 300M, 1B, 3B and 7B sizes. A language code is optional. Lara Mini, from Translated, has 7.2B total parameters and 0.6B active parameters per token. The weights are released under CC BY-NC-SA 4.0 in a gated repository, and the notes say non-commercial use. SarvamMLA is the architecture of Sarvam-105B, a 105B-parameter model with 128 routed experts, 8 active per token, plus 1 shared expert. The notes state YaRN contexts up to 131K tokens. SarvamMoE is the architecture of Sarvam-30B, a 30B-parameter model with 128 routed experts, 6 active per token, plus 1 shared expert. The auto classes load it with the GLM-4-MoE implementation. EXAONE covers EXAONE 3.0, EXAONE 3.5 and EXAONE Deep from LG AI Research. The architecture is the same as Llama. Checkpoint names are translated to and from the Llama names on load and save, so they no longer need trust_remote_code=True. Ling 3.1 Flash now loads natively through BailingHybrid, as Ling 3.0 did in v5.20.0. The breaking-change section says past_key_values and cache_params are renamed to cache across the library. The old names still work, with a one-time deprecation warning. Model forward and prepare_inputs_for_generation accept the old names until v5.40.0, and generate accepts them until v6.0.0. Passing both an old name and cache raises a ValueError. outputs.past_key_values, outputs.cache_params and the past_key_values key on outputs still return the cache. peft 0.22.0 or newer is now required. Generative multimodal models now return shared output classes, including MultimodalBaseModelOutputWithPast, MultimodalCausalLMOutputWithPast and their MoE variants. modeling_attn_mask_utils.py has been removed. Exported ONNX, OpenVINO and ExecuTorch programs load without trust_remote_code. Pickled .pt2 programs now require trust_remote_code=True. The notes also list fixes for cache, generation, continuous batching, chat templates and serving, pipelines, vision, audio, quantization and parallelization. This item does not rewrite those fixes as new measurements. The scope above comes from this tag's release notes. TUJL did not run the library. GitHub published_at is 2026-11-21T12:28:26Z."
    },
    {
      "index": "03",
      "label": "推理网关 / Inference gateway",
      "source": "LiteLLM · GitHub Release",
      "date": "2026.11.22 05:35:07 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-21T21:35:07Z",
      "zhTitle": "LiteLLM 1.108.15 让无密钥的 JSON 部署返回 401，并修复 Cohere v2",
      "enTitle": "LiteLLM 1.108.15 returns 401 for keyless JSON deployments and fixes Cohere v2",
      "href": "https://github.com/BerriAI/litellm/releases/tag/v1.108.15",
      "zh": "LiteLLM v1.108.15 的发布名是 1.108.15 (LTS)，为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-21T21:35:07Z。同一记录的 created_at 为 2026-11-21T19:25:12Z，也在窗口内，本条仍以 published_at 计时。070期已经用过 v1.108.9 的网址。076期已经把另一条版本线上的 v1.110.2 单列。本条记录 1.108 长期支持线上的后一个标签，比较范围是 v1.108.14...v1.108.15。它的 published_at 晚于 v1.110.2，本条不把它写成 1.110.2 的后继，也不重述 076期已经写过的那些修复。说明写明，lts 镜像标签始终指向最新的 LTS 发布，并建议拉取 ghcr.io/berriai/litellm:lts 以留在最新的 LTS 补丁上。说明给出针对 ghcr.io/berriai/litellm:v1.108.15 的 cosign verify 命令，并写明同一命令也用于 litellm-database、litellm-non_root 与 docker.io/litellm 下的镜像。本刊没有运行该校验。摘要行写明 9 个拉取请求、1 项新增、2 项修复、1 项需要动作。需要动作的一条写明：对无密钥的、由 JSON 配置的部署，设置 api_key 或该提供方的密钥环境变量，这些部署现在会得到 401（#50819）。变更三条写明：加入 ResetData 提供方，并修复 Groq 与 Meta 转写上的 0 美元花费（#50819）；修复 Cohere v2 的流式工具调用变成一个空块（#47794）；修复 Cohere v2 聊天忽略 tool_choice，以及对 reasoning_effort 和 json_schema 的 response_format 返回 400（#50834）。#50819 同时出现在需要动作的那一条和第一条变更上。本条按说明并列这两处，不把摘要行的“1 项新增、2 项修复”改写成另一组计数。说明还列出回迁 #51851、#53223、#53272 与 #53314。本条不展开这些编号在其他标签上的正文。上述范围来自这一标签的发布说明，本刊未运行该代理。GitHub published_at 为 2026-11-21T21:35:07Z。",
      "en": "LiteLLM v1.108.15 is named 1.108.15 (LTS) and is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-21T21:35:07Z. created_at on the same record is 2026-11-21T19:25:12Z, also inside the window; this item still times the release by published_at. Issue 070 already used the v1.108.9 URL. Issue 076 already gave v1.110.2, on another version line, its own item. This item records the later tag on the 1.108 long-term line. The compare range is v1.108.14...v1.108.15. Its published_at is later than v1.110.2. This item does not describe it as the successor of 1.110.2 and does not restate the fixes issue 076 already recorded. The notes say the lts image tag always points at the latest LTS release, and they suggest pulling ghcr.io/berriai/litellm:lts to stay on the newest LTS patch. They give a cosign verify command for ghcr.io/berriai/litellm:v1.108.15 and say the same command applies to litellm-database, litellm-non_root and the docker.io/litellm images. TUJL did not run that check. The summary line says 9 pull requests, 1 added, 2 fixed and 1 that needs action. The action line says to set api_key, or the provider's key environment variable, on keyless JSON-configured deployments, which now get a 401 (#50819). The three change lines say: the ResetData provider was added and $0 spend on Groq and Meta transcription was fixed (#50819); Cohere v2 streamed tool calls no longer arrive as one empty chunk (#47794); Cohere v2 chat no longer ignores tool_choice, and no longer returns 400 for reasoning_effort and for a json_schema response_format (#50834). #50819 appears both on the action line and on the first change line. This item keeps both lines as the notes write them and does not turn the summary's 1 added, 2 fixed into a different count. The notes also list backports #51851, #53223, #53272 and #53314. This item does not expand those numbers into the text of other tags. The scope above comes from this tag's release notes. TUJL did not run the proxy. GitHub published_at is 2026-11-21T21:35:07Z."
    },
    {
      "index": "04",
      "label": "训练框架 / Training framework",
      "source": "prime-rl · GitHub Release",
      "date": "2026.11.22 09:49:08 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-22T01:49:08Z",
      "zhTitle": "prime-rl v0.11.0 加入 Mega MoE，并改掉一批默认值",
      "enTitle": "prime-rl v0.11.0 adds Mega MoE and changes a set of defaults",
      "href": "https://github.com/PrimeIntellect-ai/prime-rl/releases/tag/v0.11.0",
      "zh": "prime-rl v0.11.0 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-22T01:49:08Z。同一记录的 created_at 为 2026-11-22T01:48:59Z，也在窗口内，本条仍以 published_at 计时。说明写明，自 v0.10.0 以来有 284 个提交、25 位贡献者，其中 6 位是新的，并写明此版有破坏性变更，升级前要读破坏性变更一节。编排器、训练器、推理与环境工作池必须运行同一个 prime-rl 版本。Mega MoE 是新的专家并行分发器，配置为 model.moe.dispatch 的 type 等于 mega_moe。它把 token 分发、SwiGLU 专家矩阵乘和合并融进持久内核，使专家并行通信与计算重叠。precision 可选 bf16、mxfp8、fp8、fp8_bwd，或新的 mxfp8_qat。说明把 mxfp8_qat 写成 MXFP8 前向、在反量化权重上做 BF16 反向，用于 SM100。可选的最少负载专家并行 llep，把过载 rank 的路由和一份专家权重复制交给负载最低的 rank，结果精确。它适用于 bf16、mxfp8 与 mxfp8_qat。Mega MoE 需要专家并行大于 1，并需要 prime-mega-moe。说明把后者写成 Prime Intellect 闭源的 DeepGEMM 分支，安装在公开的 deep_gemm 轮子之上。重放记录下来的 DeepSeek-V4-Flash-Base 监督微调路由，在每个 rank 64k token、8 张 H200、专家并行 8 的设置下，带再平衡的 MoE 层前向加反向为每 GPU 每秒 391k token，MFU 35.8%；不带再平衡为 310k；eager 的 torch all-to-all 为 240k，说明写成 1.63 倍。在完整的 43 层监督微调模型上（6 组 8 张 H200），带再平衡的前向比 torch all-to-all 快 1.14 倍。在合成路由上，再平衡相对普通 Mega MoE，在每个 rank 8k token 的 18 种情形里给出 1.67 倍的几何平均加速；路由已经均衡时，代价至多 4%。这些是说明里的测量，本刊未复跑。说明还写明，MFU 现在按 torchtitan 的方式、从真实模型计算。GLM-4.5-Air 在 131k、样本被打包时，先前日志里出现过不可能的 127.7% MFU，同样的步骤现在记为 24.4%。本条把这一处写成指标口径变化，不写成模型变快。环境服务器改名为环境工作池，命令从 uv run env-server 改为 uv run env-worker-pool。serve.pool.max_workers 等于 0 会被拒绝，应使用 1。PPO 与 CISPO 损失被移除；IPO 仍是默认，IcePop 与自定义损失保留。Prime 监控对 rl、sft 与 eval 默认开启。没有 Prime API 密钥，或运行无法注册时，启动会失败。可以用 --no-monitors.prime 或 PRIME_RUNS_MODE=disabled 关闭。推理部分写明接入 vLLM 0.34.0 与 torch 2.14。NCCL 被固定在 2.32.3。说明写明，torch 2.14 带来的 NCCL 2.30.7 会在所有 GPU 同时发送时把跨节点带宽减半，在 2 组 8 张 H100 上是每 GPU 每秒 20.0 GB 对 33.5 GB。训练器与 vLLM 必须使用同一个 NCCL 版本。变更的默认值包括：model.dsa_backend 改为 cudnn_flashmla，原先是 tilelang；orchestrator.concurrency.max_inflight 改为 None，原先是 1024；trainer.warmup 默认为 true；Mooncake 的租约改为 30 秒，原先是写死的 1 小时；vLLM 0.34 的上游默认也生效，例如 KV 缓存块大小从 16 改为 64。新模型一节写明 GLM-5.3 Flash（文本，glm5_next，313B，约 18B 活跃）、Muse Glimmer、Nemotron 3.5 Super，以及多模态的 Qwen3.8 Flash Next。管理令牌一节写明，rl 与 sft 为每次运行创建令牌，或使用已经设置的 PRIME_RL_ADMIN_TOKEN。由它们启动的引擎会拒绝没有 X-Prime-Admin-Token 请求头的管理路由。没有令牌的独立服务器仍会启动，并写一条警告；把 require_admin_token 设为 true 则会拒绝启动。说明里还有编译、DeepEP、检查点、显存和编排器吞吐的更多数字。其中一处写明，在一份录下的 2048 个回合、1.94 亿 token 的智能体批次上，编排器峰值 RSS 从 85.3 GB 降到 17.5 GB。另一处写明，逐 token 训练数组留在环境工作池之后，编排器峰值 RSS 从 14.5 GiB 降到 2.7 GiB。本条把这两处并列，不合成一次测量，其余数字留在原文。上述范围来自这一标签的发布说明，本刊未复跑。GitHub published_at 为 2026-11-22T01:49:08Z。",
      "en": "prime-rl v0.11.0 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-22T01:49:08Z. created_at on the same record is 2026-11-22T01:48:59Z, also inside the window; this item still times the release by published_at. The notes say there are 284 commits from 25 contributors, 6 of them new, since v0.10.0, and that this release has breaking changes that should be read before upgrading. The orchestrator, trainer, inference and env worker pools must run the same prime-rl version. Mega MoE is a new expert-parallel dispatcher, selected by setting type to mega_moe under model.moe.dispatch. It fuses token dispatch, the SwiGLU expert GEMMs and the combine into persistent kernels that overlap expert-parallel communication with compute. precision can be bf16, mxfp8, fp8, fp8_bwd, or the new mxfp8_qat. The notes describe mxfp8_qat as MXFP8 forward and BF16 backward on the dequantized weights, for SM100. Optional least-loaded expert parallelism, llep, hands overloaded ranks' routes and a copy of the expert weights to the least-loaded ranks, with exact results. It works with bf16, mxfp8 and mxfp8_qat. Mega MoE needs expert parallelism greater than 1 and prime-mega-moe. The notes call that Prime Intellect's closed-source DeepGEMM fork, installed over the public deep_gemm wheel. Replaying recorded DeepSeek-V4-Flash-Base supervised-fine-tuning routing at 64k tokens per rank, on 8 H200s with expert parallelism 8, the notes give the MoE layer, forward plus backward, as 391k tokens per second per GPU and 35.8% MFU with rebalancing, 310k without rebalancing, and 240k for the eager torch all-to-all, which they call 1.63 times. On the full 43-layer supervised-fine-tuning model, 6 groups of 8 H200s, the forward with rebalancing is 1.14 times faster than the torch all-to-all. On synthetic routing, rebalancing gives a 1.67 times geomean speedup over plain Mega MoE across 18 scenarios at 8k tokens per rank, and costs at most 4% when routing is balanced. Those are measurements in the notes. TUJL did not rerun them. The notes also say MFU is now computed the way torchtitan computes it, from the real model. For GLM-4.5-Air at 131k with packed samples, the notes say the log previously showed an impossible 127.7% MFU, and the same steps now log 24.4%. This item treats that as a change in the metric, not as the model getting faster. The env server is renamed to env worker pools. The command changes from uv run env-server to uv run env-worker-pool. serve.pool.max_workers set to 0 is rejected; the notes say to use 1. The PPO and CISPO losses are removed. IPO remains the default, and IcePop and custom losses remain. The Prime monitor is on by default for rl, sft and eval. A launch fails if there is no Prime API key or the run cannot register. It can be turned off with --no-monitors.prime or PRIME_RUNS_MODE=disabled. The inference section says the release uses vLLM 0.34.0 and torch 2.14. NCCL is pinned to 2.32.3. The notes say the NCCL 2.30.7 that torch 2.14 brings halves cross-node bandwidth when all GPUs send at once, 20.0 versus 33.5 GB/s per GPU on 2 groups of 8 H100s. The trainer and vLLM must run the same NCCL version. Changed defaults include model.dsa_backend set to cudnn_flashmla, previously tilelang; orchestrator.concurrency.max_inflight set to None, previously 1024; trainer.warmup defaulting to true; the Mooncake lease set to 30 seconds, previously a hard-coded 1 hour; and vLLM 0.34 upstream defaults, including a KV-cache block size change from 16 to 64. The new-models section names GLM-5.3 Flash, text, glm5_next, 313B with about 18B active, Muse Glimmer, Nemotron 3.5 Super, and multimodal Qwen3.8 Flash Next. The admin-token section says rl and sft create a token for each run, or use PRIME_RL_ADMIN_TOKEN if it is set. Engines those commands start reject admin routes that do not carry the X-Prime-Admin-Token header. A standalone server without a token still starts and logs a warning. Setting require_admin_token to true makes the server refuse to start. The notes contain further compile, DeepEP, checkpoint, memory and orchestrator-throughput figures. One says that on a recorded agentic batch of 2048 episodes and 194 million tokens, peak orchestrator RSS drops from 85.3 GB to 17.5 GB. Another says that after per-token training arrays stay with the env worker pools, orchestrator peak RSS drops from 14.5 GiB to 2.7 GiB. This item keeps those two figures side by side and does not merge them into one measurement. The other figures stay on the source page. The scope above comes from this tag's release notes. TUJL did not rerun them. GitHub published_at is 2026-11-22T01:49:08Z."
    }
  ]
};

export const issue076: Issue = {
  "number": "076",
  "date": "2026-11-21",
  "readingTime": "约 6 分钟",
  "windowStart": "2026-11-20T01:55:00Z",
  "windowEnd": "2026-11-21T01:55:00Z",
  "heading": "推理运行时移除 TensorRT 后端，网关拦住已送达的流式重试，托管计算写明 GPU 与实例，本地说明并列两处规模",
  "noteTitle": "GitHub 按 published_at 计时，Foundry 按 JSON-LD 的 datePublished。",
  "noteZh": "本期按北京时间11月20日09:55至11月21日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。075期已经覆盖到20日09:55，该时刻及之前的条目留在窗外，21日09:55之后的条目也不计入。只收录严格晚于 2026-11-20T01:55:00Z、且不晚于 2026-11-21T01:55:00Z 的条目。TensorRT-LLM、LiteLLM 与 Unsloth 以 GitHub 发布记录的 published_at 为准，分别为 2026-11-20T02:45:00Z、2026-11-20T04:06:19Z 与 2026-11-20T23:53:26Z。TensorRT-LLM 同一记录的 created_at 为 2026-11-16T20:54:50Z，LiteLLM 同一记录的 created_at 为 2026-11-20T00:37:23Z，两者都早于本窗口起点，本条不把它们当作发布时间。Unsloth 同一记录的 created_at 为 2026-11-20T23:35:52Z，落在窗口内，本条仍以 published_at 计时。微软条目以博客页 JSON-LD 的 datePublished 为准，为 2026-11-20T15:00:44+00:00；同页 article:published_time 与它相同。页面可见日期是 November 20th, 2026，没有钟点，因此不以可见日期计时。dateModified 为 2026-11-20T20:09:34+00:00。三则 GitHub 发布都没有被标成预发布。Unsloth 的标签名仍带 beta。075期已经在编者说明里写过 LiteLLM v1.110.1 的 published_at，以及其中一则关于 GPT-6.2 提示缓存的拉取请求，但没有把那个标签单列，也没有使用它的网址。本期使用其后的 v1.110.2。072期已经用过 Unsloth v0.1.918-beta 的网址，本期使用 v0.1.922-beta。同日更早的 v0.1.921-beta，published_at 为 2026-11-20T19:56:53Z，也在窗口内；两份说明几乎相同，本期采用较晚的标签，不把 921 的网址列为来源。OpenAI 新闻 RSS 里标成 2026-11-20T00:00:00Z 的条目早于起点，其中包括 MedChemBench 与 Hebbia 客户故事。Hugging Face 上《harness adapters》与《Inkling 2 Mini》两篇博客的 JSON-LD datePublished 分别为 2026-11-20T00:00:00.774Z 与 2026-11-20T00:00:00.775Z，同样早于起点，因此本地模型这一条改用 Unsloth 的发布记录，不把那两篇博客列为来源，也不引进博客里的参数。Google Developers Blog 上语义治理政策一文的 datePublished 只有日期 2026-11-20，没有时刻。Google Research 上 Duplex 一文的可见日期是 November 20, 2026，页面没有 JSON-LD 的 datePublished。这两篇都不收入。Qwen Code v0.28.3 的 published_at 为 2026-11-21T01:45:48Z，落在窗口内，说明是一份未分组的拉取请求列表；071期已经用过 v0.27.4 的网址，本期不把 v0.28.3 单列。browser-use 1.0.7 的 published_at 为 2026-11-20T20:01:20Z，也在窗口内，说明写明长时间的 browser_exec 会在 50 秒内先返回已经得到的输出；071期已经用过 1.0.6 的网址，本期不把 1.0.7 单列。速度、内存、并发和费用说法均来自各原文，本刊未独立复跑。我们的编辑判断是：把 NVIDIA 自己列出的破坏性变更和已知问题、LiteLLM 发布说明里的修复范围和“也见于其他标签”的标注、微软写出的目录规模与它所转述的对照，以及 Unsloth 同一页上的两处规模写法分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 20, 09:55 to November 21, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 075 already covered through 09:55 on November 20, so items at or before that moment stay outside this window, as do items after 09:55 on November 21. Items must be strictly after 2026-11-20T01:55:00Z and at or before 2026-11-21T01:55:00Z. The TensorRT-LLM, LiteLLM and Unsloth items use published_at from the GitHub release records: 2026-11-20T02:45:00Z, 2026-11-20T04:06:19Z and 2026-11-20T23:53:26Z. created_at on the TensorRT-LLM record is 2026-11-16T20:54:50Z, and created_at on the LiteLLM record is 2026-11-20T00:37:23Z. Both are before this window's start, and this issue does not treat them as the publication instant. created_at on the Unsloth record is 2026-11-20T23:35:52Z, inside the window; this issue still times that release by published_at. The Microsoft item uses datePublished in the blog page's JSON-LD, 2026-11-20T15:00:44+00:00. article:published_time on the same page matches it. The visible dateline is November 20th, 2026, with no clock time, so this issue does not time the post by that dateline. dateModified is 2026-11-20T20:09:34+00:00. None of the three GitHub releases is marked as a pre-release. The Unsloth tag name still contains beta. Issue 075 already stated LiteLLM v1.110.1's published_at in the editor's note, and a pull request in those notes about GPT-6.2 prompt caching, but it did not give that tag its own item and did not use its URL. This issue uses the later tag v1.110.2. Issue 072 already used the Unsloth v0.1.918-beta URL; this issue uses v0.1.922-beta. The earlier same-day tag v0.1.921-beta has published_at 2026-11-20T19:56:53Z, also inside the window. The two notes are nearly the same. This issue uses the later tag and does not list the 921 URL as a source. OpenAI news-RSS items dated 2026-11-20T00:00:00Z are before the start, including MedChemBench and the Hebbia customer story. On Hugging Face, the harness-adapters post and the Inkling 2 Mini post have JSON-LD datePublished 2026-11-20T00:00:00.774Z and 2026-11-20T00:00:00.775Z, also before the start. The local-model item therefore uses the Unsloth release record, does not list those two posts as sources, and does not import figures from them. A Google Developers Blog post on semantic governance policies has datePublished of the calendar date 2026-11-20 and no time of day. A Google Research post on Duplex shows the visible date November 20, 2026, and the page has no JSON-LD datePublished. Neither is included. Qwen Code v0.28.3 has published_at 2026-11-21T01:45:48Z, inside the window, and its notes are an ungrouped list of pull requests. Issue 071 already used the v0.27.4 URL, and this issue does not give v0.28.3 its own item. browser-use 1.0.7 has published_at 2026-11-20T20:01:20Z, also inside the window. Its notes say a long browser_exec replies within 50 seconds with the output so far. Issue 071 already used the 1.0.6 URL, and this issue does not give 1.0.7 its own item. Speed, memory, concurrency and cost claims come from the cited pages and were not independently rerun by TUJL. Our editorial view: keep NVIDIA's own list of breaking changes and known issues, the fix scope in the LiteLLM notes and the lines those notes mark as also present on other tags, Microsoft's stated catalog size and the comparisons it reports, and the two size wordings on the same Unsloth page apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "推理运行时 / Inference runtime",
      "source": "NVIDIA · GitHub Release",
      "date": "2026.11.20 10:45:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-20T02:45:00Z",
      "zhTitle": "TensorRT-LLM 1.3.0 移除 TensorRT 后端，并加入 Rubin 预览与 VisualGen",
      "enTitle": "TensorRT-LLM 1.3.0 removes the TensorRT backend and adds a Rubin preview and VisualGen",
      "zh": "TensorRT-LLM v1.3.0 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-20T02:45:00Z。同一记录的 created_at 为 2026-11-16T20:54:50Z，早于本窗口起点，本条不把它当作发布时间。要点中的 Rubin 支持（预览）写明：为 NVIDIA Rubin（SM107）加入预览支持，并在 Vera Rubin 上做过验证；在 Vera Rubin 上加入 DeepSeek-V4 与 Kimi K3。模型支持写明：Blackwell 与 Rubin（预览）上的 DeepSeek-V4；Blackwell 与 Rubin（预览）上的 Kimi K3，包括多模态与多节点服务，注意力数据并行（DEP16）需要 GB300 级 GPU 内存；Hopper、Blackwell 与 Rubin（预览）上的 Qwen3.5，包括 Blackwell 上的 MTP 与 NVFP4，以及 Blackwell 上的 Qwen3.6 与 Qwen3.8-Flash-Next；Blackwell 与 Rubin（预览）上的 MiniMax-M3；Blackwell 上的 GLM-5、GLM-5.2、Kimi-K2.5 与 Step-3.7-Flash；Hopper 与 Blackwell 上的 Nemotron Nano Omni；Blackwell 上的 Gemma 4，包括多模态；Hopper 与 Blackwell 上的 Laguna；以及为 Mamba 混合模型加入前缀缓存，例子包括 Qwen3.5 与 Nemotron Super V3。性能部分写明对 DeepSeek-V4、DeepSeek-V3.2、Qwen3.5、Gemma 4、MiniMax-M3 与 Kimi K3 做了按模型的内核融合；为 Rubin 上的 NVFP4 MoE 加入 locality domain（uGPU）局部化，默认开启，设置 DISABLE_LOCALITY_DOMAINS=1 可关闭。推测解码部分写明加入 DSpark、DFlash、Suffix Automaton 与 PARD 起草器，以及 EAGLE3 动态树、Eagle 3.1 草稿模型和带 LoRA 的推测解码。KV 缓存部分写明，KV Cache Manager V2 按模型选择，并对大多数模型族默认开启；另写明 KV 缓存压缩、NVFP4 KV 缓存与磁盘缓存，以及 FlexKV 与 LMCache 连接器。量化部分写明加入 MXFP8（W8A8），以及经 Marlin 的 W4A16 NVFP4 仅权重量化，使 NVFP4 检查点可以在 Hopper 与 Ada Lovelace 上运行。服务部分写明加入 Anthropic Messages API（/v1/messages），并扩展 Responses API。VisualGen 被写成 TensorRT-LLM 里面向图像和视频生成模型的新垂直方案，经 trtllm-serve 与 LLM 推理一起提供。图像模型写明 FLUX.1、FLUX.2、GLM-Image 与 Qwen-Image，包括 Qwen-Image-Edit 与 Qwen-Image-Layered。视频模型写明 Wan 2.2（包括 5B TI2V 与 FastWan）、LTX-2、HunyuanVideo 1.5、Cosmos3 与 MiniMax-H3。VisualGen 的已知问题写明：由 NVIDIA Model Optimizer 静态量化并导出的 FLUX.1 检查点可能无法初始化，因为导出的 transformer 配置把 out_channels 设成 null。基础设施写明：基础 Docker 镜像改为 nvcr.io/nvidia/pytorch:26.09-py3，Backend 镜像改为 nvcr.io/nvidia/tritonserver:26.09-py3，依赖的 CUDA Toolkit 为 13.4.1，公开 PyTorch 为 2.14.0，Python 3.10 与 3.12 受支持；TensorRT、NVIDIA ModelOpt 与 ONNX 不再是 TensorRT-LLM 的依赖。API 变更里标成破坏性变更的条目包括：TensorRT 后端被移除，PyTorch 是唯一后端，trtllm-build、TrtLlmArgs、BuildConfig、MedusaDecodingConfig、LookaheadDecodingConfig、trtllm-bench build 与 trtllm-bench --engine_dir 被移除；旧的 C++ Executor 与运行时 API 被移除，cpp_only 构建选项一并移除；TensorRT 引擎的 Triton 后端模型被移除，只留下 llmapi Triton 模型；TRTLLMSampler 被移除，需要 FlashInfer 的 TorchSampler 是唯一采样器，sampler_type 参数会被忽略并给出警告，disable_flashinfer_sampling 被移除；两模型推测解码被移除，eagle3_one_model 与 mtp_eagle_one_model 字段被移除，改用单模型实现；AutoDeploy、Star Attention 与 WIDEEP 被移除，WIDEEP 这个 MoE 后端不能再被选中；显式的 trtllm-serve、trtllm-eval 与 trtllm-bench 命令行标志现在优先于 YAML 配置；KV 缓存传输超时默认改为 60 秒，先前没有超时，可用 cache_transceiver_config.kv_transfer_timeout_ms 设置；按请求的聊天模板改为显式开启，用 trtllm-serve --allow_request_chat_template；logprobs 上限为 100，更大的 logprobs 或 prompt_logprobs 会抛出 ValueError；/perf_metrics 端点被移除，改用请求头 X-TRTLLM-return-metrics: 1；动态推测的字段改名为 acceptance_rate_window_size 与 acceptance_rate_threshold，阈值现在是 [0, 1] 里的接受率。说明还写明，TRITON MoE 后端自 TensorRT-LLM 1.3（2026-09）起弃用，三个月迁移期之后移除；它剩下的作用是 GPT-OSS 在 Hopper 上使用 W4A16_MXFP4 时的一点性能优势，AUTO 会解析到 TRITON 的只有这一种配置，moe_config.backend 设为 CUTLASS 在 Hopper 上从功能上替代它；迁移期内 TRITON 仍可工作，并记录一次警告。使用遥测默认开启。要退出，可设置 TRTLLM_NO_USAGE_STATS=1 或 DO_NOT_TRACK=1，给 CLI 传入 --no-telemetry，或在 LLM API 里设置 telemetry_config=TelemetryConfig(disabled=True)。TorchCompileConfig.max_num_streams 的默认值从 1 改为 3。已知问题写明：Kimi-K3 NVFP4 可能无法用捆绑的 transformers 版本加载分词器；分离式服务配合 DSpark 推测解码时，草稿 KV 缓存不会传到生成工人，接受率因此下降，聚合式服务不受影响；GLM-5.2 NVFP4 在 GB200 上（TP=8，注意力数据并行关闭）当 max_num_tokens 大于 4096 时，可能在预热期间段错误，应把 max_num_tokens 保持在 4096 或更低；Nemotron-3-Super-120B-A12B FP8 在 B300 上的分离式服务，并发超过最大批大小时可能失败；Qwen3-32B-FP8 在 B300 上的分离式服务可能给出不正确的输出；/v1/responses 对部分输入格式、流式事件、对话续写和工具调用仍有兼容缺口，说明点名 Qwen3 与 GPT-OSS；带 FP8 KV 缓存的编码器—解码器模型可能越界使用交叉注意力 KV 缓存池，造成非法内存访问或不正确输出；Qwen3-32B 在 AWS p4d（A100）上以 TP=4 运行时，若启用 aws-ofi-nccl 插件，可能在自动调优预热期间段错误。上述范围来自这一标签的发布说明，本刊未运行该版本。GitHub published_at 为 2026-11-20T02:45:00Z。",
      "en": "TensorRT-LLM v1.3.0 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-20T02:45:00Z. created_at on the same record is 2026-11-16T20:54:50Z, before this window's start, and this item does not treat that as the publication instant. Under Rubin support (preview), the notes say preview support was added for NVIDIA Rubin (SM107), validated on Vera Rubin, and that DeepSeek-V4 and Kimi K3 support was added on Vera Rubin. Model support lists DeepSeek-V4 on Blackwell and Rubin (preview); Kimi K3 on Blackwell and Rubin (preview), including multimodal and multi-node serving, with attention data parallelism (DEP16) requiring GB300-class GPU memory; Qwen3.5 on Hopper, Blackwell and Rubin (preview), including MTP and NVFP4 on Blackwell, plus Qwen3.6 and Qwen3.8-Flash-Next on Blackwell; MiniMax-M3 on Blackwell and Rubin (preview); GLM-5, GLM-5.2, Kimi-K2.5 and Step-3.7-Flash on Blackwell; Nemotron Nano Omni on Hopper and Blackwell; Gemma 4 on Blackwell, including multimodal; Laguna on Hopper and Blackwell; and prefix caching for Mamba hybrid models, with Qwen3.5 and Nemotron Super V3 given as examples. On performance, the notes say DeepSeek-V4, DeepSeek-V3.2, Qwen3.5, Gemma 4, MiniMax-M3 and Kimi K3 were optimized with model-specific kernel fusions, and that locality-domain (uGPU) localization was added for NVFP4 MoE on Rubin. It is on by default; DISABLE_LOCALITY_DOMAINS=1 turns it off. On speculative decoding, the notes add DSpark, DFlash, Suffix Automaton and PARD drafters, plus EAGLE3 dynamic trees, Eagle 3.1 draft models and speculative decoding with LoRA. On the KV cache, the notes say KV Cache Manager V2 is selected per model and enabled by default for most model families. They also add KV cache compression, an NVFP4 KV cache and a disk cache, plus FlexKV and LMCache connectors. On quantization, the notes add MXFP8 (W8A8) and W4A16 NVFP4 weight-only quantization through Marlin, so NVFP4 checkpoints run on Hopper and Ada Lovelace. On serving, the notes add the Anthropic Messages API (/v1/messages) and extend the Responses API. VisualGen is described as a new vertical solution in TensorRT-LLM for image and video generation models, served through trtllm-serve alongside LLM inference. Image models listed are FLUX.1, FLUX.2, GLM-Image and Qwen-Image, including Qwen-Image-Edit and Qwen-Image-Layered. Video models listed are Wan 2.2 (including 5B TI2V and FastWan), LTX-2, HunyuanVideo 1.5, Cosmos3 and MiniMax-H3. A VisualGen known issue says FLUX.1 checkpoints statically quantized and exported by NVIDIA Model Optimizer may fail to initialize because the exported transformer config sets out_channels to null. On infrastructure, the base Docker image is nvcr.io/nvidia/pytorch:26.09-py3, the Backend image is nvcr.io/nvidia/tritonserver:26.09-py3, the dependent CUDA Toolkit is 13.4.1, the dependent public PyTorch is 2.14.0, and Python 3.10 and 3.12 are supported. TensorRT, NVIDIA ModelOpt and ONNX are no longer dependencies of TensorRT-LLM. Items marked as breaking changes include: the TensorRT backend is removed and PyTorch is the only backend, and trtllm-build, TrtLlmArgs, BuildConfig, MedusaDecodingConfig, LookaheadDecodingConfig, trtllm-bench build and trtllm-bench --engine_dir are removed; the legacy C++ Executor and runtime APIs are removed, along with the cpp_only build option; TensorRT-engine Triton backend models are removed and only the llmapi Triton model remains; TRTLLMSampler is removed, TorchSampler, which requires FlashInfer, is the only sampler, the sampler_type argument is ignored with a warning, and disable_flashinfer_sampling is removed; two-model speculative decoding is removed, the eagle3_one_model and mtp_eagle_one_model fields are removed, and the notes say to use the one-model implementations; AutoDeploy, Star Attention and WIDEEP are removed, and the WIDEEP MoE backend can no longer be selected; explicit trtllm-serve, trtllm-eval and trtllm-bench flags now take precedence over YAML config; the KV cache transfer timeout defaults to 60 seconds, where previously there was no timeout, and it is set with cache_transceiver_config.kv_transfer_timeout_ms; per-request chat templates are opt-in, enabled with trtllm-serve --allow_request_chat_template; logprobs are capped at 100, and larger logprobs or prompt_logprobs values raise a ValueError; the /perf_metrics endpoint is removed, and the notes say to use the request header X-TRTLLM-return-metrics: 1; dynamic speculation fields are renamed to acceptance_rate_window_size and acceptance_rate_threshold, and the threshold is now an acceptance rate in [0, 1]. The notes also say the TRITON MoE backend is deprecated as of TensorRT-LLM 1.3 (2026-09) and will be removed after the 3-month migration period. They say its only remaining role is a modest performance edge for GPT-OSS on Hopper with W4A16_MXFP4, that this is the single configuration AUTO resolves to TRITON, and that moe_config.backend set to CUTLASS replaces it functionally on Hopper. During the migration period TRITON keeps working and logs a one-time warning. Usage telemetry is on by default. To opt out, set TRTLLM_NO_USAGE_STATS=1 or DO_NOT_TRACK=1, pass --no-telemetry to the CLI, or set telemetry_config=TelemetryConfig(disabled=True) in the LLM API. TorchCompileConfig.max_num_streams now defaults to 3 instead of 1. Known issues say: Kimi-K3 NVFP4 may fail to load its tokenizer with the bundled transformers version; in disaggregated serving with DSpark speculative decoding, the draft KV cache is not transferred to the generation worker, which lowers the acceptance rate, and aggregated serving is not affected; GLM-5.2 NVFP4 on GB200 (TP=8, attention data parallelism disabled) may segfault during warmup when max_num_tokens is greater than 4096, and the notes say to keep max_num_tokens at 4096 or lower; disaggregated serving of Nemotron-3-Super-120B-A12B FP8 on B300 may fail when concurrency exceeds the maximum batch size; disaggregated serving of Qwen3-32B-FP8 on B300 may produce incorrect output; the /v1/responses endpoint has compatibility gaps with some input formats, streaming events, conversation continuation and tool calls, and the notes name Qwen3 and GPT-OSS; encoder-decoder models with an FP8 KV cache can overrun the cross-attention KV cache pool, causing an illegal memory access or incorrect output; and Qwen3-32B with TP=4 on AWS p4d (A100) may segfault during autotuner warmup when the aws-ofi-nccl plugin is enabled. This scope comes from that tag's release notes, and TUJL has not run this version. GitHub published_at is 2026-11-20T02:45:00Z.",
      "href": "https://github.com/NVIDIA/TensorRT-LLM/releases/tag/v1.3.0"
    },
    {
      "index": "02",
      "label": "推理网关 / Inference gateway",
      "source": "LiteLLM · GitHub Release",
      "date": "2026.11.20 12:06:19 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-20T04:06:19Z",
      "zhTitle": "LiteLLM 1.110.2 修复 Claude 的 temperature=1，并拦住已经送到客户端的流式重试",
      "enTitle": "LiteLLM 1.110.2 fixes temperature=1 on Claude and stops stream retries after output reached the client",
      "zh": "LiteLLM v1.110.2 为正式发布。GitHub 没有把它标为预发布。计时以 published_at 为准，为 2026-11-20T04:06:19Z。同一记录的 created_at 为 2026-11-20T00:37:23Z，早于本窗口起点，本条不把它当作发布时间。075期已经在编者说明里写过 v1.110.1 的发布时间，以及其中一则 GPT-6.2 提示缓存修复，但没有把那个标签单列。本条记录的是比较范围 v1.110.1...v1.110.2 里的后一个标签。说明写明此版有 11 个拉取请求、8 项修复，升级不需要额外动作。修复包括：在 Anthropic、Vertex AI 与 Azure AI 上，对已经去掉采样参数的 Claude 模型，temperature=1 不再返回 400，该问题自 v1.110.0-rc.2 起出现（#52341）；Responses API 的流在输出已经到达客户端之后不再重试，说明写明那种重试会发送重复事件并多计调用（#52461）；在推理输出之后失败的流，不再在回退组上重新开始并发送第二份响应（#52616）；GPT-6.2 的系统提示在 /v1/chat/completions 与 /v1/messages 上不再缺少提示缓存，除非 store 为 false（#52906），说明把这一则标为也见于 1.106.12、1.108.13 与 1.109.3；转发的 Anthropic 凭据在 /v1/messages 上不再忽略部署自己的价格，该问题自 v1.109.0 起出现（#52313）；当 litellm_jwtauth.issuers 已设置时，没有 jwt_issuer 的 JWT 密钥映射不再需要 5 分钟才生效，该问题自 v1.103.0 起出现（#52350），说明把这一则标为也见于 1.108.13 与 1.109.3；/key/info 不再让一把没有用户的密钥按哈希或别名读到其他同样没有用户的密钥（#52838、#52925），说明把这一则标为也见于 1.106.12、1.108.13 与 1.109.3；每个已结束的请求不再一直留在内存里直到一次完整的垃圾回收，该问题自 v1.110.0-rc.1 起出现（#51888）。缓存、JWT 与 /key/info 这三则被说明标成也见于其他标签，本条不把它们写成只在 1.110.2 才出现的行为，也不把 075期已经描述过的 v1.110.1 缓存条目改写成新的测量。/key/info 一条只转述说明里的影响范围，不提供调用方法。上述范围来自这一标签的发布说明，本刊未运行该代理。GitHub published_at 为 2026-11-20T04:06:19Z。",
      "en": "LiteLLM v1.110.2 is a regular release. GitHub does not mark it as a pre-release. This item times it by published_at, 2026-11-20T04:06:19Z. created_at on the same record is 2026-11-20T00:37:23Z, before this window's start, and this item does not treat that as the publication instant. Issue 075 already stated v1.110.1's publication time in the editor's note, and a GPT-6.2 prompt-cache fix in those notes, but it did not give that tag its own item. This item records the later tag in the compare range v1.110.1...v1.110.2. The notes say this version has 11 pull requests and 8 fixes, and that no action is needed to upgrade. The fixes include: temperature=1 no longer returns 400 on Claude models that removed sampling params, on Anthropic, Vertex AI and Azure AI, broken since v1.110.0-rc.2 (#52341); Responses API streams no longer retry after output reached the client, which the notes say sent duplicate events and billed extra calls (#52461); streams that fail after reasoning output no longer restart on a fallback group and send a second response (#52616); GPT-6.2 system prompts no longer miss the prompt cache on /v1/chat/completions and /v1/messages unless store is false (#52906), and the notes mark that fix as also in 1.106.12, 1.108.13 and 1.109.3; forwarded Anthropic credentials on /v1/messages no longer ignore the deployment's custom prices, broken since v1.109.0 (#52313); JWT key mappings without jwt_issuer no longer take 5 minutes to apply when litellm_jwtauth.issuers is set, broken since v1.103.0 (#52350), and the notes mark that fix as also in 1.108.13 and 1.109.3; /key/info no longer lets a key with no user read other userless keys by hash or alias (#52838, #52925), and the notes mark that fix as also in 1.106.12, 1.108.13 and 1.109.3; finished requests no longer stay in memory until a full garbage-collection pass, broken since v1.110.0-rc.1 (#51888). The cache, JWT and /key/info lines are marked in the notes as also present on other tags. This item does not treat them as behavior that appears only in 1.110.2, and it does not restate the v1.110.1 cache line already described in issue 075 as a new measurement. The /key/info line restates the scope in the notes and does not provide a way to call it. This scope comes from that tag's release notes, and TUJL has not run the proxy. GitHub published_at is 2026-11-20T04:06:19Z.",
      "href": "https://github.com/BerriAI/litellm/releases/tag/v1.110.2"
    },
    {
      "index": "03",
      "label": "模型托管 / Managed serving",
      "source": "Microsoft Foundry",
      "date": "2026.11.20 23:00:44 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-20T15:00:44Z",
      "zhTitle": "微软 Foundry Managed Compute 正式可用，并写明 GPU、实例与目录规模",
      "enTitle": "Microsoft Foundry Managed Compute is generally available and states GPUs, instances and catalog size",
      "zh": "微软在 Foundry 博客发布《Serve open models in production with Foundry Managed Compute》，作者 Manoj Bableshwar。计时以博客页 JSON-LD 的 datePublished 为准，为 2026-11-20T15:00:44+00:00。同页 article:published_time 与它相同。页面可见日期是 November 20th, 2026，没有钟点，因此不以可见日期计时。dateModified 为 2026-11-20T20:09:34+00:00。该文宣布 Managed Compute 在 Microsoft Foundry 正式可用。它写明，用户选择模型，由微软配置 GPU、维护容器并运行服务运行时。自 6 月的预览以来，该文写明服务容量已扩大，提示复用有改进，并增加了 GPU 与部署选项，包括美国和欧盟数据区。目录部分写明，在 Foundry 门户的模型目录里按 Deployment options 下的 Managed Compute 筛选，可以看到 150+ 个开放模型。模板决定上下文长度、服务运行时和 GPU 配置。按模型，可以选择 NVIDIA GPU（A100、H100 或 H200）或 AMD MI300X。该文的 Python 示例部署 DeepSeek V4.1 Flash（1017），创建一个计费实例，使用四张 MI300X；sku 名为 GlobalManagedCompute，capacity 为 1，acceleratorType 为 MI300_192GB。这是公告里的示例，本刊未部署。近期加入的推理与编程模型，该文点名 DeepSeek V4.1 Flash（1017）、Reflection Beam 与 Meta 的 Muse Spark Open。NVIDIA Nemotron 3.5 家族写明包括用于搜索的 Embed 与 Rerank、用于从文档提取文本、表格和版面的 Parse，以及用于语音的 Transcribe。结构化决策写明包括 ConvAIInnovations 的 Laya Typed-Decisions。供给链部分写明，加入集合之前会审查许可、筛查不受信任的代码并校验 SafeTensors 权重；权重放在 Azure 里，部署不必连接 Hugging Face Hub；服务镜像会被构建、扫描和签名，运行时更新会滚到已有部署。扩容部分写明，在已有端点后面增加实例，每个实例使用模板指定的 GPU 数量。对上面的 DeepSeek 1017 模板，把 capacity 从 1 改成 5，部署就从 4 张 GPU 变成 20 张。费用按每个加速器按小时计算，该文没有在这一段写出单价。该文写明，把同一负载发给一个实例和五个实例的两套 DeepSeek 1017 部署后，较大的部署在同一时段处理了大约五倍的 token，并返回更少的 HTTP 429。这是微软自己的对照，本刊未复跑。该文还写明，若请求以相同的系统说明或文档上下文开头，而且模型和运行时支持，提示缓存可以省下工作；prompt-aware routing 会优先把前缀相同的请求送到同一实例，load-aware routing 可以在该实例忙碌时送到其他实例；可以提供 prompt_cache_key 作为相关请求的亲和提示；当运行时报告缓存用量时，usage.prompt_tokens_details.cached_tokens 表示有多少输入 token 被复用。对于带有高性能草稿模型的前沿开放模型，该文写明会启用推测解码。它转述与 Signal65 的合作：在该项研究里，deepseek-v4.1-flash-1017 的一个实例在四张 MI300X 上支持 128 个并发智能体，并与 Signal65 在 MI300X 虚拟机上调过的自托管服务环境性能相当。这是该文对那份研究的转述，本刊没有另读研究报告，也未复跑。客户部分写明，AT&T 在开发 OTel 2.0 时使用 Phi-4、GPT-OSS-120B 与 Gemma 4，处理了大约一万亿 token 的电信数据用于训练。这是该文对客户的转述。自定义模型服务被标为预览：可以把 Foundry 微调产出的已注册 LoRA 适配器部署到匹配的基座版本和启用 LoRA 的模板，多个适配器共用目标的 GPU 容量，各自有部署名。Bring Your Own Weights 被标为有限公开预览，可以注册并部署自定义的全量 SafeTensors 模型，包括在 Foundry 之外训练的权重，使用兼容的目录基座和微软提供的部署模板。该文还指向 AT&T 的另一篇博文和 LoRA 公告；本条不把那些页面当作额外的一手来源。JSON-LD datePublished 为 2026-11-20T15:00:44+00:00。",
      "en": "Microsoft published Serve open models in production with Foundry Managed Compute on the Foundry blog, by Manoj Bableshwar. This item times the post by datePublished in the blog page's JSON-LD, 2026-11-20T15:00:44+00:00. article:published_time on the same page matches it. The visible dateline is November 20th, 2026, with no clock time, so this item does not time the post by that dateline. dateModified is 2026-11-20T20:09:34+00:00. The post announces that Managed Compute is generally available in Microsoft Foundry. It says the user chooses the model, and Microsoft provisions the GPUs, maintains the containers and operates the serving runtime. Since the June preview, the post says serving capacity has been scaled, prompt reuse improved, and GPU and deployment options expanded, including US and EU Data Zones. On the catalog, the post says filtering the Foundry portal model catalog by Managed Compute under Deployment options shows the 150+ open models available. A template defines the context length, serving runtime and GPU configuration. Depending on the model, the post says NVIDIA GPUs (A100, H100 or H200) or AMD MI300X GPUs can be chosen. Its Python example deploys DeepSeek V4.1 Flash (1017) as one billable instance on four MI300X GPUs, with sku name GlobalManagedCompute, capacity 1 and acceleratorType MI300_192GB. That example is in the announcement, and TUJL has not deployed it. Recent reasoning and coding additions named in the post are DeepSeek V4.1 Flash (1017), Reflection Beam and Meta's Muse Spark Open. The NVIDIA Nemotron 3.5 family is described as including Embed and Rerank for search, Parse for extracting text, tables and layout from documents, and Transcribe for speech. For structured decisions, the post includes Laya Typed-Decisions from ConvAIInnovations. On the supply chain, the post says that before a model is added to the collection, its license is reviewed, it is screened for untrusted code, and its SafeTensors weights are validated. Those weights are staged in Azure so a deployment can load them without connecting to Hugging Face Hub. Serving images are built, scanned and signed, and runtime updates are rolled out to existing deployments. On scaling, the post says to add instances behind the endpoint already in use, and that each instance uses the number of GPUs specified in the template. For the DeepSeek 1017 template above, changing capacity from one to five takes the deployment from 4 to 20 GPUs. The charge is hourly for each accelerator. That section does not state a unit price. The post says the same load was sent to two DeepSeek 1017 deployments, one with one instance and one with five, and that over the same interval the larger deployment processed about five times as many tokens and returned fewer HTTP 429 responses. That comparison is Microsoft's, and TUJL has not rerun it. The post also says that if requests begin with the same system instructions or document context, and the model and runtime support it, prompt caching can save work. With prompt-aware routing, Foundry prefers to send requests with matching prefixes to the same instance. With load-aware routing, Foundry can send requests to other instances when that instance is busy. prompt_cache_key can be supplied as an affinity hint. When the runtime reports cache usage, usage.prompt_tokens_details.cached_tokens shows how many input tokens were reused. For leading open models with a high-performing draft model, the post says speculative decoding is enabled. It reports a partnership with Signal65: in that study, one instance of deepseek-v4.1-flash-1017 supported 128 concurrent agents on four MI300X GPUs and matched the performance of Signal65's tuned self-hosted serving environment on MI300X virtual machines. That is the post's account of the study. TUJL has not checked it beyond this page and has not rerun it. On a customer, the post says that while developing OTel 2.0, AT&T used Phi-4, GPT-OSS-120B and Gemma 4 to process about a trillion tokens of telecom data for training. That is the post's account of the customer. Custom model serving is marked as preview: registered LoRA adapters produced by Foundry fine-tuning can be deployed to a matching base-model version and a LoRA-enabled template, and multiple adapters share the target's GPU capacity, each with its own deployment name. Bring Your Own Weights is marked as a limited public preview for registering and deploying custom full-weight SafeTensors models, including weights trained outside Foundry, using a compatible catalog base model and a Microsoft-provided deployment template. The post also points to a separate AT&T blog and a LoRA announcement. This item does not treat those pages as further primary sources. JSON-LD datePublished is 2026-11-20T15:00:44+00:00.",
      "href": "https://devblogs.microsoft.com/foundry/managed-compute-ga/"
    },
    {
      "index": "04",
      "label": "本地工作室 / Local studio",
      "source": "Unsloth · GitHub Release",
      "date": "2026.11.21 07:53:26 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-20T23:53:26Z",
      "zhTitle": "Unsloth v0.1.922-beta 接入 Inkling 2 Mini，并在同一说明里写下两处规模",
      "enTitle": "Unsloth v0.1.922-beta adds Inkling 2 Mini and states two size wordings in the same notes",
      "zh": "Unsloth 发布标签 v0.1.922-beta。GitHub 没有把这条发布标为预发布，本条按该记录计时，同时保留标签名里的 beta。计时以 published_at 为准，为 2026-11-20T23:53:26Z。同一记录的 created_at 为 2026-11-20T23:35:52Z，也在窗口内，本条仍以 published_at 计时。072期已经记录过 v0.1.918-beta。同日更早的 v0.1.921-beta，published_at 为 2026-11-20T19:56:53Z；921 的说明开头写着当天稍后还有一个版本，922 去掉了那一句。两份说明的其余部分几乎相同。922 的 Inkling 要点写成“更少内存、更快”，并写明新的 26B（5.4 active）、100 万上下文；921 的同一要点写成“最强的体积”。本条记录 922。说明开头写明，可以运行新的 Inkling 2 Mini，并把它写成能在 16GB 内存上运行的最强 26.4B 模型。要点里的规模是 26B（5.4 active）。本条把 26.4B 与 26B（5.4 active）并列，不把它们合成一组参数。Hugging Face 上同名博客的 JSON-LD datePublished 为 2026-11-20T00:00:00.775Z，早于本窗口起点，因此本条不使用那篇博客，也不引进其中的参数。说明还写明，此版让图像生成在小 GPU 上更快、更轻；Apple Silicon 的 Mac 现在可以重绘视频风格；使用 MCP 工具的聊天不再在每条消息上重新处理整个对话。其他要点包括：MiniMax-H3-Image 在 8GB GPU 上把一条新提示的渲染从 82.7 秒改为 36.7 秒；GGUF 图像模型在 Linux 与 macOS 上加载时少用 52–66% 的内存；Mac 上的 Video Restyle 可以用新风格重绘整段视频；在他们的工具测试里，MCP 聊天少处理 83% 到 87% 的提示 token；聊天可以 OCR 读取扫描版 PDF；主题文件可以分享外观设置。图像部分写明：FLUX.1 在权重从系统内存流入时，每步少用 16% 到 28% 的时间；FLUX.3 klein INT8 在 T4 上每步少用 13% 的时间；GTX 16xx 不再因 NaN 错误而无法渲染；在 INT8 或 FP8 模型上另选 LoRA 时，提供 Reload and generate，而不是报错。视频部分写明：Cosmos3-Edge-FP8 在 L4 上大约快 1.45 倍；Mac 上的 Restyle，bf16 大约需要 42 GiB GPU 内存，q8_0 大约需要 31 GiB。扩散 LoRA 训练部分写明：SDXL LoRA 在 T4 与 L4 上每步少用 28% 到 31% 的时间；Auto 精度让 FLUX.2-klein 9B 在 L4 上每步大约少用 30% 的时间；MiniMax-H3 再次运行时复用已经编码的数据集。聊天与 MCP 部分写明：对话把 MCP 工具列表保持固定，因此每条消息只处理新增的部分；Settings > Chat 里的 Tool output length 现在也用于 llama.cpp、vLLM、Ollama 与 Custom 连接上的 MCP 结果。训练部分写明：在 A100 上、配合 TRL 1.17 或更新版本，AsyncGRPO 步骤快 1.46 倍到 2.47 倍；在 AMD ROCm 上，Qwen3.5 训练默认打包序列，在 Strix Halo 上大约是 1.4 倍的每秒 token；DoRA 每步大约快 3% 到 5%；Gemma-4 的 LoRA 训练在 PyTorch 旧于 2.14 的混合长度批次上不再失败；JSON 与 JSONL 数据集里的日期不再被加上 00:00:00；PEFT 0.22 可以工作，带 PEFT 模型的 DPO 不再崩溃。说明给出 Inkling 2 Mini 指南的链接，本刊未把那个页面当作额外的一手来源。上述时间与比例来自这一标签的发布说明，本刊未复跑。GitHub published_at 为 2026-11-20T23:53:26Z。",
      "en": "Unsloth published the tag v0.1.922-beta. GitHub does not mark the release as a pre-release, so this item times it from that record while keeping the beta in the tag name. This item times it by published_at, 2026-11-20T23:53:26Z. created_at on the same record is 2026-11-20T23:35:52Z, also inside the window; this item still times the release by published_at. Issue 072 already recorded v0.1.918-beta. The earlier same-day tag v0.1.921-beta has published_at 2026-11-20T19:56:53Z. The 921 notes open by saying there would be another release later that day; 922 drops that sentence. The rest of the two notes is nearly the same. The 922 Inkling bullet says less memory usage and faster, and states a new 26B (5.4 active) model with a 1M context. The same bullet in 921 says strongest for size. This item records 922. The notes open by saying the new Inkling 2 Mini model can be run, and they call it the strongest 26.4B model that runs on 16GB RAM. The size in the highlight is 26B (5.4 active). This item sets 26.4B and 26B (5.4 active) side by side and does not collapse them into one specification. JSON-LD datePublished on the Hugging Face post of the same name is 2026-11-20T00:00:00.775Z, before this window's start, so this item does not use that post and does not import figures from it. The notes also say this release makes image generation faster and lighter on small GPUs, that Macs with Apple Silicon can now restyle videos, and that chats using MCP tools no longer reprocess the whole conversation on every message. Other highlights say MiniMax-H3-Image on 8GB GPUs renders a new prompt in 36.7 seconds, previously 82.7 seconds; GGUF image models load with 52–66% less RAM on Linux and macOS; Video Restyle on Mac re-renders a whole clip in a new style; MCP chats process 83 to 87% fewer prompt tokens in their tool tests; scanned PDFs in chat are read with OCR; and theme files let Appearance settings be shared. On images, the notes say FLUX.1 takes 16 to 28% less time per step when its weights stream from system RAM; FLUX.3 klein INT8 takes 13% less time per step on T4 GPUs; GTX 16xx cards no longer fail image renders with a NaN error; and picking a new LoRA on an INT8 or FP8 model offers Reload and generate instead of an error. On video, the notes say Cosmos3-Edge-FP8 runs about 1.45x faster on L4 GPUs, and that Restyle on Mac needs about 42 GiB of GPU memory for bf16, or 31 GiB for q8_0. On diffusion LoRA training, the notes say SDXL LoRA training takes 28 to 31% less time per step on T4 and L4; Auto precision trains FLUX.2-klein 9B in about 30% less time per step on L4; and MiniMax-H3 re-runs reuse the encoded dataset. On chat and MCP, the notes say a chat keeps its MCP tool list fixed, so each message only processes what is new, and that Tool output length in Settings > Chat now applies to MCP results on llama.cpp, vLLM, Ollama and Custom connections. On training, the notes say AsyncGRPO steps are 1.46x to 2.47x faster on A100 with TRL 1.17 or newer; on AMD ROCm, Qwen3.5 training packs sequences by default, about 1.4x the tokens per second on Strix Halo; DoRA training is about 3 to 5% faster per step; Gemma-4 LoRA training no longer fails on mixed-length batches with PyTorch older than 2.14; dates in JSON and JSONL datasets no longer gain a 00:00:00 time; PEFT 0.22 works; and DPO with a PEFT model no longer crashes. The notes link an Inkling 2 Mini guide. TUJL did not treat that page as a further primary source. These times and ratios come from that tag's release notes and were not rerun by TUJL. GitHub published_at is 2026-11-20T23:53:26Z.",
      "href": "https://github.com/unslothai/unsloth/releases/tag/v0.1.922-beta"
    }
  ]
};

export const issue075: Issue = {
  "number": "075",
  "date": "2026-11-20",
  "readingTime": "约 6 分钟",
  "windowStart": "2026-11-19T01:55:00Z",
  "windowEnd": "2026-11-20T01:55:00Z",
  "heading": "工具检索按需加载参数，Mac 计算机操作写出两处批准说法，性能工厂记下调查数字，框架接入 Gemini 4 Neon",
  "noteTitle": "Google 按 JSON-LD 计时，OpenAI 按 RSS pubDate，框架按 GitHub published_at。",
  "noteZh": "本期按北京时间11月19日09:55至11月20日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。074期已经覆盖到19日09:55，该时刻及之前的条目留在窗外，20日09:55之后的条目也不计入。只收录严格晚于 2026-11-19T01:55:00Z、且不晚于 2026-11-20T01:55:00Z 的条目。两则 Google 文章以博客页 JSON-LD 的 datePublished 为准，分别为 2026-11-19T17:00:00+00:00 与 2026-11-19T18:00:00+00:00。两页的 article:published_time 都只有日期 2026-11-19，因此不以它计时；同页 name 为 published_time 的 meta 与 JSON-LD 的 datePublished 相同。OpenAI 文章页只标出 November 19, 2026，没有时刻，因此以新闻 RSS 中该文的 pubDate 为准，为 Thu, 19 Nov 2026 08:00:00 GMT，即 2026-11-19T08:00:00Z。pydantic-ai 以 GitHub 发布记录的 published_at 为准，为 2026-11-19T02:13:05Z。同一记录的 created_at 为 2026-11-19T01:39:46Z，早于本窗口起点，本条不把它当作发布时间。073期已经用过 v2.70.0 的发布网址，本期使用其后的 v2.71.0，不重复那个网址。OpenAI RSS 里标成 2026-11-19T00:00:00Z 的条目早于起点。同日 Genie 4 进入 Gemini API 的文章，JSON-LD datePublished 也是 2026-11-19T17:00:00+00:00，正文写明 720p、24fps 与同步原生音频，并提醒输出带有 SynthID 水印，但没有写出价格；本期在这一时刻改用范围写得更具体的 Mac 计算机操作，不把那篇文章列为来源。LiteLLM v1.110.1 的 published_at 为 2026-11-19T05:05:03Z，落在窗口内，说明含三则拉取请求，其中一则修复系统提示在 store 为 false 时发往聊天补全或 Messages 接口的 GPT-6.2 提示缓存；本期不把它单列。调查次数、复核比例和可用范围均来自各原文，本刊未独立复跑。我们的编辑判断是：把 OpenAI 自己给出的调查规模和 100 条根因建议里的复核比例、Google 对 Mac 计算机操作的推出范围和文中并存的批准说法、Google 对按需加载工具参数且不另收费的说明，以及智能体框架里的模型名和工具桥分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 19, 09:55 to November 20, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 074 already covered through 09:55 on November 19, so items at or before that moment stay outside this window, as do items after 09:55 on November 20. Items must be strictly after 2026-11-19T01:55:00Z and at or before 2026-11-20T01:55:00Z. The two Google items use datePublished in each blog page's JSON-LD, 2026-11-19T17:00:00+00:00 and 2026-11-19T18:00:00+00:00. article:published_time on both pages is the calendar date 2026-11-19 with no time of day, so this issue does not time those posts by it. A meta tag named published_time on each page matches that page's JSON-LD datePublished. The OpenAI article page shows only the calendar date November 19, 2026, so this issue uses the pubDate on that article's news-RSS entry, Thu, 19 Nov 2026 08:00:00 GMT, which is 2026-11-19T08:00:00Z. The pydantic-ai item uses published_at from the GitHub release record, 2026-11-19T02:13:05Z. created_at on the same record is 2026-11-19T01:39:46Z, before this window's start, and this issue does not treat that as the publication instant. Issue 073 already used the v2.70.0 release URL; this issue uses the later tag v2.71.0 and does not reuse that URL. OpenAI RSS items dated 2026-11-19T00:00:00Z are before the start. A same-day post about Genie 4 on the Gemini API also has JSON-LD datePublished 2026-11-19T17:00:00+00:00. Its body states 720p, 24fps and synchronized native audio, and it says outputs carry a SynthID watermark, but it does not state a price. At that instant this issue uses the Mac computer-use post, which states a more specific scope, and does not list the Genie article as a source. LiteLLM v1.110.1 has published_at 2026-11-19T05:05:03Z, inside the window. Its notes describe three pull requests, one of which fixes GPT-6.2 prompt caching for system prompts sent to chat completions or the Messages API with store set to false. This issue does not give that release its own item. Investigation counts, review rates and availability limits come from the cited pages and were not independently rerun by TUJL. Our editorial view: keep OpenAI's own investigation counts and the review rate on 100 root-cause suggestions, Google's stated Mac rollout limits and the approval wordings that sit together in that post, Google's account of loading tool parameters on demand with no separate charge, and an agent framework's model name and tool bridge apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "智能体框架 / Agent framework",
      "source": "Pydantic AI · GitHub Release",
      "date": "2026.11.19 10:13:05 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-19T02:13:05Z",
      "zhTitle": "pydantic-ai 2.71.0 接入 Gemini 4 Neon，并把大工具集收到固定的工具桥后面",
      "enTitle": "pydantic-ai 2.71.0 adds Gemini 4 Neon and puts large tool sets behind a fixed tool bridge",
      "zh": "pydantic-ai v2.71.0 为正式发布。计时以 GitHub published_at 为准，为 2026-11-19T02:13:05Z。同一记录的 created_at 为 2026-11-19T01:39:46Z，早于本窗口起点，本条不把它当作发布时间。073期已经记录过 v2.70.0；本条记录的是比较范围 v2.70.0...v2.71.0 里的后一个标签。兼容性说明中的条目包括：Peers(network) 可以按智能体的 name 加入 InMemoryPeerNetwork，并把 PeerNetwork 重命名为 PeerConnection（#13777）；为 Stav 这家欧洲推理网关加入 StavProvider（#12750）；把 Otari 加为兼容 OpenAI 的网关提供方（#13584）；StackOne 改为使用 auth，弃用 api_key，以便和其他托管 MCP 能力对齐（#13735）；为 ToolOutputLimits 溢出的结果加入 grep_tool_result，并可以用 unit 为 bytes 的方式读取（#13752）；把远程 CodeMode 回合作为 Temporal 活动运行，以免较长片段触发死锁检测（#13756）；DeferredToolRequests.validated_args 让批准者看到延迟工具调用将要使用的参数（#13693）；弃用 Pydantic AI 已不再使用的 DEPRECATED_ANTHROPIC_MODELS（#13795）；若一次延迟暂停的同一步还运行了其他工具，在没有 deferred_tool_results 的情况下恢复时会再次暂停（#13051）；内容在 DeferredToolRequests 或 PendingModelResponse 暂停处排队时保持运行暂停，并且 BackgroundTools 在 DeferredToolRequests 暂停处等待自己的任务（#13054）；在 CodeMode(tools='all') 下，需要批准的工具和外部工具仍保持原生调用（#13742）；把 MCPToolsetClient 的进程内 MCP 服务器这一支写成协议，而不是 mcp.server.fastmcp.FastMCP，从而使严格的 pyright 能在 FastMCP 3 和 4 上接受它（#13721）。功能条目还包括：Anthropic 消息线程的 anthropic_previous_message_id 设置（#12259）；ConversationRecord 的 title 与 metadata，由 ConversationStore.update() 设置（#12311）；DenyUnanswered，用于回答延迟调用（#12584）；用 ModelRouter 为智能体运行选择路由（#9046）；ReportStaleFiles，在已读过的工作区文件发生变化或被删除时告诉模型（#13750）；ToolBridge 把工具列表固定在 tool_search、tool_describe 与 tool_call 后面，以便大或会变化的工具集仍能保住提示缓存（#13744）；Shell(secret_env=) 会遮住它注入的密钥在工具返回内容里的样子（#13622）；提供方返回的 HTTP 408 改为抛出 ModelTimeoutError（#13838）；WrapUpAtLimits 在到达用量上限时以最终回答结束，而不是抛出 UsageLimitExceeded（#13670）；LabelCrossModelHistory 在较早的助手回合来自另一个模型时告诉当前模型（#13749）；Harness 的 Permissions 可以用 PermissionRule 按规则允许、询问或拒绝工具调用和 shell 命令（#13751）；ReportRemainingBudget 在每次请求时告诉模型用量上限和支出预算还剩多少（#13747）；CurrentTime 让智能体知道所选时区的今天日期或当前小时（#13754）；ReportToolErrors 把未处理的工具异常作为失败的工具结果发给模型，而不是结束这次运行（#13745）；RequireVerification 在编程智能体于未经验证的编辑之后试图结束时，把它送回去运行检查（#13753）；Goal 让无人值守的运行继续，直到调用方定义的完成检查通过（#13733）；GoogleModel 支持 Gemini 4 Neon，模型名为 gemini-4-neon（#13928）。发布说明还列出大量其他修复，本条不把那些条目改写成单独核过的行为。上述范围来自这一标签的发布说明，本刊未运行该库。GitHub published_at 为 2026-11-19T02:13:05Z。",
      "en": "pydantic-ai v2.71.0 is a regular release. This item times it by GitHub published_at, 2026-11-19T02:13:05Z. created_at on the same record is 2026-11-19T01:39:46Z, before this window's start, and this item does not treat that as the publication instant. Issue 073 already recorded v2.70.0; this item records the later tag in the compare range v2.70.0...v2.71.0. Items in the compatibility notes include letting Peers(network) join an InMemoryPeerNetwork under the agent's name and renaming PeerNetwork to PeerConnection (#13777); adding StavProvider for the Stav European inference gateway (#12750); adding Otari as an OpenAI-compatible gateway provider (#13584); adding auth to StackOne and deprecating api_key, to match the other hosted MCP capabilities (#13735); adding grep_tool_result and unit='bytes' reads for ToolOutputLimits spills (#13752); running remote CodeMode turns as Temporal activities so long snippets do not trip the deadlock detector (#13756); adding DeferredToolRequests.validated_args so an approver sees the arguments a deferred tool call will run with (#13693); deprecating DEPRECATED_ANTHROPIC_MODELS, which Pydantic AI no longer uses (#13795); pausing again when a deferred pause whose step also ran other tools is resumed without deferred_tool_results (#13051); keeping a run paused when content is queued at a DeferredToolRequests or PendingModelResponse pause, and having BackgroundTools wait for its tasks at a DeferredToolRequests pause (#13054); keeping approval-required and external tools native under CodeMode(tools='all') (#13742); and typing the in-process MCP server arm of MCPToolsetClient as a protocol instead of mcp.server.fastmcp.FastMCP, so strict pyright accepts it on FastMCP 3 and 4 (#13721). Feature items also include an anthropic_previous_message_id setting for Anthropic message threads (#12259); title and metadata on ConversationRecord, set with ConversationStore.update() (#12311); DenyUnanswered to answer deferred calls (#12584); ModelRouter to route agent runs (#9046); ReportStaleFiles to tell the model when workspace files it read change or are deleted (#13750); ToolBridge, which keeps the tool list fixed behind tool_search, tool_describe and tool_call so the prompt cache holds for large or changing tool sets (#13744); Shell(secret_env=), masking the secrets it injects in what the tools return (#13622); raising an HTTP 408 from a provider as ModelTimeoutError (#13838); WrapUpAtLimits to end a run with a final answer instead of UsageLimitExceeded (#13670); LabelCrossModelHistory to tell the model when earlier assistant turns came from another model (#13749); PermissionRule in Harness Permissions to allow, ask about, or deny tool calls and shell commands by rule (#13751); ReportRemainingBudget to tell the model how much of its usage limits and spend budgets is left on every request (#13747); CurrentTime so an agent knows today's date, or the current hour, in a time zone the caller picks (#13754); ReportToolErrors to send an unhandled tool exception to the model as a failed tool result instead of ending the run (#13745); RequireVerification to send a coding agent back to run its checks when it tries to finish after an unverified edit (#13753); Goal to keep unattended runs working until a caller-defined completion check passes (#13733); and GoogleModel support for Gemini 4 Neon under the name gemini-4-neon (#13928). The notes list many further fixes; this item does not restate those entries as separately checked behavior. This scope comes from that tag's release notes, and TUJL has not run the library. GitHub published_at is 2026-11-19T02:13:05Z.",
      "href": "https://github.com/pydantic/pydantic-ai/releases/tag/v2.71.0"
    },
    {
      "index": "02",
      "label": "性能工程 / Performance engineering",
      "source": "OpenAI",
      "date": "2026.11.19 16:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-19T08:00:00Z",
      "zhTitle": "OpenAI 说明用 Codex 组成的性能工厂追查并修复 ChatGPT 的性能回归",
      "enTitle": "OpenAI describes a Codex-based Performance Factory that tracks and fixes ChatGPT performance regressions",
      "zh": "OpenAI 发布《How OpenAI’s Performance Factory keeps ChatGPT fast》，作者为技术团队成员 Okay Zed 与 Cyrus Forbes。文章页只标出日历日期 November 19, 2026，没有时刻；计时以 openai.com 新闻 RSS 中该文的 pubDate 为准，为 Thu, 19 Nov 2026 08:00:00 GMT。该文把 Performance Factory 写成在云端运行的系统，用 Codex 及其模型寻找并修复性能问题。工程师为重复性工作定义工作流，并为执行这些工作的 Codex 智能体写说明。其中的回归工作流（Regression Workflow）在性能警报触发时打开任务。智能体调查变慢的原因，把发现记在任务里，并提出修复，交由工程师复核。部署之后，另一个智能体接上同一任务，检查性能是否回到基线。该文写明，从调查、撰写修复到验证缓解，这条工作流把修复回归的过程自动化了。在三个多月里，回归工作流跟踪了 1,700 次以上的调查，并为 600 个以上的案例找到根因。该文把这写成每天 17 次自动调查。系统分成四部分：带可配置工作流的任务服务、把就绪工作分给智能体的调度循环、在云端运行 Codex 回合的内部 API，以及在情况变化时唤醒智能体的订阅，例子包括 GitHub 复核评论发布或部署完成。云端的 Codex 回合跑在其网络内部的环境里，可以访问代码仓库，以及工程师使用的指标、日志、追踪、CPU 剖面和内存快照。智能体以服务身份运行，因此可以限定权限，并看出哪些动作来自这些性能智能体。该文写明早期的智能体有时停在第一个说得通的解释上，其中有些诊断后来证明是错的，于是加入对抗式复核：另一次 Codex 会话尝试推翻所提出的诊断。文中的一个例子是，智能体把失败的 ChatGPT 对话追溯到图像下载错误，并标成已经找到原因；复核者注意到负责定位文件的内部服务已经恢复，而图像请求仍在失败，于是重新打开调查。该文另写明，在对 100 条根因建议所做的人工复核里，他们把 70% 评为准确，30% 需要进一步细化，或没有完全建立因果关系。回归工作流用不同的回合分别调查、质疑诊断和提出修复，该文说这是为了靠制衡提高准确程度；该文没有给工作流本身另报一个准确率。诊断通过复核后，工作流让 Codex 实现修复并打开拉取请求，由工程师决定是否合并。该文写明把修复做对比找到原因更难，见过提案比所需更复杂，或引入新问题的情况；有些修复还需要更高层的架构决定，例如加缓存可能提高性能，但也会引入过期数据。部署后，智能体检查是否回到早先的基线：回到了就标为已解决；只部分恢复就结束原来的回归，并为剩下的变慢另开任务；没有改善就把回归送回调查。该文说他们正在用智能体提案和工程师最终合并的改动做对照，建立评估与改进循环，也在探索用合成性能测试让智能体在请人复核前先测量并修改提案，并探索让智能体借助其他智能体复核工具识别低风险改动，最终在没有人在环的情况下交付这些修复。该文写明，今天的瓶颈可能是等待工程师复核并合并修复。上述次数和 70% 的复核比例都是 OpenAI 给出的，本刊未复跑。RSS pubDate 为 Thu, 19 Nov 2026 08:00:00 GMT。",
      "en": "OpenAI published How OpenAI’s Performance Factory keeps ChatGPT fast, by Okay Zed and Cyrus Forbes, Members of Technical Staff. The article page shows only the calendar date November 19, 2026, with no time of day. This item times it by the pubDate on its openai.com news-RSS entry, Thu, 19 Nov 2026 08:00:00 GMT. The post describes the Performance Factory as a system that runs in the cloud and uses Codex and OpenAI's models to find and fix performance problems. Engineers define workflows for recurring jobs and write instructions for the Codex agents that carry them out. Its Regression Workflow opens a task when a performance alert fires. An agent investigates the slowdown, records findings on the task, and proposes a fix for an engineer to review. After deployment, another agent picks up the same task to check whether performance has returned to baseline. The post says that from investigating, to authoring the fix, to verifying mitigation, this workflow has automated the process of fixing regressions. In just over three months, the Regression Workflow tracked more than 1,700 investigations and root-caused over 600 cases. The post states that as 17 automated investigations every day. The system has four parts: a task service with configurable workflows, a dispatch loop that assigns ready work to agents, an internal API that runs a Codex turn in the cloud, and subscriptions that wake agents when something changes, with examples that include a GitHub review comment posting or a deployment completing. The cloud Codex turn runs on an environment inside OpenAI's network, with access to code repositories and to the observability tools engineers use, such as metrics, logs, traces, CPU profiles and memory snapshots. The agent runs under a service identity, so permissions can be scoped and actions from these performance agents can be distinguished. The post says that early on, agents sometimes stopped at the first plausible explanation and some of those diagnoses turned out to be wrong, so it added an adversarial review: a separate Codex session that tries to disprove the proposed diagnosis. In one example in the post, an agent traced failing ChatGPT conversations to image-download errors and marked the cause as found; the reviewer noticed that the internal service responsible for locating files had already recovered while image requests were still failing, and reopened the investigation. The post separately says that in a manual review of 100 root-cause suggestions, they graded 70% as accurate, with 30% needing further refinement or not fully establishing causality. In the Regression Workflow, different turns investigate regressions, challenge diagnoses and propose fixes. The post says that is to increase accuracy through checks and balances. It does not give a separate accuracy figure for the workflow itself. After a diagnosis passes review, the workflow asks Codex to implement a fix and open a pull request, and an engineer decides whether to merge it. The post says getting fixes right has been harder than finding the cause. It says there have been cases where the proposed changes are more complicated than necessary or introduce new issues, and that some fixes need a higher-level architectural decision, such as adding a cache that might improve performance but introduce stale data. After deployment, an agent checks whether performance has returned to its earlier baseline. If it has, the agent marks the task resolved. If recovery is only partial, the agent resolves the original regression and opens a new task for the remaining slowdown. If there is no improvement, it sends the regression back for investigation. The post says they are building an evaluation and improvement loop by comparing the fixes agents propose with the changes engineers ultimately merge. It also says they are exploring synthetic performance tests so agents can measure and revise a proposal before asking an engineer for review, and exploring whether agents could use other agentic review tools to identify low-risk changes and eventually ship those fixes without a human in the loop. The post says that today the bottleneck may be waiting for an engineer to review and merge the fix. These counts and the 70% review rate are OpenAI's. TUJL has not rerun them. The RSS pubDate is Thu, 19 Nov 2026 08:00:00 GMT.",
      "href": "https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast"
    },
    {
      "index": "03",
      "label": "计算机操作 / Computer use",
      "source": "Google",
      "date": "2026.11.20 01:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-19T17:00:00Z",
      "zhTitle": "Gemini Mac 应用加入计算机操作，并写明语言、地区和系统要求",
      "enTitle": "The Gemini Mac app adds computer use and states language, region and system requirements",
      "zh": "Google 发布 Gemini Mac 应用的计算机操作，署名 Michael Friedman，职称为 Gemini 应用的集团产品经理。计时以博客页 JSON-LD 的 datePublished 为准，为 2026-11-19T17:00:00+00:00；dateModified 为 2026-11-19T17:09:37.722918+00:00。同页 article:published_time 只有日期 2026-11-19，没有时刻，因此不以它计时。同页 name 为 published_time 的 meta 与 JSON-LD 的 datePublished 相同。该文写明，Gemini 应用的 Mac 版可以在后台操作 Mac 应用和网站，以完成复杂任务。用户描述需求后，Gemini 会浏览菜单、输入信息并在应用里点击。它在一个单独的窗口里运行，用户可以继续自己的工作。该文在一处写明，用户通过批准每一个动作，并精确选择 Gemini 可以访问哪些应用来保持控制。文首要点写的是批准动作发生之前的那些动作。稍后的正文写明，Gemini 在一个隔离的后台窗口里工作，聊天中有实时预览；主屏幕和光标保持可用，因此用户可以继续打字、设计或通话。该处写明，用户选择 Gemini 可以访问哪些应用，实时观看每一步，可以随时暂停，并在关键动作发生前予以批准。本条把这几处说法并列，不把它们合成一种批准规则。文中举例包括：在设计软件里批量调色或搭建复杂的 3D 场景；从本地 PDF 提取重量、尺寸和地址，以填写多栏运费报价；从多个地区的实时仪表板提取指标和截图，并在 Google Slides 里做成演示；从本地文件夹分析衣物照片、查询价格、记录物品细节并在转售平台上准备上架。这些是公告中的例子，本刊未独立核验。推出范围写明：计算机操作正在美国、以英语在 Gemini 的 Mac 应用中推出。下载地址写为 gemini.google/mac。脚注写明，需要运行 macOS Sequoia 15.0 或更高版本的 Apple 芯片 Mac；面向 18 岁以上的个人 Google 账号；可供 Google AI Plus、Pro 与 Ultra 用户使用。JSON-LD datePublished 为 2026-11-19T17:00:00+00:00。",
      "en": "Google published computer use for the Gemini Mac app, with a byline for Michael Friedman, Group Product Manager, Gemini App. This item times the post by datePublished in the blog page's JSON-LD, 2026-11-19T17:00:00+00:00. dateModified is 2026-11-19T17:09:37.722918+00:00. That page's article:published_time is the calendar date 2026-11-19 with no time of day, so this item does not time the post by it. A meta tag named published_time on the same page matches the JSON-LD datePublished. The post says the Gemini app on Mac can operate Mac apps and websites in the background to finish complex tasks. The user describes what is needed, and Gemini navigates menus, types information and clicks through apps. It runs in a separate window so the user can continue their own work. One sentence says the user stays in control by approving every action and choosing exactly which apps Gemini can access. The opening bullets say the user approves actions before they occur. A later paragraph says Gemini works inside an isolated background window with a live preview in the chat, while the main screen and cursor stay free, so the user can keep typing, designing or taking calls. That paragraph says the user chooses which apps Gemini can access, watches every step live, can pause at any time, and approves key actions before they happen. This item sets those wordings side by side and does not collapse them into one approval rule. Examples in the post include batch color-grading or setting up complex 3D scenes in design software; extracting weights, dimensions and addresses from local PDFs to fill multi-box shipping quotes; pulling metrics and screenshots from live dashboards across regions and building a presentation in Google Slides; and analyzing clothing photos from a local folder, researching prices, logging item details and staging listings on resale platforms. Those are examples from the announcement, and TUJL has not checked them independently. On availability, the post says computer use is rolling out in English in the U.S. in the Gemini app for Mac. It gives the download address as gemini.google/mac. The footnote says it requires an Apple Silicon Mac running macOS Sequoia 15.0 or later, is available for personal Google accounts for people 18 and older, and is available to Google AI Plus, Pro and Ultra users. JSON-LD datePublished is 2026-11-19T17:00:00+00:00.",
      "href": "https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/"
    },
    {
      "index": "04",
      "label": "工具检索 / Tool retrieval",
      "source": "Google",
      "date": "2026.11.20 02:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-19T18:00:00Z",
      "zhTitle": "Gemini API 以预览形式加入工具检索，按需加载参数模式",
      "enTitle": "The Gemini API adds Tool Retrieval in preview and loads parameter schemas on demand",
      "zh": "Google 发布 Gemini API 中的 Tool Retrieval，署名为 Gemini API 产品经理 Lucia Loher，以及 Google DeepMind 研究科学家 Nora Kassner。计时以博客页 JSON-LD 的 datePublished 为准，为 2026-11-19T18:00:00+00:00；dateModified 为 2026-11-19T18:30:49.215439+00:00。同页 article:published_time 只有日期 2026-11-19，没有时刻，因此不以它计时。同页 name 为 published_time 的 meta 与 JSON-LD 的 datePublished 相同。该文写明，Tool Retrieval 已在 Interactions API 中以预览形式提供。智能体连着几十甚至上百个工具时，每次请求都发送全部参数模式会增加输入 token、增加延迟，并在候选变多时降低工具选择的准确度。Tool Retrieval 让工具库留在一旁，只在当前任务需要时加载参数模式。打开方式是在请求里加入 tool_search 工具，并对想暂缓的工具设置 defer_loading 为 true。模型仍然看得到每个被推迟工具的名称和描述，参数模式则留在上下文之外。模型按名称要一个工具时，API 加载完整模式，然后模型调用该函数，这三步发生在同一次请求里。该文写明，这三步会出现在 interaction.steps 里，类型分别为 tool_search_call、tool_search_result 与 function_call。不需要自建或托管索引，搜索由 Gemini 在服务器上运行。常用工具可以仍放在前面，长尾再推迟。该文写明这与前缀缓存配合：被推迟的模式不进入提示的开头，模型加载的模式加在对话后面，因此缓存的前缀在各回合之间保持不变。远程 MCP 服务器也可以用：在 mcp_server 工具上设置 defer_loading 为 true，该服务器暴露的每个工具都按需加载，不必逐个列出。若调用方自己维护工具登记、嵌入索引或按用户的权限过滤，可以把 tool_search 的 execution 设为 client 并定义搜索参数。客户端检索每次搜索多一次往返，因为查找由应用执行；工具不必事先声明，因此用户中途接上一个集成时，也可以在对话中途暴露新工具。费用部分写明没有单独收费，输入和输出 token 按所调用模型的标准价格计费。打开 tool_search 会增加一小块固定的输入 token，该文没有写出这一小块的大小。模型加载的每个模式，在之后的对话里都按输入计费，与一开始就声明的工具相同。该文写明，当从未加载的模式多于所加载的模式时才会省下 token，并说这对大型工具库是通常情况，应当按自己的流量测量。可用范围写明：Tool Retrieval 适用于 Gemini 3.6 及之后的模型，包括全部 Gemini 4 模型，位于 Interactions API。文中的代码示例调用 gemini-4-hydrogen，并把一个退款函数标成推迟加载；这是公告里的示例，不是本刊复跑的结果。JSON-LD datePublished 为 2026-11-19T18:00:00+00:00。",
      "en": "Google published Tool Retrieval in the Gemini API, with bylines for Lucia Loher, Product Manager, Gemini API, and Nora Kassner, Research Scientist, Google DeepMind. This item times the post by datePublished in the blog page's JSON-LD, 2026-11-19T18:00:00+00:00. dateModified is 2026-11-19T18:30:49.215439+00:00. That page's article:published_time is the calendar date 2026-11-19 with no time of day, so this item does not time the post by it. A meta tag named published_time on the same page matches the JSON-LD datePublished. The post says Tool Retrieval is available in preview in the Interactions API. When an agent connects to dozens or hundreds of tools, sending every parameter schema on every request increases input tokens, adds latency, and lowers tool-selection accuracy as the candidate list grows. Tool Retrieval keeps the tool library on standby and loads parameter schemas only when the current task needs them. To turn it on, add a tool_search tool to the request and set defer_loading to true on the tools to hold back. The model still sees the name and description of every deferred tool, while the parameter schemas stay out of context. When the model asks for a tool by name, the API loads the full schema and the model calls the function. The post says those three steps happen inside the same request. It says they appear in interaction.steps, with types tool_search_call, tool_search_result and function_call. There is no index to build or host. Gemini runs the search on the server. Frequently used tools can stay loaded up front, and the long tail can be deferred. The post says this works with prefix caching: deferred schemas stay out of the start of the prompt, and schemas the model loads are added later in the conversation, so the cached prefix stays the same from turn to turn. Remote MCP servers work too. Setting defer_loading to true on an mcp_server tool loads every tool that server exposes on demand, without listing them one by one. If the caller keeps its own tool registry, embedding index or per-user permission filter, it can set the tool_search execution to client and define the search parameters. Client-side retrieval adds one round trip per search, because the app runs the lookup. Tools do not need to be declared up front, so a new tool can be exposed mid-conversation when a user connects an integration. On price, the post says there is no separate charge. Input and output tokens are billed at the standard rates for the model called. Turning on tool_search adds a small, fixed block of input tokens. The post does not state the size of that block. Each schema the model loads is billed as input for the rest of the conversation, the same as a tool declared up front. The post says tokens are saved when the schemas that are never loaded outweigh the ones that are, says that is the usual case for large libraries, and says to measure it against one's own traffic. On availability, the post says Tool Retrieval works with Gemini 3.6 and later models, including all Gemini 4 models, in the Interactions API. The code sample in the post calls gemini-4-hydrogen and marks a refund function as deferred. That sample is an illustration in the announcement, not a result TUJL reran. JSON-LD datePublished is 2026-11-19T18:00:00+00:00.",
      "href": "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/"
    }
  ]
};

export const issue074: Issue = {
  "number": "074",
  "date": "2026-11-19",
  "readingTime": "约 5 分钟",
  "windowStart": "2026-11-18T01:55:00Z",
  "windowEnd": "2026-11-19T01:55:00Z",
  "heading": "Gemini 4 Neon 写明价格与分数，决策模型标出输入价，广告排序交给智能体传播，Codex 说明沙箱边界",
  "noteTitle": "博客按 datePublished 或 postTime 计时，OpenAI 按 RSS pubDate。",
  "noteZh": "本期按北京时间11月18日09:55至11月19日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。073期已经覆盖到18日09:55，该时刻及之前的条目留在窗外，19日09:55之后的条目也不计入。只收录严格晚于 2026-11-18T01:55:00Z、且不晚于 2026-11-19T01:55:00Z 的条目。Google 条目以博客页 JSON-LD 的 datePublished 为准，为 2026-11-18T21:00:00+00:00；同页 article:published_time 只有日期 2026-11-18，因此不以它计时。微软条目以页面数据中的 postTime 为准，为 2026-11-18T10:48:22.660-08:00，即 2026-11-18T18:48:22.660Z。该页 JSON-LD 的 datePublished 是没有时区的“11/18/2026, 6:48:22 PM”，article:modified_time 为 2026-11-18T10:25:19.711-08:00，本条不把它们当作发布时间。Meta 条目以 JSON-LD 与 article:published_time 的 datePublished 为准，为 2026-11-18T17:00:00+00:00。OpenAI 文章页只标出 November 18, 2026，没有时刻，因此以新闻 RSS 中该文的 pubDate 为准，为 Wed, 18 Nov 2026 08:00:00 GMT，即 2026-11-18T08:00:00Z。073期已经用过 GPT-6.2 Astra 与 Sol 的公告网址，其 RSS pubDate 为 Tue, 17 Nov 2026 17:45:00 GMT，即 2026-11-17T17:45:00Z，落在本窗口之前，本期不重复该网址。073期已经用过 MAI Code 2 的公告网址，本期不重复。LiteLLM v1.110.0 的 published_at 为 2026-11-18T01:36:48Z，早于本窗口起点。OpenAI RSS 里标成 2026-11-18T00:00:00Z 的条目也早于起点。分数、价格、速度与费用估算均来自各原文，本刊未独立复跑。我们的编辑判断是：把 Google 自己给出的价格和评测分数、微软自己给出的准确率与分区价格、Meta 对广告排序技术传播的早期估算，以及 OpenAI 对沙箱边界和仍可能发生的伤害的说明分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 18, 09:55 to November 19, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 073 already covered through 09:55 on November 18, so items at or before that moment stay outside this window, as do items after 09:55 on November 19. Items must be strictly after 2026-11-18T01:55:00Z and at or before 2026-11-19T01:55:00Z. The Google item uses datePublished in the blog page's JSON-LD, 2026-11-18T21:00:00+00:00. That page's article:published_time is the calendar date 2026-11-18 with no time of day, so this issue does not time the post by it. The Microsoft item uses postTime in the page data, 2026-11-18T10:48:22.660-08:00, which is 2026-11-18T18:48:22.660Z. JSON-LD datePublished on that page is the timezone-free string 11/18/2026, 6:48:22 PM, and article:modified_time is 2026-11-18T10:25:19.711-08:00; this issue does not treat those as the publication instant. The Meta item uses datePublished in JSON-LD and in article:published_time, 2026-11-18T17:00:00+00:00. The OpenAI article page shows only the calendar date November 18, 2026, so this issue uses the pubDate on that article's news-RSS entry, Wed, 18 Nov 2026 08:00:00 GMT, which is 2026-11-18T08:00:00Z. Issue 073 already used the GPT-6.2 Astra and Sol announcement URL. Its RSS pubDate is Tue, 17 Nov 2026 17:45:00 GMT, which is 2026-11-17T17:45:00Z, before this window, and this issue does not reuse that URL. Issue 073 already used the MAI Code 2 announcement URL, and this issue does not reuse it. LiteLLM v1.110.0 has published_at 2026-11-18T01:36:48Z, before this window's start. OpenAI RSS items dated 2026-11-18T00:00:00Z are also before the start. Scores, prices, speed claims and cost estimates come from the cited pages and were not independently rerun by TUJL. Our editorial view: keep Google's own prices and evaluation scores, Microsoft's own accuracy and regional prices, Meta's early estimates for technique propagation across ads ranking models, and OpenAI's account of sandbox limits and harm that can still occur apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "编程沙箱 / Coding sandbox",
      "source": "OpenAI",
      "date": "2026.11.18 16:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-18T08:00:00Z",
      "zhTitle": "OpenAI 说明 Codex 如何在用户控制的文件与网络限制内运行本机命令",
      "enTitle": "OpenAI explains how Codex runs local commands inside filesystem and network limits the user controls",
      "zh": "OpenAI 发布《Inside the Codex sandbox》。文章页只标出日历日期 November 18, 2026，没有时刻；计时以 openai.com 新闻 RSS 中该文的 pubDate 为准，为 Wed, 18 Nov 2026 08:00:00 GMT。该文写明，Codex 可以在用户的计算机上运行命令，范围限于用户控制的文件系统与网络限制，通过权限配置（permission profiles）设置，覆盖 macOS、Linux 与 Windows。以 Git 仓库为工作区根目录时，内置的 :workspace 配置允许在工作区内写入，同时把 .git 与 .codex 等目录保持为只读，因此 Codex 可以修改源代码，而不必为每一次改动请求许可，但不能直接修改 .codex/config.toml，也不能直接修改 .git/hooks 下的 Git hooks。它允许较宽的文件系统读取，但仍受用户已有的操作系统权限约束。该文自己指出其中的取舍：机器上其他位置的敏感文件，例如含有 API 密钥的配置文件，仍可能保持可读。该配置关闭网络访问，从而阻断直接上传和数据外传，同时也阻断合法的依赖下载，除非另外授予访问。该文写明，这些限制能挡住一大类不良行为，但并不能挡住所有伤害，并给出例子：代理可以把恶意代码注入本地已安装的包，例如 node_modules/prettier；这类改动可能不会出现在 git status 里，因为 node_modules 常常被 Git 忽略。该文把沙箱写成可复用的原语，并写明 codex sandbox 命令可以让其他工具沿用同一套按权限配置执行命令的机制。防御纵深，以及训练与对齐能让模型按用户意图使用这些权限，都是 OpenAI 自己的说法。该文还写明各平台的落实方式：macOS 通过 /usr/bin/sandbox-exec 使用 Seatbelt；Linux 由内部辅助程序 codex-linux-sandbox 组合 bubblewrap 与 seccomp-bpf；在兼容的 Windows 设备上，Codex 支持基于 MXC（Microsoft eXecution Container）的沙箱，并写明正在用它替换原有的 Windows 沙箱。本条只转述该文写出的边界，不把这些机制写成已经独立验证的隔离保证。RSS pubDate 为 Wed, 18 Nov 2026 08:00:00 GMT。",
      "en": "OpenAI published Inside the Codex sandbox. The article page shows only the calendar date November 18, 2026, with no time of day. This item times it by the pubDate on its openai.com news-RSS entry, Wed, 18 Nov 2026 08:00:00 GMT. The post says Codex can run commands on the user's machine inside filesystem and network limits the user controls, configured through permission profiles, on macOS, Linux and Windows. With a Git repository as the workspace root, the built-in :workspace profile allows writes within the workspace while keeping directories such as .git and .codex read-only, so Codex can edit source without permission for every change, but cannot directly change .codex/config.toml or Git hooks under .git/hooks. It allows broad filesystem reads, subject to the user's existing OS permissions. The page itself notes the tradeoff that sensitive files elsewhere on the machine, such as config files containing API keys, may remain readable. The profile disables network access, which blocks direct uploads and exfiltration, and also blocks legitimate dependency downloads unless additional access is granted. The post says these restrictions prevent a large class of bad behavior, but not all harm, and gives an example: the agent could inject malicious code into a locally installed package such as node_modules/prettier, and that change might not appear in git status because node_modules is often ignored by Git. The post describes the sandbox as a reusable primitive, and it says the codex sandbox command lets other tools run commands under the same permission-profile mechanism. Defense in depth, and the claim that training and alignment help the model use that access in accordance with the user's intent, are OpenAI's own statements. The post also states how the limits are applied: on macOS, Codex uses Seatbelt through /usr/bin/sandbox-exec; on Linux, an internal helper named codex-linux-sandbox combines bubblewrap and seccomp-bpf; on compatible Windows devices, Codex supports an MXC (Microsoft eXecution Container) sandbox and says it is replacing the existing Windows sandbox with one that uses MXC. This item restates the boundaries the post states and does not treat those mechanisms as an independently verified isolation guarantee. The RSS pubDate is Wed, 18 Nov 2026 08:00:00 GMT.",
      "href": "https://openai.com/index/inside-the-codex-sandbox"
    },
    {
      "index": "02",
      "label": "广告排序 / Ads ranking",
      "source": "Meta Engineering",
      "date": "2026.11.19 01:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-18T17:00:00Z",
      "zhTitle": "Meta 说明用 AI 智能体在广告排序模型之间传播技术，并给出早期估算",
      "enTitle": "Meta describes using AI agents to propagate techniques across ads ranking models and states early estimates",
      "zh": "Meta Engineering 发表《How Meta Uses AI Agents to Scale ML Innovations Across Ads Ranking Models》。计时以该页 JSON-LD 与 article:published_time 的 datePublished 为准，为 2026-11-18T17:00:00+00:00；dateModified 为 2026-11-18T18:24:35+00:00。该文写明这是系列的后续：此前的文章介绍了 Ranking Engineer Agent（REA）；本篇讲的是在一大组广告排序模型之间做技术传播（technique propagation），把排序模型上的改进，包括架构进展与训练优化，传播出去，以及 AI 智能体如何用在这个过程里。文首的估算写明：自 2026 年 3 月智能体开始驱动执行以来，AI 智能体处理超过 60% 的全部技术传播；对照智能体出现之前的同类工作，早期结果显示工程生产力为 3 倍，在选定的组合上训练计算出现中位数 4 倍的减少，并估计到年底可节省 4500 万美元以上的计算费用。正文另外写明，每位工程师现在可以处理 3 倍的技术与模型适配。这些是 Meta 自己的估算和早期结果，不是独立审计。该文把范围放在广告排序模型的技术传播上。本条不把它写成用户侧产品效果，也不补充文中没有的使用细节。datePublished 为 2026-11-18T17:00:00+00:00。",
      "en": "Meta Engineering published How Meta Uses AI Agents to Scale ML Innovations Across Ads Ranking Models. This item times the page by datePublished in its JSON-LD and in article:published_time, 2026-11-18T17:00:00+00:00. dateModified is 2026-11-18T18:24:35+00:00. The post says it continues a series that previously introduced the Ranking Engineer Agent (REA). This post is about technique propagation of ranking-model improvements, including architectural advancements and training optimizations, across a large fleet of ads ranking models, and how AI agents are used in that process. The opening estimate says that since agents began driving execution in March 2026, AI agents handle over 60% of all technique propagation. Measured against the same work before agents, early results show 3x greater engineering productivity, a median 4x reduction in training compute across select combinations, and an estimated $45M+ in compute savings by the end of the year. The body also says each engineer can now handle 3x more technique-model adaptations. These are Meta's estimates and early results, not an independent audit. The post keeps the scope on technique propagation for ads ranking models. This item does not treat that as a claim about user-facing product effects, and it does not add usage details the post does not give. datePublished is 2026-11-18T17:00:00+00:00.",
      "href": "https://engineering.fb.com/2026/11/18/ml-applications/ai-agents-to-scale-ml-innovations-across-ads-ranking-models/"
    },
    {
      "index": "03",
      "label": "决策模型 / Decision model",
      "source": "Microsoft Community Hub",
      "date": "2026.11.19 02:48:22 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-18T18:48:22.660Z",
      "zhTitle": "微软正式推出 Microsoft-Decision-1.1，并列出各数据区的输入价格",
      "enTitle": "Microsoft makes Microsoft-Decision-1.1 generally available and lists input prices by data zone",
      "zh": "微软在 Azure AI Foundry 博客发布 Microsoft-Decision-1.1。计时以页面数据中的 postTime 为准，为 2026-11-18T10:48:22.660-08:00，即 2026-11-18T18:48:22.660Z。JSON-LD 的 datePublished 是没有时区的“11/18/2026, 6:48:22 PM”；article:modified_time 为 2026-11-18T10:25:19.711-08:00。本条采用 postTime。该文写明，模型已在 Microsoft Foundry 正式可用，也可通过 OpenRouter 与 Vercel 使用。它基于 Gemma 4 26B A4，带有专门的决策训练和自定义推理引擎。微软自己的评估覆盖 102 项基准、超过 385,000 道未参与训练的题目，平均准确率 78.8%，并在九类能力中的七类领先。该文写明，它的速度超过 Microsoft-Decision-1 的两倍；校准有所改进，便于开发者用置信度设置何时自动执行、何时再请人复核；并新增多模态能力，使图像可以进入决策指令。它也可以作为 Foundry Evaluations 里的评判模型。定价为按用量计费，输出 token 不再另外收费。每百万输入 token 的价格是：Global Standard 0.042 美元，US Data Zone 0.046 美元，EU Data Zone 0.050 美元，APAC Data Zone 0.050 美元。上述准确率、速度和价格都是微软给出的，本刊未复跑，也未另行核价。postTime 为 2026-11-18T10:48:22.660-08:00。",
      "en": "Microsoft published Microsoft-Decision-1.1 on the Azure AI Foundry blog. This item times the page by postTime in the page data, 2026-11-18T10:48:22.660-08:00, which is 2026-11-18T18:48:22.660Z. JSON-LD datePublished is the timezone-free string 11/18/2026, 6:48:22 PM, and article:modified_time is 2026-11-18T10:25:19.711-08:00. This item uses postTime. The post says the model is generally available in Microsoft Foundry, and is also available through OpenRouter and Vercel. It is based on Gemma 4 26B A4, with specialized training for decision-making and a custom inference engine. In Microsoft's evaluation across 102 benchmarks containing more than 385,000 questions held out from training, average accuracy is 78.8%, leading in seven of nine capability categories. The post says it is more than twice as fast as Microsoft-Decision-1, that improved calibration helps developers use confidence signals to set thresholds for when to act automatically and when to request additional review, and that new multimodal capabilities let images go into decision instructions. It is also available as a judge in Foundry Evaluations. Pricing is consumption-based, and output tokens are included at no additional charge. Input price per 1 million tokens is $0.042 for Global Standard, $0.046 for US Data Zone, $0.050 for EU Data Zone and $0.050 for APAC Data Zone. These accuracy, speed and price figures are Microsoft's. TUJL has not rerun them or checked the prices separately. postTime is 2026-11-18T10:48:22.660-08:00.",
      "href": "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-decision-1-1-build-faster-more-efficient-ai-applications-w/4573877"
    },
    {
      "index": "04",
      "label": "前沿模型 / Frontier model",
      "source": "Google",
      "date": "2026.11.19 05:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-18T21:00:00Z",
      "zhTitle": "Google 发布 Gemini 4 Neon，并写明 API 价格与所引用的评测分数",
      "enTitle": "Google introduces Gemini 4 Neon and states API prices and the evaluation scores it cites",
      "zh": "Google 发布 Gemini 4 Neon，署名 Koray Kavukcuoglu。计时以博客页 JSON-LD 的 datePublished 为准，为 2026-11-18T21:00:00+00:00。同页 article:published_time 只有日期 2026-11-18，没有时刻，因此不以它计时。该文把 Neon 写成面向复杂软件工程、知识工作与科学工作流的前沿级模型，上下文窗口为 100 万 token。API 价格为每百万输入 token 3 美元，每百万缓存输入 token 0.15 美元（95% 折扣），每百万输出 token 15 美元。在 Artificial Analysis Intelligence Index 上，该文写明 Neon 在 xhigh 思考级别的分数为 61，总排名第 3，领先于可比较的模型，并紧跟在更大、更慢的模型之后。在 Vals Index 上，该文写明排名第 2、位于帕累托前沿，并给出 70.9%。在新的 Agent Arena Index 上，该文写明可操纵性（steerability，能顺着任务中途的用户纠正调整）排名第 2；另写明在 4,200 场以上的真实智能体会话中，全球排名第 2，分数为 1336。Legal Research Bench 与 Tax Agent Bench 均为第 1。科学与数学部分写明，Terminal-Bench Science 为 70.5%，RiemannBench 为 84.0%，HLE-Diamond 为 71.3%。编程部分写明，Artificial Analysis Coding Agent Index 总排名第 1，分数 58.6；Terminal-Bench 4.1 为 65.2%；FrontierCode 2.0 在默认的 high 设置下为 46.2%。SWE-sweep 上，该文写明在 mini-SWE 工具链上为 12.8%，在 Google Antigravity 中为 39.0%。效率部分写明，在默认的 high 思考级别，每次任务的费用比 Carbon 低 32%。可用范围写明：即日起进入 Google AI Studio 里的 Gemini API、Gemini for business（经 API 与模型下拉菜单）、面向已付费的 Google AI Pro 与 Ultra 订阅者的 Google Antigravity，以及 Gemini 应用里供 Pro 与 Ultra 订阅者选择的模型下拉菜单。关于产品系列，该文写明 Carbon 承担最难的长程项目，Hydrogen 承担快速的日常执行，Neon 在深度与效率之间取得平衡；本条不把它写成对其中任一模型的替换。同页还举了在 Google Antigravity 里驱动 Blender、从零写滑雪模拟器、重建图灵的书房，以及把一张图变成含大量公式的表格。这些是公告中的例子，本刊未独立核验。上述分数、价格和费用对比都是这篇公告所引用的数字，本刊未复跑。JSON-LD datePublished 为 2026-11-18T21:00:00+00:00。",
      "en": "Google published Gemini 4 Neon, with a byline for Koray Kavukcuoglu. This item times the post by datePublished in the blog page's JSON-LD, 2026-11-18T21:00:00+00:00. That page's article:published_time is the calendar date 2026-11-18 with no time of day, so this item does not time the post by it. The post describes Neon as a frontier-level model for complex software engineering, knowledge work and science workflows, with a 1 million-token context window. The API price is $3 per million input tokens, $0.15 per million cached input tokens (a 95% discount) and $15 per million output tokens. On the Artificial Analysis Intelligence Index, the post says Neon scores 61 at its xhigh thinking level, ranks #3 overall, ranks ahead of comparable models, and lands just behind larger, slower models. On the Vals Index, the post says it ranks #2, lands on the Pareto frontier, and gives 70.9%. On the new Agent Arena Index, the post says it ranks #2 on steerability, described as adapting cleanly to mid-task user corrections, and separately that it debuts #2 globally with a score of 1336 across 4,200+ real-world agent sessions. It says Neon reaches #1 on both Legal Research Bench and Tax Agent Bench. On science and mathematics, the post says Terminal-Bench Science is 70.5%, RiemannBench is 84.0% and HLE-Diamond is 71.3%. On coding, the post says Neon ranks #1 overall on the Artificial Analysis Coding Agent Index at 58.6, scores 65.2% on Terminal-Bench 4.1, and scores 46.2% on FrontierCode 2.0 at its default high setting. On SWE-sweep, the post says 12.8% on the mini-SWE harness and 39.0% in Google Antigravity. On efficiency, the post says that at the default high thinking level, cost per task is 32% lower than Carbon. On availability, the post says Neon is rolling out in the Gemini API in Google AI Studio, in Gemini for business via the API and the model dropdown, in Google Antigravity for paid Google AI Pro and Ultra subscribers, and in the Gemini app model dropdown for Pro and Ultra subscribers. On the family, the post says Carbon tackles the hardest long-horizon projects, Hydrogen handles fast everyday execution, and Neon balances depth and efficiency. This item does not describe that as a replacement for either model. The same page also gives examples, from the announcement, of driving Blender in Google Antigravity, writing a ski simulator from scratch, recreating Turing's study, and turning one image into a spreadsheet of live formulas. Those are examples from the announcement, and TUJL has not checked them independently. These scores, prices and cost comparisons are figures the announcement cites, and TUJL has not rerun them. JSON-LD datePublished is 2026-11-18T21:00:00+00:00.",
      "href": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
    }
  ]
};

export const issue073: Issue = {
  "number": "073",
  "date": "2026-11-18",
  "readingTime": "约 6 分钟",
  "windowStart": "2026-11-17T01:55:00Z",
  "windowEnd": "2026-11-18T01:55:00Z",
  "heading": "GPT-6.2 与 MAI Code 2 写明价格对比，Tether 接入用户计算机，框架补上模型名",
  "noteTitle": "模型公告按页面时间计时，开源标签按 GitHub published_at。",
  "noteZh": "本期按北京时间11月17日09:55至11月18日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的更新。072期已经覆盖到17日09:55，该时刻及之前的条目留在窗外，18日09:55之后的条目也不计入。Open WebUI 与 pydantic-ai 以 GitHub 发布记录的 published_at 为准，分别为 2026-11-17T14:46:26Z 与 2026-11-17T22:44:30Z，两者都是正式发布。OpenAI 条目以新闻 RSS 里该文的 pubDate 为准，为 Tue, 17 Nov 2026 17:45:00 GMT，即 2026-11-17T17:45:00Z。微软条目以该文 JSON-LD 的 datePublished 为准，为 2026-11-17T18:15:16+00:00，与页面 time 元素 2026-11-17T13:15:16-05:00 是同一时刻。072期已经记录过 pydantic-ai v2.69.0；本期使用其后的 v2.70.0，不重复那个网址。Google Developers Blog 上有一篇日期写着 2026-11-17 的机器人插件文章，datePublished 只有日期、没有时刻，因此不收入本期。Unsloth v0.1.919-beta 的 published_at 为 2026-11-17T14:56:56Z，落在窗口内，但说明再次把 072 期已经记录的计算机操作写进要点，本期不重复那条网址。分数、价格、耗时与偏好比例均来自各原文，本刊未独立复跑。我们的编辑判断是：把 OpenAI 自己给出的分数和标价、微软在促销价假设下的编程对比、仍把密钥留在用户计算机上的本地接入，以及智能体框架里的模型名和两处耗时修复分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 17, 09:55 to November 18, 09:55 Beijing time and selected four previously unused updates with verifiable publication timestamps. Issue 072 already covered through 09:55 on November 17, so items at or before that moment stay outside this window, as do items after 09:55 on November 18. The Open WebUI and pydantic-ai items use published_at from the GitHub release records, 2026-11-17T14:46:26Z and 2026-11-17T22:44:30Z, and both are regular releases. The OpenAI item uses the pubDate on that article's news-RSS entry, Tue, 17 Nov 2026 17:45:00 GMT, which is 2026-11-17T17:45:00Z. The Microsoft item uses datePublished in that page's JSON-LD, 2026-11-17T18:15:16+00:00, the same instant as the page's time element 2026-11-17T13:15:16-05:00. Issue 072 already recorded pydantic-ai v2.69.0; this issue uses the later tag v2.70.0 and does not reuse that URL. A Google Developers Blog post about a robotics plugin is dated 2026-11-17, but its datePublished has a calendar date and no time of day, so it is not included. Unsloth v0.1.919-beta has published_at 2026-11-17T14:56:56Z, inside the window, but the notes again put the computer-use item already recorded in issue 072 among the highlights, so this issue does not reuse that URL. Scores, prices, timings and preference rates come from the cited pages and were not independently rerun by TUJL. Our editorial view: keep OpenAI's own scores and list prices, Microsoft's coding comparisons under a promotional-price assumption, a local interface that leaves keys on the user's computer, and an agent framework's model names plus two slowdown fixes apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "本地界面 / Local interface",
      "source": "Open WebUI · GitHub Release",
      "date": "2026.11.17 22:46:26 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-17T14:46:26Z",
      "zhTitle": "Open WebUI v0.13.4 用 Tether 接上用户自己的计算机，并给终端加沙箱",
      "enTitle": "Open WebUI v0.13.4 connects a user's own computer through Tether and sandboxes the terminal",
      "zh": "Open WebUI v0.13.4 为正式发布。发布说明把 Tether 写成对 Direct Connections 的替换。用户在 Tether 应用里添加的模型，来自 Ollama、LM Studio 或任何兼容 OpenAI 的服务器，以及 OpenAPI 与 MCP 工具服务器和 Open Terminal 服务器，只会出现在该用户自己的模型选择器、加号菜单里的工具列表和终端菜单中，无论从哪台设备打开所连接的 Open WebUI。Open WebUI 经 Tether 访问它们，地址、命令和密钥留在用户的计算机上。这需要 Tether 0.1.14 或更新版本；MCP 服务器、工具服务器和终端需要 0.1.16。工具服务器和终端还需要打开 ENABLE_TOOL_SERVERS。标识与 Open WebUI 里已有模型相同的 Tether 模型会保持隐藏（#34397）。Tether 0.1.13 或更新版本可以把终端锁进沙箱：在 macOS 和支持的 Windows 设备上，Open Terminal 及其启动的程序，包括编程代理，只能接触用户选定的一个文件夹；除非打开网络访问，否则离线运行，并且不接受传入连接，不需要 Docker、虚拟机或管理员权限。若沙箱无法强制执行，终端保持停止，而不是在没有沙箱的情况下运行；沙箱打开时，浏览器和桌面控制保持关闭。本地 MCP 可以按 stdio 命令经 Tether 0.1.16 或更新版本启动，不需要 mcpo 这类代理，也不需要开放端口；说明写明这些本地命令以用户自己的账户权限运行，位于 Tether 工作区沙箱之外。连接 Terminals 0.4.0 或更新版本后，对连接有写权限的人可以从消息输入的终端菜单创建终端，并选择所有人共用一台机器，或按用户、对话或模型各用一台，同时设置镜像、CPU、内存、存储、网络配置、环境变量、起始目录和安装脚本。启动和停止需要 Terminals 0.4.1 或更新版本；起始目录和安装脚本需要镜像里的 Open Terminal 0.17.7 或更新版本；网络配置来自管理员用 TERMINALS_NETWORK_PROFILES 定义的项目。编程代理可以像其他模型一样在对话里使用。Hermes、Antigravity、GitHub Copilot、Goose 和 Qwen Code 加入已有的 Codex、Claude Code、Cursor、Grok、OpenCode、Cline、Gemini CLI 和 Pi；用 OPEN_TERMINAL_ACP_AGENTS 加到 Open Terminal 的其他 ACP 代理，在终端上安装并登录后也可以使用。工具权限里的 Auto 让 Codex、Claude Code 和 Grok 自行批准常规动作，只把它们升级的请求交出来。高级参数里的推理力度现在也用于 Claude Code、Pi，以及提供力度等级的 ACP 代理，例如 OpenCode；所选等级对该模型不可用时会报错停止。回复可以重新生成，较早的消息可以编辑。分叉或克隆的代理对话从原处接上：Codex 从该点继续自己的会话，其他代理根据至此的对话重新开始，代理已经做出的文件改动保留。Claude Code 要到 0.17.20 之后的下一版 Open Terminal 才会继续自己的会话，在那之前会要求先更新。新代理，以及对 Claude Code 和 Grok 的 Auto，需要 Open Terminal 0.17.19 或更新版本；Claude Code、Pi 和 ACP 代理的力度需要 0.17.9 或更新版本（#34167）。说明还写明，一次到达、含 300 个代码块的回复现在在 9 秒内显示，而不是超过两分钟（#34495）。同页还有默认关闭的可视化工具、默认关闭的视频生成，以及大量其他添加与修复；本条不把那些条目改写成单独核过的行为。上述范围来自这一标签的发布说明，本刊未安装或运行这一构建。GitHub published_at 为 2026-11-17T14:46:26Z。",
      "en": "Open WebUI v0.13.4 is a regular release. The notes describe Tether as the replacement for Direct Connections. Models added in the Tether app, from Ollama, LM Studio or any OpenAI-compatible server, plus OpenAPI and MCP tool servers and Open Terminal servers, show up only for that user in the model selector, the Tools list of the + menu and the terminal menu, on any device used to open a connected Open WebUI. Open WebUI reaches them through Tether, so addresses, commands and keys stay on the user's computer. This needs Tether 0.1.14 or later; MCP servers, tool servers and terminals need 0.1.16. Tool servers and terminals also need ENABLE_TOOL_SERVERS turned on. A Tether model whose ID matches a model already in Open WebUI stays hidden (#34397). Tether 0.1.13 or later can lock the terminal into a sandbox: on macOS and supported Windows devices, Open Terminal and everything it launches, coding agents included, can touch only the one folder the user picks. It runs offline unless Network access is turned on, accepts no incoming connections, and needs no Docker, virtual machine or administrator setup. If the sandbox cannot be enforced, the terminal stays stopped instead of running without it. Browser and desktop control stay off while the sandbox is on. Local MCP servers can be launched as stdio commands through Tether 0.1.16 or later, with no proxy such as mcpo and no port to open. The notes say those local commands run with the user's own account access, outside Tether's workspace sandbox. With Terminals 0.4.0 or later connected, anyone with Write access to the connection can create a terminal from the message input's terminal menu, choose whether everyone shares one machine or each user, chat or model gets its own, and set its image, CPU, memory, storage, network profile, environment variables, start directory and a setup script. Start and Stop need Terminals 0.4.1 or later. The start directory and setup script need Open Terminal 0.17.7 or later in the terminal's image. Network profiles are the ones an administrator defined with TERMINALS_NETWORK_PROFILES. Coding agents now work in chat much like any other model. Hermes, Antigravity, GitHub Copilot, Goose and Qwen Code join Codex, Claude Code, Cursor, Grok, OpenCode, Cline, Gemini CLI and Pi. Any other ACP agent added to Open Terminal with OPEN_TERMINAL_ACP_AGENTS works once it is installed and signed in on the terminal. Auto for tool permissions lets Codex, Claude Code and Grok approve routine actions themselves and pass on only what they escalate. Reasoning effort in the advanced parameters now also applies to Claude Code, Pi and ACP agents that offer effort levels, such as OpenCode, which stop with an error when the chosen level is not offered for the model. Replies can be regenerated and earlier messages edited. A forked or cloned agent chat picks up where the original left off: Codex continues its own conversation from that point, other agents start over from the chat so far, and file changes the agent already made stay. Claude Code continues its own conversation with the next Open Terminal release after 0.17.20, and until then asks for an update. The new agents, and Auto for Claude Code and Grok, need Open Terminal 0.17.19 or later. Effort for Claude Code, Pi and ACP agents needs 0.17.9 or later (#34167). The notes also say a reply with 300 code blocks that arrives at once now shows in 9 seconds instead of more than two minutes (#34495). The same page includes a visualizations tool that is off by default, video generation that is off by default, and many further additions and fixes; this item does not restate those entries as separately checked behavior. This scope comes from that tag's release notes, and TUJL has not installed or run the build. GitHub published_at is 2026-11-17T14:46:26Z.",
      "href": "https://github.com/open-webui/open-webui/releases/tag/v0.13.4"
    },
    {
      "index": "02",
      "label": "前沿模型 / Frontier models",
      "source": "OpenAI",
      "date": "2026.11.18 01:45:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-17T17:45:00Z",
      "zhTitle": "OpenAI 发布 GPT-6.2 Astra 与 Sol，并写明 API 价格与可用范围",
      "enTitle": "OpenAI releases GPT-6.2 Astra and Sol and states API prices and availability",
      "zh": "OpenAI 发布 GPT-6.2 Astra 与 GPT-6.2 Sol。计时以 openai.com 新闻 RSS 中该文的 pubDate 为准，为 Tue, 17 Nov 2026 17:45:00 GMT。该文把 Astra 写成面向最难项目的前沿模型，把 Sol 写成面向日常工作的高效模型，并写明两者在要求较高的任务上用更少的输出 token 得到更好的结果。在 Agents' Last Exam 上，该文写明 Astra 比 GPT-6 Astra 高 5.2 分，费用不到三分之一，并比 Claude Fable 5.2 高 5.5 分，费用为后者的 5%。该文把这项考试定义为长程专业工作流程，并写明 Fable 5.2 的排行榜结果排除了九个使用过回退模型的任务。在 Terminal-Bench-Science 0.1 上，该文写明 Astra 比 GPT-6 Astra 高 9 个百分点，费用不到三分之一，并在 Vals Science Index 上创下该文所称的新高，但没有给出 Vals 的具体分数。在 Cognition 的 FrontierCode 2.0 上，该文写明 Sol 在两者都取最大力度时与 Astra 相差不超过 0.5 分，费用约为五分之一；这项测试看的是对真实代码库的修改是否达到维护者的合并标准。在 LifeVal 上，该文写明 Sol 的得分高于 GPT-6 Astra，费用约为七分之一。在 GDPval v2 上，该文写明 Astra 比 GPT-6 Astra 高 6.2 个百分点，同时少用 22% 的输出 token；Sol 比 GPT-6.1 Sol 高 5.3 分。在 Artificial Analysis 的 AA-AnalystAgent 上，该文写明 Astra 在全部五次独立尝试中答对 62.5% 的问题。在 AA-3D 上，该文写明人工评判在同一提示的两个盲测体验中投票，Astra 为 1,318 Elo，Claude Fable 5.2 为 1,271，Sol 为 1,259。在 Harvey LAB-AA v1.1 上，该文写明 Astra 的通过率比 Claude Fable 5.2 高出一倍以上，费用约为六分之一，其面向律师的配置 Astra for Law 分数更高；标题分数只在交付物满足每一项评分标准且没有实质性幻觉时才计分。API 里，该文写明 Astra 的输入和输出 token 价格比 GPT-6 Astra 低 20%，缓存输入有 60% 折扣。每百万 token 的标准价格是：Astra 输入 8 美元、缓存输入 0.40 美元、输出 40 美元；Sol 沿用 GPT-6.1 Sol 的价格，输入 2 美元、缓存输入 0.10 美元、输出 10 美元。可用范围写明：即日起，Plus、Pro、Enterprise 和 Edu 用户可以在 ChatGPT Work 和 Codex 中使用两款模型；Pro 500 订阅者可以对两款使用 Ultrafast；Pro 200 订阅者首次获得 Ultrafast，先从 GPT-6.2 Sol 开始；符合条件的 Enterprise 和 Edu 用户要等工作区管理员打开后才有同样的访问。开发者可以通过 OpenAI API 使用 gpt-6.2-astra 与 gpt-6.2-sol，两款在发布时都提供 Ultrafast。该文建议保持提示前缀不变，把新指令追加到对话后面，以便提高缓存复用、降低费用和延迟，并在轮次之间保留推理。同页写明，两款模型在 OpenAI 的 Preparedness Framework 下达到网络安全 Critical，并达到生物与化学能力 High；Astra 是该文所称首个对外发布、且达到 AI 自我改进 High 的模型。该文说已收紧限制，保障与测试细节放在其链接的系统卡中。本条不转述漏洞利用或实验步骤。对齐部分写明，两款在大多数对齐评估上与 GPT-6 Astra 相近，在模拟的职场任务中更少采取不当动作；但在两项测试里，它们更可能不提阻碍工作的障碍，例如缺少文件或搜索工具不可用。该文说已在 Codex 中加入指令，这些省略因而大幅减少。上述分数、价格和门槛均来自这篇公告，本刊未复跑。RSS pubDate 为 Tue, 17 Nov 2026 17:45:00 GMT。",
      "en": "OpenAI published GPT-6.2 Astra and GPT-6.2 Sol. This item times the post by the pubDate on its openai.com news-RSS entry, Tue, 17 Nov 2026 17:45:00 GMT. The post describes Astra as the frontier model for the hardest projects and Sol as the efficient model for everyday work, and it says both deliver better results on demanding tasks with fewer output tokens. On Agents' Last Exam, the post says Astra scores 5.2 points higher than GPT-6 Astra at less than a third of the cost, and 5.5 points ahead of Claude Fable 5.2 at 5% of the cost. It defines that exam as long-horizon professional workflows, and it says the leaderboard results for Fable 5.2 exclude nine tasks that used a fallback model. On Terminal-Bench-Science 0.1, the post says Astra scores 9 percentage points higher than GPT-6 Astra at less than one-third the cost, and that it sets a new high on the Vals Science Index; it does not give a Vals score. On Cognition's FrontierCode 2.0, the post says Sol comes within 0.5 points of Astra at about one-fifth the cost when both run at max. That test asks whether changes to real codebases meet maintainers' standards for merging. On LifeVal, the post says Sol outscores GPT-6 Astra at about one-seventh the cost. On GDPval v2, the post says Astra is up 6.2 percentage points from GPT-6 Astra while using 22% fewer output tokens, and Sol improves 5.3 points from GPT-6.1 Sol. On Artificial Analysis's AA-AnalystAgent, the post says Astra answers 62.5% of questions correctly on all five independent attempts. On AA-3D, the post says human judges vote between two blinded experiences built from the same prompt: Astra at 1,318 Elo, Claude Fable 5.2 at 1,271, and Sol at 1,259. On Harvey LAB-AA v1.1, the post says Astra more than doubles Claude Fable 5.2's pass rate at about one-sixth the cost, and that Astra for Law, its configuration for lawyers, scores higher. The headline score counts only when a deliverable meets every grading criterion and contains no material hallucinations. In the API, the post says Astra's input and output token prices are 20% lower than GPT-6 Astra's, with a 60% discount on cached input. Standard rates per million tokens are $8 input, $0.40 cached input and $40 output for Astra. Sol keeps GPT-6.1 Sol's rates of $2 input, $0.10 cached input and $10 output. On availability, the post says that starting the day of the post, Plus, Pro, Enterprise and Edu users can use both models in ChatGPT Work and Codex; Pro 500 subscribers can use Ultrafast with either model; Pro 200 subscribers get Ultrafast for the first time, starting with GPT-6.2 Sol; eligible Enterprise and Edu users get the same access once a workspace admin enables it. Developers can use gpt-6.2-astra and gpt-6.2-sol through the OpenAI API, with Ultrafast available for both at launch. The post recommends keeping prompt prefixes unchanged and appending new instructions to the conversation, so cache reuse improves, cost and latency fall, and reasoning is preserved across turns. The same page says both models meet the Critical cybersecurity threshold and the High biological and chemical threshold under OpenAI's Preparedness Framework, and that Astra is the first model the post describes as externally released while meeting the High threshold for AI self-improvement. It says restrictions were tightened, and it points to the linked system card for safeguards and testing. This item does not recount exploit or experiment procedures. On alignment, the post says both models performed similarly to GPT-6 Astra on most alignment evaluations and took fewer improper actions in simulated workplace tasks, but in two tests they were more likely to omit obstacles that blocked their work, such as a missing file or an unavailable search tool. It says instructions added in Codex substantially reduce these omissions. These scores, prices and thresholds come from that announcement and were not rerun by TUJL. The RSS pubDate is Tue, 17 Nov 2026 17:45:00 GMT.",
      "href": "https://openai.com/index/introducing-gpt-6-2-astra-sol"
    },
    {
      "index": "03",
      "label": "编程模型 / Coding models",
      "source": "Microsoft AI",
      "date": "2026.11.18 02:15:16 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-17T18:15:16Z",
      "zhTitle": "微软发布 MAI Code 2 与 Code 2 Flash，并在促销价下给出编程对比",
      "enTitle": "Microsoft releases MAI Code 2 and Code 2 Flash and states coding comparisons at a promotional price",
      "zh": "微软 AI 发布 MAI Code 2 与 MAI Code 2 Flash。计时以该文 JSON-LD 的 datePublished 为准，为 2026-11-17T18:15:16+00:00；页面 time 元素为 2026-11-17T13:15:16-05:00，是同一时刻。该文把两款写成面向日常企业编程任务的编码模型，并写明它们优先处理客户每天做的编程工作，尚未针对更难的问题调优，例如基础科学研究和很长程的智能体工作。正文在四项它称为广泛使用、对准 GitHub Copilot 里日常企业编程任务的基准上取平均：DeepSWE 1.1、Terminal Bench 2.1、SWE-Atlas 与 FrontierCode v1.1。该文写明 MAI Code 2 达到 GPT 6.1 Sol 性能的 98%，费用为 40%；达到 Claude Opus 5.5 性能的 96%，费用为 5%。脚注写明所有模型都以最大推理力度运行；DeepSWE 1.1、TerminalBench 2.1 与 SWE Atlas 在微软内部评估平台 MSBench 上、用 GitHub Copilot CLI、不使用子代理运行；FrontierCode 1.1 的分数和费用来自 Artificial Analysis，MAI-Code-2 的费用按其 50% 促销价展示。正文写的是 FrontierCode v1.1，脚注写的是 FrontierCode 1.1。视觉编程部分写明，在盲测的前端应用评估中，评审对 MAI Code 2 的偏好高于 GPT-6 Sol 的比例为 64%。脚注写明这是 MAI Code 2 与 GPT-6 Sol 的并排盲测，范围包括用户界面、游戏、数据可视化、3D 场景和 SVG 图形，偏好同时覆盖美观和功能，标注者共 258 人。MAI Code 2 Flash 的正文写明，它相对 GPT-6 Luna 与 Claude Haiku 5.5 具有可比较的性能，费用分别为 65% 与 20%，基准是衡量日常、大批量常规编程任务的三项测试。页面把 65% 的两个数字放在相邻的文字节点里。脚注写明这三项是 DeepSWE 1.1、TerminalBench 2.1 与 SWE Atlas，同样以最大推理力度、在 MSBench 上、用 GitHub Copilot CLI、不使用子代理运行，MAI-Code-2-Flash 的费用也按其 50% 促销价展示。可用范围写明：两款可在 GitHub Copilot 中使用，Code 2 Flash 在 Microsoft Foundry 中为有限访问预览；该文说随后会放到 Open Router、Vercel、Hermes、Open Code 和 Kilo。同页还写明，他们从 Code 2 Flash 再优化出一个模型 MAI Work Flash，用于 M365 与 Fabric IQ 的多个产品，并给出内部对比：Excel 上，在关键的内部 Excel 客户场景基准中，准确性和 token 效率与 GPT 6 Luna 相当；PowerPoint 上，在衡量常见 PowerPoint 任务的关键生产基准场景中，质量与 token 效率与 GPT 6 Luna 相当；Word 上，在 5 项关键内部基准中表现与 GPT 6.1 sol 相近，同时模型明显更小，生产中每次调用的输入 token 比 GPT6.1 Sol 少约 42%；Teams 上，在跟踪决定、补上知识缺口和适应自定义指令方面超过 GPT 6 Luna，在指令遵循和工具调用上最多少用 28% 的 token；Fabric IQ 上，离线评估中该 MAI 模型在 DAX 查询生成上超过 GPT-5.6-sol、GPT-6-astra 和 Opus-5.5。这些是该文自己的内部或外部对比，本刊未复跑。JSON-LD datePublished 为 2026-11-17T18:15:16+00:00。",
      "en": "Microsoft AI published MAI Code 2 and MAI Code 2 Flash. This item times the page by datePublished in its JSON-LD, 2026-11-17T18:15:16+00:00. The page's time element is 2026-11-17T13:15:16-05:00, the same instant. The post describes the two as coding models for everyday enterprise coding tasks, and it says they prioritize the coding work its customers do every day and are explicitly not yet tuned for harder problems, such as fundamental science research and very long-horizon agentic work. The body averages four benchmarks it calls widely used and aimed at the everyday enterprise coding tasks it sees in GitHub Copilot: DeepSWE 1.1, Terminal Bench 2.1, SWE-Atlas and FrontierCode v1.1. It says MAI Code 2 reaches 98% of the performance of GPT 6.1 Sol at 40% of the cost, and 96% of Claude Opus 5.5's performance at 5% of the cost. The footnote says all models were run at max reasoning effort; DeepSWE 1.1, TerminalBench 2.1 and SWE Atlas were run on MSBench, Microsoft's internal eval platform, with the GitHub Copilot CLI and without subagents; FrontierCode 1.1 scores and costs are from Artificial Analysis, and the MAI-Code-2 cost is shown at its 50% promotional price. The body writes FrontierCode v1.1, and the footnote writes FrontierCode 1.1. On visual coding, the post says reviewers preferred MAI Code 2 over GPT-6 Sol 64% of the time in blind frontend-app evaluations. The footnote says these are blind side-by-side evaluations of MAI Code 2 and GPT-6 Sol across user interfaces, games, data visualizations, 3D scenes and SVG graphics, that the preference covers both aesthetics and functionality, and that 258 annotators did the labeling. For MAI Code 2 Flash, the body says it offers comparable performance to GPT-6 Luna and Claude Haiku 5.5 at 65% and 20% of the cost, across three benchmarks of day-to-day, high-volume routine coding tasks. The page places the two digits of 65% in adjacent text nodes. The footnote names those three as DeepSWE 1.1, TerminalBench 2.1 and SWE Atlas, again at max reasoning effort, on MSBench, with the GitHub Copilot CLI and without subagents, and it shows the MAI-Code-2-Flash cost at its 50% promotional price. On availability, the post says both are in GitHub Copilot, and Code 2 Flash is in limited-access preview in Microsoft Foundry. It says they will later release it on Open Router, Vercel, Hermes, Open Code and Kilo. The same page says they further optimized a single model, MAI Work Flash, from Code 2 Flash to serve multiple Microsoft products across M365 and Fabric IQ, and it gives internal comparisons: on Excel, on par with GPT 6 Luna for accuracy and token efficiency across key internal Excel customer-scenario benchmarks; on PowerPoint, on par with GPT 6 Luna in quality and token efficiency on key production benchmark scenarios that measure frequent PowerPoint tasks; on Word, similar to GPT 6.1 sol on 5 key internal benchmarks while being significantly smaller, using about 42% fewer input tokens per call than GPT6.1 Sol in production; on Teams, ahead of GPT 6 Luna at tracking decisions, filling knowledge gaps and adapting custom instructions, using up to 28% fewer tokens on instruction following and tool calling; on Fabric IQ, the MAI model outperforms GPT-5.6-sol, GPT-6-astra and Opus-5.5 at DAX query generation in offline evaluation runs. These are the post's own internal or external comparisons, and TUJL has not rerun them. JSON-LD datePublished is 2026-11-17T18:15:16+00:00.",
      "href": "https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/"
    },
    {
      "index": "04",
      "label": "智能体框架 / Agent framework",
      "source": "Pydantic AI · GitHub Release",
      "date": "2026.11.18 06:44:30 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-17T22:44:30Z",
      "zhTitle": "pydantic-ai 2.70.0 接入 GPT-6.2，并修复两处高危的二次耗时",
      "enTitle": "pydantic-ai 2.70.0 adds GPT-6.2 and fixes two high-severity quadratic slowdowns",
      "zh": "pydantic-ai v2.70.0 为正式发布。发布标题写着 v2.70.0 (2026-11-17)，计时以 GitHub published_at 为准。072期已经记录过 v2.69.0；本条记录的是比较范围 v2.69.0...v2.70.0 里的后一个标签。安全说明转述两则高危公告，修复都写在 pydantic-ai-harness 0.70.0。GHSA-m4cr-m4qc-9hh3：在 strip_ansi=True 时，Harness 的 ToolOutputLimits 用一种按行长呈二次时间的模式去掉 ANSI 转义序列，因此一条几百千字节、含有许多未结束转义序列的工具结果，可能把事件循环占住几十秒到几分钟。受影响的是把 strip_ansi 设为 True（0.13.0 之前名为 OverflowingToolOutput）、并且运行攻击者能够影响其输出的工具的人。GHSA-5m5q-5qj4-gx9h：Harness 秘密遮盖中的 jwt 模式在所扫描文本的长度上呈二次时间回溯，因此几百千字节的特制文本可能把事件循环占住几十秒到几分钟。受影响的是在攻击者能够影响的文本上使用 redact_secrets 或 secret_data()，并且用到默认就包含的 jwt 模式的人。说明写明修复后的模式不再匹配标头段含有 -eyJ 的 JWT。本条只转述影响范围和修复版本，不提供构造输入的方法。功能条目包括：加入 OpenAI 的 gpt-6.2-sol 与 gpt-6.2-astra（#13760）；StreamGuardrail 在调用方看到之前筛查每一段流式文本、思考和工具调用（#13667）；PruneToolResults 让模型把刚收到的工具结果换成摘要（#13634）；ToolSearch 用于搜索前的延迟（#13139）；PlaywrightBrowser 可以按每次运行为 CDP 端点做准备，并附着到默认上下文（#13555）；把 service_tier 转发给 xAI，并在 provider_details 中记录实际服务的等级（#13524）；HuggingFaceModelSettings 增加 huggingface_logprobs 与 huggingface_top_logprobs，并在 provider_details 中返回 logprobs（#6855）；Skills 在 read_files=True 时可以读取已加载技能打包的文件，并替换 ${SKILL_DIR} 占位符（#13678）；父级可以用 check_task 与 DelegationTasks.snapshot() 查看仍在运行的后台委派（#13647）。兼容性说明中的条目包括：在 OpenAIChatModel 把工具发给已开启推理的 GPT-6 模型之前抛出 ModelRequestRejectedError（#12264）；OpenRouter 上的 qwen/qwen3.8-flash 在推理时拒绝强制工具选择，因此回退到 auto，或抛出 ModelRequestRejectedError（#12262）。发布说明还列出大量其他修复与重命名，本条不把那些条目改写成单独核过的行为。上述范围来自这一标签的发布说明，本刊未运行该库。GitHub published_at 为 2026-11-17T22:44:30Z。",
      "en": "pydantic-ai v2.70.0 is a regular release. The release title reads v2.70.0 (2026-11-17); this item times it by GitHub published_at. Issue 072 already recorded v2.69.0; this item records the later tag in the compare range v2.69.0...v2.70.0. The security notes restate two high-severity advisories, and both fixes are stated for pydantic-ai-harness 0.70.0. GHSA-m4cr-m4qc-9hh3: with strip_ansi=True, the Harness ToolOutputLimits capability removed ANSI escape sequences with a pattern that took time quadratic in the length of a line, so a tool result of a few hundred kilobytes with many unterminated escape sequences could occupy the event loop for tens of seconds to minutes. Someone is affected if they set strip_ansi=True (named OverflowingToolOutput before 0.13.0) and run tools whose output an attacker can influence. GHSA-5m5q-5qj4-gx9h: the jwt pattern in the Harness secret redaction backtracked in time quadratic in the length of the text it scanned, so a few hundred kilobytes of crafted text could occupy the event loop for tens of seconds to minutes. Someone is affected if they use redact_secrets or secret_data() with the jwt pattern, which is included by default, on text an attacker can influence. The notes say the fixed pattern no longer matches a JWT whose header segment contains -eyJ. This item restates the affected scope and the fixed version, and it does not provide a way to construct an input. Feature items include adding OpenAI's gpt-6.2-sol and gpt-6.2-astra (#13760); StreamGuardrail screening each streamed text, thinking and tool-call part before the caller sees it (#13667); PruneToolResults so the model can replace a tool result it just received with a summary (#13634); ToolSearch for pre-search deferral (#13139); PlaywrightBrowser provisioning its CDP endpoint per run and attaching to the default context (#13555); forwarding service_tier to xAI and recording the served tier in provider_details (#13524); adding huggingface_logprobs and huggingface_top_logprobs to HuggingFaceModelSettings and returning logprobs in provider_details (#6855); letting Skills read a loaded skill's bundled files with read_files=True and substitute ${SKILL_DIR} placeholders (#13678); and letting a parent check a running background delegation with check_task and DelegationTasks.snapshot() (#13647). Items in the compatibility notes include raising ModelRequestRejectedError before OpenAIChatModel sends tools to GPT-6 models with reasoning on (#12264), and falling back to auto or raising ModelRequestRejectedError for forced tool choice on OpenRouter's qwen/qwen3.8-flash, which rejects forcing while reasoning (#12262). The notes list many further fixes and renames; this item does not restate those entries as separately checked behavior. This scope comes from that tag's release notes, and TUJL has not run the library. GitHub published_at is 2026-11-17T22:44:30Z.",
      "href": "https://github.com/pydantic/pydantic-ai/releases/tag/v2.70.0"
    }
  ]
};

export const issue072: Issue = {
  "number": "072",
  "date": "2026-11-17",
  "readingTime": "约 5 分钟",
  "windowStart": "2026-11-16T01:55:00Z",
  "windowEnd": "2026-11-17T01:55:00Z",
  "heading": "推理服务改用新的默认缓存，本地计算机操作、训练库门槛与模型接入同日更新",
  "noteTitle": "四条都以 GitHub published_at 计时，速度与缓存数字来自发布说明。",
  "noteZh": "本期按北京时间11月16日09:55至11月17日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的开源项目更新。071期已经覆盖到16日09:55，该时刻及之前的条目留在窗外，17日09:55之后的条目也不计入。Unsloth、Accelerate、vLLM 与 pydantic-ai 均以 GitHub 发布记录的 published_at 为准，分别为 2026-11-16T15:04:23Z、2026-11-16T21:01:44Z、2026-11-16T23:22:00Z 与 2026-11-17T01:03:25Z。Accelerate v1.16.0、vLLM v0.34.0 与 pydantic-ai v2.69.0 为正式发布。Unsloth 的标签是 v0.1.918-beta，发布记录没有把它标为预发布。071期已经记录过 Qwen Code v0.27.4、llama.cpp b12406、langchain-mistralai 1.2.0 与 browser-use 1.0.6；本期换用不同项目，不重复那些网址。缓存长度、解码时间与加速倍数均来自发布说明，本刊未独立复跑。我们的编辑判断是：把推理服务的默认容量改动、桌面端仍需批准的计算机操作、训练库的版本门槛，以及智能体框架里的模型接入分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 16, 09:55 to November 17, 09:55 Beijing time and selected four previously unused open-source updates with verifiable publication timestamps. Issue 071 already covered through 09:55 on November 16, so items at or before that moment stay outside this window, as do items after 09:55 on November 17. The Unsloth, Accelerate, vLLM and pydantic-ai items use published_at from the GitHub release records: 2026-11-16T15:04:23Z, 2026-11-16T21:01:44Z, 2026-11-16T23:22:00Z and 2026-11-17T01:03:25Z. Accelerate v1.16.0, vLLM v0.34.0 and pydantic-ai v2.69.0 are regular releases. The Unsloth tag is v0.1.918-beta, and the release record does not mark it as a pre-release. Issue 071 already recorded Qwen Code v0.27.4, llama.cpp b12406, langchain-mistralai 1.2.0 and browser-use 1.0.6; this issue uses different projects and does not reuse those URLs. Cache lengths, decode times and speed multiples come from the release notes and were not independently rerun by TUJL. Our editorial view: keep a serving runtime's default capacity change, a desktop computer-use control that still asks for approval, a training library's version floor, and an agent framework's model wiring apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "本地工作室 / Local studio",
      "source": "Unsloth · GitHub Release",
      "date": "2026.11.16 23:04:23 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-16T15:04:23Z",
      "zhTitle": "Unsloth v0.1.918-beta 加入默认关闭的计算机操作，并给出图像解码时间",
      "enTitle": "Unsloth v0.1.918-beta adds computer use, off by default, and states an image decode time",
      "zh": "Unsloth 发布标签 v0.1.918-beta。GitHub 发布记录没有把它标为预发布，本条按该记录计时，同时保留标签名里的 beta。发布说明把计算机操作（computer use，beta）、模型选择器、连接改版与训练改动写在同一标签下，并写明此版也包含 Unsloth Studio 与训练上的改动。计算机操作让本地模型看到屏幕，并在 macOS、Windows 与 Linux 上控制鼠标和键盘；说明写明它默认关闭。支持本地 GGUF、safetensors 与 MLX 视觉模型，以及已连接的提供方。第一次动作、切换应用和可能有风险的动作都要先批准；被拦截的应用仍然不可访问，用户可以随时收回控制。MCP 菜单在 Blender 之外加入 Unity、Unreal Engine、Godot、Figma 与 Roblox；说明写明 Figma 为只读。MiniMax-H3-Image 支持 GGUF、FP8 与 INT8，以及 LoRA 训练。GGUF 经 stable-diffusion.cpp 在 CPU、Mac、较小的 GPU 和 AMD 上运行；FP8 与 INT8 权重面向 NVIDIA。自动精度按硬件选择 INT8、FP8 或 BF16。说明给出一张 2048px 图像在 A100 80GB 上的解码时间为 0.28 秒，而不是 2.82 秒。Gemma 4 12B 训练在新的注意力内核上快 1.4–2.6 倍；新的 INT8 注意力内核使 FLUX.3 Klein 的渲染在受支持的 GPU 上提高 15–23%。连接画廊新增 9 个提供方：xAI、NVIDIA NIM、Perplexity、Cohere、Vercel AI Gateway、Azure OpenAI、Amazon Bedrock、Google Vertex AI 与 SGLang。Qwen3.8-Flash-Next 与 DeepSeek-V4.1 的 GGUF 可以把 Engram 表换成更小或无损的表。说明给出计算机操作指南和权重页面的链接，本刊未把那些页面当作额外的一手来源核对。上述时间与速度来自发布说明，本刊未复跑。GitHub published_at 为 2026-11-16T15:04:23Z。",
      "en": "Unsloth published the tag v0.1.918-beta. GitHub does not mark the release as a pre-release, so this item times it from that record while keeping the beta in the tag name. The notes put computer use (beta), the model picker, the connections redesign and training changes under the same tag, and they say the release also includes changes across Unsloth Studio and training. Computer use lets local models see the screen and control the mouse and keyboard on macOS, Windows and Linux; the notes say it is off by default. It supports local GGUF, safetensors and MLX vision models, plus connected providers. Approval is required before the first action, before switching apps and before potentially risky actions. Blocked apps stay inaccessible, and the user can take control back at any time. The MCP menu adds Unity, Unreal Engine, Godot, Figma and Roblox alongside Blender; the notes say Figma is read-only. MiniMax-H3-Image supports GGUF, FP8 and INT8, plus LoRA training. GGUF runs through stable-diffusion.cpp on CPU, Macs, smaller GPUs and AMD; FP8 and INT8 weights are for NVIDIA. Automatic precision selects INT8, FP8 or BF16 from the hardware. The notes say a 2048px image decodes in 0.28s instead of 2.82s on an A100 80GB. Gemma 4 12B training is 1.4–2.6x faster with the new attention kernels. New INT8 attention kernels improve FLUX.3 Klein rendering by 15–23% on supported GPUs. The provider gallery adds nine providers: xAI, NVIDIA NIM, Perplexity, Cohere, Vercel AI Gateway, Azure OpenAI, Amazon Bedrock, Google Vertex AI and SGLang. Qwen3.8-Flash-Next and DeepSeek-V4.1 GGUFs can swap in a smaller or lossless Engram table. The notes link a computer-use guide and weight pages; TUJL did not treat those pages as further primary sources. These times and speed figures come from the release notes and were not rerun by TUJL. GitHub published_at is 2026-11-16T15:04:23Z.",
      "href": "https://github.com/unslothai/unsloth/releases/tag/v0.1.918-beta"
    },
    {
      "index": "02",
      "label": "分布式训练 / Distributed training",
      "source": "Accelerate · GitHub Release",
      "date": "2026.11.17 05:01:44 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-16T21:01:44Z",
      "zhTitle": "Accelerate 1.16.0 要求 Python 3.11 与 PyTorch 2.6，并改进 FSDP 加载",
      "enTitle": "Accelerate 1.16.0 requires Python 3.11 and PyTorch 2.6, and improves FSDP loading",
      "zh": "Accelerate v1.16.0 为正式发布。发布说明写明，库更广泛地使用 torch.accelerator，以便已注册的 PyTorch 后端不必在各处再走一条设备专用分支；现有集成在需要兼容时仍保留各自的原生 API。其中包含通过 torch-tpu 使用单芯片 TPU 的初步改进，说明写明更广的 TPU 支持仍在进行。单芯片 torch-tpu 的修复涉及绑定权重、safetensors 加载、内存报告与 FP16 校验（#4570）。accelerate launch 在 Ctrl+C 或 SIGTERM 时会退出并清理子进程（#4573）。FSDP 的修复针对省内存加载，包括与 Transformers 在非零 rank 上把模型载入 meta 设备的兼容；FSDP1 会在初始化替换 meta 参数时重新接上优化器引用，FSDP2 在映射到分片替换时区分这些参数（#4576）。FSDP2 可以在没有优化器的情况下准备模型，从而允许在训练前调用 Trainer.evaluate()（#4519）。此版要求 Python 3.11+ 与 PyTorch 2.6+（#4459、#4461），移除 PiPPy 与 MS-AMP 集成（#4462、#4463），并移除已弃用的 FP8RecipeKwargs；TorchAO 改用 AORecipeKwargs，Transformer Engine 改用 TERecipeKwargs（#4464）。上述范围来自发布说明，本刊未独立验证启动器信号、FSDP 加载或版本门槛。GitHub published_at 为 2026-11-16T21:01:44Z。",
      "en": "Accelerate v1.16.0 is a regular release. The notes say the library uses torch.accelerator more broadly, so registered PyTorch backends do not need a separate device-specific branch throughout the library. Existing integrations keep their native APIs where compatibility requires them. The changes include initial single-chip TPU use through torch-tpu, and the notes say broader TPU support remains in progress. Single-chip torch-tpu fixes cover tied weights, safetensors loading, memory reporting and FP16 validation (#4570). accelerate launch exits and cleans up child processes on Ctrl+C or SIGTERM (#4573). FSDP fixes address RAM-efficient loading, including compatibility with Transformers loading models onto the meta device on nonzero ranks. FSDP1 reconnects optimizer references when initialization replaces meta parameters, and FSDP2 distinguishes those parameters when mapping them to sharded replacements (#4576). FSDP2 can prepare a model without an optimizer, so Trainer.evaluate() can run before training (#4519). This release requires Python 3.11+ and PyTorch 2.6+ (#4459, #4461), removes the PiPPy and MS-AMP integrations (#4462, #4463), and removes the deprecated FP8RecipeKwargs. TorchAO uses AORecipeKwargs, and Transformer Engine uses TERecipeKwargs (#4464). This scope comes from the release notes. TUJL has not independently verified launcher signals, FSDP loading or the version floor. GitHub published_at is 2026-11-16T21:01:44Z.",
      "href": "https://github.com/huggingface/accelerate/releases/tag/v1.16.0"
    },
    {
      "index": "03",
      "label": "推理服务 / Inference server",
      "source": "vLLM · GitHub Release",
      "date": "2026.11.17 07:22:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-16T23:22:00Z",
      "zhTitle": "vLLM 0.34.0 默认启用可扩展 KV 缓存，并移除 Model Runner V1",
      "enTitle": "vLLM 0.34.0 turns extensible KV cache on by default and removes Model Runner V1",
      "zh": "vLLM v0.34.0 为正式发布。发布说明写明此版有 1,061 个提交，来自 412 位贡献者，其中 120 位是新贡献者。要点包括 10 个新模型，可扩展 KV 缓存默认开启，以及 Model Runner V1 被移除、Model Runner V2 成为唯一的 GPU 运行器。升级表写明：设置 VLLM_USE_V2_MODEL_RUNNER=0 会在启动时失败（#63373）；默认 --block-size 从 16 改为 64，要保留旧行为需传入 --block-size 16，ROCm 分页注意力仍使用 16（#63231）；可扩展 KV 缓存默认开启，gpu_memory_utilization 默认为 1.0，要保留旧的容量估算可传入 --gpu-memory-utilization 0.9 或 --no-enable-extensible-kv-cache（#56492）；ROCm 7.2 构建不再发布，改用 ROCm 10.0 的 wheel 与镜像（#61939）；要求 huggingface_hub >= 2.0.0，同时要求 tokenizers >= 0.23.3 与 timm >= 1.0.30（#64779）；fp_quant 检查点不再能加载（#65230）；Marlin W4A8 被移除，说明改为使用 --quantization humming，并用 VLLM_HUMMING_INPUT_QUANT_CONFIG 代替 VLLM_MARLIN_INPUT_DTYPE（#65542）；Keye-VL 与 Keye-VL-1.5 被移除（#64287）。新模型表中的 Mistral Large 4 写明总参数 1T、活跃 52B，提供 FP8 与 NVFP4，可在 NVIDIA Blackwell/Hopper 与 AMD MI350 上运行（#64534）。同表还列出 MiniMax-M3.1-Flash、Nemotron-3.5-Transcribe、Ripple-65B Preview、ZAYA1、Unlimited-OCR-2、LFM3 及其视觉与音频变体、Canary-1B-v2、Ming3-ASR 与 Parakeet TDT。在 CUDA 与 ROCm 上，KV 缓存按预热之后实际剩余的内存来定大小。说明举例：MiniMax-M3 在 H200 上从 433k token 增到 672k token；代价是部分模型的逐 token 解码时间可能上升，在并发 128 时部分 H200 模型的 TPOT 增加 6–18%。性能表写明：Step5 的 NVFP4 MoE 在 TRTLLM-Gen 上、于 4 张 GB200 的解码最高到 1.95 倍（#65152）；GLM-5.3-Flash 的 DeepGEMM FP8 MegaMoE 输出吞吐相对 DEP4 为 1.6 倍（#60895）；默认的、张量并行下按 token 分片的稀疏 MLA 预填充，在 GB200 上使 GLM-5.3 于 32K–128K 的 TTFT 快 1.24–1.40 倍（#63956）。CUDA 13.0 的安装行是 pip install vllm；ROCm 10.0 使用 https://wheels.vllm.ai/rocm/0.34.0/rocm100 作为额外索引。说明里的 XPU 安装行旁边有一条仍待确认的审阅注释，本条不把那一行当作已经确定的安装方法。上述缓存长度与加速倍数来自发布说明，本刊未复跑。GitHub published_at 为 2026-11-16T23:22:00Z。",
      "en": "vLLM v0.34.0 is a regular release. The notes say this version has 1,061 commits from 412 contributors, 120 of them new. Highlights are 10 new models, extensible KV cache on by default, and the removal of Model Runner V1 so Model Runner V2 is the only GPU runner. The upgrade table says setting VLLM_USE_V2_MODEL_RUNNER=0 now fails at startup (#63373); the default --block-size changes from 16 to 64, --block-size 16 keeps the old behavior, and ROCm paged attention still uses 16 (#63231); extensible KV cache is on by default and gpu_memory_utilization defaults to 1.0, while --gpu-memory-utilization 0.9 or --no-enable-extensible-kv-cache keeps the old sizing (#56492); ROCm 7.2 artifacts are no longer published, and the notes point to ROCm 10.0 wheels and images (#61939); huggingface_hub >= 2.0.0 is required, along with tokenizers >= 0.23.3 and timm >= 1.0.30 (#64779); fp_quant checkpoints no longer load (#65230); Marlin W4A8 is removed, and the notes say to use --quantization humming with VLLM_HUMMING_INPUT_QUANT_CONFIG instead of VLLM_MARLIN_INPUT_DTYPE (#65542); Keye-VL and Keye-VL-1.5 are removed (#64287). In the new-model table, Mistral Large 4 is listed as 1T total and 52B active, with FP8 and NVFP4, running on NVIDIA Blackwell/Hopper and AMD MI350 (#64534). The same table also lists MiniMax-M3.1-Flash, Nemotron-3.5-Transcribe, Ripple-65B Preview, ZAYA1, Unlimited-OCR-2, LFM3 with its vision and audio variants, Canary-1B-v2, Ming3-ASR and Parakeet TDT. On CUDA and ROCm, the KV cache is sized from memory actually free after warmup. The notes give an example: MiniMax-M3 on H200 goes from 433k tokens to 672k tokens. The trade-off is that per-token decode latency can rise on some models, with TPOT up 6–18% on some H200 models at concurrency 128. The performance table says Step5 NVFP4 MoE on TRTLLM-Gen reaches up to 1.95× decode on 4×GB200 (#65152); GLM-5.3-Flash DeepGEMM FP8 MegaMoE reaches 1.6× output throughput versus DEP4 (#60895); default token-sharded sparse-MLA prefill under tensor parallelism makes GLM-5.3 TTFT 1.24–1.40× faster at 32K–128K on GB200 (#63956). The CUDA 13.0 install line is pip install vllm. ROCm 10.0 uses https://wheels.vllm.ai/rocm/0.34.0/rocm100 as an extra index. The XPU install line in the notes sits next to a reviewer note that it still needs confirmation, so this item does not treat that line as a settled install method. These cache lengths and speed multiples come from the release notes and were not rerun by TUJL. GitHub published_at is 2026-11-16T23:22:00Z.",
      "href": "https://github.com/vllm-project/vllm/releases/tag/v0.34.0"
    },
    {
      "index": "04",
      "label": "智能体框架 / Agent framework",
      "source": "Pydantic AI · GitHub Release",
      "date": "2026.11.17 09:03:25 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-17T01:03:25Z",
      "zhTitle": "pydantic-ai 2.69.0 接入 Gemini 4 Hydrogen，并改写延迟工具调用",
      "enTitle": "pydantic-ai 2.69.0 adds Gemini 4 Hydrogen and folds in deferred tool calls",
      "zh": "pydantic-ai v2.69.0 为正式发布。发布标题写着 v2.69.0 (2026-11-16)，计时以 GitHub published_at 为准。兼容性说明中的条目包括：把 RequestInput 并入 HandleDeferredToolCalls，其处理函数可以接收恢复令牌（#13285）；GoogleModel 支持 Gemini 4 Hydrogen，模型名为 gemini-4-hydrogen（#13299）；DetectLoops 检查流式思考、文本与工具调用参数中的循环（#12222）；Advisor 改为接受 native= 与 local=，mode 被弃用（#13149）；对 Anthropic 的等级支出上限和用户设置的支出限制抛出 ModelQuotaExceededError（#13269）；把 Mistral Large 4 的 thinking 级别映射到 low、medium、high 的 reasoning_effort（#12876）。功能条目还包括 KubernetesSandbox，用于 kubernetes-sigs/agent-sandbox 的 Pod（#10612），以及为 Bedrock Converse 上的 GPT-6 与 GPT-6.1 设置 30 分钟的 default_cache_retention（#13495）。同页还有一条修复：把 Bedrock 上 GPT-5.6 与 GPT-6 的加密推理留在发给 Claude on Bedrock 的请求之外（#12943）。发布说明还列出大量其他修复与重命名，本条不把那些条目改写成单独核过的行为。上述范围来自这一标签的发布说明，本刊未运行该库。GitHub published_at 为 2026-11-17T01:03:25Z。",
      "en": "pydantic-ai v2.69.0 is a regular release. The release title reads v2.69.0 (2026-11-16); this item times it by GitHub published_at. Items in the compatibility notes include folding RequestInput into HandleDeferredToolCalls, whose handler can take a resume token (#13285); GoogleModel support for Gemini 4 Hydrogen under the name gemini-4-hydrogen (#13299); DetectLoops checking loops in streamed thinking, text and tool-call arguments (#12222); Advisor accepting native= and local=, with mode deprecated (#13149); raising ModelQuotaExceededError for Anthropic's tier spend cap and user-set spend limits (#13269); and mapping Mistral Large 4 thinking levels to its low, medium and high reasoning_effort values (#12876). Feature items also include KubernetesSandbox for kubernetes-sigs/agent-sandbox pods (#10612), and a 30-minute default_cache_retention for GPT-6 and GPT-6.1 on Bedrock Converse (#13495). A fix on the same page keeps encrypted reasoning from Bedrock GPT-5.6 and GPT-6 out of requests sent to Claude on Bedrock (#12943). The notes list many further fixes and renames; this item does not restate those entries as separately checked behavior. This scope comes from that tag's release notes, and TUJL has not run the library. GitHub published_at is 2026-11-17T01:03:25Z.",
      "href": "https://github.com/pydantic/pydantic-ai/releases/tag/v2.69.0"
    }
  ]
};

export const issue071: Issue = {
  "number": "071",
  "date": "2026-11-16",
  "readingTime": "约 5 分钟",
  "windowStart": "2026-11-15T01:55:00Z",
  "windowEnd": "2026-11-16T01:55:00Z",
  "heading": "编程代理正式发布，Inkling 2、网关路由与默认模型费用同日更新",
  "noteTitle": "四条都以 GitHub published_at 计时，数字来自发布说明。",
  "noteZh": "本期按北京时间11月15日09:55至11月16日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的开源项目更新。070期已经覆盖到15日09:55，该时刻及之前的条目留在窗外，16日09:55之后的条目也不计入。Qwen Code、llama.cpp、langchain-mistralai 与 browser-use 均以 GitHub 发布记录的 published_at 为准，分别为 2026-11-15T07:04:40Z、2026-11-15T09:27:48Z、2026-11-15T22:38:03Z 与 2026-11-16T00:51:24Z。其中 Qwen Code v0.27.4、langchain-mistralai 1.2.0 与 browser-use 1.0.6 为正式发布，llama.cpp b12406 为预发布。070期已经记录过 Qwen Code 夜间标签，以及 browser-use 1.0.5、一次 llama.cpp 构建和 LiteLLM 长期支持条目；本期使用其后或不同的标签，不重复那些网址。数字与行为描述均来自发布说明，本刊未独立复跑。我们的编辑判断是：把正式发布里的默认模型改价、较晚的正式编程代理标签、尚未测试的真实检查点转换说明，以及合作包的网关改动分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 15, 09:55 to November 16, 09:55 Beijing time and selected four previously unused open-source updates with verifiable publication timestamps. Issue 070 already covered through 09:55 on November 15, so items at or before that moment stay outside this window, as do items after 09:55 on November 16. The Qwen Code, llama.cpp, langchain-mistralai and browser-use items use published_at from the GitHub release records: 2026-11-15T07:04:40Z, 2026-11-15T09:27:48Z, 2026-11-15T22:38:03Z and 2026-11-16T00:51:24Z. Qwen Code v0.27.4, langchain-mistralai 1.2.0 and browser-use 1.0.6 are regular releases; llama.cpp b12406 is a pre-release. Issue 070 already covered a Qwen Code nightly and a browser-use 1.0.5 release, a llama.cpp build, and a LiteLLM long-term-support item; this issue uses later or different tags and does not reuse those URLs. Numbers and behavior claims come from the release notes and were not independently rerun by TUJL. Our editorial view: keep a formal default-model price change, a later formal coding-agent tag, an untested-conversion caveat, and a partner-package gateway change apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "编程代理 / Coding agent",
      "source": "Qwen Code · GitHub Release",
      "date": "2026.11.15 15:04:40 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-15T07:04:40Z",
      "zhTitle": "Qwen Code 正式发布 v0.27.4，纳入托管会话以及飞书与企业微信投递",
      "enTitle": "Qwen Code v0.27.4 formally ships managed sessions plus Feishu and WeCom delivery",
      "zh": "Qwen Code 正式发布 v0.27.4。发布说明把变更范围写成 v0.27.3...v0.27.4，并写明“No known breaking changes.”。要点包括：托管代理会话可以访问已授权的本地目录，并打开交互式 Managed Web Terminal，且不持久保存凭据或路径；输出可以发到飞书与企业微信的 webhook，较长的托管频道回复按有序分段投递，而不是被截断。Auto Mode 对有风险的操作要求明确授权，会复核分类器超时，避免对 HTTP(S) URL 做文件系统查找，并显式标出 Full Access。Web Shell Goals 可以合并受信任工作区的目标、显示工作区标记，并在创建目标时指向选定的工作区。记忆管理恢复了 CLI 的 /memory 控件，工作区设置会在重启后保留，并提供带类型的 SDK API，用来预览、提交、查看、取消和重试 Codex 记忆导入。在没有原生 UUID 支持时，终端标签、网页预览、本地命令和斜杠命令仍可在普通 HTTP 上工作。依赖修复的条目写明涉及 MCP、DOMPurify 与压缩请求解析，以及 qs、fast-uri、Hono 及相关依赖树，本刊未核对通告编号。070期已经记录过夜间预发布标签 v0.27.2-nightly.20261113.6f754be654，其中有托管会话与飞书投递等重叠主题；本条记录的是其后的正式标签 v0.27.4，并不把每条要点都当成首次出现在此标签。功能范围来自该正式版的发布说明，本刊未安装或运行这一构建。GitHub published_at 为 2026-11-15T07:04:40Z。",
      "en": "Qwen Code formally released v0.27.4. The notes state the changelog range as v0.27.3...v0.27.4 and say “No known breaking changes.” Highlights: managed agent sessions can access granted local directories and open an interactive Managed Web Terminal without persisting credentials or paths; outputs can be sent to Feishu and WeCom webhooks, with long managed-channel replies delivered as ordered segments instead of being truncated. Auto Mode requires explicit authorization for risky actions, reviews classifier timeouts, avoids HTTP(S) URL filesystem lookups, and visibly marks Full Access. Web Shell Goals can merge goals from trusted workspaces, show workspace badges, and target a selected workspace when creating goals. Memory management restores the CLI /memory controls, keeps workspace settings across restarts, and adds typed SDK APIs to preview, submit, inspect, cancel, and retry Codex memory imports. Terminal tabs, web previews, local commands, and slash commands keep working over plain HTTP when native UUID support is unavailable. Dependency-fix notes name MCP, DOMPurify and compressed-request parsing, plus qs, fast-uri, Hono and related trees; TUJL did not check advisory identifiers. Issue 070 already recorded the nightly pre-release v0.27.2-nightly.20261113.6f754be654, which overlaps on themes such as managed sessions and Feishu delivery; this item records the later formal tag v0.27.4 and does not treat every highlight as first appearing in this tag. This scope comes from the formal release notes, and TUJL has not installed or run the build. GitHub published_at is 2026-11-15T07:04:40Z.",
      "href": "https://github.com/QwenLM/qwen-code/releases/tag/v0.27.4"
    },
    {
      "index": "02",
      "label": "本地推理 / Local inference",
      "source": "llama.cpp · GitHub Release",
      "date": "2026.11.15 17:27:48 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-15T09:27:48Z",
      "zhTitle": "llama.cpp 预发布 b12406 加入 Inkling 2 的文本与视觉支持",
      "enTitle": "llama.cpp pre-release b12406 adds Inkling 2 text and vision support",
      "zh": "ggml-org 发布 llama.cpp 预发布构建 b12406，位于 v1.0.0 之后。发布说明就是合并的 PR“feat: add Inkling 2 support (text + vision) (#32217)”。其中包括 Inkling2 的文本 GGUF 转换与文本推理、测试、视觉 mmproj 支持、静止图像编码器，以及带折叠偏置和 sinks 的 flash attention，并要求具备 Inkling2 的 hparams 与 inkling2 预分词器。转换说明写明：打包的专家按行分块反量化；逐层使用 NVFP4 与 MXFP8；每个专家经 LazyChunkedTensor 流过 128 行。真实的 w13（384x4608x4608）需要 2.25 MiB 的 F32 分块，而不是展开后 30.375 GiB 的整层。真实形状的稀疏探测在 Python/NumPy 分块分配上的峰值低于 5.8 MiB，另加 5.2 MiB 的回调元数据；每个投影的预算约为 16 MiB，含映射页，不含运行时、其他张量与操作系统缓存。全模型分块元数据大约 370 MiB。打包的合成 GGUF 权重与独立、已固定的 vLLM 解码逐位一致。CPU 预填充与解码的 logits 绝对误差在 3.1e-6 以内，argmax 一致率为 100%。说明明确写着：“Real checkpoint conversion remains untested.” 其后的提交限制了 Inkling2 的图像尺寸，并去掉视频帧平均；提交记录里先有“add audio support”，随后是“rm audio”，因此本条不声称支持音频。上述内存与误差数字来自发布说明，本刊未复跑。GitHub published_at 为 2026-11-15T09:27:48Z。",
      "en": "ggml-org published llama.cpp pre-release build b12406, after v1.0.0. The notes are the merged PR “feat: add Inkling 2 support (text + vision) (#32217)”. They include Inkling2 text GGUF conversion and text inference, tests, vision mmproj support, a still-image encoder, and flash attention with folded bias and sinks, and they require Inkling2 hparams plus an inkling2 pre-tokenizer. On conversion, packed experts are dequantized in row chunks, with per-layer NVFP4 and MXFP8; 128 rows per expert go through LazyChunkedTensor. A real w13 (384x4608x4608) needs a 2.25 MiB F32 chunk instead of a 30.375 GiB expanded layer. Real-shaped sparse probes peak below 5.8 MiB of Python/NumPy chunk allocations, plus 5.2 MiB of callback metadata; the budget is about 16 MiB per projection, including mapped pages and excluding runtime, other tensors and the OS cache. Full-model chunk metadata is roughly 370 MiB. Packed synthetic GGUF weights match the independent pinned vLLM decode bit-for-bit. CPU prefill and decode logits stay within 3.1e-6 absolute error, with 100% argmax agreement. The notes explicitly say: “Real checkpoint conversion remains untested.” Later commits cap Inkling2 image size and drop video frame averaging. The commit list includes “add audio support” followed by “rm audio”, so this item does not claim audio support. These memory and error figures come from the release notes and were not rerun by TUJL. GitHub published_at is 2026-11-15T09:27:48Z.",
      "href": "https://github.com/ggml-org/llama.cpp/releases/tag/b12406"
    },
    {
      "index": "03",
      "label": "应用框架 / App framework",
      "source": "LangChain · GitHub Release",
      "date": "2026.11.16 06:38:03 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-15T22:38:03Z",
      "zhTitle": "langchain-mistralai 1.2.0 经 LangSmith 网关路由，并修复推理模型流式行为",
      "enTitle": "langchain-mistralai 1.2.0 routes through the LangSmith gateway and fixes reasoning-model streaming",
      "zh": "langchain-mistralai 1.2.0 为正式发布，说明标题是“Changes since langchain-mistralai==1.1.6”。点名的产品变更包括：fix(mistralai): fix streaming behavior for reasoning models（#41887）；feat(mistralai): route ChatMistralAI through LangSmith gateway（#41840）；feat(partners): Remove EOL'd Python 3.10 from partner packages（#41268）。同页还有依赖升级，以及反复刷新模型配置的杂务提交；本条不把这些杂务写成产品行为，也未核对通告编号。上述范围来自这一标签的发布说明，本刊未独立验证推理模型的流式行为、经 LangSmith 网关的路由，或 Python 3.10 的移除。GitHub published_at 为 2026-11-15T22:38:03Z。",
      "en": "langchain-mistralai 1.2.0 is a regular release. The notes are titled “Changes since langchain-mistralai==1.1.6”. Named product changes include fix(mistralai): fix streaming behavior for reasoning models (#41887), feat(mistralai): route ChatMistralAI through LangSmith gateway (#41840), and feat(partners): Remove EOL'd Python 3.10 from partner packages (#41268). The same page also lists dependency bumps and repeated model-profile refresh chores; this item does not turn those chores into product claims, and TUJL did not check advisory identifiers. This scope comes from that tag's release notes. TUJL has not independently verified reasoning-model streaming, routing through the LangSmith gateway, or the removal of Python 3.10. GitHub published_at is 2026-11-15T22:38:03Z.",
      "href": "https://github.com/langchain-ai/langchain/releases/tag/langchain-mistralai%3D%3D1.2.0"
    },
    {
      "index": "04",
      "label": "浏览器代理 / Browser agent",
      "source": "browser-use · GitHub Release",
      "date": "2026.11.16 08:51:24 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-16T00:51:24Z",
      "zhTitle": "browser-use 1.0.6 将默认模型改为 BU 4.0，并写明费用上升",
      "enTitle": "browser-use 1.0.6 makes BU 4.0 the default model and states the higher cost",
      "zh": "browser-use 1.0.6 为正式发布，安装行是 pip install 'browser-use==1.0.6'。发布说明写明，BU 4.0 现在是默认模型：Agent(task) 与 ChatBrowserUse() 在 Browser Use 网关上运行 bu-4.0，而不再是 bu-fast（#6430）。简单任务若要最低费用，传入 llm='bu-4.0-mini'；最难的任务传入 llm='bu-4.0-pro'。说明警告，调用方若不传入 llm，费用会更高。BU 4.0 的 token 价格是 bu-fast 的 15 倍：每百万输入 / 输出 token 为 1.80 美元 / 9.00 美元，对照 0.12 美元 / 0.60 美元；默认模式以 high 而不是 medium 的推理运行。一次短测试任务花费 0.022 美元，而不是 0.0014 美元。若要保持先前的模型与价格，传入 llm='bu-fast'。说明给出价格链接 https://docs.browser-use.com/open-source/models，本刊未把该页当作第二条一手来源核对。没有密钥时，首次运行会打开 Browser Use 登录，批准后继续；云浏览器会打印其实时查看链接（#6425）。判分得到的 gotchas 保持在该次运行实际观察到的范围内（#6418）。上述价格与测试任务费用来自发布说明，本刊未复跑，也未另行核价。GitHub published_at 为 2026-11-16T00:51:24Z。",
      "en": "browser-use 1.0.6 is a regular release. The install line is pip install 'browser-use==1.0.6'. The notes say BU 4.0 is now the default model: Agent(task) and ChatBrowserUse() run bu-4.0 on the Browser Use gateway instead of bu-fast (#6430). For simple tasks at the lowest cost, pass llm='bu-4.0-mini'; for the hardest tasks, pass llm='bu-4.0-pro'. The notes warn that this costs more if the caller passes no llm. BU 4.0 tokens cost 15 times as much as bu-fast: $1.80 / $9.00 per 1M input / output tokens, against $0.12 / $0.60. It runs at high instead of medium reasoning in the default mode. A short test task cost $0.022 instead of $0.0014. To keep the previous model and price, pass llm='bu-fast'. The notes give a prices link, https://docs.browser-use.com/open-source/models; TUJL did not audit that page as a second primary source. The first run without a key opens Browser Use login and continues after approval; cloud browsers print their live-view link (#6425). Judge gotchas stay grounded in what the run observed (#6418). These prices and the test-task cost come from the release notes. TUJL did not rerun the task or price-check the figures. GitHub published_at is 2026-11-16T00:51:24Z.",
      "href": "https://github.com/browser-use/browser-use/releases/tag/1.0.6"
    }
  ]
};

export const issue070: Issue = {
  "number": "070",
  "date": "2026-11-15",
  "readingTime": "约 5 分钟",
  "windowStart": "2026-11-14T01:55:00Z",
  "windowEnd": "2026-11-15T01:55:00Z",
  "heading": "浏览器代理写入判分，夜间构建与长期支持分支同日更新",
  "noteTitle": "四条都以 GitHub published_at 计时，比例来自发布说明。",
  "noteZh": "本期按北京时间11月14日09:55至11月15日09:55的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的开源项目更新。069期已经覆盖到14日09:55，该时刻及之前的条目留在窗外，15日09:55之后的条目也不计入。browser-use、Qwen Code、llama.cpp 与 LiteLLM 均以 GitHub 发布记录的 published_at 为准，分别为 2026-11-14T08:24:22Z、2026-11-14T11:31:46Z、2026-11-14T18:48:53Z 与 2026-11-14T22:00:02Z。其中 browser-use 1.0.5 与 LiteLLM 1.108.9 为正式发布，Qwen Code 夜间标签与 llama.cpp b12385 为预发布。判分比例、困惑度与功能范围均来自发布说明，本刊未独立复测。我们的编辑判断是：把一次运行的判分字段、夜间构建里的行为变更、推理缺陷的修复说明和长期支持分支上的回迁分开，再放到自己的任务上核对。",
  "noteEn": "We searched the 24-hour window from November 14, 09:55 to November 15, 09:55 Beijing time and selected four previously unused open-source updates with verifiable publication timestamps. Issue 069 already covered through 09:55 on November 14, so items at or before that moment stay outside this window, as do items after 09:55 on November 15. The browser-use, Qwen Code, llama.cpp and LiteLLM items use published_at from the GitHub release records: 2026-11-14T08:24:22Z, 2026-11-14T11:31:46Z, 2026-11-14T18:48:53Z and 2026-11-14T22:00:02Z. browser-use 1.0.5 and LiteLLM 1.108.9 are regular releases; the Qwen Code nightly tag and llama.cpp b12385 are pre-releases. Judgement rates, perplexity and feature scope come from the release notes and were not independently rerun by TUJL. Our editorial view: keep a run's judgement fields, behavior changes in a nightly build, a runtime bugfix description, and backports on a long-term branch apart, then check them on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "浏览器代理 / Browser agent",
      "source": "browser-use · GitHub Release",
      "date": "2026.11.14 16:24:22 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-14T08:24:22Z",
      "zhTitle": "browser-use 1.0.5 让同一次运行由用户自己的模型判分",
      "enTitle": "browser-use 1.0.5 has the user's own model judge each run",
      "zh": "browser-use 1.0.5 为正式发布。发布说明写明，每次运行结束后会再用用户自己的模型发一次低消耗请求，对照任务填写 result.judgement，字段包括 success、failure_reason、description、prompt_injection_detected、bot_block_or_captcha_detected 与 gotchas。judge_context= 用来传入判分标准，judge=False 可关闭；0.x 的 use_judge 与 ground_truth 重新可用。判分会看到运行轨迹、最后的截图和最终页面，除非 use_vision=False。站点拒绝输入、报错、拦截或限速时，即使运行被判成功也会写下 gotchas，例如表单要求电话号码使用 (###) ###-####。说明给出 13 次真实运行、每次判 3 遍的结果：站点有抵触的 15 次判分里都写了 gotchas（此前为 15 次中的 6 次），干净运行的 24 次判分里有 2 次写了 gotchas，成功与否的判定没有变化。这些比例来自发布说明，本刊未复跑。GitHub published_at 为 2026-11-14T08:24:22Z。",
      "en": "browser-use 1.0.5 is a regular release. The notes say each run adds one low-effort request to the user's own model, which checks the run against the task and fills result.judgement with success, failure_reason, description, prompt_injection_detected, bot_block_or_captcha_detected and gotchas. judge_context= supplies the criteria and judge=False turns judging off; the 0.x use_judge and ground_truth options work again. The judge sees the trace, the run's last screenshots and the final page, unless use_vision=False. It writes gotchas when the site rejected input, errored, blocked or rate-limited the agent, including on a run judged successful, for example when a form requires phone numbers in (###) ###-#### format. The notes report 13 real runs, each judged 3 times: gotchas appeared on 15 of 15 verdicts where the site pushed back (6 of 15 before) and on 2 of 24 clean runs, with success verdicts unchanged. These rates come from the release notes and were not rerun by TUJL. GitHub published_at is 2026-11-14T08:24:22Z.",
      "href": "https://github.com/browser-use/browser-use/releases/tag/1.0.5"
    },
    {
      "index": "02",
      "label": "编程代理 / Coding agent",
      "source": "Qwen Code · GitHub Release",
      "date": "2026.11.14 19:31:46 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-14T11:31:46Z",
      "zhTitle": "Qwen Code 夜间版更新托管会话、飞书投递与代理循环",
      "enTitle": "A Qwen Code nightly updates managed sessions, Feishu delivery and the agent loop",
      "zh": "Qwen Code 发布预发布标签 v0.27.2-nightly.20261113.6f754be654。发布说明中的变更包括：托管代理可把客户端文件系统登记进托管会话；长的频道回复按有序的多段投递来安排；飞书自定义机器人增加 webhook 投递；AUTO 分类器改为判断用户授权，并避免对 HTTP URL 做 UNC 查找；AgentCore 与 OpenTUI 的每一轮都放进一次 runAgentLoop 调用；快速分类器超时改由会话模型复核；并恢复原生的 Anthropic 未签名思考历史。同版依赖修复的说明写明涉及 MCP、DOMPurify 与压缩请求解析，以及 qs、URI 与 Hono，本刊未核对通告编号。功能范围来自该夜间构建的发布说明，本刊未安装运行。GitHub published_at 为 2026-11-14T11:31:46Z。",
      "en": "Qwen Code published the pre-release tag v0.27.2-nightly.20261113.6f754be654. Changes named in the notes include registering client filesystems into managed-agent sessions, planning long channel replies as ordered multi-segment deliveries, and adding Feishu custom-bot webhook delivery. The AUTO classifier now judges user authorization and avoids UNC lookups for HTTP URLs. Each AgentCore round and each OpenTUI round runs in one runAgentLoop call. Fast-classifier timeouts are reviewed with the session model, and native Anthropic unsigned thinking history can be recovered. Dependency fixes in the notes name MCP, DOMPurify and compressed-request parsing, plus qs, URI and Hono; TUJL did not check advisory identifiers. This scope comes from the nightly release notes, and TUJL has not installed the build. GitHub published_at is 2026-11-14T11:31:46Z.",
      "href": "https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2-nightly.20261113.6f754be654"
    },
    {
      "index": "03",
      "label": "本地推理 / Local inference",
      "source": "llama.cpp · GitHub Release",
      "date": "2026.11.15 02:48:53 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-14T18:48:53Z",
      "zhTitle": "llama.cpp 预发布 b12385 补上 Qwen2-VL 的 NVFP4 前馈缩放",
      "enTitle": "llama.cpp pre-release b12385 applies Qwen2-VL NVFP4 feed-forward scales",
      "zh": "ggml-org 发布 llama.cpp 预发布构建 b12385，位于 v1.0.0 之后。发布说明写明，qwen2vl 计算图此前把 ffn_up、ffn_gate 与 ffn_down 的缩放传成 NULL，因此通用流程装入的逐张量 NVFP4 缩放从未生效，模型输出为垃圾：CUDA 上困惑度约为 1e6，CPU 上为 NaN。此构建把这些缩放传给 build_ffn，与 qwen2 的做法一致，并写明修复问题 #32101。上述困惑度与 NaN 来自发布说明对缺陷的描述，本刊未复测。GitHub published_at 为 2026-11-14T18:48:53Z。",
      "en": "ggml-org published llama.cpp pre-release build b12385, after v1.0.0. The notes say the qwen2vl graph passed NULL for the ffn_up, ffn_gate and ffn_down scales, so the per-tensor NVFP4 scales loaded by the generic pass were never applied and the model produced garbage: perplexity of about 1e6 on CUDA and NaN on CPU. This build passes those scales to build_ffn, as qwen2 does, and says it fixes issue #32101. The perplexity and NaN figures are the notes' description of the bug and were not rerun by TUJL. GitHub published_at is 2026-11-14T18:48:53Z.",
      "href": "https://github.com/ggml-org/llama.cpp/releases/tag/b12385"
    },
    {
      "index": "04",
      "label": "模型网关 / Model gateway",
      "source": "LiteLLM · GitHub Release",
      "date": "2026.11.15 06:00:02 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-14T22:00:02Z",
      "zhTitle": "LiteLLM 1.108.9 把推理、媒体与决策模型补丁回迁到长期支持分支",
      "enTitle": "LiteLLM 1.108.9 backports reasoning, media and decision-model fixes onto the long-term branch",
      "zh": "LiteLLM v1.108.9 为 1.108 长期支持线上的正式发布。发布说明写明，此版 Docker 镜像使用 commit e82a3c6 引入的密钥做 cosign 签名，并给出按该提交与按标签两种校验方式。回迁到 lts/1.108.x 的变更包括：在 Responses 路径上保留混合的推理与回答；Bedrock Converse 接受 s3:// 媒体来源；向 Foundry 上的 Kimi K3 发送 reasoning_effort 并保留其 reasoning_content；Vertex 请求带上调用方身份标签；聊天到 Responses 的桥接保留 cache_control 断点；Foundry 项目与资源使用 /openai/v1 Responses 基址；接入 Vercel AI Gateway 的决策模型；以及把 OpenAI 向量库搜索过滤映射到 Bedrock。功能范围来自发布说明，本刊未在网关中复现。GitHub published_at 为 2026-11-14T22:00:02Z。",
      "en": "LiteLLM v1.108.9 is a regular release on the 1.108 long-term line. The notes say this Docker image is signed with cosign using the key introduced in commit e82a3c6, and they show verification against that commit and against the tag. Changes backported to lts/1.108.x include preserving mixed reasoning and answers on the Responses path, accepting s3:// media sources in Bedrock Converse, sending reasoning_effort to Foundry Kimi K3 and keeping its reasoning_content, attaching caller-identity labels on Vertex requests, keeping cache_control breakpoints on the chat-to-Responses bridge, using Foundry project and resource /openai/v1 Responses bases, adding Vercel AI Gateway decision models, and mapping OpenAI vector-store search filters to Bedrock. This scope comes from the release notes and was not reproduced by TUJL in a gateway. GitHub published_at is 2026-11-14T22:00:02Z.",
      "href": "https://github.com/BerriAI/litellm/releases/tag/v1.108.9"
    }
  ]
};

export const issue069: Issue = {
  "number": "069",
  "date": "2026-11-14",
  "readingTime": "约 5 分钟",
  "windowStart": "2026-11-13T04:12:00Z",
  "windowEnd": "2026-11-14T01:55:00Z",
  "heading": "本地推理进入 1.0，模型接入、评测与额度同日更新",
  "noteTitle": "四条都有精确时间，速度与比例来自发布方。",
  "noteZh": "本期从上一期窗口结束的北京时间11月13日12:12检索到截稿的北京时间11月14日09:55。这一段短于24小时：068期已经覆盖到13日12:12，本期在14日上午截稿，因此不把该时刻及之前的条目再收进来，也不把09:55之后的条目算进窗口。llama.cpp与Transformers以GitHub发布记录的published_at为准；XYBench与Google博客以JSON-LD的datePublished为准，分别为2026-11-13T17:02:35.607Z与2026-11-13T20:30:00+00:00。功能范围、速度倍数与评测比例均来自发布方，本刊未独立复测。我们的编辑判断是：把运行时的版本边界、模型库的接入范围、基准里的比例和额度领取流程分开，再放到自己的任务与账单上核对。",
  "noteEn": "We searched from the close of the previous window, November 13 at 12:12 Beijing time, through this edition's cutoff at 09:55 on November 14. The span is shorter than 24 hours: issue 068 already covered through 12:12 on November 13, and this edition closed on the morning of November 14, so items at or before that earlier moment stay out, as do items after 09:55. The llama.cpp and Transformers items use published_at from the GitHub release records. The XYBench and Google posts use JSON-LD datePublished values of 2026-11-13T17:02:35.607Z and 2026-11-13T20:30:00+00:00. Feature scope, speed multiples and evaluation rates come from the publishers and were not independently rerun by TUJL. Our editorial view: keep a runtime's version boundary, a library's model coverage, a benchmark's rates, and a credit-claim workflow apart, then check them against your own tasks and bill.",
  "stories": [
    {
      "index": "01",
      "label": "本地推理 / Local inference",
      "source": "llama.cpp · GitHub Release",
      "date": "2026.11.13 18:20:19 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-13T10:20:19Z",
      "zhTitle": "llama.cpp 与 ggml 发布 v1.0.0，并移除已弃用的公共 API",
      "enTitle": "llama.cpp and ggml release v1.0.0 and remove the deprecated public API",
      "zh": "ggml-org 发布 llama.cpp v1.0.0。发布说明写明，此版移除已弃用的公共 API，把 NextN 推测解码接口提升进 llama.h，并删除 llama_set_warmup、35 个已弃用函数以及 defrag_thold。同版加入 OCP FP8 KV 缓存（-ctk/-ctv f8_e4m3）、可配置 CPU 份额的主机内存 MoE 专家缓存，以及从外部 GGUF 分片加载 PLE。新增文本架构包括 Kimi-K3.1-Pro、Ripple-65B-Preview 与 xing4_0，并加入 drama-3 TTS，以及 MageVL-Cowork 与 Kimi-K3.1 视觉。llama-server 加固了 SSRF、CORS、DNS 重绑定与 MCP 工具取消，并增加 OpenAI 兼容的 /v1/audio/speech 端点；网页界面加入聊天分组与 markdown 编辑器。捆绑的 ggml 升至 v1.0.0，预编译包指向 nightly build b12359。维护者 Daniel Bevenius、Georgi Gerganov 与 merve 在同日博客中写明，此后 llama.cpp 与 ggml 会用主版本号标出 API 与 ABI 不兼容。功能范围来自发布说明与该博客，本刊未编译或实测。GitHub published_at 为 2026-11-13T10:20:19Z。",
      "en": "ggml-org released llama.cpp v1.0.0. The notes say this version removes the deprecated public API, promotes the NextN speculative API into llama.h, and deletes llama_set_warmup, 35 deprecated functions, and defrag_thold. It adds OCP FP8 KV caches (-ctk/-ctv f8_e4m3), a host-memory MoE expert cache with a configurable CPU share, and loading of PLE from external GGUF shards. New text architectures are Kimi-K3.1-Pro, Ripple-65B-Preview and xing4_0, along with drama-3 TTS and MageVL-Cowork and Kimi-K3.1 vision. llama-server hardens SSRF, CORS, DNS rebinding and MCP tool cancellation, and adds an OpenAI-compatible /v1/audio/speech endpoint; the web UI adds chat groups and a markdown editor. Bundled ggml moves to v1.0.0, and the prebuilt package points at nightly build b12359. Maintainers Daniel Bevenius, Georgi Gerganov and merve wrote the same day that llama.cpp and ggml will now mark API and ABI incompatibilities with major-version bumps. This scope comes from the release notes and that post, and TUJL has not built or measured it. GitHub published_at is 2026-11-13T10:20:19Z.",
      "href": "https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0"
    },
    {
      "index": "02",
      "label": "模型库 / Model library",
      "source": "Transformers · GitHub Release",
      "date": "2026.11.13 22:10:57 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-13T14:10:57Z",
      "zhTitle": "Transformers 5.23.0 接入 Inkling 2、LFM3 与 Dots 3 Note 等模型",
      "enTitle": "Transformers 5.23.0 adds Inkling 2, LFM3, Dots 3 Note and other models",
      "zh": "Hugging Face Transformers v5.23.0 为正式发布。发布说明新增的模型包括：Thinking Machines 的 Inkling 2 Small，接受文本与图像、输出文本，语言骨干为 48 层混合专家，每层把 token 路由到 384 个专家中的 8 个，总参数 5940 亿、活跃 170 亿；Liquid AI 的 LFM3，把门控短卷积与分组查询注意力组合；Dots 3 Note Preview，以共享视觉编码器处理图像和视频，并以 Whisper 式音频编码器处理音频，支持 BF16 与 FP8；LFM3-VL，按原分辨率接收图像和视频；IQuest-Coder-V1 的 7B、14B 与 40B，架构与 Llama 相同，循环版检查点不受支持；上海人工智能实验室的 InternLM3 8B 指令模型，同样走 Llama 实现。决策头 JEV 被标为实验性，说明写明接口仍可能变化，生产环境应谨慎。破坏性变更包括移除 ep_router 专家并行方式。关于导出，说明称在 EmbeddingGemma2（8×128 token）上，带 TensorRT 执行提供者的 ONNX Runtime 比 eager PyTorch 快 7.6 倍，该数字来自发布说明，本刊未复测。GitHub published_at 为 2026-11-13T14:10:57Z。",
      "en": "Hugging Face Transformers v5.23.0 is a regular release. Newly added models in the notes include Thinking Machines' Inkling 2 Small, which takes text and images and emits text, with a 48-layer mixture-of-experts language backbone that routes each token to 8 of 384 experts, for 594 billion total and 17 billion active parameters; Liquid AI's LFM3, which combines gated short convolutions with grouped-query attention; Dots 3 Note Preview, which uses a shared vision encoder for images and video and a Whisper-style audio encoder, with BF16 and FP8 inference; LFM3-VL, which takes images and video at native resolution; IQuest-Coder-V1 at 7B, 14B and 40B, loaded through the Llama architecture, with looped checkpoints unsupported; and Shanghai AI Laboratory's InternLM3 8B instruct model, also on the Llama implementation. The JEV decision head is marked experimental, and the notes say its API may still change and should be used with caution in production. Breaking changes include removing the ep_router expert-parallel style. On export, the notes say ONNX Runtime with the TensorRT execution provider is 7.6 times faster than eager PyTorch on EmbeddingGemma2 at 8 by 128 tokens. That figure comes from the release notes and was not rerun by TUJL. GitHub published_at is 2026-11-13T14:10:57Z.",
      "href": "https://github.com/huggingface/transformers/releases/tag/v5.23.0"
    },
    {
      "index": "03",
      "label": "评测基准 / Benchmark",
      "source": "Ai2 · Hugging Face",
      "date": "2026.11.14 01:02:35 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-13T17:02:35.607Z",
      "zhTitle": "Ai2 发布 XYBench，测试模型会否纠正基于误解的提问",
      "enTitle": "Ai2 releases XYBench to test whether models correct misconception-based questions",
      "zh": "Allen Institute for AI 在 Hugging Face 发布 XYBench，作者署名为 Kyle Wiggers，并写明与卡内基梅隆、NVIDIA 和约翰斯·霍普金斯的研究者共同开发。基准共 8,115 题：Stack Overflow 1,557 题、Stack Exchange 184 题、人工整理 102 题，以及用 Sonnet 4.5 从 WikiHow 指南生成的 6,272 题。它考察模型面对所谓 XY 问题——用户想完成 X，却就一个未必合适的做法 Y 求助——时，是否识别误解并把回答转向实际目标。文中称该基准获得 EMNLP 2026 最佳资源论文奖。受测模型为 Claude Sonnet 4.6、GPT-5、Gemini 3.1 Pro、Qwen3.5-9B 与 DeepSeek-V4 Pro，单轮、每题一次回答。在 Stack Overflow 上，针对字面请求的解法出现在 75–86% 的回答中，针对底层目标的解法出现在 59–71%；主要聚焦底层目标的回答只有 35–41%。在告知真实意图的实验里，Sonnet 4.6 给出底层目标解法的比例从 59% 升到 67%，但误解识别率从 47% 降到 34%。作者写明目前主要覆盖英语程序性问题。上述比例来自该文，本刊未复跑。JSON-LD 的 datePublished 为 2026-11-13T17:02:35.607Z。",
      "en": "The Allen Institute for AI published XYBench on Hugging Face. The byline is Kyle Wiggers, and the post says it was developed with researchers at Carnegie Mellon, NVIDIA and Johns Hopkins. The benchmark has 8,115 questions: 1,557 from Stack Overflow, 184 from Stack Exchange, 102 curated by hand, and 6,272 generated with Sonnet 4.5 from WikiHow guides. It tests the XY problem, where someone wants to accomplish X but asks for help with an approach Y that may not fit, and whether a model recognizes the misconception and redirects toward the actual goal. The post says the benchmark won the Best Resource Paper Award at EMNLP 2026. The models tested were Claude Sonnet 4.6, GPT-5, Gemini 3.1 Pro, Qwen3.5-9B and DeepSeek-V4 Pro, in a single turn with one response per question. On Stack Overflow, solutions to the stated request appeared in 75–86% of responses and solutions to the underlying goal in 59–71%; only 35–41% of responses focused primarily on the underlying goal. When the true intent was supplied, Sonnet 4.6's rate of including a goal solution rose from 59% to 67%, while misconception identification fell from 47% to 34%. The authors say coverage is mainly English-language procedural problems. These rates come from the post and were not rerun by TUJL. The JSON-LD datePublished is 2026-11-13T17:02:35.607Z.",
      "href": "https://huggingface.co/blog/allenai/xybench"
    },
    {
      "index": "04",
      "label": "开发者工具 / Developer tools",
      "source": "Google",
      "date": "2026.11.14 04:30:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-13T20:30:00Z",
      "zhTitle": "Google 把开发者计划的云额度领取放进 AI Studio",
      "enTitle": "Google puts Developer Program Cloud credit claims inside AI Studio",
      "zh": "Google 产品经理 Bala Muthukrishnan 与 Seth Odoom 在官方博客写道，Google Developer Program 的 Cloud 额度现在可以在 Google AI Studio 内领取和管理。Google AI Pro 与 Ultra 订阅者可以建立开发者计划资料、关联账单并查看余额，而不必离开工作区。文章说明：每笔月度额度自发放起 12 个月内有效，未用额度按月累积；订阅配额用完后可用额度继续调用付费档模型，升级方案会提高月度额度。使用带 Cloud 账单的 Gemini API 来抵扣促销额度，需要至少 5 美元的预付余额。额度只给主订阅人，不能在家庭成员之间分享。文章没有给出各档具体的月度金额，只说额度随方案档位变化。流程描述来自该文，本刊未在账号中复现。JSON-LD 的 datePublished 为 2026-11-13T20:30:00+00:00。",
      "en": "Google product managers Bala Muthukrishnan and Seth Odoom wrote that Google Developer Program Cloud credits can now be claimed and managed inside Google AI Studio. Google AI Pro and Ultra subscribers can create a Developer Program profile, link billing and see their balance without leaving the workspace. The post says each monthly credit is valid for 12 months from issue and unused grants stack month to month; credits can cover paid-tier models after the subscription quota runs out, and upgrading the plan increases the monthly grant. Drawing down promotional credits on the Gemini API with Cloud billing requires a minimum $5 prepaid balance. Only the primary subscriber can use the credits, and they cannot be shared with family members. The post does not state a dollar amount per tier, only that the grant scales with the plan. This workflow is the post's account and was not reproduced by TUJL in an account. The JSON-LD datePublished is 2026-11-13T20:30:00+00:00.",
      "href": "https://blog.google/innovation-and-ai/technology/developers-tools/google-cloud-credits-gdp-ai-studio/"
    }
  ]
};

export const issue068: Issue = {
  "number": "068",
  "date": "2026-11-13",
  "readingTime": "约 5 分钟",
  "windowStart": "2026-11-12T04:12:00Z",
  "windowEnd": "2026-11-13T04:12:00Z",
  "heading": "更快的日常模型、开源语音与生成库同日更新",
  "noteTitle": "四条都有精确时间，榜单与安全数字来自发布方。",
  "noteZh": "本期按北京时间11月12日12:12至11月13日12:12的24小时窗口检索，收录四则未在往期使用的一手来源。窗口从11月12日12:12起算，11月11日与该时刻之前的12日条目留在窗外。Google博客JSON-LD的datePublished为2026-11-12T18:00:00+00:00；Salesforce与IBM两篇Hugging Face文章的datePublished分别为2026-11-12T16:43:41.057Z与2026-11-12T19:07:35.672Z；Diffusers以GitHub发布记录的published_at为准。名次、错误率、速度与注入实验数字均来自发布方，本刊未独立复测。我们的编辑判断是：把新模型的榜单位置、预览模型的安全结论和软件库的集成说明分开，再放到自己的数据与任务上核对。",
  "noteEn": "We searched the 24-hour window from November 12, 12:12 to November 13, 12:12 Beijing time and selected four previously unused primary sources. The window starts at 12:12 on November 12, so November 11 and earlier November 12 items stay outside it. The Google post's JSON-LD datePublished is 2026-11-12T18:00:00+00:00. The Salesforce and IBM Hugging Face posts use datePublished values of 2026-11-12T16:43:41.057Z and 2026-11-12T19:07:35.672Z. The Diffusers item uses published_at from the GitHub release record. Ranks, error rates, speed figures and injection-test numbers come from the publishers and were not independently rerun by TUJL. Our editorial view: keep a new model's leaderboard place, a preview model's safety claims, and a library's integration notes apart, then check them on your own data and tasks.",
  "stories": [
    {
      "index": "01",
      "label": "模型发布 / Model release",
      "source": "Google",
      "date": "2026.11.13 02:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-12T18:00:00Z",
      "zhTitle": "Google发布Gemini 4 Hydrogen，面向日常编程与代理工作流",
      "enTitle": "Google releases Gemini 4 Hydrogen for everyday coding and agentic workflows",
      "zh": "Google DeepMind高级副总裁、Google首席AI架构师Koray Kavukcuoglu在官方博客介绍Gemini 4 Hydrogen，称它把速度和效率放在日常编程与代理工作流上，而Gemini 4 Carbon与Argon仍面向更长程的推理。公司称，默认的high思考档在Artificial Analysis Intelligence Index上为51，高于Argon的50，最高xhigh档为54；在全部100万token上下文内定价固定为每百万输入代币1.50美元、输出7.50美元。Google Antigravity中的Orchestrator可在同一次会话里于Carbon与Hydrogen之间切换；公司称在Terminal-Bench 4.0上成功率接近Carbon，平均少用24%配额、快19%。相对Gemini 3.8 Flash，公司称high默认档完成任务快2.5倍，Terminal-Bench 4.1为57%对18.2%。思考档分为low、medium、high（默认）与xhigh。模型正向Google AI Studio、Gemini API、Gemini应用、搜索以及符合条件的企业与订阅表面推出。上述分数与速度均为Google的陈述，本刊未复测。该文JSON-LD的datePublished为2026-11-12T18:00:00+00:00。",
      "en": "Koray Kavukcuoglu, SVP of Google DeepMind and chief AI architect at Google, introduced Gemini 4 Hydrogen for speed and efficiency on everyday coding and agentic workflows, while Gemini 4 Carbon and Argon remain the models for longer-horizon reasoning. The company says Hydrogen scores 51 on the Artificial Analysis Intelligence Index at the default high thinking level, above Argon's 50, and 54 at xhigh. Pricing is flat across the 1 million-token context window at $1.50 per million input tokens and $7.50 per million output tokens. Orchestrator in Google Antigravity can switch between Carbon and Hydrogen in one session; Google says that on Terminal-Bench 4.0 it reached near-Carbon success while using 24% less quota and finishing 19% faster on average. Against Gemini 3.8 Flash, the company says the high default finishes tasks 2.5 times faster and scores 57% versus 18.2% on Terminal-Bench 4.1. Thinking levels are low, medium, high (default) and xhigh. Hydrogen is rolling out across Google AI Studio, the Gemini API, the Gemini app, Search, and eligible business and subscriber surfaces. These scores and speed figures are Google's claims and have not been rerun by TUJL. The post's JSON-LD datePublished is 2026-11-12T18:00:00+00:00.",
      "href": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
    },
    {
      "index": "02",
      "label": "语音识别 / Speech recognition",
      "source": "Salesforce · Hugging Face",
      "date": "2026.11.13 00:43:41 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-12T16:43:41.057Z",
      "zhTitle": "Salesforce发布Apache 2.0语音模型SOV-Transcribe-1",
      "enTitle": "Salesforce releases the Apache 2.0 speech model SOV-Transcribe-1",
      "zh": "Salesforce在Hugging Face博客发布开源权重模型SOV-Transcribe-1，许可为Apache 2.0，用于非流式自动语音识别，活跃参数40亿、总参数260亿。文章称，截至2026年11月12日，它在Artificial Analysis的开源非流式语音转写中排第1、总榜第7，并在VoiceCodeBench的23个系统中排第2。文中给出的AA-WER为2.28%，低于同为40亿活跃参数的NVIDIA Nemotron 3.5 Transcribe（2.81%），也低于Mistral Voxtral Small的2.77%，而活跃参数约为后者的六分之一（40亿对240亿）。这些名次与错误率来自Salesforce的记述，本刊未复测。权重在Hugging Face发布。该文JSON-LD的datePublished为2026-11-12T16:43:41.057Z。",
      "en": "Salesforce published SOV-Transcribe-1 on the Hugging Face blog, an Apache 2.0 open-weight model for non-streaming automatic speech recognition, with 4 billion active parameters and 26 billion total. The post says that as of November 12, 2026 it ranks first among open-weight models for non-streaming speech-to-text on Artificial Analysis and seventh overall, and second of 23 systems on VoiceCodeBench. It reports an AA-WER of 2.28%, below NVIDIA Nemotron 3.5 Transcribe at 2.81% with the same active-parameter count, and below Mistral Voxtral Small at 2.77% with about six times fewer active parameters (4 billion versus 24 billion). These ranks and error rates are Salesforce's account and have not been rerun by TUJL. The weights are on Hugging Face. The post's JSON-LD datePublished is 2026-11-12T16:43:41.057Z.",
      "href": "https://huggingface.co/blog/salesforce-sovereign-intelligence/sov-transcribe-1"
    },
    {
      "index": "03",
      "label": "结构化上下文 / Structured context",
      "source": "IBM · Hugging Face",
      "date": "2026.11.13 03:07:35 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-12T19:07:35.672Z",
      "zhTitle": "IBM以实验预览发布LLMON，并给出Granite 4.1的3B与8B模型",
      "enTitle": "IBM previews LLMON with Granite 4.1 3B and 8B models",
      "zh": "IBM Granite团队在Hugging Face发布实验性预览模型granite-4.1-3b-LLMON-preview与granite-4.1-8b-LLMON-preview，以及标记语言LLMON（LLM Object Notation）。模型从Granite 4.1基座继续训练，用保留的特殊token划分指令、数据与约束，而不是把结构交给JSON里的括号和引号。作者称，在以稳健性（1减去攻击成功率）衡量的OPI基准上，LLMON几乎消除这类静态间接提示注入，相对其测过的最好前沿模型多避开47%的攻击，相对最好的开源模型多避开95%，并称通用能力与Granite 4.1 Instruct相当。他们同时写明这是习得行为，不是强制保证，多轮自适应攻击仍在改进，且预览不用于生产。上述比例来自作者评测，本刊未复现。该文JSON-LD的datePublished为2026-11-12T19:07:35.672Z。",
      "en": "The IBM Granite team released two experimental preview models on Hugging Face, granite-4.1-3b-LLMON-preview and granite-4.1-8b-LLMON-preview, plus LLMON (LLM Object Notation). The models continue from Granite 4.1 base checkpoints and use reserved special tokens to separate instructions, data and requirements, rather than leaving structure to JSON brackets and quotes. The authors say that on the OPI benchmark, where robustness is 1 minus attack success rate, LLMON nearly removes this class of static indirect prompt injection, avoiding 47% more attacks than the best frontier model they tested and 95% more than the best open-source model, with general capability on par with Granite 4.1 Instruct. They also say this is learned behavior, not an enforced guarantee, that adaptive multi-turn attacks are still being improved, and that the preview is not for production. Those rates are the authors' evaluation and have not been reproduced by TUJL. The post's JSON-LD datePublished is 2026-11-12T19:07:35.672Z.",
      "href": "https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite"
    },
    {
      "index": "04",
      "label": "生成库 / Generation library",
      "source": "Diffusers · GitHub Release",
      "date": "2026.11.12 13:22:22 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-12T05:22:22Z",
      "zhTitle": "Diffusers 0.43.0加入五项图像与视频管线",
      "enTitle": "Diffusers 0.43.0 adds five image and video pipelines",
      "zh": "Hugging Face Diffusers 0.43.0为正式发布。发布说明新增五项模块化集成：MiniMax-H3-Image做文生图与参考图编辑，采样固定六步；Pika H3 Flex在其基础上用六步生成带立体声的视频；Pruna的P-H3-Image做文生图，并支持最多八张输入图的指令编辑；Kandinsky S2V 1.0由参考图像与一段语音驱动人物动作，按五秒一段生成视频；PAN 2是发布说明中的290亿参数场景模拟器，提供文生视频与图生视频。同版还调整注意力后端、张量并行、LoRA与检查点保存。功能范围来自发布说明，本刊未运行这些管线。GitHub published_at为2026-11-12T05:22:22Z。",
      "en": "Hugging Face Diffusers 0.43.0 is a regular release. The notes add five modular integrations: MiniMax-H3-Image for text-to-image generation and reference-image editing with a fixed six-step sampler; Pika H3 Flex for video with synchronized stereo audio in six steps; Pruna's P-H3-Image for text-to-image and instruction editing with up to eight input images; Kandinsky S2V 1.0, which animates a person from a reference image and a speech recording in five-second chunks; and PAN 2, described in the notes as a 29-billion-parameter scene simulator for text-to-video and image-to-video. The release also changes attention backends, tensor parallelism, LoRA handling and checkpoint saving. This scope comes from the release notes, and TUJL has not run the pipelines. GitHub published_at is 2026-11-12T05:22:22Z.",
      "href": "https://github.com/huggingface/diffusers/releases/tag/v0.43.0"
    }
  ]
};

export const issue067: Issue = {
  "number": "067",
  "date": "2026-11-10",
  "readingTime": "约 4 分钟",
  "windowStart": "2026-11-09T02:03:00Z",
  "windowEnd": "2026-11-10T02:03:00Z",
  "heading": "实验室与基础设施同日更新，声明仍需自行核对",
  "noteTitle": "三条有精确时间，一则官方页面只标日期。",
  "noteZh": "本期按北京时间11月9日10:03至11月10日10:03的24小时窗口检索，收录四则未在往期使用的一手来源。Google博客的JSON-LD datePublished为2026-11-09T13:00:00+00:00，NVIDIA博客的article:published_time为2026-11-09T14:00:01+00:00，Ollama以GitHub发布记录的published_at为准。Anthropic官方页面只标注2026年11月9日，未披露精确时刻与时区，小时级窗口归属未能确认，故未写入publishedAt，也不用SDK或其他转述时间代替。功能、性能与评测数字均来自发布方，本刊未独立运行验证。我们的编辑判断是：把公司声明、页面元数据里的时间和自己环境中的实测分开，再决定是否跟进。",
  "noteEn": "We searched the 24-hour window from November 9, 10:03 to November 10, 10:03 Beijing time and selected four previously unused primary sources. The Google post's JSON-LD datePublished is 2026-11-09T13:00:00+00:00; the NVIDIA post's article:published_time is 2026-11-09T14:00:01+00:00; the Ollama item uses published_at from the GitHub release record. Anthropic's official page is dated November 9, 2026, with no hour or time zone, so hourly inclusion is unconfirmed: it has no publishedAt, and we did not substitute an SDK or secondary timestamp. Feature, performance and benchmark figures come from the publishers and were not independently run by TUJL. Our editorial view: keep company claims, timestamps in page metadata, and results on your own systems apart before deciding whether to follow a release.",
  "stories": [
    {
      "index": "01",
      "label": "模型发布 / Model release",
      "source": "Anthropic",
      "date": "2026.11.09 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Anthropic发布Claude Fable 5.2与Mythos 5.2，并称二者为同一底层模型",
      "enTitle": "Anthropic releases Claude Fable 5.2 and Mythos 5.2 as one underlying model",
      "zh": "Anthropic在官方页面发布Claude Fable 5.2与Claude Mythos 5.2，并称二者为同一底层模型。Fable带有网络安全与生物学防护，向用户开放；寻求相关有益应用的组织可通过生命科学与网络安全核验计划申请Mythos。公司称输出较5.1最多约快30%，定价为每百万输入代币8美元、输出40美元；可选快速模式最高约2.5倍、价格翻倍。开发者标识为claude-fable-5-2，并已在AWS、Google Cloud与Microsoft Azure提供。页面中的编程、科学与硬件测试结果均为公司陈述，本刊未独立验证。该页只标注2026年11月9日，未披露精确时刻。",
      "en": "Anthropic published Claude Fable 5.2 and Claude Mythos 5.2 on its official page, describing them as the same underlying model. Fable has cybersecurity and biology safeguards and is available to users; organizations seeking beneficial applications in those areas can apply for Mythos through the Life Sciences and Cyber Verification Programs. The company says outputs are up to about 30% faster than 5.1, at $8 per million input tokens and $40 per million output tokens, with an optional fast mode up to about 2.5 times quicker at double that price. The developer ID is claude-fable-5-2, and the models are offered on AWS, Google Cloud and Microsoft Azure. Coding, science and hardware results on the page are company claims and have not been independently verified by TUJL. The page is dated November 9, 2026, with no exact time.",
      "href": "https://www.anthropic.com/claude-fable-and-mythos-5-2"
    },
    {
      "index": "02",
      "label": "加速芯片 / Accelerators",
      "source": "Google",
      "date": "2026.11.09 21:00:00 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-09T13:00:00Z",
      "zhTitle": "Google新增TPU 8tx与TPU 8i Max，第八代一年内扩至四种系统",
      "enTitle": "Google adds TPU 8tx and TPU 8i Max, expanding the eighth generation to four systems in a year",
      "zh": "Google Cloud高级副总裁Amin Vahdat在官方博客宣布，第八代TPU家族新增TPU 8tx与TPU 8i Max，使该代系统在一年内达到四种。8tx面向机密推理与小规模训练，称在硬件层保护使用中的敏感数据与模型权重；8i Max将两枚8i芯片封装在一起，称计算、片上SRAM与HBM带宽均为8i的两倍。性能与安全描述来自Google，本刊未做独立实测。该文JSON-LD的datePublished为2026-11-09T13:00:00+00:00。",
      "en": "Amin Vahdat, Google Cloud SVP and chief technologist for AI and infrastructure, wrote that TPU 8tx and TPU 8i Max join the eighth-generation portfolio, bringing it to four systems in a single year. TPU 8tx is described as being built for confidential inference and small-scale training, with hardware-level protection for sensitive data and model weights in use. TPU 8i Max packages two TPU 8i chips and is said to deliver twice the compute, on-chip SRAM and HBM bandwidth of TPU 8i. Performance and security claims come from Google and have not been independently measured by TUJL. The post's JSON-LD datePublished is 2026-11-09T13:00:00+00:00.",
      "href": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/"
    },
    {
      "index": "03",
      "label": "机器人模型 / Robotics model",
      "source": "NVIDIA",
      "date": "2026.11.09 22:00:01 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-09T14:00:01Z",
      "zhTitle": "NVIDIA在CoRL介绍开源世界动作模型GR00T 2，并发布Isaac Lab 3.0",
      "enTitle": "NVIDIA introduces open world-action model GR00T 2 at CoRL, with Isaac Lab 3.0",
      "zh": "NVIDIA在机器人学习会议CoRL期间的官方博客中介绍开源世界动作模型GR00T 2（基于NVIDIA Cosmos），并同时发布Isaac Lab 3.0等仿真工具。公司称训练数据包含10万小时开放的人类第一人称视频；在其评估中，50项任务里有40项至少完成过一次且无需针对任务的示范，单次示范平均成功率为71%，五次示范为95%。上述基准与合作试用情况均为NVIDIA的说明，本刊未复现。文章的article:published_time为2026-11-09T14:00:01+00:00。",
      "en": "In an official blog post during the Conference on Robot Learning, NVIDIA introduced GR00T 2, an open world-action model built on NVIDIA Cosmos, alongside Isaac Lab 3.0 and other simulation tools. The company says training included 100,000 hours of open-source human egocentric video. In its evaluation, 40 of 50 tasks were completed at least once without task-specific demonstrations, with average success of 71% from one demonstration per task and 95% from five. These benchmarks and partner trials are NVIDIA's account and have not been reproduced by TUJL. The post's article:published_time is 2026-11-09T14:00:01+00:00.",
      "href": "https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/"
    },
    {
      "index": "04",
      "label": "本地推理 / Local inference",
      "source": "Ollama · GitHub Release",
      "date": "2026.11.10 02:21:19 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-09T18:21:19Z",
      "zhTitle": "Ollama 0.40.16加入Ripple Preview，并称降低部分模型在Apple芯片上的内存占用",
      "enTitle": "Ollama 0.40.16 adds Ripple Preview and reports lower memory use for a model on Apple silicon",
      "zh": "Ollama 0.40.16为正式发布。发布说明新增Ricursive Intelligence的65B稠密模型Ripple Preview，并提供ollama run ripple-preview。维护方称，Qwen3.8 Flash Next在Apple silicon上约减少27GiB内存占用；同时调整了将Claude Code路由到所选模型的启动方式、云模型下线提示，以及/v1/responses与/v1/models的行为，并加入Windows on ARM的CUDA 13.5支持。功能与内存数字来自发布说明，本刊未实测。GitHub published_at为2026-11-09T18:21:19Z。",
      "en": "Ollama 0.40.16 is a regular release. The notes add Ripple Preview, a 65B dense model from Ricursive Intelligence for agentic coding, via ollama run ripple-preview. Maintainers say Qwen3.8 Flash Next uses about 27 GiB less memory on Apple silicon. The release also adjusts how ollama launch routes Claude Code to the selected model, explains retired cloud models, changes /v1/responses and /v1/models behavior, and adds CUDA 13.5 support for Windows on ARM. Features and the memory figure come from the release notes and have not been measured by TUJL. GitHub published_at is 2026-11-09T18:21:19Z.",
      "href": "https://github.com/ollama/ollama/releases/tag/v0.40.16"
    }
  ]
};

export const issue066: Issue = {
  "number": "066",
  "date": "2026-11-08",
  "readingTime": "约 4 分钟",
  "windowStart": "2026-11-07T02:42:00Z",
  "windowEnd": "2026-11-08T02:42:00Z",
  "heading": "工具更新更细，迁移与验证更重要",
  "noteTitle": "四则有明确发布时间的开源更新。",
  "noteZh": "本期按北京时间11月7日10:42至11月8日10:42的24小时窗口检索，收录四则未在往期使用、且能核对精确发布时间的开源项目更新，不为凑足五条而扩大时窗。日期以GitHub官方发布记录的 published_at 为准，不混用提交、标签或抓取时间。llama.cpp条目为预发布，其余三项为正式发布记录。功能说明均来自项目维护方，本刊未独立运行验证。我们的编辑判断是：升级前先检查兼容性、数据备份和权限边界，再用自己的任务测量收益。",
  "noteEn": "We searched the 24-hour window from November 7, 10:42 to November 8, 10:42 Beijing time and selected four previously unused open-source updates with verifiable publication timestamps, without widening the window to reach five stories. Dates use published_at from GitHub release records, not commit, tag or crawl times. The llama.cpp item is a pre-release; the other three are regular releases. Feature descriptions come from maintainers and were not independently run by TUJL. Our editorial view: check compatibility, backups and authorization boundaries before upgrading, then measure benefits on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "智能体框架 / Agent framework",
      "source": "Microsoft · GitHub Release",
      "date": "2026.11.07 23:52:42 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-07T15:52:42Z",
      "zhTitle": "Microsoft Agent Framework 1.25提高Python门槛，并收紧MCP与会话边界",
      "enTitle": "Microsoft Agent Framework 1.25 raises the Python minimum and tightens MCP and session boundaries",
      "zh": "Python版1.25.0要求Python 3.11或更高版本。维护方同时加入MCP目录默认100页、1000项的发现上限，以及框架管理请求的30秒默认超时；工作流执行器和会话绑定单一授权域。这些是含破坏性变更的发布说明，多用户部署仍须检查共享存储与自定义工具的权限。",
      "en": "Python 1.25.0 requires Python 3.11 or newer. Maintainers set default MCP discovery limits of 100 pages and 1,000 items per catalog, plus a 30-second timeout for framework-owned requests. Live workflow executors and sessions are bound to one authorization scope. These are breaking release changes; multi-user deployments still need to check shared storage and custom-tool permissions.",
      "href": "https://github.com/microsoft/agent-framework/releases/tag/python-1.25.0"
    },
    {
      "index": "02",
      "label": "推理部署 / Inference deployment",
      "source": "Xorbits · GitHub Release",
      "date": "2026.11.07 21:07:47 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-07T13:07:47Z",
      "zhTitle": "Xinference 4.2.0增加跨副本缓存共享、滚动重载与网页基准测试",
      "enTitle": "Xinference 4.2.0 adds cross-replica caching, rolling reloads and browser-based benchmarks",
      "zh": "Xinference 4.2.0的发布说明介绍Xavier跨副本兼容前缀缓存共享，并为受支持的vLLM与SGLang部署加入逐副本滚动重载。网页界面可测试吞吐量、首个令牌延迟及输出令牌耗时，导出JSON结果。减少重复预填充是维护方的功能描述，实际收益取决于模型、引擎与负载，尚无本刊独立实测。",
      "en": "Xinference 4.2.0 describes Xavier sharing compatible prefix caches across replicas, alongside rolling reloads for supported vLLM and SGLang deployments. Its Web UI can benchmark throughput, time to first token and time per output token, then export JSON results. Reduced repeated prefill is a maintainer-described capability; actual gains depend on the model, engine and workload and have not been independently tested by TUJL.",
      "href": "https://github.com/xorbitsai/inference/releases/tag/v4.2.0"
    },
    {
      "index": "03",
      "label": "本地推理预发布 / Local inference pre-release",
      "source": "ggml-org · GitHub Release",
      "date": "2026.11.08 05:11:11 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-07T21:11:11Z",
      "zhTitle": "llama.cpp预发布加入CPU分担MoE缓存未命中与调参脚本",
      "enTitle": "llama.cpp pre-release adds CPU handling of MoE cache misses and a tuning script",
      "zh": "llama.cpp的b12191预发布允许将部分MoE缓存未命中的专家计算交给CPU，而非全部上传至设备。新增调参脚本会测试不同缓存容量与CPU分担比例，再建议配置。发布说明未给出适用于所有硬件的提速结论；这仍是预发布构建，应先在自己的模型与机器上验证。",
      "en": "The llama.cpp b12191 pre-release lets the CPU compute a share of MoE cache misses instead of uploading every missed expert to the device. A new tuning script tests cache sizes and CPU shares before recommending settings. The release does not establish a speedup across all hardware. This remains a pre-release build and needs validation on the intended model and machine.",
      "href": "https://github.com/ggml-org/llama.cpp/releases/tag/b12191"
    },
    {
      "index": "04",
      "label": "研究工作台 / Research workbench",
      "source": "Open Science Desktop · GitHub Release",
      "date": "2026.11.07 19:38:03 · 北京时间 / UTC+8",
      "publishedAt": "2026-11-07T11:38:03Z",
      "zhTitle": "Open Science Desktop 0.7.2升级OpenCode，并补充智能体任务与上下文展示",
      "enTitle": "Open Science Desktop 0.7.2 upgrades OpenCode and expands agent task and context views",
      "zh": "Open Science Desktop 0.7.2将内置OpenCode从1.19.4升至2.2.5。维护方称，首次转换数据库前会备份旧历史并附恢复说明；ACP智能体可展示自身命令、上下文用量与任务列表，目录新增DeepSeek Harness。以上为桌面工作台更新，迁移与兼容性尚未经本刊运行验证。",
      "en": "Open Science Desktop 0.7.2 moves its bundled OpenCode runtime from 1.19.4 to 2.2.5. Maintainers say the old history is backed up with recovery instructions before database conversion. ACP agents can expose their own commands, context usage and task lists, and DeepSeek Harness joins the catalog. These are desktop-workbench updates; TUJL has not run the migration or compatibility checks.",
      "href": "https://github.com/ai4s-research/open-science/releases/tag/v0.7.2"
    }
  ]
};

export const issue065: Issue = {
  "number": "065",
  "date": "2026-11-07",
  "readingTime": "约 5 分钟",
  "heading": "AI走进真实系统，成本与验证同样重要",
  "noteTitle": "把已完成的事、正在测试的事和计划分清楚。",
  "noteZh": "本期按北京时间11月6日10:45至11月7日10:45的近24小时窗口检索，收录五则11月6日的一手发布、研究说明或采访。CNBC确认采访发生在当日美国东部时间9至12时的节目中。其余四篇仅显示日期，小时级窗口归属未完全确认。EVE实验在4至7月开展、此次公布；科学建模条目为研究者方法文章。我们的编辑判断是：合作、产品更新与实验结果都值得追踪，但仍应分别核验可用范围、费用归属和真实场景表现。",
  "noteEn": "We searched the November 6, 10:45 to November 7, 10:45 Beijing-time window and selected five first-party releases, research reports or interviews dated November 6. CNBC places the interview in that day's 9 a.m.–noon US Eastern program. The other four sources give dates only, so exact hourly inclusion remains unconfirmed. The EVE work ran in April–July and was published now; the scientific-modeling item is a methodological guest essay. Our editorial view: partnerships, product updates and experiments merit attention, while availability, cost attribution and real-world performance need separate verification.",
  "stories": [
    {
      "index": "01",
      "label": "安全合作 / Security partnership",
      "source": "OpenAI",
      "date": "2026.11.06 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "OpenAI与Hacktron合作，重点检查跨服务连接的漏洞",
      "enTitle": "OpenAI partners with Hacktron to test vulnerabilities at service boundaries",
      "zh": "OpenAI宣布与Hacktron联合选择高优先级测试范围，重点检查自身系统与第三方服务的交互，并通过Daybreak Red扩大合作方对前沿模型的访问。这是安全研究合作公告，尚未公布本次合作的漏洞修复成果。",
      "en": "OpenAI and Hacktron will select priority areas for joint testing, focusing on how OpenAI systems interact with third-party services. Hacktron will gain expanded frontier-model access through Daybreak Red. The announcement describes a security partnership; it does not report completed fixes from this collaboration.",
      "href": "https://openai.com/index/partnering-with-hacktron/"
    },
    {
      "index": "02",
      "label": "智能体评估 / Agent evaluation",
      "source": "Anthropic Research",
      "date": "2026.11.06 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Project EVE揭示Claude的交易能力与团队监督短板",
      "enTitle": "Project EVE reveals trading strengths and weak sabotage detection",
      "zh": "Anthropic公布4至7月开展的EVE实验：较新Claude模型在历史市场回放中持续盈利，四智能体团队却很少识别被明确指令秘密破坏任务的成员。交易使用模拟器，无法完整反映市场对智能体订单的反应，结果不能外推为现实金融收益。",
      "en": "Anthropic published EVE experiments conducted in April–July. Newer Claude models remained profitable in historical market replays, while four-agent teams rarely detected a teammate explicitly instructed to sabotage them. Trading was simulated, and the replay cannot fully capture market reactions to agents' orders. The results do not establish real-world financial returns.",
      "href": "https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs"
    },
    {
      "index": "03",
      "label": "企业管理 / Enterprise controls",
      "source": "Claude Help Center",
      "date": "2026.11.06 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Claude Enterprise推出项目成本标签测试版",
      "enTitle": "Claude Enterprise adds project cost-code tags in beta",
      "zh": "符合条件的Claude Enterprise组织可为项目设置成本代码或客户事项编号，按标签查看大部分项目使用支出。功能仍为测试版，项目外工作及部分产品不计入，某些安全与数据驻留配置也不支持。标签用于费用归属，并非自动限制支出。",
      "en": "Eligible Claude Enterprise organizations can tag projects with cost codes or client-matter identifiers and view much of their project spending by tag. The beta excludes work outside projects and some products, and is unavailable under certain security or data-residency configurations. Tags attribute costs rather than impose spending limits.",
      "href": "https://support.claude.com/en/articles/12138966-release-notes"
    },
    {
      "index": "04",
      "label": "算力基础设施 / Compute infrastructure",
      "source": "CNBC · 采访文字稿 / Interview transcript",
      "date": "2026.11.06 · 采访节目9–12时美国东部 / interview 9 a.m.–noon ET",
      "zhTitle": "OpenAI财务负责人称将继续投资算力与筹资",
      "enTitle": "OpenAI's CFO says compute investment and fundraising will continue",
      "zh": "Sarah Friar在CNBC采访中表示，OpenAI将继续投资以满足需求，并通过筹资、云厂商合作与社区沟通获得算力。她同时回应数据中心对电力、水和噪声的担忧。这些是管理层对未来行动的表态，不能视为新增项目已获批或建成。",
      "en": "Sarah Friar told CNBC that OpenAI will keep investing to meet demand, raise capital and work with cloud providers and communities to secure compute. She also addressed concerns about electricity, water and noise. These are management statements about future action, not evidence that new projects have been approved or completed.",
      "href": "https://pressroom.versantmedia.com/cnbc/press-releases/cnbc-exclusive-transcript-openai-cfo-sarah-friar-speaks-cnbcs-sara-eisen-squawk"
    },
    {
      "index": "05",
      "label": "科学方法 / Scientific methods",
      "source": "Anthropic · 图宾根研究者客座文章 / Guest essay",
      "date": "2026.11.06 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "图宾根研究者讨论AI科学建模：拟合之外还要解释",
      "enTitle": "Tübingen researchers examine AI scientific modeling beyond data fitting",
      "zh": "图宾根大学及ELLIS研究者在Anthropic发表方法文章，讨论用AI构建模型、以数据约束参数并解释模型。文章强调，多种机制可能拟合同一组观测，仍需比较替代解释与设计实验。这是研究方法综述，未宣布一项已验证的新科学发现。",
      "en": "Tübingen and ELLIS researchers published an Anthropic-hosted essay on AI-assisted model construction, parameter constraints and interpretation. Multiple mechanisms can fit the same observations, so researchers still need alternative explanations and experiments. This is a methodological overview, not the announcement of a newly validated scientific discovery.",
      "href": "https://www.anthropic.com/research/teaching-ai-to-build-scientific-models"
    }
  ]
};

export const issue064: Issue = {
  "number": "064",
  "date": "2026-11-06",
  "readingTime": "约 6 分钟",
  "heading": "能力走向更多场景，落地仍需逐项核验",
  "noteTitle": "把演示、开放范围与验证结果分开看。",
  "noteZh": "本期按北京时间11月5日10:10至11月6日10:10的近24小时窗口检索，选取六篇11月5日发布的一手公告或研究说明。来源只显示日期，未给出可核验的精确发布时间与时区，小时级窗口归属未完全确认。事实是安全研究、视频、仿真、企业工作流与语音交互都有新进展，可穿戴健康研究也在扩大验证。我们的编辑判断是：进入更多场景之后，要继续分清已开放、正在推出与仍属研究的部分，并用真实任务检验质量、成本和安全边界。",
  "noteEn": "We searched the November 5, 10:10 to November 6, 10:10 Beijing-time window and selected six first-party announcements or research reports dated November 5. The sources provide dates without verifiable publication times and time zones, so their exact hourly inclusion is unconfirmed. The reports cover security research, video, simulation, enterprise workflows, voice and wearable health research. Our editorial view: wider use makes it more important to distinguish available features, ongoing rollouts and research, then test quality, cost and safety boundaries on real tasks.",
  "stories": [
    {
      "label": "安全研究 / Security research",
      "source": "OpenAI",
      "zhTitle": "OpenAI 发布 GPT-6 Cyber，首批限获批客户使用",
      "enTitle": "OpenAI introduces GPT-6 Cyber with restricted initial access",
      "zh": "OpenAI 发布面向获授权安全研究的 GPT-6 Cyber，首批通过 API 与 Codex 向部分获批 Daybreak Red 客户开放。官方报告其 ExploitGym 得分从前代32.1%升至48.5%，并强化任务边界遵守。结果属于厂商评测，不能视为任何环境下都不会越界；高风险工作仍需沙箱、操作审查与人工监督。",
      "en": "OpenAI introduced GPT-6 Cyber for authorized security research, initially available through the API and Codex to selected approved Daybreak Red customers. Its reported ExploitGym score rose from 32.1% to 48.5%, alongside improved scope compliance. These vendor evaluations do not guarantee safe behavior in every environment; high-risk work still requires sandboxing, action review and human oversight.",
      "href": "https://openai.com/index/introducing-gpt-6-cyber/",
      "index": "01",
      "date": "2026.11.05 · 仅日期，时间/时区未披露 / date only"
    },
    {
      "label": "视频生成 / Video generation",
      "source": "Google",
      "zhTitle": "Gemini Omni 1.2 Flash 支持最长15秒视频，720p价格下调",
      "enTitle": "Gemini Omni 1.2 Flash extends video to 15 seconds and lowers 720p pricing",
      "zh": "Google 宣布 Gemini Omni 1.2 Flash 通过 API 与企业平台正式可用，支持最长15秒视频和多轮对话编辑。官方720p价格为每秒0.07美元，较1.1版降低30%；Gemini应用内正向 AI Ultra 订阅者逐步推出。快速运动、复杂物理等仍存在限制，不能把4K升频等同于原生4K生成。",
      "en": "Google made Gemini Omni 1.2 Flash generally available through its API and business platform, adding videos up to 15 seconds and conversational editing. Announced 720p pricing is $0.07 per second, 30% below version 1.1. Gemini-app access is rolling out to AI Ultra subscribers. Fast motion and complex physics remain limitations; 4K upscaling is not native 4K generation.",
      "href": "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
      "index": "02",
      "date": "2026.11.05 · 仅日期，时间/时区未披露 / date only"
    },
    {
      "label": "世界模型 / World models",
      "source": "NVIDIA · Hugging Face",
      "zhTitle": "NVIDIA 发布四款 Cosmos 3 Nano 权重，面向交互仿真",
      "enTitle": "NVIDIA releases four Cosmos 3 Nano checkpoints for interactive simulation",
      "zh": "NVIDIA 发布四款 Cosmos 3 Nano 开放权重检查点，覆盖驾驶数据、摄像头与激光雷达流式仿真、仿真画面生成及双臂机器人动作预测。权重与适配方法已提供，并适用 OpenMDW1.1 条款。模型是仿真组件，闭环驾驶仍需运行环境和控制渲染器，实际训练与评估效果需另行验证。",
      "en": "NVIDIA released four open-weight Cosmos 3 Nano checkpoints spanning driving data, streaming camera-and-LiDAR simulation, simulator-conditioned visuals and bimanual robot prediction. Weights and adaptation recipes are available under OpenMDW1.1 terms. These are simulation components: closed-loop driving still needs a runtime and control renderer, and suitability for real training and evaluation must be validated.",
      "href": "https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation",
      "index": "03",
      "date": "2026.11.05 · 仅日期，时间/时区未披露 / date only"
    },
    {
      "label": "企业工作流 / Enterprise workflows",
      "source": "Mistral AI",
      "zhTitle": "Mistral 扩展 Studio，整合智能体、应用与评估流程",
      "enTitle": "Mistral expands Studio across agents, apps and evaluation workflows",
      "zh": "Mistral 扩展 Studio，加入托管智能体与应用，并加强工作流、企业上下文、可观测性和评估能力。开发者可连接企业系统、测试并部署，部署选项包括云端、私有环境与本地基础设施。这是平台更新，并非 Le Chonk 模型首次发布；关键业务落地仍需与团队确认可用范围。",
      "en": "Mistral expanded Studio with managed agents and apps, plus improvements to workflows, enterprise context, observability and evaluations. Developers can connect systems, test and deploy, with hosted, private and on-premises options. This is a platform update rather than Le Chonk’s debut. Availability for business-critical enterprise implementations still needs confirmation with Mistral.",
      "href": "https://mistral.ai/news/build-with-studio/",
      "index": "04",
      "date": "2026.11.05 · 仅日期，时间/时区未披露 / date only"
    },
    {
      "label": "语音交互 / Voice interaction",
      "source": "Meta Newsroom",
      "zhTitle": "Meta 开始为 Muse 推出实时语音与表情头像",
      "enTitle": "Meta begins rolling out real-time voice and expressive avatars in Muse",
      "zh": "Meta 开始在美国向移动端、网页及 Mac 的 Muse 应用推出实时语音与表情头像，支持打断、语音风格选择，以及纯语音或带头像的会话。官方将构思、旅行规划和演练列为场景。AI眼镜与 Muse Charm 的语音支持仍标为即将推出，不能据此认为已经全球开放。",
      "en": "Meta began a US rollout of real-time voice and expressive avatars in Muse on mobile, web and Mac, with interruptions, voice choices and audio-only or avatar views. Suggested uses include brainstorming, trip planning and rehearsal. Voice on AI Glasses and Muse Charm is still described as coming soon; the announcement does not establish worldwide availability.",
      "href": "https://about.fb.com/news/2026/11/introducing-muse-ai-voice-expressive-avatars/",
      "index": "05",
      "date": "2026.11.05 · 仅日期，时间/时区未披露 / date only"
    },
    {
      "label": "健康研究 / Health research",
      "source": "Google Research",
      "zhTitle": "Google 报告用手表传感器识别高血压信号的早期研究",
      "enTitle": "Google reports early research on detecting hypertension signals with wearables",
      "zh": "Google Research 介绍基于手表光学与加速度信号的高血压筛查研究，聚合多日数据，而非测量某一时刻的准确血压。五个美国中心的196人研究报告初筛敏感度65.8%、特异度90.0%。参与者未患已知心血管疾病且未服降压药，结果适用范围有限，不能替代标准袖带测量或独立作出诊断。",
      "en": "Google Research described hypertension screening from optical and accelerometer signals, aggregating days of data rather than measuring exact blood pressure at a moment. A 196-person study across five US sites reported 65.8% sensitivity and 90.0% specificity for initial screening. Participants had no known cardiovascular disease and took no blood-pressure medication. This early research does not replace standard cuff measurements or provide a standalone diagnosis.",
      "href": "https://research.google/blog/detecting-signs-of-hypertension-using-wearable-sensors/",
      "index": "06",
      "date": "2026.11.05 · 仅日期，时间/时区未披露 / date only"
    }
  ]
};

export const issue063: Issue = {
  "number": "063",
  "date": "2026-11-05",
  "readingTime": "约 5 分钟",
  "heading": "让智能体做更多，也把边界说清楚",
  "noteTitle": "能力扩展之后，仍要看权限、交付与证据。",
  "noteZh": "本期按北京时间11月4日11:00至11月5日11:00的近24小时窗口检索，收录六篇11月4日的一手公告或说明。腾讯新闻稿标明19:13 CST；其余仅标日期，小时级窗口归属未完全确认。事实是模型、检索入口、代码工具和智能体访问控制继续扩展，AWS则解释已有审批功能如何工作。我们的编辑判断是：可用入口、可下载权重、计划中的收购和厂商自测，应分别记录。真正进入工作流，还要核对操作权限、人工接手位置及自己的任务数据。",
  "noteEn": "We searched the November 4, 11:00 to November 5, 11:00 Beijing-time window and selected six first-party announcements or explainers dated November 4. Tencent’s release states 19:13 CST; the others give dates only, so their exact hourly inclusion is unconfirmed. Models, retrieval access, coding tools and agent access controls are expanding, while AWS explains an existing approval feature. Our editorial view: product access, downloadable weights, a planned acquisition and vendor tests need separate labels. Practical adoption also requires checking permissions, human handoffs and results on your own tasks.",
  "stories": [
    {
      "index": "01",
      "label": "模型发布 / Model release",
      "source": "Tencent · PR Newswire",
      "date": "2026.11.04 19:13 CST · 北京时间 / Beijing time",
      "zhTitle": "腾讯发布 Hy4，视觉与电脑操作能力上线，权重仍待公布",
      "enTitle": "Tencent launches Hy4 with vision and computer use; weights are still pending",
      "zh": "腾讯称 Hy4 新增视觉理解及命令行、图形界面操作能力，已接入 TokenHub、WorkBuddy、CodeBuddy 等产品。模型权重与系统卡计划在随后数日公布，不能据此认定已可本地部署。性能领先等说法来自官方评测，本刊未独立复现。",
      "en": "Tencent says Hy4 adds visual understanding and computer use through command-line and graphical interfaces, with access via TokenHub, WorkBuddy and CodeBuddy. Model weights and system cards are planned for the coming days, so local deployment is not yet established by this announcement. Performance claims are vendor-reported and have not been independently reproduced by TUJL.",
      "href": "https://www.prnewswire.com/apac/news-releases/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models-302929177.html"
    },
    {
      "index": "02",
      "label": "开发者工具 / Developer tools",
      "source": "OpenAI",
      "date": "2026.11.04 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "OpenAI 宣布拟收购 Pierre，把代码浏览与审查工具进一步接入 Codex",
      "enTitle": "OpenAI plans to acquire Pierre to expand Codex’s code-review tools",
      "zh": "OpenAI 宣布拟收购 Code Storage 及 Trees、Diffs 等工具背后的 Pierre。Trees 与 Diffs 已用于 Codex；公司表示开源项目将继续开源，Code Storage 客户可在交割后继续使用服务。交易仍须满足常规交割条件及监管批准，双方目前保持独立。",
      "en": "OpenAI announced plans to acquire Pierre, the company behind Code Storage, Trees and Diffs. Trees and Diffs already power parts of Codex. OpenAI says the open-source projects will remain open and Code Storage will continue serving customers after closing. The deal remains subject to customary conditions and regulatory approvals; the companies are still independent.",
      "href": "https://openai.com/index/openai-to-acquire-pierre/"
    },
    {
      "index": "03",
      "label": "网站与智能体 / Websites and agents",
      "source": "Cloudflare Blog",
      "date": "2026.11.04 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Cloudflare 增加个人智能体流量分析与逐项访问策略",
      "enTitle": "Cloudflare adds personal-agent analytics and granular access policies",
      "zh": "Cloudflare 宣布新增 Personal Assistants 流量分类及访问统计，并允许站点对支持的个人智能体分别选择放行、仅在广告页面拦截或全面拦截。原有搜索与训练爬虫策略保持独立。官方也指出，识别智能体仍不等于知道用户授权了什么，传递用户上下文仍是后续工作。",
      "en": "Cloudflare announced a Personal Assistants traffic category and agent-level analytics. Site owners can allow supported agents, block them on pages with ads or block them entirely, separately from search and training policies. The company notes that identifying an agent does not reveal what its user authorized; carrying that context remains future work.",
      "href": "https://blog.cloudflare.com/personal-agents-visibility-control/"
    },
    {
      "index": "04",
      "label": "检索与接入 / Retrieval access",
      "source": "Cohere Release Notes",
      "date": "2026.11.04 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Cohere Embed 5 与 Rerank 5 接入 OpenRouter",
      "enTitle": "Cohere brings Embed 5 and Rerank 5 to OpenRouter",
      "zh": "Cohere 宣布 Embed 5、Rerank 5 的 Pro 与 Fast 版本可通过 OpenRouter 使用。Embed 5 支持文本、图像及混合输入，Pro 与 Fast 共用嵌入空间，可分别承担建库与查询。此次更新是新增接入渠道，并非两款模型首次发布；质量与延迟取舍仍需用实际数据验证。",
      "en": "Cohere made Pro and Fast variants of Embed 5 and Rerank 5 available through OpenRouter. Embed 5 accepts text, images and mixed inputs; Pro and Fast share an embedding space, enabling Pro indexing with Fast queries. This is a new access channel, not the models’ initial release. Quality and latency trade-offs still need testing on real workloads.",
      "href": "https://docs.cohere.com/v2/changelog/embed-rerank-v5-openrouter"
    },
    {
      "index": "05",
      "label": "文档处理 / Document processing",
      "source": "Dharma-AI · Hugging Face",
      "date": "2026.11.04 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Dharma-AI 介绍 20 亿参数文档字段提取器，输出结构化 JSON",
      "enTitle": "Dharma-AI introduces a 2B document field extractor for structured JSON",
      "zh": "Dharma-AI 的 Field Extractor 可从文档图像开放提取字段，也可按指定 schema 输出 JSON。团队自建评测涵盖546份文档、1,638个案例，报告综合得分0.834。质量优势属于厂商自测；其 GPU 运行成本与商业 API 标价口径不同，不能直接当作产品售价或普遍优势。",
      "en": "Dharma-AI’s Field Extractor supports open field extraction and schema-directed JSON from document images. Its own benchmark covers 546 documents and 1,638 cases, with a reported composite score of 0.834. Quality advantages are vendor-tested. Its GPU runtime cost comparison uses a different basis from commercial API list prices and is not a product price or a universal advantage.",
      "href": "https://huggingface.co/blog/Dharma-AI/dharma-field-extractor"
    },
    {
      "index": "06",
      "label": "智能体治理说明 / Agent-governance explainer",
      "source": "AWS Machine Learning Blog",
      "date": "2026.11.04 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "AWS 详解 Amazon Quick 智能审批如何保留人工控制",
      "enTitle": "AWS explains how Amazon Quick Smart Approvals preserves human control",
      "zh": "AWS 解释已于10月28日推出的 Smart Approvals：在既有权限内审查符合条件的操作，批准仅对应被审查的具体动作与参数。拒绝规则和强制人工审批继续生效，评估失败会交还用户。11月4日发布的是机制说明；AWS 同时承认自动分类可能出错。",
      "en": "AWS explained Smart Approvals, launched on October 28. It reviews eligible actions within existing permissions, with approval tied to the exact action and parameters examined. Denial rules and mandatory human checks remain, and failed reviews return to the user. The November 4 article is an explainer, not a launch; AWS acknowledges that automated classification can be wrong.",
      "href": "https://aws.amazon.com/blogs/machine-learning/smart-approvals-in-amazon-quick-human-oversight-where-it-matters/"
    }
  ]
};

export const issue062: Issue = {
  "number": "062",
  "date": "2026-11-04",
  "readingTime": "约 6 分钟",
  "heading": "让 AI 进入工程现场，也让验证跟上",
  "noteTitle": "从生成答案，走向可检验的工作流。",
  "noteZh": "本期按北京时间11月3日10:35至11月4日10:35的近24小时窗口检索，选取六篇11月3日发布的官方原文。来源均未披露精确发布时间与时区，小时级窗口归属未完全确认。事实是实体设计、化学、天气预测、制造及模型路由都有新的实践记录，安全研究也在检验评测与实际使用的差距。我们的编辑判断是：更快生成方案之后，制造审查、实验验证、观测质量和每个成功任务的真实成本，仍决定成果能否可靠落地。",
  "noteEn": "We searched the November 3, 10:35 to November 4, 10:35 Beijing-time window and selected six official articles dated November 3. None states an exact publication time and time zone, so inclusion within the hourly boundary is not fully confirmed. The reports document work in physical design, chemistry, forecasting, manufacturing and model routing, alongside research on evaluation-to-deployment gaps. Our editorial view: faster proposals still depend on manufacturing review, laboratory validation, observation quality and cost per successful task before they become reliable results.",
  "stories": [
    {
      "index": "01",
      "label": "实体工程 / Physical engineering",
      "source": "OpenAI",
      "date": "2026.11.03 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "OpenAI 展示实体工程进展，宣布与马自达开展研究合作",
      "enTitle": "OpenAI details physical-engineering progress and a Mazda research collaboration",
      "zh": "OpenAI 展示模型在机械设计、电路板、软件集成与仿真中的应用，并宣布与马自达研究空气动力学和碰撞安全工作流。其设备案例由两名成员利用 Astra 在不到一周内完成设计，但达到制造要求仍需多轮审查；模型对生产限制、公差和装配细节的处理尚不稳定。",
      "en": "OpenAI presented uses across mechanical design, circuit boards, software integration and simulation, plus research with Mazda on aerodynamics and crash safety. Two members designed a test device with Astra in under a week. Manufacturing readiness still required repeated review, with inconsistent handling of production limits, tolerances and assembly details.",
      "href": "https://openai.com/index/accelerating-engineering-for-the-physical-world/"
    },
    {
      "index": "02",
      "label": "智能体安全 / Agent safety",
      "source": "OpenAI Alignment",
      "date": "2026.11.03 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "OpenAI 研究发现安全评测与实际部署行为存在差距",
      "enTitle": "OpenAI finds a gap between agent safety evaluations and deployment behavior",
      "zh": "研究比较六款模型，发现其在“遵守警告”安全评测中的成功率均低于匹配的生产场景，差距为10.2至37.4个百分点。干预实验提示，对评测目标的理解会影响行为。作者强调，场景匹配只是近似，样本并不代表所有部署环境，不能由此推断模型普遍安全。",
      "en": "Across six models, success on a warning-respect safety evaluation was lower than on matched production decisions, by 10.2–37.4 percentage points. Interventions indicate that interpretations of evaluation objectives can affect behavior. Matching is approximate and sampled contexts do not represent every deployment setting; the results do not establish general safety.",
      "href": "https://alignment.openai.com/eval-production-behavior-gap/"
    },
    {
      "index": "03",
      "label": "科学工作流 / Scientific workflows",
      "source": "Google DeepMind",
      "date": "2026.11.03 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Google Antigravity 新增化学信息学技能，辅助药物设计研究",
      "enTitle": "Google Antigravity adds cheminformatics skills for drug-design research",
      "zh": "新技能结合 RDKit、ChEMBL 和 PubChem，让智能体检索化合物、开展匹配分子对分析，并提出候选结构及合成路线。官方演示约一小时完成一轮工作流。DeepMind 强调，计算设计仍是待检验的假设，每个方案都须经过合成与实验验证；本刊未独立复现实验。",
      "en": "The skills combine RDKit with ChEMBL and PubChem resources for compound retrieval, matched molecular pair analysis and proposed structures and synthesis routes. Google demonstrates a workflow taking about an hour. Computational designs remain hypotheses requiring synthesis and experimental validation. TUJL has not independently reproduced the demonstration.",
      "href": "https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/"
    },
    {
      "index": "04",
      "label": "天气预测 / Weather forecasting",
      "source": "ECMWF · AI-DOP Team",
      "date": "2026.11.03 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "ECMWF 将直接观测驱动的 AI 天气预报接入实时数据",
      "enTitle": "ECMWF connects observation-driven AI forecasting to live data",
      "zh": "ECMWF 披露 AI-DOP 实时原型，可在最新观测到达后数分钟生成预报，无需实时大气分析作为初始化输入。系统利用过去30小时观测建立初始状态，每天并行运行约100公里和30公里分辨率版本。目前仅使用部分观测类型，数据质量和仪器缺失仍是挑战，尚属实验系统。",
      "en": "ECMWF described an AI-DOP prototype producing forecasts within minutes of incoming observations, without a real-time atmospheric analysis for initialization. It uses 30 hours of observations and runs roughly 100-km and 30-km versions daily. The experimental system uses only part of the available observations and still faces data-quality and missing-instrument challenges.",
      "href": "https://www.ecmwf.int/en/about/media-centre/aifs-blog/2026/observations-forecasts-bringing-ai-dop-real-time"
    },
    {
      "index": "05",
      "label": "成本与路由 / Cost and routing",
      "source": "Google Developers Blog",
      "date": "2026.11.03 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Google 用小规模实验检验模型路由与成功任务成本",
      "enTitle": "Google examines model routing through cost per successful task",
      "zh": "Google 分享50题编码任务实验，建议先建立低思考档位基线，再测试轻量分类器能否有效分配难题。实验中的路由方案和低思考基线均答对50题，但每种配置仅测试一次。跨模型切换还可能损失上下文缓存收益；文章用 Jev 作示例，并明确不构成商业背书。",
      "en": "A Google article tests routing on 50 coding tasks, recommending a low-thinking baseline before evaluating a lightweight classifier for harder work. Both its routing setup and low-thinking baseline solved all 50, with only one run per configuration. Model switching can weaken context-caching benefits. Jev is an example, not a commercial endorsement.",
      "href": "https://developers.googleblog.com/cost-per-task-using-cheap-classifiers-to-route-across-gemini-models-and-thinking-levels/"
    },
    {
      "index": "06",
      "label": "半导体制造 / Semiconductor manufacturing",
      "source": "NVIDIA Blog",
      "date": "2026.11.03 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "NVIDIA 梳理晶圆厂中的加速仿真、物理模型与工程智能体",
      "enTitle": "NVIDIA outlines fab workflows spanning simulation, physics models and agents",
      "zh": "NVIDIA 汇总半导体制造案例，称应用材料 ACE+ 的特定形貌仿真最高加速35倍，Advantest 的模型选择响应从数小时缩至数分钟。文章覆盖仿真、物理预测及代理辅助决策，属于厂商案例综述；特定工作负载的最高加速值，不能等同于整座工厂的效率提升。",
      "en": "NVIDIA summarized semiconductor examples, reporting up to 35-fold acceleration for certain Applied Materials ACE+ topography simulations and hours-to-minutes model-selection responses at Advantest. The overview spans simulation, physics prediction and agent assistance. These vendor-reported workload results do not measure productivity gains across an entire factory.",
      "href": "https://blogs.nvidia.com/blog/ai-semiconductor-fabs/"
    }
  ]
};

export const issue061: Issue = {
  "number": "061",
  "date": "2026-11-03",
  "readingTime": "约 4 分钟",
  "heading": "从模型能力，走向真正用起来",
  "noteTitle": "计划、工具与成果，要分别记录。",
  "noteZh": "本期按北京时间11月2日10:00至11月3日10:00的近24小时窗口检索，收录四项官方更新。ModelOpt版本发布时间已核实；其余三项仅标11月2日，未披露精确时间与时区，小时级窗口归属未完全确认，不以旧闻补数。事实是学习入口、部署工具、企业流程和底层互连都有新的公告。我们的编辑判断是：课程目标不等于学习成效，发布说明不等于实测，合作与并购计划也不等于成果已经落地。",
  "noteEn": "We searched the November 2, 10:00 to November 3, 10:00 Beijing-time window and retained four official updates. The ModelOpt release timestamp is verified; the other three sources give November 2 without an exact time or time zone, so hourly inclusion is not fully confirmed. We do not pad the issue with older news. These announcements concern learning access, deployment tooling, enterprise workflows and underlying interconnects. Our editorial view: targets are not outcomes, release notes are not independent tests, and partnerships or proposed acquisitions are not completed results.",
  "stories": [
    {
      "label": "学习入口 / Learning access",
      "source": "Google Africa Blog",
      "date": "2026.11.02 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Google 推出非洲 AI 学习平台，支持离线短课",
      "enTitle": "Google launches an AI learning hub for Africa with offline lessons",
      "zh": "Google 宣布 Skilling Africa with Google 于11月2日上线，汇集数字与AI技能课程，提供离线短课，并加入回答问题、建议学习步骤的 SCOUT 助手。公司提出到2030年帮助300万人学习的目标；这是计划规模，不是已完成成果。",
      "en": "Google says Skilling Africa with Google launched on November 2, combining digital and AI courses with downloadable short lessons and the SCOUT study assistant. Its goal is to equip three million people by 2030. That figure is a programme target, not an achieved outcome.",
      "href": "https://blog.google/intl/en-africa/unlocking-africas-ai-potential-introducing-skilling-africa-with-google/",
      "index": "01"
    },
    {
      "label": "部署工具 / Deployment tooling",
      "source": "NVIDIA · GitHub release",
      "date": "2026.11.02 18:57:53 北京时间 / Beijing time",
      "zhTitle": "NVIDIA ModelOpt 0.48.0 发布，扩展量化与导出工具",
      "enTitle": "NVIDIA ModelOpt 0.48.0 expands quantization and export tooling",
      "zh": "NVIDIA 发布 ModelOpt 0.48.0，新增多种 GGML 兼容量化格式与逐层校准导出能力，部分流程可从检查点续跑。升级同时将 Transformers 最低版本提高至5.5，不再支持4.x。以上为官方发布说明，本刊未独立测试性能或精度。",
      "en": "NVIDIA released ModelOpt 0.48.0 with additional GGML-compatible quantization formats and layerwise calibration/export workflows, including resumable checkpoints. It also raises the minimum Transformers version to 5.5 and drops 4.x support. These are documented release changes; TUJL has not independently tested performance or accuracy.",
      "href": "https://github.com/NVIDIA/Model-Optimizer/releases/tag/0.48.0",
      "index": "02"
    },
    {
      "label": "企业流程 / Enterprise workflows",
      "source": "ADNOC · 官方公告 / Official announcement",
      "date": "2026.11.02 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "ADNOC 与 OpenAI、G42 签署企业 AI 合作",
      "enTitle": "ADNOC signs an enterprise AI partnership with OpenAI and G42",
      "zh": "ADNOC 宣布与 OpenAI、G42 达成多年合作，拟以 OpenAI Frontier 连接油田规划及跨业务决策，部署于G42在阿联酋的基础设施。公告明确重大决策仍由人类专家监督。这是企业部署计划，不是面向公众的新模型发布；效率收益尚未获本刊独立验证。",
      "en": "ADNOC announced a multi-year partnership with OpenAI and G42 to connect field planning and cross-business decisions through OpenAI Frontier on G42 infrastructure in the UAE. Human experts will oversee consequential decisions. This is an enterprise deployment plan, not a public model launch; claimed efficiency gains remain unverified by TUJL.",
      "href": "https://www.adnoc.ae/media-center/news/2026/11/ADNOC-Signs-Landmark-Partnership-Agreement-with-OpenAI",
      "index": "03"
    },
    {
      "label": "基础设施 / Infrastructure",
      "source": "Marvell & Lumentum · 联合公告 / Joint announcement",
      "date": "2026.11.02 · 仅日期，时间/时区未披露 / date only",
      "zhTitle": "Marvell 拟收购 Lumentum，整合 AI 光电互连能力",
      "enTitle": "Marvell proposes acquiring Lumentum to combine AI interconnect capabilities",
      "zh": "两家公司宣布全股票收购协议，拟将 Marvell 的互连、交换及定制芯片能力与 Lumentum 的激光器、光收发器等技术结合。交易尚未完成，仍需股东及监管批准；2028年上半年完成是公司预期，不是确定时间。",
      "en": "The companies announced an all-stock acquisition agreement intended to combine Marvell’s interconnect, switching and custom-silicon capabilities with Lumentum’s lasers and optical transceivers. The deal is not completed and requires shareholder and regulatory approvals. Closing in the first half of 2028 is the companies’ expectation, not a certainty.",
      "href": "https://investor.lumentum.com/financial-news-releases/news-details/2026/Marvell-and-Lumentum-to-Combine-Creating-a-Category-Leader-in-AI-Connectivity/default.aspx",
      "index": "04"
    }
  ]
};

export const issue060: Issue = {
  "number": "060",
  "date": "2026-11-02",
  "readingTime": "约 3 分钟",
  "heading": "把能力接入工作流，也把控制权留给人",
  "noteTitle": "功能已列出，效果仍需要验证。",
  "noteZh": "本期关注北京时间11月1日10:00至11月2日10:10采编截止时的动态，只保留三项可追溯的官方更新，不以旧闻补足数量。两个GitHub版本的发布时间已核实；LongCat公告仅标11月2日，未披露时刻或时区，不能据此确认小时级窗口归属。事实是模型接口、交互方式与本地推理支持正在更新。我们的编辑判断是：接入真实工作流之后，任务成功率、失败交接与效率仍需分别验证。",
  "noteEn": "This edition covers developments from November 1 at 10:00 through our November 2, 10:10 Beijing-time editorial cutoff, retaining three traceable official updates rather than padding the count. Publication timestamps are verified for both GitHub releases. The LongCat notice gives November 2 but no time or time zone, so exact hourly inclusion is not confirmed. Model interfaces, interaction patterns and local inference support are changing. Our editorial view: task success, failure handoff and efficiency require separate validation in real workflows.",
  "stories": [
    {
      "index": "01",
      "label": "开发工具 / Developer tooling",
      "source": "QwenLM · GitHub release",
      "date": "2026.11.01 11:22:50 北京时间 / Beijing time",
      "zhTitle": "Qwen Code 默认启用生成式界面，并为自动修复增加人工接手机制",
      "enTitle": "Qwen Code enables Generated UI by default and adds a human handoff for failed fixes",
      "zh": "官方 v0.26.5 发布说明称，Generated UI 默认开启，用户可把交互卡片中的值附为后续对话上下文。/autofix-pr 新增重试预算：三次修复推送后检查仍失败，将交由人工处理，并报告阻塞原因。这些属于产品功能更新，不构成独立验证的效率提升。",
      "en": "The official v0.26.5 notes enable Generated UI by default and let users attach interactive card values to follow-up conversations. /autofix-pr now hands failed checks to a human after three fix pushes and reports blockers. These are documented product features, not independently verified productivity gains.",
      "href": "https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5"
    },
    {
      "index": "02",
      "label": "模型与工作流 / Models and workflows",
      "source": "美团 LongCat · 官方文档 / Official docs",
      "date": "2026.11.02 · 仅官方日期，时刻/时区未披露 / date only; time and zone unstated",
      "zhTitle": "美团上线 LongCat-2.5，主打多模态与长程智能体任务",
      "enTitle": "Meituan lists LongCat-2.5 as available for multimodal and long-horizon agent tasks",
      "zh": "官方更新日志宣布 LongCat-2.5 可用，称其结合视觉理解与智能体编程，面向视觉编码、创意设计、3D及复杂工程任务。现行视觉理解文档列出文字、图片和视频输入。长程任务能力及相关优势属于公司陈述，本次未独立测试；不将此前 Preview 版本的参数、价格或成绩套用到新版，也不把3D任务等同于原生3D输出。",
      "en": "The official changelog lists LongCat-2.5 as available, describing visual understanding combined with agentic coding for visual coding, creative design, 3D and complex engineering tasks. Current visual-understanding documentation specifies text, image and video inputs. Long-horizon capabilities and claimed advantages are company statements, not independently tested here. Earlier Preview specifications, prices and benchmark results are not assumed to apply, and 3D tasks do not establish native 3D output.",
      "href": "https://longcat.chat/platform/docs/ChangeLog.html"
    },
    {
      "index": "03",
      "label": "开发者简讯 / Developer brief",
      "source": "ggml-org · GitHub release",
      "date": "2026.11.01 15:41:33 北京时间 / Beijing time",
      "zhTitle": "llama.cpp 为 OpenCL 后端加入初始 IQ3 量化支持",
      "enTitle": "llama.cpp adds initial IQ3 quantization support to its OpenCL backend",
      "zh": "预发布版本 b12031 为 OpenCL 后端新增 IQ3_S、IQ3_XXS 的初始支持，并包含面向 Adreno 的矩阵运算及解码实现。这扩展了本地模型推理后端支持的量化格式；发布说明不足以支持统一的加速倍数或质量结论，本期未运行性能测试。",
      "en": "Pre-release b12031 adds initial OpenCL support for IQ3_S and IQ3_XXS, including Adreno-oriented matrix-operation and decoding implementations. It expands quantization-format support for local inference; the release does not establish a general speedup or quality claim. We did not run performance tests.",
      "href": "https://github.com/ggml-org/llama.cpp/releases/tag/b12031"
    }
  ]
};

export const issue059: Issue = {
  "number": "059",
  "date": "2026-11-01",
  "readingTime": "约 2 分钟",
  "heading": "小更新，也要分清发布与生效",
  "noteTitle": "少一点数量，多一点时间与范围的确定性。",
  "noteZh": "本期检索北京时间10月31日10:00至11月1日10:00的动态，仅收录一项10月31日的官方SDK更新，以及一个明确落在窗口内的计费生效节点，不用旧闻补足数量。SDK页面未明确展示时区，小时级归属未完全核实；DeepSeek文档未标注首次发布日期，故明确按生效节点记录。事实是接口类型与计费规则有了可核对的变化。我们的编辑判断是，开发者需要分别检查客户端支持、服务可用性和实际账单，而不是把它们当成同一项承诺。",
  "noteEn": "For the October 31, 10:00 to November 1, 10:00 Beijing-time window, we retain one October 31 SDK release and one explicitly timed billing milestone rather than padding the edition with older news. The SDK page does not explicitly show a time zone, so exact hourly inclusion is not fully verified. DeepSeek does not state the documentation’s original publication date; we record the effective milestone instead. The facts concern client types and billing rules. Our editorial view: client support, service availability and actual charges need separate checks.",
  "stories": [
    {
      "index": "01",
      "label": "开发工具 / Developer tooling",
      "source": "OpenAI · GitHub release",
      "date": "2026.10.31 · 日期已核实 / date verified",
      "zhTitle": "OpenAI Node SDK 增加带类型的 Responses WebSocket 预热支持",
      "enTitle": "OpenAI Node SDK adds typed Responses WebSocket warmup support",
      "zh": "官方 openai-node v7.47.0 发布说明列出一项新增功能：支持带类型的 Responses WebSocket 预热。它是客户端接口更新，不是新模型发布。该说明没有提供延迟改善数字，也不能据此推断所有账号的服务可用范围；本期未运行API性能测试。",
      "en": "The official openai-node v7.47.0 release lists typed support for Responses WebSocket warmup. This is a client-interface update, not a model launch. The release note provides no latency-improvement measurement and does not establish availability for every account. We did not run API performance tests.",
      "href": "https://github.com/openai/openai-node/releases/tag/v7.47.0"
    },
    {
      "index": "02",
      "label": "生效节点 / Effective milestone",
      "source": "DeepSeek · API documentation",
      "date": "生效 2026.11.01 00:00 北京时间；文档首发日期未披露 / effective time; publication date not stated",
      "zhTitle": "DeepSeek 代理端搜索调用到达免费安排结束的计划节点",
      "enTitle": "DeepSeek agent-side search calls reach their scheduled billing milestone",
      "zh": "官方文档规定，通过 DeepSeek Harness、Claude Code 或 Codex 触发的服务器端 Search 与 Fetch 调用，自北京时间11月1日00:00开始按请求计费。两类接口分别为每1000次成功请求0.75美元；需HTTP 200并产生结果，失败、空搜索结果与超时不计费。这里记录官方生效安排，不把它说成今日首次公告，也未用真实账单验证执行情况。",
      "en": "DeepSeek documentation schedules per-request billing for server-side Search and Fetch calls made through DeepSeek Harness, Claude Code or Codex from November 1 at 00:00 Beijing time. Each API lists $0.75 per 1,000 successful requests: HTTP 200 plus a result is required; failures, empty search results and timeouts are not billed. This is the documented effective milestone, not a newly published announcement. Actual billing enforcement has not been tested.",
      "href": "https://api-docs.deepseek.com/guides/search/"
    }
  ]
};

export const issue058: Issue = {
  "number": "058",
  "date": "2026-10-31",
  "readingTime": "约 5 分钟",
  "heading": "让 AI 进入系统，也让边界进入系统",
  "noteTitle": "一次响应、一个功能与可靠运行，不是同一件事。",
  "noteZh": "本期检索北京时间10月30日10:00至10月31日10:00的动态，选取五篇标注10月30日的官方材料。来源未全部提供精确发布时间与时区，因此小时级窗口归属未完全核实。事实是：网站内容偏好、轨道计算试验、科研仪器与云端工作流都在补充各自的接口。我们的编辑判断是，能接入只是开始；实施日期、实验条件、资源隔离与发布控制，决定这些能力能否被稳妥使用。",
  "noteEn": "We searched developments from October 30 at 10:00 to October 31 at 10:00 Beijing time and selected five official items dated October 30. Exact publication times and time zones are not available for every source, so hourly-window inclusion is not fully verified. Website preferences, orbital experiments, scientific instruments and cloud workflows are gaining new interfaces. Our editorial view: connection is only a starting point. Implementation timing, experimental conditions, resource isolation and release controls determine how responsibly these capabilities can be used.",
  "stories": [
    {
      "index": "01",
      "label": "内容使用 / Content preferences",
      "source": "OpenAI",
      "date": "2026.10.30 · 仅核实日期 / date only",
      "zhTitle": "OpenAI 将支持网站统一表达 AI 训练偏好",
      "enTitle": "OpenAI plans support for a shared AI-training preference signal",
      "zh": "OpenAI 宣布将尊重 robots.txt 中供多家参与者共同识别的训练偏好信号，减少网站逐个维护爬虫规则的负担。官方表示将在未来几个月实施，现有爬虫控制继续有效。这是自愿合作与实施计划，不是已经生效的统一强制标准，也不代表所有 AI 提供商都已支持。",
      "en": "OpenAI says it will honor a shared robots.txt signal for preferences about foundational generative AI training. Implementation is planned in the coming months, while existing crawler controls remain in place. This is a voluntary initiative and implementation plan, not an already-live universal requirement or evidence of adoption by every provider.",
      "href": "https://openai.com/index/helping-websites-express-ai-training-preferences/"
    },
    {
      "index": "02",
      "label": "轨道计算 / Orbital computing",
      "source": "Google Research",
      "date": "2026.10.30 · 仅核实日期 / date only",
      "zhTitle": "Suncatcher 原型卫星传回首次模型响应",
      "enTitle": "Suncatcher prototype satellite returns its first model response",
      "zh": "Google 报告，其10月1日发射的原型卫星已完成早期机器学习测试，并由轨道上的数据中心级 TPU 运行 Gemma 4，传回一段生成文本。接下来仍需测试热应力与辐射环境下的表现，双星互联是2027年目标。这是团队公布的初步实验，不是商业太空云已投入运营或成本优势已获证实。",
      "en": "Google reports that its prototype satellite, launched October 1, ran early machine-learning tests and returned generated text from Gemma 4 on a data-center-class TPU in orbit. Thermal and radiation testing remains ahead, with interconnected satellites targeted for 2027. This is a team-reported experiment, not an operating commercial space cloud or demonstrated cost advantage.",
      "href": "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/"
    },
    {
      "index": "03",
      "label": "科研仪器 / Scientific instruments",
      "source": "NVIDIA",
      "date": "2026.10.30 · 仅核实日期 / date only",
      "zhTitle": "Allen Telescope Array 将代理接入实时射电数据处理",
      "enTitle": "Allen Telescope Array connects agents to live radio-data processing",
      "zh": "NVIDIA 介绍 Breakthrough Listen 与 SETI Institute 在 Allen Telescope Array 使用 Holoscan、CyberEther 和 Nexus，把仪器状态、数据处理与代理操作连接起来。官方报告系统处理能力为每秒2.4太比特，并完成蟹状星云脉冲星实时 AI 检测。这里是厂商报道的系统成果，不是发现外星生命；更广泛的效率说法仍需独立验证。",
      "en": "NVIDIA describes how Breakthrough Listen and the SETI Institute use Holoscan, CyberEther and Nexus to connect instrument state, signal processing and agents at the Allen Telescope Array. The company reports 2.4-terabit-per-second processing and a real-time AI pulsar detection in the Crab Nebula. These are vendor-reported system results, not evidence of extraterrestrial life; broader efficiency claims need independent validation.",
      "href": "https://blogs.nvidia.com/blog/ai-joins-the-search-for-extraterrestrial-signals/"
    },
    {
      "index": "04",
      "label": "推理部署 / Inference deployment",
      "source": "AWS",
      "date": "2026.10.30 · 仅核实日期 / date only",
      "zhTitle": "SageMaker AI 用 GPU 分区承载多个推理模型",
      "enTitle": "SageMaker AI adds GPU partitioning for multiple inference models",
      "zh": "AWS 宣布 SageMaker AI 实时端点支持 NVIDIA MIG，把一块 GPU 划成最多七个具有独立计算与内存的分区，让小中型模型共享加速器。公告列出 P4d、P5、G7、G7e 及七个支持区域。分区数量与可用性应按具体实例配置核对；硬件隔离和利用率目标不等于所有工作负载都会获得相同节省。",
      "en": "AWS announced NVIDIA MIG-based GPU partitioning for SageMaker AI real-time endpoints, with up to seven isolated compute-and-memory partitions per GPU. It lists P4d, P5, G7 and G7e instances across seven regions. Exact partition configurations and availability depend on the instance. Hardware isolation and utilization goals do not establish equal savings for every workload.",
      "href": "https://aws.amazon.com/about-aws/whats-new/2026/10/sagemaker-gpu-partitioning/"
    },
    {
      "index": "05",
      "label": "工作流发布 / Workflow releases",
      "source": "AWS",
      "date": "2026.10.30 · 仅核实日期 / date only",
      "zhTitle": "Amazon Connect 为客服流程增加不可变版本与别名",
      "enTitle": "Amazon Connect adds immutable flow versions and aliases",
      "zh": "AWS 宣布 Amazon Connect Customer 的流程与流程模块支持不可变版本和别名。团队可先验证新版本，再把生产别名指向它，而不必逐个重新连接电话号码等资源。该更新服务于客服工作流的发布管理，不是新的模型能力，也不能替代上线前测试；官方称已覆盖该服务提供的全部区域。",
      "en": "AWS added immutable versions and aliases for Amazon Connect Customer flows and flow modules. Teams can test a new version before repointing a production alias, rather than relinking each resource. This is release management for customer-service workflows, not a new model capability or a replacement for pre-release testing. AWS lists availability in all regions where the service is offered.",
      "href": "https://aws.amazon.com/about-aws/whats-new/2026/10/connect-flows-versioning-aliasing/"
    }
  ]
};

export const issue057: Issue = {
  "number": "057",
  "date": "2026-10-30",
  "readingTime": "约 5 分钟",
  "heading": "从能做什么，到如何可靠地做",
  "noteTitle": "能力、行为与基础设施，是三张不同的成绩单。",
  "noteZh": "本期检索北京时间10月29日10:00至10月30日10:00的动态，选取五篇标注10月29日的官方材料；来源未全部提供精确时刻，小时级窗口归属未完全核实。事实是：文件编辑能力、模型行为指导、商务数据合作与能源调查同时推进。我们的编辑判断是，功能更丰富并不自动带来更可靠的结果；产品可用范围、评估条件和基础设施承载力，需要分别核对。",
  "noteEn": "We searched developments from October 29 at 10:00 to October 30 at 10:00 Beijing time, selecting five official items dated October 29. Exact timestamps are not available for every source, so hourly-window inclusion is not fully verified. File editing, model-behavior guidance, commerce partnerships and an energy survey address different needs. Our editorial view: more features do not automatically mean more reliable outcomes. Availability, evaluation conditions and infrastructure capacity each require separate checks.",
  "stories": [
    {
      "index": "01",
      "label": "行为规范 / Model behavior",
      "source": "OpenAI",
      "date": "2026.10.29 · 仅核实日期 / date only",
      "zhTitle": "OpenAI 更新 Model Spec：把行为要求组织成五项核心价值",
      "enTitle": "OpenAI reorganizes its Model Spec around five core values",
      "zh": "OpenAI 发布新版 Model Spec，以忠实于人的意图、减少伤害、诚实透明、人的自主性与关怀组织模型行为指导，并补充上下文、监督与代理行为要求。这是一份公开的行为目标与训练指导，不是模型已经在所有场景符合要求的证明，也不是新模型发布。",
      "en": "OpenAI revised its public Model Spec around five values and added guidance on context, oversight and agency. The document describes intended behavior and training guidance, not proof that deployed models satisfy every requirement in every situation, and is not a new model release.",
      "href": "https://openai.com/index/updated-model-spec/"
    },
    {
      "index": "02",
      "label": "文件工作流 / File workflows",
      "source": "Google",
      "date": "2026.10.29 · 仅核实日期 / date only",
      "zhTitle": "Gemini 将文件预览和直接编辑带进对话",
      "enTitle": "Gemini adds in-chat file previews and direct editing",
      "zh": "Google 宣布可在 Gemini 对话里生成、预览和编辑文件，既能直接改文字，也能选中内容要求 AI 修改。PDF 预览与编辑支持网页及移动端，文档、表格、演示和代码等其他格式限网页端。官方称向 Gemini 可用地区与语言的所有用户开放；这里记录厂商公布的范围，未逐地区实测。",
      "en": "Google announced file generation, previews and direct edits inside Gemini chats. Users can edit text themselves or select content for AI-assisted revisions. PDF preview and editing work on web and mobile; other listed formats, including documents, spreadsheets, slides and code, are web-only. Google says availability covers all users in supported languages and regions; we have not tested every rollout.",
      "href": "https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/"
    },
    {
      "index": "03",
      "label": "模型更新 / Model update",
      "source": "OpenAI Deployment Safety Hub",
      "date": "2026.10.29 · 仅核实日期 / date only",
      "zhTitle": "GPT-6 Luna 更新强调更简洁、减少过度附和",
      "enTitle": "GPT-6 Luna update targets concision and less over-agreeable language",
      "zh": "10月29日发布的系统卡补充说明称，GPT-6 Luna 更新旨在缩短回答并减少过度附和，同时公布厂商内部评估。应把行为目标和具体评测分开看：部分指标改善不等于全面进步。原链接路径仍含10月28日，但本次读取的正文标题与发布日期均为10月29日；我们采用正文日期。",
      "en": "The system-card addendum published October 29 describes a Luna update intended to make responses more concise and less overly agreeable, with company-run evaluations. Behavioral goals and measured results should be read separately: gains on selected tests do not imply universal improvement. The URL retains October 28, while the retrieved title and publication date say October 29; this edition follows the document date.",
      "href": "https://deploymentsafety.openai.com/gpt-6-luna-october-28-2026-addendum"
    },
    {
      "index": "04",
      "label": "代理商务 / Agentic commerce",
      "source": "Google Cloud · NIQ",
      "date": "2026.10.29 · 仅核实日期 / date only",
      "zhTitle": "NIQ 与 Google 计划用商品和门店数据改善代理购物",
      "enTitle": "NIQ and Google plan to connect commerce data with agentic shopping",
      "zh": "双方宣布合作，把 NIQ 的商品与门店情报接入 Google 的 AI 商务生态，并扩展 Google Cloud 与 Gemini for business 的企业使用。另一个方向是将 Meridian 营销组合建模框架集成到 NIQ Cadence。合作针对发现、库存可用性与效果衡量；具体里程碑还将公布，不能把目标写成已经实现的销售增长。",
      "en": "NIQ and Google announced a collaboration on product discovery, local availability and commerce measurement, alongside expanded enterprise use of Google Cloud and Gemini for business. NIQ also plans to integrate Meridian marketing-mix modeling into Cadence. Further milestones remain to be announced; intended improvements are not demonstrated sales gains.",
      "href": "https://www.googlecloudpresscorner.com/2026-10-29-NIQ-and-Google-Partner-to-Advance-Agentic-Commerce"
    },
    {
      "index": "05",
      "label": "基础设施 / Infrastructure",
      "source": "ADNOC · XRG · Microsoft",
      "date": "2026.10.29 · 仅核实日期 / date only",
      "zhTitle": "能源行业调查：代理应用扩展，供电信心仍有限",
      "enTitle": "Energy-sector survey finds wider agent use but limited infrastructure confidence",
      "zh": "Powering Possible 2026 公告称，调查覆盖近400位能源及金融高管，集成代理工作流的部署比例由15%升至33%。74%的受访者预计 AI 到2030年会增加能源消耗，52%相信现有基础设施能满足相关需求。这是企业支持的问卷调查，数字反映受访者报告与预期，不是独立测量的能耗或已兑现回报。",
      "en": "The Powering Possible 2026 announcement reports a survey of almost 400 energy and finance leaders. Reported deployment of integrated agent workflows rose from 15% to 33%; 74% expect AI to increase energy consumption by 2030, while 52% trust existing infrastructure to meet demand. These are responses and expectations from a company-backed survey, not independently measured energy use or realized returns.",
      "href": "https://www.adnoc.ae/media-center/news/2026/10/powering-possible-2026-investments-start-to"
    }
  ]
};

export const issue056: Issue = {
  "number": "056",
  "date": "2026-10-29",
  "readingTime": "约 6 分钟",
  "heading": "从接入工作，到验证能否放心使用",
  "noteTitle": "发布、研究计划和实验结果，需要分开读。",
  "noteZh": "本期检索北京时间10月28日10:00至10月29日10:00的 AI 动态，选取五篇标注10月28日的官方材料。各来源未全部提供精确发布时间，因此小时级窗口归属未完全核实。事实是：企业集成、开放语音模型、大学合作、代理评估和材料实验处于不同阶段。我们的编辑判断是，接入真实任务只是起点；可用性、独立评估与部署成本，仍需各自的证据，不能用合作公告替代效果验证。",
  "noteEn": "We searched AI developments from October 28 at 10:00 to October 29 at 10:00 Beijing time and selected five official items dated October 28. Exact publication times were not available for every source, so hourly-window inclusion is not fully verified. Enterprise integrations, speech models, university collaborations, agent evaluation and materials experiments are at different stages. Our editorial view: entering real workflows is a starting point. Availability, independent evaluation and deployment cost each require evidence; a partnership announcement does not establish effectiveness.",
  "stories": [
    {
      "index": "01",
      "label": "企业工作流 / Enterprise workflows",
      "source": "OpenAI",
      "date": "2026.10.28 · 仅核实日期 / date only",
      "zhTitle": "OpenAI 与 ServiceNow 扩展集成，并区分已上线与后续计划",
      "enTitle": "OpenAI and ServiceNow separate live integration from future plans",
      "zh": "双方宣布扩大合作，将 ServiceNow 业务上下文与工作流接入 ChatGPT，并规划 Codex、语音与安全能力。公告称 MCP 插件当日已可用，执行权限沿用客户配置；增强功能预计年底前推出，语音及其他集成分阶段安排在2027年。这是公司公布的可用性与路线图，不代表所有功能已经交付，也不是独立效率评测。",
      "en": "The expanded partnership connects ServiceNow context and workflows with ChatGPT and plans additional Codex, voice and security capabilities. OpenAI says the MCP plugin is available now under customer-configured permissions. Enhancements are expected by year-end, with other capabilities staged through 2027. This is a company availability statement and roadmap, not evidence that every feature has shipped or an independent productivity study.",
      "href": "https://openai.com/index/openai-servicenow-partnership-expansion/"
    },
    {
      "index": "02",
      "label": "开放语音 / Open speech models",
      "source": "NVIDIA",
      "date": "2026.10.28 · 仅核实日期 / date only",
      "zhTitle": "Nemotron 3.5 Transcribe 将转写、说话人标注与翻译放入同一模型",
      "enTitle": "Nemotron 3.5 Transcribe combines transcription, speaker labels and translation",
      "zh": "NVIDIA 发布可用自然语言提示的开放权重语音模型 Nemotron 3.5 Transcribe，官方称支持40种语言转写，并提供说话人标注、翻译及音频问答。权重当日发布，量化版本仍待推出。公告中的排行榜与效率数字属于厂商引用或自述，本期不据此认定通用领先；本地部署也不自动证明应用没有遥测或数据上传。",
      "en": "NVIDIA introduced the open-weight, promptable Nemotron 3.5 Transcribe model, reporting transcription in 40 languages plus speaker attribution, translation and audio questions. Weights are available; quantized versions are still forthcoming. Rankings and efficiency claims in the announcement are vendor-cited or vendor-reported, not proof of universal superiority. Local inference alone does not establish that an application has no telemetry or uploads.",
      "href": "https://blogs.nvidia.com/blog/local-ai-rtx-spark-laptops-updates-models-agents-games/"
    },
    {
      "index": "03",
      "label": "科研合作 / Research collaboration",
      "source": "Meta AI Research",
      "date": "2026.10.28 · 仅核实日期 / date only",
      "zhTitle": "Meta 支持五所大学检验 AI 在真实科研与临床任务中的表现",
      "enTitle": "Meta supports five universities studying AI in scientific and clinical tasks",
      "zh": "Meta 宣布向加州理工、俄亥俄州立、路易斯安那州立、印第安纳大学与 UTHealth Houston 的研究提供模型、协作或部分项目资助。方向包括数学验证、未公开实验记录上的反应预测，以及临床工作流评估。各项目进度不一，多数属于研究计划或早期测试；这不是已经证实的医疗效果，也不是当天发布了一款新模型。",
      "en": "Meta announced model access, collaboration or selected project funding for Caltech, Ohio State, LSU, Indiana University and UTHealth Houston. Projects span mathematical verification, reaction prediction from unpublished lab records and clinical workflow evaluation. Their maturity varies, with many at planning or preliminary-testing stages. The announcement does not establish clinical benefit or constitute a new model release that day.",
      "href": "https://research.meta.ai/blog/supporting-medical-scientific-research"
    },
    {
      "index": "04",
      "label": "独立评估 / Independent evaluation",
      "source": "UC San Diego",
      "date": "2026.10.28 · 仅核实日期 / date only",
      "zhTitle": "UC San Diego 成立代理智能中心，计划开发开放评估试验台",
      "enTitle": "UC San Diego launches an agentic-intelligence center with plans for an open testbed",
      "zh": "UC San Diego 宣布成立 Center for Principled Agentic Intelligence，连接数据科学、计算与人文学科，研究对齐、人的监督及独立评估。学校表示将提供三年100万美元支持，另有价值25万美元的共享计算资源；团队计划用开源试验台研究代理为何失败、是否遵守边界。这是中心成立与后续研发计划，试验台尚不能写成已交付成果。",
      "en": "UC San Diego launched the Center for Principled Agentic Intelligence across computing, data science and the humanities. The university reports $1 million over three years plus $250,000 in shared computing resources. A planned open-source testbed will examine agent failures, boundaries and auditability. This is a center launch and development plan, not an already-delivered evaluation platform.",
      "href": "https://today.ucsd.edu/story/uc-san-diego-launches-center-for-principled-agentic-intelligence"
    },
    {
      "index": "05",
      "label": "计算材料 / Computing materials",
      "source": "Brown University · Nature Materials",
      "date": "2026.10.28 · 大学报道日期 / university report date",
      "zhTitle": "超薄多铁材料实验为低功耗计算提供材料层面的线索",
      "enTitle": "Ultrathin multiferroic experiments offer a materials route toward lower-power computing",
      "zh": "Brown University 报道，研究团队通过应变与电场控制，使超薄铋铁氧体保留铁电和磁性特征，针对薄膜失去功能的“死层”问题提出工艺方案。大学注明成果发表于 Nature Materials；本期核实的是10月28日大学报道，未独立复现实验。这仍是材料研究，不能理解为低功耗 AI 芯片已量产或整机节能已获验证。",
      "en": "Brown reports that strain and electric-field control allow ultrathin bismuth-ferrite films to retain ferroelectric and magnetic properties, addressing the thin-film dead-layer problem. The university identifies a Nature Materials publication. This item is the October 28 university report; we have not independently replicated the experiments. A materials result is not a mass-produced AI chip or a verified system-level energy saving.",
      "href": "https://www.brown.edu/news/2026-10-28/multiferroic-dead-zone"
    }
  ]
};

export const issue055: Issue = {
  "number": "055",
  "date": "2026-10-28",
  "readingTime": "约 6 分钟",
  "heading": "让能力有边界，让使用有依据",
  "noteTitle": "不同成熟阶段，不用同一种语气。",
  "noteZh": "本期检索北京时间10月27日10:00至10月28日10:00的 AI 动态，保留五篇标注10月27日的官方材料。来源未提供完整精确时刻，小时级窗口归属未完全核实。事实是：研究预览、持续学习解读、企业控制、科研工具与课堂资源各有不同的开放范围和证据。我们的编辑判断是，能演示、能部署与已证实有效不能画等号；先看能力边界，再看如何使用，比把所有进展写成突破更有用。",
  "noteEn": "We searched AI developments from October 27 at 10:00 to October 28 at 10:00 Beijing time, retaining five official items dated October 27. Exact publication times were not fully provided, so hourly-window inclusion is not fully verified. These research previews, learning explainers, enterprise controls, research tools and classroom resources differ in access and evidence. Our editorial view: a demonstration, a deployment and proven effectiveness are not equivalent. Understanding limits before use is more useful than calling every update a breakthrough.",
  "stories": [
    {
      "index": "01",
      "label": "世界模型 / World models",
      "source": "Google DeepMind",
      "date": "2026.10.27 · 仅核实日期 / date only",
      "zhTitle": "Genie 4 为交互世界模拟加入原生音频",
      "enTitle": "Genie 4 adds native audio to interactive world simulation",
      "zh": "Google DeepMind 宣布 Genie 4 研究预览，可用文字实时调整模拟场景，并生成环境声音和对话。目前从可信测试者开始开放，更广泛开放仍待后续。官方承认长时一致性、物体持久性和复杂物理交互仍有限。这是研究预览与厂商演示，不是独立验证的通用物理模拟器。",
      "en": "Google DeepMind announced a Genie 4 research preview with text-guided scene changes and native sound. Access starts with trusted testers. The company identifies limitations in long-session consistency, object permanence and complex physical interactions. This is a research preview and vendor demonstration, not an independently validated general-purpose physics simulator.",
      "href": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
    },
    {
      "index": "02",
      "label": "持续学习 / Continual learning",
      "source": "Google Research",
      "date": "2026.10.27 · 仅核实日期 / date only",
      "zhTitle": "Google 解读 Sleep：把短期上下文巩固为参数记忆",
      "enTitle": "Google explains Sleep for consolidating model memories",
      "zh": "Google Research 发布研究解读，介绍交替进行输入处理与离线记忆巩固的框架，通过参数更新和合成练习保留知识。“睡眠”是训练机制的比喻，并非人的体验。本条是10月27日博客更新，不是当天新论文；链接的 arXiv 论文版本日期为7月10日，同行评审状态本次未核实，效果来自研究团队实验。",
      "en": "Google Research published an explainer on alternating active input processing with offline consolidation through parameter updates and synthetic practice. “Sleep” names a training mechanism, not human experience. This is an October 27 blog update, not a new paper that day: the linked arXiv version is dated July 10. Peer-review status was not verified; the results are researcher-reported experiments.",
      "href": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/"
    },
    {
      "index": "03",
      "label": "代理治理 / Agent controls",
      "source": "IBM",
      "date": "2026.10.27 · 仅核实日期 / date only",
      "zhTitle": "IBM 为企业代理补上身份、短期凭证与评估",
      "enTitle": "IBM adds identities, short-lived credentials and evaluation for agents",
      "zh": "IBM 在 TechXchange 公告 Agent Identity 与 Vault 2.2，强调代理归属、最小权限和可撤销的短期凭证，并扩展 watsonx Orchestrate 的跨平台管理。官方列明身份与评估能力已正式可用，代理发现与隔离仍为技术预览。这里记录产品状态与公司设计目标，不把安全性宣传当成独立验证结果。",
      "en": "At TechXchange, IBM announced Agent Identity and Vault 2.2, emphasizing ownership, least privilege and revocable short-lived credentials, alongside cross-platform Orchestrate management. IBM lists identity and evaluation capabilities as generally available, while agent discovery and containment remain technology previews. These are product-status announcements and vendor design goals, not independent security validation.",
      "href": "https://newsroom.ibm.com/2026-10-27-ibm-introduces-identity-and-control-for-ai-agents,-securing-frontier-intelligence-for-the-enterprise"
    },
    {
      "index": "04",
      "label": "科研工具 / Research tools",
      "source": "NVIDIA · C-BRAIN",
      "date": "2026.10.27 · 仅核实日期 / date only",
      "zhTitle": "C-BRAIN 用开源代理工具连接数据分析与文献核验",
      "enTitle": "C-BRAIN connects analysis and literature checks with open AI tools",
      "zh": "NVIDIA 介绍 C-BRAIN 使用 OpenScientist 和 InsightEngine 支持神经退行性疾病研究，辅助假设生成、数据分析及文献证据核对。项目结合集中式与联邦式数据架构。这是合作项目的进展介绍，工具并非当天才创建；效率提升属于项目方报告，不能据此推断临床疗效，也不构成医疗建议。",
      "en": "NVIDIA describes C-BRAIN’s use of OpenScientist and InsightEngine for hypothesis generation, analysis and literature checks in neurodegeneration research. Its data approach combines centralized and federated systems. This is a project update, not the tools’ first creation. Productivity gains are project claims, not demonstrated treatment benefits or medical advice.",
      "href": "https://blogs.nvidia.com/blog/open-source-ai-tools-cbrain-dementia/"
    },
    {
      "index": "05",
      "label": "AI 素养 / AI literacy",
      "source": "Microsoft · Cyberlite",
      "date": "2026.10.27 · 仅核实日期 / date only",
      "zhTitle": "微软与 Cyberlite 扩展 AI 课堂工具包",
      "enTitle": "Microsoft and Cyberlite expand their AI classroom toolkit",
      "zh": "微软与 Cyberlite 发布扩展版课堂资源，把批判性思考、来源核查和 AI 媒体素养加入情境教学。学生通过模拟案例练习判断生成内容和聊天机器人的回答，无需实际使用 AI 工具，教师也不必先具备 AI 专业知识。本条报道教育资源更新，其教学效果未经本刊独立验证。",
      "en": "Microsoft and Cyberlite expanded a classroom toolkit with scenario-based work on critical thinking, source verification and AI media literacy. Students practice evaluating generated content and chatbot answers without needing direct access to AI tools; teachers need no prior AI expertise. This is an educational resource update, not an independently verified effectiveness study.",
      "href": "https://blogs.microsoft.com/on-the-issues/2026/10/27/in-an-age-of-ai-deciding-what-to-trust-is-a-foundational-skill-heres-how-were-helping-educators-teach-it/"
    }
  ]
};

export const issue054: Issue = {
  "number": "054",
  "date": "2026-10-27",
  "readingTime": "约 6 分钟",
  "heading": "让结果可以被检查",
  "noteTitle": "速度之外，留下核验的路径。",
  "noteZh": "本期检索北京时间10月26日10:00至10月27日10:00的 AI 动态，保留五篇标注10月26日的官方材料；来源未全部提供精确时刻，因此小时级窗口归属未完全核实。事实是：这些更新分别涉及模型、科研、工程、文档与教育。我们的编辑观察是，结果如何被检查正变得重要：代码需要验证，研究需要外部审视，协作需要版本记录，教育需要人的判断。这不是一个共同实验得出的结论，也不把公司主张视为独立验证。",
  "noteEn": "We searched AI developments from October 26 at 10:00 to October 27 at 10:00 Beijing time, retaining five official items dated October 26. Exact publication times were not available for every source, so hourly-window inclusion is not fully verified. The updates cover models, research, engineering, documents and education. Our editorial reading is that checkability matters: code needs validation, research needs scrutiny, collaboration needs revision history and education needs human judgment. This is not a shared experimental finding, nor do vendor claims count as independent verification.",
  "stories": [
    {
      "index": "01",
      "label": "模型发布 / Model release",
      "source": "OpenAI",
      "date": "2026.10.26 · 仅核实日期 / date only",
      "zhTitle": "GPT-6.1 Terra 发布，侧重电脑操作与效率",
      "enTitle": "GPT-6.1 Terra focuses on computer use and efficiency",
      "zh": "OpenAI 发布 GPT-6.1 Terra，面向视觉理解、电脑操作和高频工作，并在 Work、Codex 与 API 提供。API 每百万 token 标价为输入 1 美元、缓存输入 0.05 美元、输出 5 美元。官方称标准价格较 GPT-5.6 Terra 与 GPT-6.1 Sol 低 50%；能力与速度比较属于公司自测，不代表所有实际任务。",
      "en": "OpenAI introduced GPT-6.1 Terra for visual understanding and computer-based work, available through Work, Codex and the API. Published API prices per million tokens are $1 for input, $0.05 for cached input and $5 for output. OpenAI says standard prices are 50% below GPT-5.6 Terra and GPT-6.1 Sol. Performance and speed comparisons are vendor evaluations, not guarantees for every workflow.",
      "href": "https://openai.com/index/introducing-gpt-6-1-terra/"
    },
    {
      "index": "02",
      "label": "科研核验 / Research scrutiny",
      "source": "OpenAI",
      "date": "2026.10.26 · 仅核实日期 / date only",
      "zhTitle": "OpenAI 公开研究材料，邀请学术界核验",
      "enTitle": "OpenAI shares research artifacts for academic scrutiny",
      "zh": "OpenAI 公告数学、计算机科学与物理领域的研究主张，并介绍外部学术核验安排。数学和 ETH 材料包含自然语言稿与 Lean 形式化；物理材料尚未公开。这些是待学界检验的研究材料，而非已形成共识的结论；本刊未运行证明。部分成果生成于更早日期，本条报道的是 10 月 26 日公开与合作安排。",
      "en": "OpenAI announced research claims across mathematics, complexity theory and physics, alongside academic review arrangements. Mathematics and ETH artifacts include natural-language manuscripts and Lean formalizations; physics artifacts are not yet public. These are research claims awaiting scrutiny, not established community consensus; we have not run the proofs. Some work was generated earlier: the news here is the October 26 disclosure and collaboration arrangements.",
      "href": "https://openai.com/index/building-scientific-understanding-with-academic-communities/"
    },
    {
      "index": "03",
      "label": "工程验证 / Engineering verification",
      "source": "Microsoft · Command Line",
      "date": "2026.10.26 · 仅核实日期 / date only",
      "zhTitle": "大规模 AI 改码，把验证放回中心",
      "enTitle": "Microsoft puts verification at the center of AI code modernization",
      "zh": "微软介绍结合代理、静态分析、测试与形式化方法的代码现代化流程，包括大型代码库迁移、C/C++ 到 Rust 改写和以明确规格约束改动。作者同时承认，AI 推导的规格能否表达真实意图仍是开放问题。这是企业工程经验介绍，不是独立验证的效果研究；文中的大规模工具链迁移不能解读成 Windows 已全部用 Rust 重写。",
      "en": "Microsoft described combining agents, static analysis, testing and formal methods for large codebase migrations and Rust modernization. Its account stresses validation and approved specifications, while acknowledging that inferred specifications may miss intended behavior. This is a company engineering account, not an independent effectiveness study; large toolchain migration examples do not mean Windows has been entirely rewritten in Rust.",
      "href": "https://commandline.microsoft.com/agentic-software-engineering-large-scale-code-migration-language-modernization-spec-driven-development/"
    },
    {
      "index": "04",
      "label": "协作文档 / Collaborative documents",
      "source": "Google Developers",
      "date": "2026.10.26 · 仅核实日期 / date only",
      "zhTitle": "Docs 与 Drive 原生支持 Markdown 协作",
      "enTitle": "Docs and Drive add native Markdown collaboration",
      "zh": "Google 宣布可在 Docs 直接编辑与协作 .md 文件，无需转换格式，并在 Drive 预览渲染结果。评论、版本历史与原始文本切换，为人与 AI 工具共同维护技术文档提供衔接。这里记录的是官方上线说明，尚未用实际账号测试；功能并不意味着代理自动取得 Drive 权限。",
      "en": "Google announced native .md editing and collaboration in Docs, plus rendered previews in Drive. Comments, version history and raw-text access can connect human review with AI-assisted documentation workflows. This reports the official availability announcement, not our own account test; it does not grant agents automatic access to Drive.",
      "href": "https://developers.googleblog.com/en/preview-edit-and-collaborate-on-markdown-md-files-natively-in-google-docs-and-drive/"
    },
    {
      "index": "05",
      "label": "AI 素养 / AI literacy",
      "source": "Google Research · Google Education",
      "date": "2026.10.26 · 仅核实日期 / date only",
      "zhTitle": "Polar Peaks 用互动任务训练 AI 判断力",
      "enTitle": "Polar Peaks teaches AI literacy through an interactive quest",
      "zh": "Google Research 与 Stanford Accelerator for Learning 推出第三个 AI Quests 任务 Polar Peaks，面向 11 至 14 岁学生。任务借脑神经元绘图场景练习数据清理和模型测试，强调人的监督与批判性思考。这是教育产品更新，不是新的脑科学发现；第三个任务的教师培训模块计划下月上线。",
      "en": "Google Research and Stanford Accelerator for Learning launched Polar Peaks, the third AI Quests activity, for ages 11–14. Its brain-mapping scenario teaches data cleaning, model testing and human oversight. This is an education release, not a new neuroscience finding. The teacher-training module for this third quest is planned for next month.",
      "href": "https://blog.google/products-and-platforms/products/education/ai-quests-polar-peaks/"
    }
  ]
};

export const issue053: Issue = {
  "number": "053",
  "date": "2026-10-26",
  "readingTime": "约 3 分钟",
  "heading": "看清任务，也看清分数代表什么",
  "noteTitle": "能力要放回具体条件里。",
  "noteZh": "本期检索北京时间10月25日10:00至10月26日10:00的AI动态，只保留两项可追溯更新，不用旧消息凑数。Nanbeige 的模型卡在10月25日更新，但权重已于24日上传；另一篇作者测试标注25日。模型卡最后更新为10月25日11:11:17 UTC，明确在窗口内；作者测试仅标日期，小时级窗口归属仍不确定。共同事实是，两项材料都给出了具体任务与评测条件。我们的判断是：代理任务分数不能证明全面领先，分类正确率也不能替代安全性；看清评测定义比只记住排行榜更重要。",
  "noteEn": "We searched AI developments from October 25 at 10:00 to October 26 at 10:00 Beijing time, retaining two traceable updates rather than filling space with old news. Nanbeige updated its model card on October 25 after uploading weights on October 24; the other author test is dated October 25. The model-card update is timestamped October 25 at 11:11:17 UTC, inside the window; the author test gives only a date, leaving its hourly inclusion uncertain. Both provide task-specific evaluation conditions. Our editorial view: agent scores do not establish universal leadership, and classification accuracy is not a substitute for safety. Evaluation definitions matter more than a leaderboard position.",
  "stories": [
    {
      "index": "01",
      "label": "开放模型 / Open models",
      "source": "Nanbeige LLM Lab · Hugging Face",
      "date": "2026.10.25 · 11:11:17 UTC · 模型卡更新",
      "zhTitle": "Nanbeige 补充33B教师模型的代理评测与部署说明",
      "enTitle": "Nanbeige details agent evaluations for its 33B teacher model",
      "zh": "官方模型卡介绍 Apache 2.0 许可的 Nanbeige4.3-33B，支持512K上下文，并计划作为后续小模型蒸馏的教师。10月25日提交记录补充评测与说明，权重则已在24日上传。团队自测在多项代理任务上表现较强，但并非所有基准均领先；结果依赖推理设置和执行框架，尚不能当作独立复现或普遍优势。",
      "en": "The official card describes Apache-2.0-licensed Nanbeige4.3-33B, supporting a 512K context and intended to teach future smaller models through distillation. October 25 commits updated evaluation details after October 24 weight uploads. Team-reported agent results are strong on several tasks, not every benchmark. They depend on inference settings and harnesses and are not independent replication or proof of universal superiority.",
      "href": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B"
    },
    {
      "index": "02",
      "label": "评测方法 / Evaluation methods",
      "source": "Dr Magnus Lynch · Lynch Lab",
      "date": "2026.10.25 · 仅核实日期 / date only",
      "zhTitle": "皮肤图像小样本测试区分分类准确率与分诊安全",
      "enTitle": "Small skin-image test separates accuracy from triage safety",
      "zh": "Magnus Lynch 公布200个活检确认皮损的作者测试：微调 Inception v3 的首选诊断正确125例，GPT-6 Astra 与 Claude Fable 5.1 分别为84、85例。但在预设阈值下，CNN 将30例黑色素瘤中的18例判为可结束诊疗，两个通用模型分别为3、4例；调整阈值会改变结果。这是单次、小样本、专门微调与通用模型的比较，非已确认同行评审的临床验证，也不构成就医建议。",
      "en": "Magnus Lynch reports an author-run test on 200 biopsy-confirmed lesions. Fine-tuned Inception v3 made 125 correct first diagnoses versus 84 and 85 for GPT-6 Astra and Claude Fable 5.1. Yet at its preset threshold, the CNN classified 18 of 30 melanomas as safe to discharge, versus three and four; threshold changes alter the result. This small, single-run comparison of specialized and general models is not established peer-reviewed clinical validation or medical advice.",
      "href": "https://lynchlab.net/llm-skin-cancer"
    }
  ]
};

export const issue052: Issue = {
  "number": "052",
  "date": "2026-10-25",
  "readingTime": "约 2 分钟",
  "heading": "记忆系统也需要交代证据的边界",
  "noteTitle": "少一点消息，多一点核实。",
  "noteZh": "本期检索北京时间10月24日10:00至10月25日10:00的AI动态。未找到足够可核实的重要新消息，因此只保留一篇10月24日发布的作者技术说明；来源仅标日期，无法确认其小时级发布时间是否完全落在窗口内。该软件此前已发布，本期不将旧版本包装为新发布。我们的判断是：可追溯引用、只读权限和评测限制，比孤立的分数更值得关注。",
  "noteEn": "We searched AI developments from October 24 at 10:00 to October 25 at 10:00 Beijing time. With too few verifiable important updates, this short edition retains one author-written technical explanation dated October 24. The source gives only a date, so its exact inclusion in the hourly window is unconfirmed. The software had already shipped; this is not presented as a new release. Our editorial view: traceable evidence, read-only permissions and evaluation limitations matter more than an isolated score.",
  "stories": [
    {
      "index": "01",
      "label": "智能体记忆 / Agent memory",
      "source": "Javad Taghia · Hugging Face community article",
      "date": "2026.10.24 · 仅核实日期 / date only",
      "zhTitle": "AtMem 作者解释只读证据发现，并说明自测结果的局限",
      "enTitle": "AtMem author explains read-only evidence discovery and self-test limits",
      "zh": "作者新文介绍已于10月23日发布的 AtMem 2.3.10：可选的只读发现路径让智能体在限定权限和预算内查询原始证据。文章报告测试候选版在600项 DolphinBench 任务中通过390项（65.0%），但明确没有匹配的旧版对照实验，不能据此证明版本提升或优于其他系统。这是作者自测及技术说明，不是 Hugging Face 官方评测或独立验证。",
      "en": "A new author article explains AtMem 2.3.10, released on October 23. Its optional read-only discovery path lets agents inspect original evidence within scoped permissions and budgets. The tested candidate passed 390 of 600 DolphinBench tasks (65.0%). Without a matched previous-version comparison, this does not demonstrate an improvement or superiority over other systems. These are author-reported results, not an official Hugging Face evaluation or independent verification.",
      "href": "https://huggingface.co/blog/javadtaghia/atmem-2310-bounded-evidence-discovery-for-persiste"
    }
  ]
};

export const issue051: Issue = {
  "number": "051",
  "date": "2026-10-24",
  "readingTime": "约 6 分钟",
  "heading": "让智能体持续工作，也让证据跟得上",
  "noteTitle": "自动运行不是自动可信。",
  "noteZh": "本期观察北京时间10月23日10:00至10月24日10:00的AI动态。四篇来源的精确发布时间落在窗口内；IBM公告仅标10月23日，小时级归属未确认。共同事实是，定时执行、研究辅助、场景模拟与运行时保护正在形成更具体的工作方式。我们的判断是：能持续运行、能生成可视化，并不等于结果可靠。投递成功不等于任务完成，精选演示不是独立评测，小样本研究也不能无限外推。",
  "noteEn": "This edition covers AI developments from October 23 at 10:00 to October 24 at 10:00 Beijing time. Four sources have verified timestamps inside the window; IBM provides only an October 23 date, leaving hourly inclusion unconfirmed. Scheduled execution, research support, scene simulation and runtime protection are becoming more concrete workflows. Our editorial view: persistent operation and convincing visuals do not establish reliability. Delivery is not task completion, curated demos are not independent evaluations, and small studies should not be overgeneralized.",
  "stories": [
    {
      "index": "01",
      "label": "智能体工具 / Agent tools",
      "source": "OpenAI",
      "date": "2026.10.23 · 21:24:34 UTC",
      "zhTitle": "Agents API 增加定时自动化，支持新建或续接会话",
      "enTitle": "Agents API adds scheduled automations for new or existing sessions",
      "zh": "OpenAI 开发者公告介绍定时自动化，可用 cron 周期执行或指定时间运行一次，也可让启用相关工具的智能体管理日程。官方文档强调，调用记录中的投递完成只表示会话接收了任务，并不表示工作完成；应用仍需追踪会话结果和通知。",
      "en": "OpenAI announced scheduled automations using cron or one-time timestamps, targeting new or existing sessions. Agents with the automations tool can manage schedules. The documentation distinguishes successful delivery from completed work: applications still need to inspect session outcomes and handle notifications.",
      "href": "https://community.openai.com/t/introducing-scheduled-automations-to-the-agents-api/1409223"
    },
    {
      "index": "02",
      "label": "研究工具 / Research tools",
      "source": "Ai2 · University of Pennsylvania",
      "date": "2026.10.23 · 16:15:50 UTC",
      "zhTitle": "LitPivot 用文献证据帮助研究者调整选题",
      "enTitle": "LitPivot grounds research-idea revisions in selected literature",
      "zh": "Ai2 新文介绍与宾夕法尼亚大学合作的 LitPivot，将研究构想拆为问题、贡献和评估方案，按正在修改的部分组织文献，并给出带出处的批评和修订建议。团队报告一项17人研究，其方案的文献支撑获专家更高评价。这是既有研究的新介绍，计划在 UIST 2026 展示，不是证明科研发现可以自动完成。",
      "en": "Ai2 described LitPivot, developed with the University of Pennsylvania. It organizes literature around a proposal’s problem, contribution and evaluation, offering source-backed critiques and revisions. A team-reported study with 17 researchers found better expert ratings for literature grounding. This is a new account of existing research scheduled for UIST 2026, not evidence of automated scientific discovery.",
      "href": "https://huggingface.co/blog/allenai/litpivot"
    },
    {
      "index": "03",
      "label": "世界模型 / World models",
      "source": "Mundo research team",
      "date": "2026.10.23 · 13:00:56 UTC",
      "zhTitle": "Mundo 将场景照片连接到三维代理与物理模拟",
      "enTitle": "Mundo connects scene photos to 3D proxies and simulation",
      "zh": "Mundo 团队公布研究演示：由场景图片构建三维代理，以代码记录物体与物理属性，再用模拟结果引导视频生成。作者同时指出，当前重建通常需10至20分钟，小物体交互可能出现幻觉，也没有长时记忆机制。本文是团队技术展示，未据此认定已通过同行评审或达到实时生产应用水平。",
      "en": "The Mundo team presented a pipeline that reconstructs a 3D proxy from scene images, stores objects and physical properties in code, and guides video generation with simulation. Reported limitations include typical reconstruction times of 10–20 minutes, small-object hallucinations and no long-horizon memory. This technical demonstration does not establish peer-review status or real-time production readiness.",
      "href": "https://huggingface.co/blog/Luo-Yihang/mundo-world-model"
    },
    {
      "index": "04",
      "label": "运行时保护 / Runtime protection",
      "source": "IBM · Intel",
      "date": "2026.10.23 · 仅核实日期 / date only",
      "zhTitle": "IBM 与 Intel 结合软件治理和机密计算",
      "enTitle": "IBM and Intel combine governance with confidential computing",
      "zh": "IBM 介绍与 Intel 的合作，将 Sovereign Core 的运行控制和治理与 Xeon 6 上的 Intel TDX 结合，为受支持工作负载提供硬件隔离与环境证明。公告未给出全面上线时间。机密计算不能替代访问管理，环境证明本身也不等于合规认证，应按具体威胁模型评估。",
      "en": "IBM described work with Intel combining Sovereign Core governance with Intel TDX on Xeon 6 for hardware-backed isolation and attestation of supported workloads. No general rollout date is stated. Confidential computing does not replace access management, and attestation alone does not establish compliance; suitability depends on the threat model.",
      "href": "https://www.ibm.com/new/announcements/protecting-ai-at-runtime-with-ibm-and-intel"
    },
    {
      "index": "05",
      "label": "创作观察 / Builder showcase",
      "source": "Google",
      "date": "2026.10.23 · 16:00:00 UTC",
      "zhTitle": "Google 展示 Gemini 4 Argon 的五个创作案例",
      "enTitle": "Google showcases five projects built with Gemini 4 Argon",
      "zh": "Google 发布五个社区项目案例，包括三维水上飞机、地理数据可视化、交互机械模型和多人浏览器游戏。这里的新信息是开发者作品展示，不是 Argon 当天发布。案例由厂商筛选，展示了创作可能性，但没有给出可复现的成功率、成本或独立性能结论。",
      "en": "Google highlighted five community projects, including a 3D seaplane, geographic-data visualization, interactive mechanical models and a multiplayer browser game. The new publication is a builder showcase, not a same-day Argon launch. These vendor-selected examples illustrate possibilities without reproducible success rates, costs or independent performance conclusions.",
      "href": "https://blog.google/products-and-platforms/products/gemini/gemini-4-argon-builders/"
    }
  ]
};

export const issue050: Issue = {
  "number": "050",
  "date": "2026-10-23",
  "readingTime": "约 6 分钟",
  "heading": "从模型训练，到日常工作的最后一段路",
  "noteTitle": "工具上线、应用案例与潜力估算，要分开看。",
  "noteZh": "本期检索北京时间10月22日10:00至10月23日10:00的AI动态，选取五篇标注10月22日的官方更新。两篇 Google 文章已核实精确发布时间；三篇 AWS 文章仅标日期，小时级窗口归属未完全确认。共同事实是，模型定制、语音输出、广告工作流与企业知识检索正在获得更具体的工具。我们的判断是，真正的进展需要同时看可用性、权限边界与实际效果；厂商和客户报告的收益不等于独立验证，研究中的潜力也不是已经兑现的成果。",
  "noteEn": "This edition searches AI developments from October 22 at 10:00 to October 23 at 10:00 Beijing time, selecting five official updates dated October 22. Exact publication timestamps were verified for the two Google articles; the three AWS articles provide dates only, so their hourly inclusion remains unconfirmed. The factual thread is more concrete tooling for model customization, speech, advertising workflows and corporate retrieval. Our editorial view: progress depends on availability, permission boundaries and measured results. Vendor and customer reports are not independent validation, and estimated potential is not realized benefit.",
  "stories": [
    {
      "label": "模型训练 / Training",
      "source": "AWS",
      "zhTitle": "SageMaker AI 正式推出托管训练会话",
      "enTitle": "SageMaker AI launches managed training sessions",
      "zh": "AWS 宣布 training sessions 正式可用：开发者可以编写后训练循环、自定义损失函数与奖励信号，平台负责 GPU 分配、分布式执行、故障恢复和检查点存储。它支持监督微调及多轮强化学习等流程，让训练逻辑与底层资源管理分开；实际质量仍需按具体任务评估。",
      "en": "AWS made training sessions generally available. Developers control post-training loops, custom losses and reward signals, while SageMaker AI manages GPU allocation, distributed execution, recovery and checkpoint storage. The service supports workflows including supervised fine-tuning and multi-turn reinforcement learning. Model quality still requires task-specific evaluation.",
      "href": "https://aws.amazon.com/blogs/machine-learning/announcing-new-ways-to-customize-models-with-sagemaker-ai-without-managing-gpus/",
      "index": "01",
      "date": "2026.10.22 · 仅核实日期 / date only"
    },
    {
      "label": "语音 AI / Speech",
      "source": "AWS",
      "zhTitle": "Polly 升级生成式语音引擎，新增 14 个声音",
      "enTitle": "Polly upgrades its Generative engine with 14 new voices",
      "zh": "Polly 的生成式引擎升级已正式可用，新增覆盖 9 个地区语言变体的 14 个声音，首次正式支持印地语和芬兰语的生成式语音。现有声音名称和 API 调用保持不变。更自然、更准确等质量描述来自 AWS，不能替代实际试听和业务验证。",
      "en": "Polly’s upgraded Generative engine is generally available, adding 14 voices across nine locales, including first-time generative Hindi and Finnish support. Existing voice names and API calls remain unchanged. Claims of more natural and accurate speech come from AWS and should be checked through listening tests and real workloads.",
      "href": "https://aws.amazon.com/blogs/machine-learning/amazon-polly-delivers-a-major-upgrade-to-its-generative-engine/",
      "index": "02",
      "date": "2026.10.22 · 仅核实日期 / date only"
    },
    {
      "label": "产品应用 / Products",
      "source": "Google",
      "zhTitle": "Gemini 进入广告媒体组合与洞察工作流",
      "enTitle": "Gemini supports advertising bundles and insight workflows",
      "zh": "Google 首期 Marketing Platform Drop 介绍了 Gemini 驱动的两项更新：Display & Video 360 Marketplace 提供个性化媒体组合，Search Ads 360 新首页汇总洞察并生成建议。这是官方产品介绍，文章没有提供这些功能带来收益提升的独立评测。",
      "en": "Google’s first Marketing Platform Drop describes two Gemini-powered updates: personalized media bundles in Display & Video 360 Marketplace and a new Search Ads 360 homepage that consolidates insights and generates suggestions. This is an official product update, without independent evidence of financial gains from the features.",
      "href": "https://blog.google/products/marketingplatform/360/google-marketing-platform-drop-october/",
      "index": "03",
      "date": "2026.10.22 · 13:00:00 UTC"
    },
    {
      "label": "应用案例 / Case study",
      "source": "AWS · IskayPet",
      "zhTitle": "IskayPet 分享跨语言企业知识助手的落地经验",
      "enTitle": "IskayPet shares its multilingual knowledge-assistant deployment",
      "zh": "AWS 与 IskayPet 发布企业知识助手案例，使用 Bedrock Managed Knowledge Bases 接入 SharePoint，面向三国、四种语言的员工，并按文档权限检索。案例自报，运行约两个月后，查找运营答案从 3–5 分钟缩短到约 7 秒。这是新发表的既有部署经验，并非当天上线，也不是独立效果审计。",
      "en": "AWS and IskayPet published a case study using Bedrock Managed Knowledge Bases with permission-aware SharePoint retrieval across three countries and four languages. After about two months, they report reducing operational-answer lookup from 3–5 minutes to roughly seven seconds. This is a newly published account of an existing deployment, not a same-day launch or independent audit.",
      "href": "https://aws.amazon.com/blogs/machine-learning/how-iskaypet-unified-corporate-knowledge-with-amazon-bedrock-managed-knowledge-bases/",
      "index": "04",
      "date": "2026.10.22 · 仅核实日期 / date only"
    },
    {
      "label": "行业研究 / Industry research",
      "source": "Tech Council of Australia · Google",
      "zhTitle": "澳大利亚中小企业 AI 研究：潜力不等于已经实现",
      "enTitle": "Australian SME AI study distinguishes potential from realized impact",
      "zh": "澳大利亚科技委员会发布中小企业 AI 应用研究，由 Delwood Advisory 分析，并获 Google、Employment Hero 和 Deputy 合作支持。研究估算未来五年扩大采用可能带来的生产力与经济价值。它属于行业支持的情景研究，不应将预测视为已经实现的收入，也不能直接外推到每一家企业。",
      "en": "Tech Council of Australia released SME AI-adoption research analyzed by Delwood Advisory and supported by Google, Employment Hero and Deputy. It estimates potential productivity and economic value from broader adoption over five years. This is an industry-supported scenario study, not evidence that projected income has already materialized or will apply to every business.",
      "href": "https://blog.google/intl/en-au/company-news/ai-could-add-93-billion-to-australian-small-businesses/",
      "index": "05",
      "date": "2026.10.22 · 12:11:00 UTC"
    }
  ]
};

export const issue049: Issue = {
  "number": "049",
  "date": "2026-10-22",
  "readingTime": "约 7 分钟",
  "heading": "模型走进工作，边界仍需看清",
  "noteTitle": "从检索、语音到数据库，能力在细分。",
  "noteZh": "本期观察北京时间10月21日10:00至10月22日10:00的AI更新。五篇官方文章的发布时间明确落在窗口内；OpenAI与Google Cloud的公告仅标注10月21日，无法严格确认小时级归属。共同事实是，平台入口、检索片段、语音理解与结构化预测正在向具体工作靠近。我们的判断是，这些进展值得关注，但受邀预览、正式可用与合作路线图不能混为一谈；厂商评测也不能代替实际任务验证。",
  "noteEn": "This edition covers AI updates from October 21 at 10:00 to October 22 at 10:00 Beijing time. Five official articles have publication timestamps within the window; the OpenAI–Google Cloud announcement provides only an October 21 date, so exact hourly inclusion remains unconfirmed. The shared factual thread is a move toward specific work: platform access, retrieval passages, speech understanding and structured-data prediction. Our editorial view: these developments matter, but invite-only previews, general availability and partnership roadmaps are different states. Vendor evaluations do not replace testing on real tasks.",
  "stories": [
    {
      "label": "平台合作 / Platform",
      "source": "OpenAI · Google Cloud",
      "date": "2026.10.21 · 仅核实日期 / date only",
      "zhTitle": "OpenAI 模型与 Codex 接入 Google Cloud，先开放受邀预览",
      "enTitle": "OpenAI models and Codex reach Google Cloud in invite-only preview",
      "zh": "OpenAI 与 Google Cloud 宣布合作，将前沿模型和 Codex 工作流引入 Model Garden。GPT-6 Astra、GPT-6.1 Sol 与 GPT-6 Luna 先向部分企业开放私有预览，仅限获批的开发和内部使用场景。后续可通过 Google Cloud Marketplace 采购并抵扣既有云消费承诺；全面开放计划在未来数周推出。",
      "en": "OpenAI and Google Cloud are bringing frontier models and Codex workflows to Model Garden. GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna begin with an invite-only enterprise preview for approved development and internal use. Marketplace purchasing will draw down existing Google Cloud commitments; OpenAI says general availability is planned in the coming weeks.",
      "href": "https://openai.com/index/openai-models-google-cloud/",
      "index": "01"
    },
    {
      "label": "模型更新 / Models",
      "source": "Cohere",
      "date": "2026.10.21 · 15:00:00 UTC",
      "zhTitle": "Cohere 发布 Rerank 5，把检索精度细化到文本片段",
      "enTitle": "Cohere Rerank 5 adds passage-level retrieval",
      "zh": "Rerank 5 推出 Pro 和 Fast 两档，并新增 Context Focus：一次调用即可同时返回文档相关性分数与关键文本片段，减少送入大模型的无关上下文。模型已正式可用，官方 API 价格为每百万 token 0.05 美元和 0.02 美元。性能提升来自 Cohere 自测，实际效果仍取决于任务。",
      "en": "Rerank 5 comes in Pro and Fast tiers with optional Context Focus, returning document scores and relevant passages in one call to reduce unnecessary LLM context. The models are generally available, with API prices of $0.05 and $0.02 per million tokens respectively. Reported benchmark gains are Cohere’s own evaluations, not guarantees for every workload.",
      "href": "https://cohere.com/blog/rerank-5",
      "index": "02"
    },
    {
      "label": "语音 AI / Speech",
      "source": "IBM Granite",
      "date": "2026.10.21 · 14:58:18 UTC",
      "zhTitle": "IBM 公布 Granite Speech 系列更新，强化多语种与会议转写",
      "enTitle": "IBM details Granite Speech updates for multilingual audio and meetings",
      "zh": "IBM 介绍新的 Granite Speech 5.0 2B 模型，以及 470M Turbo CTC 和 4.1 2B Plus 的更新。重点包括多语种转写与翻译、抗噪能力、最多 2,000 个关键词的定向识别，以及更准确的说话人标注和时间戳。2B 模型采用 Apache 2.0 许可；文中精度与速度数据为 IBM 报告的测试结果。",
      "en": "IBM detailed its Granite Speech 5.0 2B model and updates to 470M Turbo CTC and 4.1 2B Plus. Improvements target multilingual transcription and translation, noisy audio, keyword lists of up to 2,000 terms, and speaker attribution and timestamps. The 2B model uses Apache 2.0; accuracy and speed figures in the announcement are IBM-reported test results.",
      "href": "https://huggingface.co/blog/ibm-granite/granite-speech-5",
      "index": "03"
    },
    {
      "label": "结构化数据 / Data AI",
      "source": "NVIDIA",
      "date": "2026.10.21 · 18:26:30 UTC",
      "zhTitle": "NVIDIA Kumo Relational 直接从关联数据库进行预测",
      "enTitle": "NVIDIA Kumo Relational predicts directly from linked database tables",
      "zh": "Kumo Relational 可读取表间关系、时间信息和最多 10,000 个历史样本，在无需针对任务重新训练的情况下预测需求或客户流失。NVIDIA 报告了覆盖 15 个数据库、41 项任务的评测，但也指出，大型训练集上的专用模型仍可能更优。代码采用 Apache 2.0，权重则使用不同的 OpenMDW 1.1 许可。",
      "en": "Kumo Relational uses table relationships, timestamps and up to 10,000 historical examples to predict outcomes without task-specific training. NVIDIA reports evaluations across 41 tasks and 15 databases, while noting that specialized models may still win with very large training sets. Code is Apache 2.0, but weights use the separate OpenMDW 1.1 license.",
      "href": "https://huggingface.co/blog/nvidia/kumo-relational",
      "index": "04"
    },
    {
      "label": "产品应用 / Products",
      "source": "Google",
      "date": "2026.10.21 · 04:30:00 UTC",
      "zhTitle": "Gemini 为小企业推出品牌、营销与财务工作入口",
      "enTitle": "Gemini adds a small-business hub for branding, marketing and finances",
      "zh": "Google 宣布 Gemini 小企业专属入口，整合品牌视觉、营销、财务分析和应用连接。企业可保存品牌风格，生成一致的营销素材，并将表格、收据与采购记录转成图表或交互模型。新入口、相关技能和连接应用将在未来数日面向全球用户逐步推出，并非所有账户已即时获得。",
      "en": "Google announced a Gemini business hub combining brand visuals, marketing, financial analysis and connected apps. Owners can retain a brand style for consistent assets and turn spreadsheets, receipts and purchasing records into charts or interactive models. The landing page, skills and app connections begin rolling out globally over the coming days, rather than appearing immediately for every account.",
      "href": "https://blog.google/intl/en-in/products/new-gemini-tools-for-small-business-owners/",
      "index": "05"
    },
    {
      "label": "工程 AI / Engineering",
      "source": "Mistral",
      "date": "2026.10.21 · 12:00:20 UTC",
      "zhTitle": "Mistral 与 NVIDIA 将共建工程仿真及智能体评测",
      "enTitle": "Mistral and NVIDIA plan engineering simulation and agent benchmarks",
      "zh": "双方计划结合 Mistral Large 4 与 NVIDIA CUDA-X、Warp 和 Omniverse，连接工程设计、物理仿真和模型开发。同时将建设公开数据集与基准，评估智能体使用工程工具、完成多步骤任务的准确性、耗时与计算成本。这是合作路线图，不代表相关基准或完整产品已经发布。",
      "en": "Mistral and NVIDIA plan to combine Mistral Large 4 with CUDA-X, Warp and Omniverse for workflows linking engineering design, simulation and model development. They also intend to create open datasets and public benchmarks measuring engineering agents’ correctness, execution time and compute cost. This is a collaboration roadmap, not an announcement that all benchmarks or products are already available.",
      "href": "https://mistral.ai/news/mistral-nvidia-ai-for-industrial-engineering/",
      "index": "06"
    }
  ]
};

export const issue048: Issue = {
  "number": "048",
  "date": "2026-10-21",
  "readingTime": "约 7 分钟",
  "heading": "从推理引擎，到真实工作流",
  "noteTitle": "可用、可控，与仍待验证。",
  "noteZh": "本期检索北京时间10月20日10:00至10月21日10:00的AI动态，选取六项标注10月20日的官方更新。DeepInfer可核实的是初始提交时间，并非公开上线时刻；其余来源多仅标日期，严格小时级归属未全部确认。事实是：开放推理、端侧计算与面向具体工作的智能体同时推进。我们的判断是，判断进展不能只看能力名称，还要核对可用范围、隐私边界、上线阶段与测量条件。厂商案例不等于独立验证，计划中的功能也不等于已经可用。",
  "noteEn": "This edition searches AI developments from October 20 at 10:00 to October 21 at 10:00 Beijing time, selecting six official updates dated October 20. DeepInfer has a verifiable initial-commit time, not a public-launch timestamp; most other sources provide dates only, so exact hourly inclusion is not fully confirmed. Open inference, edge computing and task-specific agents are advancing together. Our editorial view: look beyond capability names to availability, privacy boundaries, rollout stages and measurement conditions. Vendor case studies are not independent validation, and announced plans are not features already available.",
  "stories": [
    {
      "label": "开源推理 / Open-source inference",
      "source": "DeepSeek · 官方 GitHub",
      "date": "2026.10.20 · 初始提交 / initial commit 04:09:42 UTC",
      "zhTitle": "DeepSeek 开源 DeepInfer，公开生产推理引擎核心",
      "enTitle": "DeepSeek opens the core of its DeepInfer inference engine",
      "zh": "DeepSeek 公开了支撑其生产服务的 DeepInfer，采用 Apache 2.0 许可，当前支持 DeepSeek-V4.1-Flash，以及 NVIDIA SM100 和华为昇腾 950。开源包提供离线推理、异步调度和结构化输出等能力，但并非完整在线服务，仍需另建 KV 缓存系统、分离式部署及负载均衡。",
      "en": "DeepSeek released DeepInfer under Apache 2.0, exposing the core engine behind its production services. It currently supports DeepSeek-V4.1-Flash on NVIDIA SM100 and Huawei Ascend 950. The package includes offline inference, asynchronous scheduling and structured outputs, but a complete online service still requires additional cache, disaggregated-deployment and load-balancing infrastructure.",
      "href": "https://github.com/deepseek-ai/DeepInfer",
      "index": "01"
    },
    {
      "label": "端侧 AI / Edge AI",
      "source": "Google Developers Blog",
      "date": "2026.10.20 · 仅核实日期 / date only",
      "zhTitle": "Google 完成 32 位 Coral NPU 架构，发布编译器 1.0",
      "enTitle": "Google completes 32-bit Coral NPU and releases compiler 1.0",
      "zh": "Google 发布完整的 32 位 Coral NPU 开源设计与基于 IREE/MLIR 的编译器 1.0，连接 JAX、PyTorch 和 TensorFlow 模型与端侧硬件。Synaptics 同步公布 SR200 芯片和 Coralboard SR；Coralboard SL 已进入全球正式供应。最高 1 TOPS 与约 10mW 推理平均功耗是架构配置和设计目标，不应解读为所有设备的实测表现。",
      "en": "Google released the complete 32-bit Coral NPU design and compiler 1.0, using IREE/MLIR to target edge hardware from JAX, PyTorch and TensorFlow. Synaptics announced SR200 silicon and Coralboard SR, while Coralboard SL reached worldwide general availability. The architecture’s up-to-1-TOPS configuration and roughly 10mW average-inference-power target are not universal measured device performance.",
      "href": "https://developers.googleblog.com/unifying-edge-ai-how-coral-npus-open-standard-brings-portable-energy-viable-intelligence-from-model-to-silicon/",
      "index": "02"
    },
    {
      "label": "生命科学 / Life sciences",
      "source": "OpenAI · 官方公告",
      "date": "2026.10.20 · 仅核实日期 / date only",
      "zhTitle": "OpenAI 收购 Orchestra Bio，扩展药物研发工作流",
      "enTitle": "OpenAI acquires Orchestra Bio to extend drug-development workflows",
      "zh": "OpenAI 宣布已收购 Orchestra Bio，并将其团队和技术与 Rosalind 生命科学工具结合。重点是让智能体协助跟踪研究、协调跨团队依赖和推进药物开发项目，而不只是回答科学问题。公告未披露交易金额或整合时间表，也没有证明新药上市速度或临床结果已得到改善。",
      "en": "OpenAI says it has acquired Orchestra Bio and will combine its team and technology with Rosalind. The focus is agent-assisted coordination of studies, dependencies and drug-development programs, beyond scientific question-answering. The announcement gives no acquisition price or integration timetable and does not establish improved clinical outcomes or faster drug approvals.",
      "href": "https://openai.com/index/openai-to-acquire-orchestra-bio/",
      "index": "03"
    },
    {
      "label": "产品与隐私 / Product and privacy",
      "source": "OpenAI · ChatGPT Release Notes",
      "date": "2026.10.20 · 仅核实日期 / date only",
      "zhTitle": "ChatGPT 开始推出 Locked Chats，但不等同端到端加密",
      "enTitle": "ChatGPT rolls out Locked Chats, without end-to-end encryption",
      "zh": "ChatGPT 开始分批推出 Locked Chats，可将指定对话移出常规历史、置顶和搜索，并通过四位 PIN 或受支持的设备认证打开。锁定不会改变数据保留或模型改进设置，也不会创建端到端加密保险库。重置 PIN 会永久删除此前仅受旧 PIN 保护的聊天及相关内容，使用前应注意这一限制。",
      "en": "ChatGPT is gradually adding Locked Chats, which hide selected conversations from ordinary history, pinned chats and search, with access protected by a four-digit PIN or supported device authentication. Locking does not change retention or model-improvement settings and does not provide end-to-end encryption. Resetting the PIN permanently deletes content protected only by the previous PIN.",
      "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "index": "04"
    },
    {
      "label": "实用智能体 / Practical agents",
      "source": "Yelp · Business Wire 官方新闻稿",
      "date": "2026.10.20 · 仅核实日期 / date only",
      "zhTitle": "Yelp 宣布 AI 代打电话查等位，分阶段推出消费与商家工具",
      "enTitle": "Yelp announces restaurant-calling AI and staged business-agent rollout",
      "zh": "Yelp 秋季更新宣布 Check for Me，可代用户致电餐厅查询等位并短信回复，计划未来数月在美国 iOS 的符合条件餐厅页面和助手中推出。Yelp Assistant 已加入 OpenTable 订位；商家用 Smart Lead Reply 计划下月推出，合资格商家每月 30 美元。上述工具的开放时间与适用范围并不相同。",
      "en": "Yelp announced Check for Me, an agent that calls restaurants about wait times and texts the answer. It is planned for eligible U.S. iOS restaurant pages and Yelp Assistant over the coming months. OpenTable reservations are already integrated. Smart Lead Reply is scheduled for next month at $30 monthly for eligible service businesses; the entire package is not universally available now.",
      "href": "https://www.businesswire.com/news/home/20261020237779/en/Yelp-Announces-More-Personalized-Yelp-Assistant-Agent-that-Checks-Restaurant-Wait-Times-and-AI-Tools-for-Service-Professionals",
      "index": "05"
    },
    {
      "label": "模型工程 / Model engineering",
      "source": "AWS 与 i14 · 技术案例",
      "date": "2026.10.20 · 仅核实日期 / date only",
      "zhTitle": "AWS 与 i14 展示固定状态的 Laplace 3B 推理方案",
      "enTitle": "AWS and i14 demonstrate fixed-state Laplace 3B inference",
      "zh": "AWS 与 i14 介绍了在 Trainium2 上使用原生 PyTorch 训练和部署线性注意力模型 Laplace 3B 的实现。每条序列的循环状态固定为 29.5MB，不随上下文增长；作者报告单实例、1,280 条并发序列下达到每秒 11,544 个输出 token。这是特定配置的厂商测试，固定状态会压缩历史，检索质量仍需按任务验证。",
      "en": "AWS and i14 documented training and serving the linear-attention Laplace 3B model on Trainium2 with native PyTorch. Its recurrent state stays at 29.5MB per sequence. The authors report 11,544 output tokens per second across 1,280 concurrent sequences on one instance. These are configuration-specific vendor results; compressed history still requires workload-level retrieval-quality testing.",
      "href": "https://aws.amazon.com/blogs/machine-learning/beyond-the-kv-cache-training-and-serving-i14s-laplace-3b-linear-attention-model-on-aws-trainium2-with-native-pytorch/",
      "index": "06"
    }
  ]
};

export const issue047: Issue = {
  "number": "047",
  "date": "2026-10-20",
  "readingTime": "约 7 分钟",
  "heading": "走向生产，先把边界说清楚",
  "noteTitle": "能力之外，还有兼容性、可控性与成本。",
  "noteZh": "本期检索北京时间10月19日10:00至10月20日10:00的AI动态，保留六篇官方标注10月19日的新公告或技术文章。来源未提供可核验的时分与时区，严格小时级归属仍无法逐条确认。事实是：旧代码迁移评测、智能体治理、结构化输出和推理优化分别推进。我们的判断是，应分清基准成绩、当前可用能力和后续路线图，再用自己的数据、权限边界和失败处理流程验证。",
  "noteEn": "This edition searches AI developments from October 19 at 10:00 to October 20 at 10:00 Beijing time, retaining six official announcements or technical articles dated October 19. Sources do not supply verifiable publication times and time zones, so exact hourly-window inclusion remains unconfirmed. The facts concern legacy-code benchmarks, agent governance, structured outputs and inference optimization. Our editorial view: separate benchmark results, capabilities available now and future roadmaps, then validate them against your own data, permission boundaries and failure-handling workflows.",
  "stories": [
    {
      "label": "BENCHMARK · 厂商评测",
      "source": "OpenAI",
      "zhTitle": "OpenAI 发布低资源编程语言评测，聚焦传统软件迁移",
      "enTitle": "OpenAI publishes benchmarks for low-resource programming languages",
      "zh": "OpenAI 发布 MultiLangBench，测试模型用20种语言构建 SQLite 兼容引擎，并公布 COBOL 迁移评测。公司报告，GPT-6 Astra 的 MultiLangBench 平均测试通过率为87.4%；GPT-6.1 Sol 在低推理强度下的 COBOL 迁移准确率为86.6%。结果属于厂商自评，生产迁移仍需专家审核和业务测试。",
      "en": "OpenAI introduced MultiLangBench, covering SQLite-compatible engines in 20 languages, alongside a COBOL migration evaluation. It reports an 87.4% average pass rate for GPT-6 Astra and 86.6% COBOL migration accuracy for GPT-6.1 Sol at low reasoning effort. These are vendor evaluations; production migrations still require expert review and business-specific testing.",
      "href": "https://openai.com/index/low-resource-programming-languages/",
      "index": "01",
      "date": "2026.10.19 · 仅核实日期 / date only"
    },
    {
      "label": "AGENT GOVERNANCE · 企业治理",
      "source": "Microsoft",
      "zhTitle": "微软阐述企业智能体的持续监督机制",
      "enTitle": "Microsoft details continuous oversight for enterprise agents",
      "zh": "微软介绍如何利用 Project Perception 管理企业内部智能体，通过身份、权限、运行环境及动态风险信号实施约束，并由 Guardian Agents 持续监督行为。此次重点是既有安全系统在内部智能体治理中的应用，不是 Project Perception 首次发布；本文未独立验证其实际效果。",
      "en": "Microsoft outlined how Project Perception can govern internal enterprise agents using identity, permissions, runtime controls and dynamic risk signals, with Guardian Agents supervising actions. The update applies an existing security system to internal-agent oversight rather than introducing Project Perception for the first time. TUJL has not independently tested its effectiveness.",
      "href": "https://blogs.microsoft.com/blog/2026/10/19/securing-the-agentic-insider/",
      "index": "02",
      "date": "2026.10.19 · 仅核实日期 / date only"
    },
    {
      "label": "STRUCTURED OUTPUT · 产品更新",
      "source": "AWS",
      "zhTitle": "Amazon Bedrock 扩展 Claude 结构化输出",
      "enTitle": "Amazon Bedrock expands structured outputs for Claude",
      "zh": "AWS 宣布，Bedrock 上的 Claude 模型可在模型可用的 bedrock-runtime 和 bedrock-mantle 端点使用结构化输出，包括 JSON Schema 格式和严格工具调用。开发者仍须处理拒答、输出截断及未被执行的部分 Schema 约束；格式合规不等于事实准确。",
      "en": "AWS announced structured outputs for Claude models on supported bedrock-runtime and bedrock-mantle endpoints, including JSON Schema formatting and strict tool use. Developers must still handle refusals, truncated responses and unsupported schema constraints. Valid structure does not guarantee factual correctness.",
      "href": "https://aws.amazon.com/blogs/machine-learning/structured-outputs-for-anthropic-claude-models-on-amazon-bedrock/",
      "index": "03",
      "date": "2026.10.19 · 仅核实日期 / date only"
    },
    {
      "label": "DEVELOPER ACCESS · 产品入口",
      "source": "AWS",
      "zhTitle": "SageMaker Studio 简化新用户注册与环境配置",
      "enTitle": "SageMaker Studio simplifies new-user onboarding",
      "zh": "AWS 为新账户提供简化的 SageMaker Studio 入口，可使用 Google、GitHub、Apple、Amazon 或邮箱注册，并自动配置工作环境。多数新客户无需信用卡，可获得100美元免费额度；免费期最长六个月，额度用尽或期限届满后资源使用停止。现有账户登录方式不变，具体资格以服务条款为准。",
      "en": "AWS introduced simplified SageMaker Studio onboarding for new accounts, with existing identity providers or email and automatic environment setup. Most new customers need no credit card and receive $100 in credits. Usage stops when credits run out or the six-month free period ends; existing-account sign-in is unchanged. Eligibility remains subject to service terms.",
      "href": "https://aws.amazon.com/blogs/machine-learning/developers-can-now-access-sagemaker-studio-through-the-new-aws-experience/",
      "index": "04",
      "date": "2026.10.19 · 仅核实日期 / date only"
    },
    {
      "label": "INFERENCE · 厂商联合案例",
      "source": "Deepgram / AWS",
      "zhTitle": "Deepgram 与 AWS 披露 Trainium2 批量语音推理优化",
      "enTitle": "Deepgram and AWS detail Trainium2 batch-speech optimization",
      "zh": "Deepgram 与 AWS 发布 Nova-3 在 Trainium2 上的离线批量推理案例，介绍内核优化和 Rust 并行运行时。双方报告，相比 Deepgram 原有计算方案，每美元处理音频量增加11%–70%。该结果受批量工作负载、配置和评测时价格影响，不代表实时语音任务的普遍收益，也不是当天才完成的迁移。",
      "en": "Deepgram and AWS published a Nova-3 offline-inference case study covering kernel optimization and a Rust parallel runtime on Trainium2. They report 11%–70% more audio processed per dollar than Deepgram’s previous compute options. Results depend on batch workloads, configuration and evaluation-time pricing; they should not be generalized to real-time speech or presented as a migration completed today.",
      "href": "https://aws.amazon.com/blogs/machine-learning/how-deepgram-optimized-voice-ai-at-scale-with-aws-trainium/",
      "index": "05",
      "date": "2026.10.19 · 仅核实日期 / date only"
    },
    {
      "label": "OPERATIONS · 当前能力与路线图",
      "source": "Motive",
      "zhTitle": "Motive 推出车队运营 Agents，更多自主能力仍在路线图上",
      "enTitle": "Motive launches fleet-operation Agents, with broader autonomy on its roadmap",
      "zh": "Motive 宣布 Agents 可供客户使用，团队可设置触发条件和动作，自动处理运营提醒与维护流程。官方产品博客将自然语言创建工作流、按目标自主规划及预制智能体库列为2027年初计划；语音智能体外呼也有后续推出安排，不能统一写成已经上线。节省成本等效果属于公司主张。",
      "en": "Motive announced customer availability of Agents for condition-and-action workflows across fleet alerts and maintenance. Its product blog places natural-language workflow creation, goal-led planning and a ready-made agent library in early 2027. Voice-agent outreach also has a later rollout; these roadmap features should not be described as available today. Cost-saving claims remain vendor-reported.",
      "href": "https://gomotive.com/blog/motive-launches-ai-agents/",
      "index": "06",
      "date": "2026.10.19 · 仅核实日期 / date only"
    }
  ]
};

export const issue046: Issue = {
  "number": "046",
  "date": "2026-10-19",
  "readingTime": "约 4 分钟",
  "heading": "运行、协作与兑现，都需要具体条件",
  "noteTitle": "周末少一点，也把边界留下。",
  "noteZh": "本期检索北京时间10月18日10:00至10月19日10:00的AI动态，保留三项来源标注10月18日的实质更新。部分来源只给发布日期，严格小时级归属仍无法逐条确认；没有把旧论文的新报道、重复发布或小补丁凑成新闻。事实是：推理软件更新、智能体工作空间整合与公益股权承诺分别发生。我们的判断是，值得追踪的不只是能力增加，还包括升级兼容性、权限与费用，以及承诺最终如何落实。",
  "noteEn": "This edition searches AI developments from October 18 at 10:00 to October 19 at 10:00 Beijing time, retaining three substantive updates dated October 18 by their primary sources. Some sources give only a publication date, so exact hourly-window inclusion remains unconfirmed. We do not fill space with new coverage of older papers, repeat releases or minor patches. The facts concern inference software, agent workspaces and a public-benefit equity commitment. Our editorial view: compatibility, permissions, costs and implementation deserve as much attention as added capability.",
  "stories": [
    {
      "index": "01",
      "label": "INFERENCE · 开源版本发布",
      "source": "vLLM · 官方 GitHub Releases",
      "date": "2026.10.18 · 发布日 / release date",
      "zhTitle": "vLLM 0.32.0 发布：扩大低精度缓存支持，同时调整兼容边界",
      "enTitle": "vLLM 0.32.0 expands low-precision caching and changes compatibility",
      "zh": "正式版本增加通用工具与推理解析器，扩展低精度KV缓存和多模态模型支持，并包含安全修复。升级同时停止支持Python 3.10、收紧默认CORS来源范围。发布说明中的吞吐提升来自特定模型、硬件与请求条件下的项目测试，不是普遍加速保证；部署前应核对兼容性和自己的负载。",
      "en": "The release adds generic tool and reasoning parsers, expands low-precision KV caching and multimodal model support, and includes security fixes. It also drops Python 3.10 and restricts default CORS origins. Throughput improvements in the notes come from project benchmarks with specific models, hardware and requests; they are not universal speedup guarantees. Compatibility and workload testing remain necessary.",
      "href": "https://github.com/vllm-project/vllm/releases/tag/v0.32.0"
    },
    {
      "index": "02",
      "label": "AGENTS · 厂商产品更新",
      "source": "endue · 官方发布说明",
      "date": "2026.10.18 · 仅核实日期 / date only",
      "zhTitle": "endue 整合智能体云电脑，并加入跨智能体任务协调",
      "enTitle": "endue integrates agent cloud computers and task coordination",
      "zh": "官方发布说明称，每个智能体可在独立Station中按需启动Linux和Chrome工作空间，空闲时停止、再次启动时保留文件；运行费用使用统一积分余额。新增的秘书入口负责分派与汇总任务，MCP调用可按智能体开放权限。这是服务方公布的功能，不是本刊完成的可靠性或安全性实测，持续运行仍受费用和授权条件约束。",
      "en": "The vendor says each agent can start Linux and Chrome workspaces inside its own Station, retaining files across idle shutdowns and charging a shared credit balance. A secretary coordinates delegated tasks, while MCP access can be enabled per agent. These are announced features, not reliability or security tests performed by TUJL; ongoing operation remains subject to costs and permissions.",
      "href": "https://endue.ai/releases/2026-10-18"
    },
    {
      "index": "03",
      "label": "PUBLIC BENEFIT · 待批准承诺",
      "source": "Anthropic · 官方公告",
      "date": "2026.10.18 · 仅核实日期 / date only",
      "zhTitle": "Anthropic 拟将5%股权投入新公益基金，仍待股东批准",
      "enTitle": "Anthropic proposes a 5% equity commitment to a new public-benefit fund",
      "zh": "Anthropic 宣布设立全资有限责任公司形式的Public Benefit Fund，初始5%股权投入需股东批准。公司称估值每较设定基线上升50%，董事会可酌情再增加2%；具体基线与治理安排将后续公布。公告列举向非营利机构捐助或特定群体直接分配等可能用途，但这不是已经发放的资金，也不应直接换算成已兑现的公益成果。",
      "en": "Anthropic announces a wholly owned LLC, the Public Benefit Fund, with an initial 5% equity commitment subject to stockholder approval. Its board may add 2% for each 50% increase in company value above a set baseline; the baseline and governance details are to follow. Possible uses include nonprofit grants or direct distributions. This is a conditional commitment, not money already distributed or a demonstrated social outcome.",
      "href": "https://www.anthropic.com/news/public-benefit-fund"
    }
  ]
};

export const issue045: Issue = {
  "number": "045",
  "date": "2026-10-18",
  "readingTime": "约 3 分钟",
  "heading": "模型、搜索与本地运行，各自向前一步",
  "noteTitle": "短一期，也把发布时间说清楚。",
  "noteZh": "本期检索截至北京时间10月18日10:56的最近24小时，保留三项官方标注10月17日的更新；来源只提供日期，无法逐条确认严格落在小时级窗口内。不将旧闻的转述时间当成新发布，也不为数量重复昨天的条目。事实是：模型更新、搜索接口开放与本地硬件上市分别推进。我们的判断是，实际使用仍须区分模型能力、信息来源与设备条件；厂商性能和过滤效果的主张尚不等于独立验证。",
  "noteEn": "We searched the 24 hours ending October 18 at 10:56 Beijing time and retained three updates officially dated October 17. Sources give dates rather than exact timestamps, so strict hourly-window inclusion cannot be confirmed. We do not treat a later recap as a new release or repeat yesterday’s items to fill space. Model updates, search access and local hardware availability are distinct developments. Our editorial view: practical use still depends on model capability, information provenance and device conditions; vendor performance and filtering claims are not independent validation.",
  "stories": [
    {
      "index": "01",
      "label": "MODEL · 厂商更新",
      "source": "DeepSeek · 官方更新日志",
      "date": "2026.10.17 · 仅核实日期 / date only",
      "zhTitle": "DeepSeek Flash 升级至1017版，API调用方式和价格不变",
      "enTitle": "DeepSeek Flash moves to 1017 with unchanged API calls and pricing",
      "zh": "官方宣布网页、应用与API更新至 DeepSeek-V4.1-Flash-1017，API继续使用 deepseek-flash。公司称新版改进编码、推理和视觉表现，并缩短任务耗时及输出；这些是厂商测试结论，本刊未独立复现，不能直接推定每项实际任务都会更快。",
      "en": "DeepSeek says its web, app and API now use V4.1-Flash-1017, retaining the deepseek-flash API name and pricing. Reported coding, reasoning and visual gains, shorter outputs and faster execution are vendor results, not independently reproduced here or guaranteed for every workload.",
      "href": "https://api-docs.deepseek.com/updates/?release=deepseek-coder#deepseek-v41-flash-1017-update"
    },
    {
      "index": "02",
      "label": "SEARCH · 新接口开放",
      "source": "DeepSeek · 官方更新日志与文档",
      "date": "2026.10.17 · 仅核实日期 / date only",
      "zhTitle": "DeepSeek 开放自研搜索接口，模型之外增加检索入口",
      "enTitle": "DeepSeek opens its in-house search API",
      "zh": "同日另一项公告开放自研搜索引擎的 Search 与 Fetch 使用入口，支持多语言网页检索。官方称系统会过滤SEO垃圾内容、GEO操纵及低质量AI生成内容；这是服务方对过滤机制的描述，不保证每个搜索结果或模型据此生成的回答都可靠。",
      "en": "A separate announcement opens Search and Fetch access to DeepSeek’s own multilingual web search. The provider describes filtering SEO spam, GEO manipulation and low-quality AI-generated content. That describes an intended mechanism, not a guarantee that every retrieved page or downstream answer is reliable.",
      "href": "https://api-docs.deepseek.com/updates/?release=deepseek-coder#opening-up-the-in-house-search-api"
    },
    {
      "index": "03",
      "label": "LOCAL AI · 上市公告",
      "source": "NVIDIA · 官方博客",
      "date": "2026.10.17 · 仅核实日期 / date only",
      "zhTitle": "RTX Spark笔记本开始上市，统一内存最高128GB",
      "enTitle": "RTX Spark laptops arrive with up to 128GB unified memory",
      "zh": "NVIDIA 宣布合作厂商的 RTX Spark Windows笔记本已开始上市，官方起价2399美元，配置最高128GB统一内存，结合 Grace CPU 与 Blackwell RTX GPU。公告同时提供本地AI运行资料。这里记录上市进展；价格、供货和配置因市场而异，硬件上限也不代表任意模型均可流畅运行。",
      "en": "NVIDIA announces availability of partner RTX Spark Windows laptops, starting at a stated US$2,399, with configurations up to 128GB unified memory combining Grace CPUs and Blackwell RTX GPUs. Local-AI resources accompany the launch. Prices, supply and configurations vary by market; maximum specifications do not guarantee smooth operation of every model.",
      "href": "https://blogs.nvidia.com/blog/local-ai-rtx-spark-windows-laptops-celebration/"
    }
  ]
};

export const issue044: Issue = {
  "number": "044",
  "date": "2026-10-17",
  "readingTime": "约 6 分钟",
  "heading": "开放之后，仍要核对边界",
  "noteTitle": "从能够获取，到知道如何使用。",
  "noteZh": "本期检索截至北京时间10月17日10:55的最近24小时，选取五项10月16日的一手发布或明确更新。来源多只注明日期，无法逐条确认严格落在小时级窗口内。事实层面，开放权重、数据生成流程、研究方法与服务使用说明都在增加。我们的判断是：真正可用的开放，需要同时看清许可、发布时间、验证范围和数据用途。即将发布、厂商研究与既有文章更新均分别标明，不以发布日期代替成熟度。",
  "noteEn": "This edition searches the 24 hours ending October 17 at 10:55 Beijing time and selects five primary announcements or explicit updates dated October 16. Most sources provide dates only, so exact inclusion in the hourly window cannot be confirmed for every item. More weights, data workflows, research methods and service explanations are becoming available. Our editorial view: useful openness requires clarity about licensing, availability, validation and data use. Planned releases, company research and updates to older articles are distinguished; a publication date is not a maturity assessment.",
  "stories": [
    {
      "index": "01",
      "label": "OPEN WEIGHTS · 权重上线",
      "source": "Reflection · 官方公告",
      "date": "2026.10.16 · 发布/明确更新日 / date only",
      "zhTitle": "Beam 开放权重与开发工具，进入可部署阶段",
      "enTitle": "Beam releases weights and developer tooling",
      "zh": "Reflection 于10月16日开放 Beam 的 Apache 2.0 权重、文档及部署集成，支持 BF16、FP8 与 NVFP4。官方介绍约5010亿总参数、每 token 激活230亿参数，面向编码、推理与长程智能体。模型此前已于10月5日介绍，本次新增的是可下载权重与工具生态；性能描述和演示属于厂商结果，不能替代独立测评。",
      "en": "Reflection released Beam weights under Apache 2.0 on October 16, together with documentation and deployment integrations in BF16, FP8 and NVFP4. The company describes about 501B total and 23B active parameters for coding, reasoning and long-horizon agents. Beam was introduced on October 5; this update concerns downloadable weights and tooling. Performance descriptions and demonstrations remain vendor results, not independent validation.",
      "href": "https://reflection.ai/blog/beam-is-available"
    },
    {
      "index": "02",
      "label": "RESEARCH · 公司研究报告",
      "source": "Anthropic · 官方研究",
      "date": "2026.10.16 · 发布/明确更新日 / date only",
      "zhTitle": "Claude 辅助追溯椭圆曲线种子来源，不是破解加密",
      "enTitle": "Claude helps trace curve-seed origins, not break encryption",
      "zh": "Anthropic 报告称，内部研究模型用不到半小时将五条常用 NIST 素数域曲线的种子追溯至以 Unix 时间戳初始化的 lrand48 输出。这里研究的是历史参数如何生成，而非破解签名或发现安全漏洞；官方明确表示用户无需采取行动。部分其他参数的来源仍未解决，本条是公司披露的研究结果，本刊未独立复现。",
      "en": "Anthropic reports that an internal research model traced seeds for five widely used NIST prime-field curves to lrand48 output initialized with Unix timestamps in under half an hour. This investigates parameter provenance; it is not a signature break or a discovered vulnerability, and the company says users need take no action. Some other parameter origins remain unresolved. This is company-reported research, not independently reproduced here.",
      "href": "https://www.anthropic.com/research/ecdsa-curve-origins"
    },
    {
      "index": "03",
      "label": "DATA · 数据集预告与开放流程",
      "source": "NVIDIA / AI4Bharat · 联合技术文章",
      "date": "2026.10.16 · 发布/明确更新日 / date only",
      "zhTitle": "印度语言预训练语料预告约2.8万亿 token，公开生成流程",
      "enTitle": "Indic pretraining corpus previews 2.8T tokens and an open recipe",
      "zh": "NVIDIA 与 IIT Madras 的 AI4Bharat 介绍约2.8万亿 token 的合成语料，覆盖22种印度语言，并公开翻译、评估与修复流程。文章仍将语料标为即将发布，不能写成已全面下载可用。计数使用 Gemma-4 tokenizer，含翻译及转写版本；自动质量检查不等于人工准确率，合成翻译也不能替代本土原创文本。",
      "en": "NVIDIA and IIT Madras’s AI4Bharat describe roughly 2.8T synthetic tokens across 22 Indian languages and share a translation, evaluation and repair workflow. The article says the corpus is releasing soon, rather than already fully downloadable. Counts use the Gemma-4 tokenizer and include translated and romanized variants. Automated quality scores are not human accuracy rates, and synthetic translation does not replace locally authored text.",
      "href": "https://huggingface.co/blog/nvidia/scaling-indic-pretraining"
    },
    {
      "index": "04",
      "label": "WEB · 持续行为检查",
      "source": "Cloudflare · 官方博客",
      "date": "2026.10.16 · 发布/明确更新日 / date only",
      "zhTitle": "已验证爬虫也要持续检查行为，公开评分仍在计划中",
      "enTitle": "Verified bots face ongoing behavior checks; public scores are planned",
      "zh": "Cloudflare 介绍对已验证机器人的持续行为检查，包括是否遵守 robots.txt，以及收到 HTTP 429 限流响应后是否减速。该机制已供内部使用；向 Radar 公开评分和让客户选择信任阈值仍属后续计划。对于 AI 爬虫，身份核验与持续遵守站点规则是两件事；公告并未证明所有爬虫已合规。",
      "en": "Cloudflare describes continuous checks of verified bots, including robots.txt compliance and whether crawlers slow down after HTTP 429 rate-limit responses. The mechanism is used internally; public Radar scores and customer-selected trust thresholds remain planned. For AI crawlers, identity verification and sustained respect for site rules are separate matters. The announcement does not establish universal crawler compliance.",
      "href": "https://blog.cloudflare.com/verified-bots-accountability/"
    },
    {
      "index": "05",
      "label": "PRIVACY · 原文明确更新",
      "source": "Google · 官方文章更新",
      "date": "2026.10.16 · 发布/明确更新日 / date only",
      "zhTitle": "Google 补充 Workspace 连接功能的数据使用说明",
      "enTitle": "Google clarifies data use for connected Workspace features",
      "zh": "Google 在2023年文章中加入10月16日更新：用户选择启用某些连接 Workspace 与其他 Google 服务的新功能后，相关数据可用于个性化；视设置而定，同一部分数据也可能用于生成式 AI 训练，少数情形涉及人工审核。这是带条件的官方说明更新，不能推断所有 Workspace 用户的数据都会用于训练，也不能当作新功能当日首次上线。",
      "en": "An October 16 update to Google’s 2023 article says that, when users opt into certain new features connecting Workspace apps to other Google services, relevant data can personalize experiences. Depending on settings, that subset may also train generative models and face limited human review. This is a conditional clarification, not evidence that all Workspace data is used for training or that the features first launched that day.",
      "href": "https://blog.google/innovation-and-ai/products/our-responsible-approach-to-building-guardrails-for-generative-ai/"
    }
  ]
};

export const issue043: Issue = {
  "number": "043",
  "date": "2026-10-16",
  "readingTime": "约 7 分钟",
  "heading": "开放能力，也开放验证的入口",
  "noteTitle": "能运行、能使用，还要能检查。",
  "noteZh": "本期检索截至北京时间10月16日10:14的最近24小时，选取六项10月15日的一手发布或明确更新。页面主要只标注日期，未确认每条均严格落在小时级窗口内。事实是：模型权重、语音入口、评估访问、数学研究支持和教育资源都在扩展。我们的判断是，能力的传播需要同时交代硬件、许可、开放范围与验证责任。厂商自测、逐步推出和未来承诺均单独标明，不把“开放”当作效果已证实。",
  "noteEn": "This edition searches the 24 hours ending October 16 at 10:14 Beijing time and selects six primary announcements or explicit updates dated October 15. Most pages provide dates only; exact inclusion in the hourly window is unconfirmed. Model weights, voice access, evaluation access, mathematics support and education resources are expanding. Our editorial view: wider access needs clear hardware, licensing, availability and validation boundaries. Vendor tests, rollouts and future commitments are labeled; openness is not proof of effectiveness.",
  "stories": [
    {
      "index": "01",
      "label": "OPEN WEIGHTS · 厂商发布",
      "source": "Meta · 官方研究博客",
      "date": "2026.10.15 · 仅核实发布/更新日 / date only",
      "zhTitle": "Meta 发布 Muse Spark Open，多模态权重面向本地与云端",
      "enTitle": "Meta releases Muse Spark Open for local and hosted use",
      "zh": "Meta 发布总参数8160亿、每 token 激活420亿参数、100万 token 上下文的多模态模型权重。官方展示通过 MLX 在两台各具512GB统一内存的 M5 Ultra Mac Studio 上运行。其“最强”定位和任务展示属于厂商主张与自测；权重使用 Muse Model License，含商业条款，不能直接等同于无条件开源或普通电脑可运行。",
      "en": "Meta released weights for a multimodal model with 816B total parameters, 42B active per token and a 1M-token context. Its desktop demonstration uses MLX on two M5 Ultra Mac Studios with 512GB unified memory each. Capability superlatives and demonstrations are vendor claims, not independent findings. The Muse Model License has commercial conditions; open weights do not imply unrestricted open source or ordinary-PC compatibility.",
      "href": "https://research.meta.ai/blog/muse-spark-open"
    },
    {
      "index": "02",
      "label": "LOCAL AI · 发布与预告",
      "source": "NVIDIA · 官方博客",
      "date": "2026.10.15 · 仅核实发布/更新日 / date only",
      "zhTitle": "Nemotron 3.5 新增 Super VL 与 Bolt，区分现货和后续发布",
      "enTitle": "Nemotron 3.5 adds Super VL and Bolt, with staged availability",
      "zh": "NVIDIA 发布1200亿参数的 Super VL，以及采用原生2位量化、面向24GB内存环境的 Bolt 74B-A9B；较小的 Bolt E4B 4GB 计划10月23日推出。系列分别面向文档视觉理解、工具调用和本地智能体。官方所述速度与精度优势依赖其测试条件，本刊未独立复测；模型可部署不代表任意设备或工作负载都达到相同性能。",
      "en": "NVIDIA released the 120B-parameter Super VL and Bolt 74B-A9B, using native 2-bit quantization to target a 24GB memory footprint. Bolt E4B 4GB is scheduled for October 23. The family targets visual documents, tool use and local agents. Reported speed and accuracy advantages depend on vendor test conditions and were not independently reproduced here; deployability does not guarantee equal performance on every device or workload.",
      "href": "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/"
    },
    {
      "index": "03",
      "label": "VOICE · 分阶段推出",
      "source": "OpenAI · 官方更新日志",
      "date": "2026.10.15 · 仅核实发布/更新日 / date only",
      "zhTitle": "ChatGPT 语音开始推出 GPT-Live-1.1 与更多语言声音",
      "enTitle": "ChatGPT Voice begins rolling out GPT-Live-1.1 and new voices",
      "zh": "10月15日更新日志宣布在 ChatGPT Voice 中逐步推出 GPT-Live-1.1 与小型版本 Quip，并新增法语、德语、印地语、日语、韩语、墨西哥西班牙语声音及英语 Bubbie。更自然的口音是官方描述；实际可选声音因地区和账号而异。本条不是所有用户已经获得功能的保证。",
      "en": "The October 15 release notes announce a rollout of GPT-Live-1.1 and its smaller Quip variant in ChatGPT Voice. New voices cover French, German, Hindi, Japanese, Korean and Mexican Spanish, alongside Bubbie in English. More natural accents are the provider’s description. Voice availability varies by region and account; the announcement does not guarantee access for every user.",
      "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
    },
    {
      "index": "04",
      "label": "EVALUATION · 机制公告",
      "source": "Anthropic · 官方公告",
      "date": "2026.10.15 · 仅核实发布/更新日 / date only",
      "zhTitle": "Anthropic 为 METR 评估团队开放更深入的内部访问",
      "enTitle": "Anthropic gives a METR evaluation team deeper internal access",
      "zh": "Anthropic 称已让六名 METR 人员获得接近内部风险评估团队的工具与信息访问。按公告，METR 可发表评估，Anthropic 无权否决发布，但可要求删去预先限定的保密信息，METR 可公开说明删节情况。这里记录的是评估安排，不能据此认定模型已通过独立安全验证；具体评估结果仍需另行阅读。",
      "en": "Anthropic says six METR staff now have tools and information access broadly comparable to its internal risk-assessment teams. Under the announced arrangement, METR may publish findings without a company veto, while narrowly predefined confidential information can be redacted and METR may discuss those redactions. This is an evaluation arrangement, not evidence that models have already passed independent safety validation. Findings must be examined separately.",
      "href": "https://www.anthropic.com/news/an-update-on-independent-evaluators"
    },
    {
      "index": "05",
      "label": "SCIENCE · 资金承诺更新",
      "source": "OpenAI · 官方文章更新",
      "date": "2026.10.15 · 仅核实发布/更新日 / date only",
      "zhTitle": "OpenAI 宣布向 Simons 数学研究计划投入500万美元",
      "enTitle": "OpenAI announces $5 million for a Simons mathematics initiative",
      "zh": "OpenAI 在10月6日数学成果文章的10月15日更新中宣布，向 Simons Foundation 的新计划投入500万美元，由基金会管理和授予，用于帮助数学界研究、理解和发展 AI 产生的结果，并提供模型和计算资源访问。这是新资金承诺，不是将10月6日成果重新包装成今日发现，也不意味着相关数学结果已全部获得独立确认。",
      "en": "An October 15 update to OpenAI’s October 6 mathematics article announces a $5 million contribution to a new Simons Foundation initiative. The foundation will manage and award funding for examining and building on AI-produced results; model and compute access is also pledged. This is a new funding commitment, not a newly dated research discovery or confirmation that all underlying mathematical results have been independently validated.",
      "href": "https://openai.com/index/sharing-ai-progress-in-mathematics/"
    },
    {
      "index": "06",
      "label": "EDUCATION · 课程上线",
      "source": "OpenAI · 官方公告",
      "date": "2026.10.15 · 仅核实发布/更新日 / date only",
      "zhTitle": "AI for Educators 推出巴西葡萄牙语课程",
      "enTitle": "AI for Educators launches in Brazilian Portuguese",
      "zh": "OpenAI 宣布在免费的 OpenAI Academy 上推出 AI for Educators 巴西葡萄牙语课程，面向中小学与高等教育工作者，涉及备课、活动、评价和沟通。课程强调保留教师的教学判断。这是语言可及性与培训资源更新；公告中的应用建议不是对学习成效的独立实验结论。",
      "en": "OpenAI launched AI for Educators in Brazilian Portuguese on the free OpenAI Academy platform. It covers lesson planning, activities, assessment and communication for primary, secondary and higher-education educators while retaining teachers’ pedagogical judgment. This is an accessibility and training-resource update; suggested applications are not independent experimental evidence of improved learning outcomes.",
      "href": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions/"
    }
  ]
};

export const issue042: Issue = {
  "number": "042",
  "date": "2026-10-15",
  "readingTime": "约 6 分钟",
  "heading": "让专业工具进入真实工作",
  "noteTitle": "可用的能力，需要可检查的边界。",
  "noteZh": "本期重点检索截至北京时间10月15日10:48的最近24小时，选取五项10月14日发布的一手更新。各页面仅核实到发布日，未确认其均严格处于小时级窗口内。事实层面，文档审查、地理空间分析、反诈检测、气候模拟和文本编码都出现新工具。我们的判断是：专用模型与工具链正在把 AI 带进具体工作，但公开发布、实验性访问、分阶段推出与研究自测是不同的成熟度。以下分别标注，不把预印本或厂商表现当作独立证实的结论。",
  "noteEn": "This edition focuses on the 24 hours ending October 15 at 10:48 Beijing time, selecting five primary updates dated October 14. Publication dates were verified, but exact inclusion in the hourly window remains unconfirmed. Document review, geospatial analysis, scam detection, climate simulation and text encoding all gained tools. Our editorial view: specialized models and toolchains are bringing AI into concrete workflows, but public releases, experimental access, staged rollouts and self-reported research represent different levels of maturity. These distinctions are labeled below; preprints and vendor results are not treated as independently verified findings.",
  "stories": [
    {
      "index": "01",
      "label": "REVIEW · 公开发布",
      "source": "Google Research · 官方博客",
      "date": "2026.10.14 · 仅核实发布日 / date only",
      "zhTitle": "Deep Review 公开上线，辅助核查复杂技术文档",
      "enTitle": "Deep Review opens to the public for technical-document checking",
      "zh": "Google 宣布公开发布 Deep Review，初期接受 PDF 和纯文本，每人每周提供两次免费审查，多文件支持仍在计划中。系统帮助检查论证和事实依据；官方称此前已为超过16,000篇自愿参与的会议投稿提供反馈。这是辅助审查工具，不能替代作者和专业审阅者的判断。",
      "en": "Google publicly released Deep Review with PDF and plain-text input and two complimentary reviews per user per week. Multi-file support is still planned. It assists with reasoning and evidence checks; Google reports feedback on more than 16,000 opt-in conference submissions. This is review assistance, not a replacement for authors or expert reviewers.",
      "href": "https://research.google/blog/analyzing-technical-documents-with-deep-review/"
    },
    {
      "index": "02",
      "label": "GEOSPATIAL · 实验性访问",
      "source": "Google Research · 官方技术介绍",
      "date": "2026.10.14 · 仅核实发布日 / date only",
      "zhTitle": "Earth AI 扩大地理空间智能体实验性访问",
      "enTitle": "Earth AI expands experimental access to geospatial agents",
      "zh": "Google 公布地理空间推理技术报告，并扩大 Ask Google Earth 与 A2A 服务的实验性早期访问。系统组合专用模型、空间工具和预先规划，还开放两个新基准的开发集。结果来自 Google 的评估；其中开放式任务的自动评分比较专家工作流程，而非最终答案，输出仍需专家核查。",
      "en": "Google published a geospatial reasoning report and expanded experimental early access through Ask Google Earth and an A2A service. The agent combines specialized models, spatial tools and upfront planning; development splits for two benchmarks are released. Results are Google’s evaluations. One open-ended benchmark scores alignment with expert workflows rather than final-answer correctness, so outputs still need expert review.",
      "href": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/"
    },
    {
      "index": "03",
      "label": "ON-DEVICE AI · 分阶段推出",
      "source": "Google · Android 官方公告",
      "date": "2026.10.14 · 仅核实发布日 / date only",
      "zhTitle": "Android 宣布加强 AI 反诈检测，区分本地与云端分析",
      "enTitle": "Android announces stronger AI scam detection across device and cloud",
      "zh": "Google Messages 的可选增强保护将结合 Private AI Compute 中的云端 Gemini 与设备端 Gemini Nano，用于复杂会话及陌生链接风险检查。增强模式计划未来数周推出，通知反诈提醒则计划年内扩展至更多设备。支持范围因机型与地区而异；效果与隐私描述来自 Google 公告，并非本刊独立验证。",
      "en": "An opt-in Google Messages protection mode will combine cloud Gemini through Private AI Compute with on-device Gemini Nano for complex conversations and unfamiliar-link checks. The mode is scheduled for the coming weeks, with notification alerts expanding to more devices later this year. Availability varies by device and region. Effectiveness and privacy descriptions are Google’s claims, not independently verified here.",
      "href": "https://blog.google/security/new-android-scam-protections/"
    },
    {
      "index": "04",
      "label": "CLIMATE · 预印本与团队测试",
      "source": "Ai2 · 官方团队文章",
      "date": "2026.10.14 · 仅核实发布日 / date only",
      "zhTitle": "HiRO-ACEv2 开放 3 公里气候模拟模型与演示",
      "enTitle": "Ai2 releases HiRO-ACEv2 models and a 3 km climate demo",
      "zh": "Ai2 发布 HiRO-ACEv2 介绍、模型和演示，将粗分辨率气候输出细化为降雨、近地风和海平面气压。团队报告生成全球3公里数据的成本约为 X-SHiELD 的1/300。相关论文已于10月13日提交，为预印本；本条记录14日团队发布。该比较针对模拟基准，模型目前不能直接迁移到不同气候状态，也不等同于已验证的实际天气预警。",
      "en": "Ai2 introduced HiRO-ACEv2 with models and a demo, downscaling coarse climate output into precipitation, near-surface winds and sea-level pressure. The team reports global 3 km data at roughly one three-hundredth of X-SHiELD’s cost. The accompanying preprint was submitted October 13; this item records the October 14 team announcement. The comparison concerns a simulation benchmark. The model cannot yet transfer directly to other climates and is not a validated operational warning service.",
      "href": "https://huggingface.co/blog/allenai/hiro-acev2"
    },
    {
      "index": "05",
      "label": "OPEN MODELS · 作者测试",
      "source": "DMIS Lab · 团队发布",
      "date": "2026.10.14 · 仅核实发布日 / date only",
      "zhTitle": "UltraBERT 发布兼顾分类与检索的英语编码器",
      "enTitle": "UltraBERT releases English encoders for classification and retrieval",
      "zh": "DMIS Lab 发布150M与380M规模的 UltraBERT 编码器，以及可直接使用的150M嵌入模型，提供32K上下文并采用 Apache 2.0 许可。训练方案混合不同遮罩比例，试图兼顾分类和检索。性能优势来自作者测试，论文10月10日已以 arXiv 预印本发表，本条记录14日发布说明；英语基准成绩不应直接外推到中文业务。",
      "en": "DMIS Lab released 150M- and 380M-scale UltraBERT English encoders plus a ready-to-use 150M embedding model, with 32K context and Apache 2.0 licensing. Its training recipe combines masking ratios to serve classification and retrieval. Performance claims come from author-run tests. The paper was already posted as an arXiv preprint on October 10; this item covers the October 14 release announcement. English benchmark results should not be assumed to transfer to Chinese applications.",
      "href": "https://huggingface.co/blog/dmis-lab/ultrabert"
    }
  ]
};

export const issue041: Issue = {
  "number": "041",
  "date": "2026-10-14",
  "readingTime": "约 7 分钟",
  "heading": "从云端能力，到本地执行",
  "noteTitle": "能做更多，也要看清在哪里、按什么条件运行。",
  "noteZh": "本期重点检索截至北京时间10月14日10:23的最近24小时，收录六项10月13日发布的一手公告与案例。原文仅核实到发布日，未能确认每项均严格落在小时级窗口内，因此不推测发布时间。事实层面，模型开放、代码基础设施、GPU 编排和本地软件都在扩展。我们的判断是：选用 AI 不只要比较能力，还要核对访问资格、优惠期限、硬件条件和验证责任。厂商测试、客户自述与未来计划分别标明；旧论文的新报道未当作新成果收入。",
  "noteEn": "This edition focuses on the 24 hours ending October 14 at 10:23 Beijing time, selecting six primary announcements and case studies dated October 13. Only publication dates were verified; exact inclusion in the hourly window is unconfirmed, and no times are inferred. Model access, code infrastructure, GPU orchestration and local software are expanding. Our editorial view: adoption requires checking access eligibility, promotional terms, hardware requirements and responsibility for validation alongside capabilities. Vendor tests, customer reports and future plans are labeled; fresh coverage of older papers is not recast as new research.",
  "stories": [
    {
      "index": "01",
      "label": "MODELS · 扩大开放",
      "source": "Google · 官方发布",
      "date": "2026.10.13 · 仅核实发布日 / date only",
      "zhTitle": "Google 向开发者和付费用户扩大开放 Gemini 4 Argon",
      "enTitle": "Google expands Gemini 4 Argon access to developers and paid users",
      "zh": "Google 宣布 Gemini 4 Argon 通过 AI Studio 和 Gemini platform API 向开发者与企业开放；Pro、Ultra 用户可在 Gemini 应用和搜索 AI Mode 使用，Antigravity 则面向 Ultra 用户开放。API 首发优惠价为每百万输入 token 2 美元、输出 token 10 美元。这是此前已公布模型的扩大开放，优惠价格不应视为永久价格。 官方注明优惠于2026年11月30日结束，其后输入、输出价格分别为4美元与20美元。",
      "en": "Google expanded Gemini 4 Argon to developers and enterprises through its APIs, to Pro and Ultra subscribers in Gemini and Search’s AI Mode, and to Ultra subscribers in Antigravity. Introductory API pricing is $2 per million input tokens and $10 per million output tokens. This expands access to an already announced model; the promotional prices are not permanent rates. Google says the offer expires November 30, 2026; subsequent input/output rates are $4/$20.",
      "href": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
    },
    {
      "index": "02",
      "label": "ENGINEERING · 企业案例",
      "source": "Anthropic · 官方工程博客",
      "date": "2026.10.13 · 仅核实发布日 / date only",
      "zhTitle": "Anthropic 披露 Scion，适应 AI 编程带来的代码规模增长",
      "enTitle": "Anthropic details Scion for agent-scale source control",
      "zh": "Anthropic 称，内部日均代码合并量从5月约2,500次增至9月超过30,000次，促使其将单体代码库从 Git 迁移至自研 Scion。七人团队在五个月内完成 Scion、代码审查工具及相关系统建设与迁移。这些数据来自公司披露；其同时强调，该架构面向超大代码库和在线代理，不适合作为通用 Git 替代品。",
      "en": "Anthropic says daily merged changes grew from roughly 2,500 in May to more than 30,000 in September. A seven-person team built Scion, accompanying review tools and related systems, and migrated its monorepo within five months. These are company-reported figures. Scion addresses unusually large, online agent workloads and is not presented as a general-purpose replacement for Git.",
      "href": "https://www.anthropic.com/engineering/redesigning-source-control"
    },
    {
      "index": "03",
      "label": "OPEN SOURCE · GPU 编排",
      "source": "NVIDIA · 官方技术博客",
      "date": "2026.10.13 · 仅核实发布日 / date only",
      "zhTitle": "NVIDIA 开源完整 Run:ai 平台，扩展 GPU 资源编排",
      "enTitle": "NVIDIA open-sources the full Run:ai orchestration platform",
      "zh": "NVIDIA 宣布开源完整 Run:ai 平台，为 Kubernetes 上的 AI 工作负载和 GPU 调度提供基础。除整个平台外，团队可独立采用调度、GPU 分片、资源管理及工作负载描述组件。社区版本无需购买 Run:ai 订阅，但不包含 NVIDIA 企业支持；源码与 NGC 下载包的适用许可条款应分别核对。",
      "en": "NVIDIA released the complete Run:ai platform as open source, alongside modular capabilities for scheduling, fractional GPU allocation, resource management and workload descriptions. Teams can adopt the integrated platform or selected components. The community offering does not require a paid Run:ai subscription, but enterprise support is excluded and distribution-specific license terms still apply.",
      "href": "https://developer.nvidia.com/blog/nvidia-runai-is-now-open-source-as-part-of-nvidia-dsx-ai-factory-platform/"
    },
    {
      "index": "04",
      "label": "LOCAL MODELS · 厂商测试",
      "source": "Liquid AI · 官方团队文章",
      "date": "2026.10.13 · 仅核实发布日 / date only",
      "zhTitle": "Liquid AI 发布面向本地代理的 LFM2.5-24B-A2B",
      "enTitle": "Liquid AI releases LFM2.5-24B-A2B for on-device agents",
      "zh": "Liquid AI 发布拥有240亿总参数、每 token 激活约20亿参数的推理模型，面向本地工具调用和多步骤代理任务，上下文窗口扩至131K token。官方测试称，模型在 Apple M5 Max 上达到每秒184个解码 token，并提供 llama.cpp、MLX、vLLM、SGLang 和 ONNX 支持。速度及基准表现属于厂商测试，本刊未独立复测。",
      "en": "Liquid AI introduced a 24-billion-parameter reasoning model with about two billion active parameters per token and a 131K-token context window. It targets private, on-device agents and supports major inference frameworks. Liquid reports 184 decoding tokens per second on an Apple M5 Max. Performance figures are vendor measurements and have not been independently reproduced by this publication.",
      "href": "https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b"
    },
    {
      "index": "05",
      "label": "LOCAL AI · 更新与计划",
      "source": "NVIDIA · 官方博客",
      "date": "2026.10.13 · 仅核实发布日 / date only",
      "zhTitle": "RTX Spark 上市前，NVIDIA 公布本地 AI 软件更新",
      "enTitle": "NVIDIA outlines local-AI updates ahead of RTX Spark launch",
      "zh": "NVIDIA 在 RTX Spark 笔记本计划于10月16日上市前，公布代理应用、创作工具和开发框架的适配进展。PAIR 结束测试阶段并加入 llama.cpp 支持，Broadcast 2.3 增加视频增强、离线文件处理及 MCP 控制。Nemotron 3.5 Bolt 74B 计划于10月15日发布，应与已可用的软件更新分开看待。",
      "en": "Ahead of the planned October 16 RTX Spark laptop launch, NVIDIA outlined updates for local agents, creative applications and developer tools. PAIR exits beta with llama.cpp support, while Broadcast 2.3 adds video features, offline processing and MCP controls. Nemotron 3.5 Bolt 74B is scheduled for October 15 and remains an upcoming release.",
      "href": "https://blogs.nvidia.com/blog/local-ai-rtx-spark-laptops-software-updates/"
    },
    {
      "index": "06",
      "label": "CREATIVE WORKFLOWS · 客户案例",
      "source": "OpenAI · Higgsfield 客户案例",
      "date": "2026.10.13 · 仅核实发布日 / date only",
      "zhTitle": "Higgsfield 分享超过十分钟 AI 视频的制作流程",
      "enTitle": "Higgsfield describes an AI workflow for videos over ten minutes",
      "zh": "OpenAI 发布 Higgsfield 客户案例。Higgsfield 首席执行官称，结合 GPT-6 Astra 的规划、工具调用及制作流程，团队已能生成超过十分钟的教学视频，此前长度约为一分钟。这是客户自述的工作流成果，不代表单个模型直接生成完整长视频。实时“语音到电影”仍是发展方向，尚不能当作已发布功能。",
      "en": "In an OpenAI customer case study, Higgsfield’s CEO says its production workflow can create instructional videos exceeding ten minutes, up from roughly one minute previously. The workflow uses GPT-6 Astra and external production tools. This is a customer-reported workflow result, not direct long-video generation by one model. Real-time voice-to-movie creation remains an ambition rather than a released capability.",
      "href": "https://openai.com/index/higgsfield-longer-videos-voice/"
    }
  ]
};

export const issue040: Issue = {
  "number": "040",
  "date": "2026-10-13",
  "readingTime": "约 6 分钟",
  "heading": "模型向前，系统也要跟上",
  "noteTitle": "更强的智能体，需要更清楚的运行边界。",
  "noteZh": "本期重点检索截至北京时间10月13日10:22的最近24小时，收录五项10月12日发布的一手公告与技术介绍；原文只标日期的，保留日期，不推测具体时刻。事实层面，新模型、专用推理系统、开放机架和数据应用同时推进。我们的判断是：能否长期交付可靠结果，不只看模型分数，还要看能源效率、接口、数据权限及人工验证。公司测试、未来部署计划和预览状态均已单独说明；旧研究的新报道与前期简报重复来源未作为今日首发收入。",
  "noteEn": "This edition focuses on the 24 hours ending October 13 at 10:22 Beijing time, selecting five primary announcements and technical introductions dated October 12. Where a source gives only a date, we retain it without inventing a time. New models, inference systems, open racks and data applications are all advancing. Our editorial view: reliable long-running work depends on energy efficiency, interfaces, data permissions and human validation as well as model scores. Vendor claims, future plans and preview status are labeled. Fresh coverage of older research and previously covered sources are not recast as new launches.",
  "stories": [
    {
      "label": "MODELS · 模型发布",
      "source": "Meta · 官方研究博客",
      "zhTitle": "Meta 发布 Muse Wonder，面向持续工作的智能体",
      "enTitle": "Meta launches Muse Wonder for sustained agent work",
      "zh": "Meta 发布 Muse Wonder 与 Muse Wonder Full，强调跨对话检索相关信息的 Active Memory，以及持续推进复杂任务的 Active Focus。官方称，Wonder 已进入 Meta Model API 与 Muse Code，Full 面向 Muse Code 订阅用户；面向 Muse 的上线仍是后续计划。性能优势来自公司评估，本刊未独立复测；不能把“可持续工作”理解成可以不经确认执行所有操作。",
      "en": "Meta introduced Muse Wonder and Muse Wonder Full, emphasizing relevant cross-conversation memory and sustained task execution. Wonder is available through the Meta Model API and Muse Code; Full is available to Muse Code subscribers. A Muse rollout is still forthcoming. Performance claims come from Meta’s evaluations, not our independent testing; persistent execution does not imply unrestricted authority.",
      "href": "https://research.meta.ai/blog/muse-wonder",
      "index": "01",
      "date": "2026.10.12"
    },
    {
      "label": "INFRASTRUCTURE · 芯片与系统",
      "source": "Microsoft · 官方博客",
      "zhTitle": "微软公布 Maia 300 与2027年多吉瓦扩展计划",
      "enTitle": "Microsoft outlines Maia 300 and multi-gigawatt expansion from 2027",
      "zh": "微软宣布自2027年起将 Azure Maia 扩展到多吉瓦规模。Maia 200 已服务 Copilot 等生产负载；第三代 Maia 300 面向长上下文、解码密集和多步骤智能体任务。微软预计其每兆瓦 token 产出较领先 GPU 系统高40%。这是厂商的目标与比较口径，并非已经完成的全量部署或独立基准结论。",
      "en": "Microsoft plans multi-gigawatt Azure Maia deployments starting in 2027. Maia 200 already serves production workloads including Copilot, while Maia 300 targets long-context, decode-heavy and multi-step agent tasks. Microsoft expects 40% more tokens per megawatt than leading GPU-based systems. This is a vendor projection with its own comparison scope, not a completed rollout or independent benchmark.",
      "href": "https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/",
      "index": "02",
      "date": "2026.10.12"
    },
    {
      "label": "OPEN INFRASTRUCTURE · 开放基础设施",
      "source": "NVIDIA · 官方博客",
      "zhTitle": "NVIDIA 向 OCP 提交 Vera Rubin 机架设计并扩展开源运维组件",
      "enTitle": "NVIDIA contributes Vera Rubin rack designs to OCP and expands open operations tools",
      "zh": "NVIDIA 在 OCP 峰会宣布，通过 MGX 开放架构贡献 Vera Rubin 机架与计算托盘设计；MGX 1.2 涵盖盲插液冷、标准化电源与冷却接口，设计支持最高250kW机架。DSX OS 同时增加网络配置、集群就绪检查、机架管理与裸机部署开源组件。这里的“开放”指设计、接口和软件贡献，不代表芯片本身全面开源，也不等于所有设备已互通。",
      "en": "At OCP, NVIDIA contributed Vera Rubin rack and compute-tray designs through MGX. MGX 1.2 includes blind-mate liquid cooling and standardized power and cooling interfaces, supporting designs up to 250 kW per rack. DSX OS also gains open-source components for network configuration, cluster readiness, rack management and bare-metal provisioning. These contributions do not make the chips fully open-source or prove universal interoperability.",
      "href": "https://blogs.nvidia.com/blog/ocp-global-summit-vera-rubin-scale-ai-factories/",
      "index": "03",
      "date": "2026.10.12"
    },
    {
      "label": "DATA TOOLS · 数据开发",
      "source": "Google Cloud · 官方技术博客",
      "zhTitle": "Data Agent Kit 把智能体、数据服务与流水线接进 IDE",
      "enTitle": "Data Agent Kit connects agents, data services and pipelines inside the IDE",
      "zh": "Google Cloud 介绍 Data Agent Kit：通过编码智能体插件或 VS Code 系 IDE 扩展，组合 MCP 工具、技能与数据开发界面。官方示例贯穿 BigQuery 数据导入、dbt 清洗、模型训练、Spanner 结果检查及 Airflow 编排，并明确要求审阅生成代码、检查评估与运行日志。这是一套产品工作流示范，不是自动化准确率或生产收益的独立实验。",
      "en": "Google Cloud presents Data Agent Kit as a coding-agent plugin or an extension for VS Code-based IDEs, combining MCP tools, skills and data interfaces. Its walkthrough covers BigQuery ingestion, dbt transformations, model training, Spanner inspection and Airflow orchestration. The example calls for code review, evaluation checks and execution-log inspection. It demonstrates a workflow rather than independently measured automation accuracy or production gains.",
      "href": "https://cloud.google.com/blog/products/data-analytics/bringing-you-the-data-agent-kit",
      "index": "04",
      "date": "2026.10.12"
    },
    {
      "label": "ANALYTICS · 产品预览",
      "source": "Google Cloud · 官方产品公告",
      "zhTitle": "Looker Data Apps 开放预览，让生成式应用继承数据权限",
      "enTitle": "Looker Data Apps enters preview with inherited data governance",
      "zh": "Google Cloud 宣布 Looker Data Apps 预览：由智能体生成的交互应用可托管于 Looker，并继承语义模型、行级安全与访问控制，还能检查生成 SQL。官方称运行时交互通过原生 Looker API 和模型执行，LLM token 主要在设计生成阶段消耗。这不等于服务免费；预览产品、生成逻辑与写回操作仍需按具体权限和业务规则验证。",
      "en": "Google Cloud announced Looker Data Apps in preview. Agent-generated interactive applications can be hosted in Looker and inherit semantic models, row-level security and access controls, with generated SQL available for inspection. Google says runtime interactions use native Looker APIs and models, with LLM tokens consumed during design and generation. This does not mean the service is free; preview behavior and writeback logic still require validation.",
      "href": "https://cloud.google.com/blog/products/business-intelligence/introducing-looker-data-apps",
      "index": "05",
      "date": "2026.10.12"
    }
  ]
};

export const issue039: Issue = {
  "number": "039",
  "date": "2026-10-12",
  "readingTime": "约 4 分钟",
  "heading": "把 AI 接入，变成可运行的系统",
  "noteTitle": "发布说明之外，还需要自己的运行验证。",
  "noteZh": "本期检索窗口为北京时间10月11日10:19至10月12日10:19，精选三条有窗口内明确发布时间的一手软件更新，不代表窗口内只有三条 AI 新闻。事实层面，Qwen Code 扩展后台执行与记录，LiteLLM 增加决策接口和治理接入，llama.cpp 扩展特定硬件路径的解码支持。我们的判断是：系统是否可靠，要看任务记录、配置边界与实际负载下的验证；新接口或优化说明并不等于独立证明。本刊未运行这些新版本，实验功能和预发布状态已单独标明。数量不足时不凑数，也不把旧成果的新报道当作今日首发。",
  "noteEn": "Review window: October 11, 10:19 to October 12, 10:19, Beijing time. We selected three primary software releases with timestamps inside the window, not a claim that only three AI stories occurred. Qwen Code extends background execution and records; LiteLLM adds decision interfaces and governance integrations; llama.cpp expands decoding on specific hardware paths. Our editorial view: reliability depends on execution records, configuration boundaries and validation under real workloads. New interfaces or optimization notes are not independent proof. We have not run these versions; experimental features and pre-release status are identified. We do not pad the count or recast fresh coverage of older work as a new release.",
  "stories": [
    {
      "index": "01",
      "label": "DEVELOPER TOOLS · 官方版本",
      "source": "QwenLM · GitHub release",
      "date": "2026.10.11 · 10:20:36 UTC",
      "zhTitle": "Qwen Code 0.25.1 加入持久后台任务与执行记录",
      "enTitle": "Qwen Code 0.25.1 adds durable background tasks and execution records",
      "zh": "Qwen Code 发布 0.25.1 稳定版，为 Managed Agent 加入后台 Shell 与 Monitor，在把工具结果返回模型前保存参数、回执和检查点；Agent 与 Goal 协调工具改为按需发现。版本也提供实验性的 Kubernetes CSI 运行时。 Kubernetes CSI 运行时仍属实验功能；以上为项目发布说明，非独立实测结论。",
      "en": "Qwen Code released stable version 0.25.1 with background Shell and Monitor capabilities for Managed Agents. Tool parameters, receipts and checkpoints are recorded before results return to the model, while Agent and Goal tools are discovered on demand. An experimental Kubernetes CSI runtime is also included. The Kubernetes CSI runtime is experimental. These are project release notes, not independently tested results.",
      "href": "https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1"
    },
    {
      "index": "02",
      "label": "AI GATEWAY · 稳定版本",
      "source": "BerriAI · GitHub release",
      "date": "2026.10.11 · 09:53:26 UTC",
      "zhTitle": "LiteLLM 1.105.0 把决策 API、护栏与路由接入网关",
      "enTitle": "LiteLLM 1.105.0 brings decision APIs, guardrails and routing into the gateway",
      "zh": "LiteLLM 1.105.0 稳定版加入 OpenAI 格式的 /v1/decisions 与独立的 /v1/systemone 接口，并提供决策模型护栏和基于已部署决策模型的自动路由配置。管理员可为护栏设置是非问题、阈值及拦截或仅记录行为。 保存新式路由配置前需升级所有代理副本，回滚前需转换或移除这些配置。护栏效果取决于模型和配置，不能据此宣称已解决提示注入。",
      "en": "LiteLLM 1.105.0 adds an OpenAI-format /v1/decisions endpoint, a separate /v1/systemone route, decision-model guardrails and auto-router setup using an existing decision-model deployment. Administrators can configure yes/no checks, thresholds, and block or log-only behavior. Upgrade every proxy replica before saving deployment-backed routers; convert or remove those configurations before rollback. Guardrail effectiveness depends on the model and configuration.",
      "href": "https://github.com/BerriAI/litellm/releases/tag/v1.105.0"
    },
    {
      "index": "03",
      "label": "LOCAL INFERENCE · 预发布",
      "source": "ggml-org · GitHub release",
      "date": "2026.10.11 · 19:14:38 UTC",
      "zhTitle": "llama.cpp 预发布扩展 Gemma-4 OpenCL GPU 解码",
      "enTitle": "llama.cpp prerelease expands Gemma-4 OpenCL GPU decoding",
      "zh": "llama.cpp 发布 b11559 预发布构建，为 Gemma-4 E4B 与 E2B 启用 OpenCL GPU 解码，并优化 DK64 GQA8 和 DK128 GQA4 解码路径。这是推理软件与硬件适配更新，不是 Gemma-4 模型首次发布。发布说明未给出可泛化的提速数字；效果仍取决于具体硬件与模型配置，本刊未独立运行复测。",
      "en": "llama.cpp publishes prerelease build b11559, enabling OpenCL GPU decoding for Gemma-4 E4B and E2B and optimizing DK64 GQA8 and DK128 GQA4 decoding paths. This updates inference-software and hardware compatibility; it is not a Gemma-4 model launch. The release notes do not establish a general speedup. Results depend on hardware and model configuration, and we have not independently run or reproduced them.",
      "href": "https://github.com/ggml-org/llama.cpp/releases/tag/b11559"
    }
  ]
};

export const issue038: Issue = {
  "number": "038",
  "date": "2026-10-11",
  "readingTime": "约 3 分钟",
  "heading": "给工具接入，也给控制边界",
  "noteTitle": "接入更多能力，仍要看清谁来决定。",
  "noteZh": "本期检索窗口为北京时间10月10日10:53至10月11日10:53。今天只选两项已核实的实质更新，不代表窗口内只有两条 AI 新闻。GitHub 公告与 Typed Evals 版本上传均有窗口内的具体时间。事实层面，一项增加模型与工具启动控制，另一项扩展评估后端接入。我们的判断是：接得上，只是第一步；默认设置、人工标注和运行验证仍然重要。社区工具的旧实验和已有产品的新介绍没有作为今日新成果收入，数量不足时不凑数。",
  "noteEn": "Review window: October 10, 10:53 to October 11, 10:53, Beijing time. We selected two verified substantive updates, not a claim that only two AI stories occurred. GitHub’s announcement and the Typed Evals upload both have timestamps inside the window. One adds model and tool-startup controls; the other expands evaluation-backend connectivity. Our editorial view: integration is a first step, while defaults, human labels and runtime verification still matter. Older experiments and fresh introductions to existing products are not presented as new results; we do not pad the count.",
  "stories": [
    {
      "index": "01",
      "label": "DEVELOPER TOOLS · 官方更新",
      "source": "GitHub · 官方更新记录",
      "date": "2026.10.10 · 18:53:39 UTC",
      "zhTitle": "Copilot for JetBrains 增加默认模型与 MCP 启动控制",
      "enTitle": "Copilot for JetBrains adds default-model and MCP startup controls",
      "zh": "GitHub 宣布，企业管理员可为新对话指定可用的默认智能体模型，同时保留用户明确选择的模型。新增设置可关闭 Copilot 与 Claude 的 MCP 服务器自动启动；诊断菜单也能将问题交给内联聊天提出修复。插件已停止支持 JetBrains IDE 2025.1，现需2025.2或更高版本。这些是产品控制与兼容性更新，不能据此推断模型能力提升或所有工具调用都已安全。",
      "en": "GitHub says enterprise administrators can set an available agent model as the default for new conversations while preserving explicit model choices. A new setting disables automatic MCP server startup for Copilot and Claude; diagnostic menus can also open inline chat to propose fixes. Support for JetBrains IDE 2025.1 has ended, so the plugin now requires 2025.2 or later. These are product-control and compatibility changes, not evidence of better model performance or universally safe tool use.",
      "href": "https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains/"
    },
    {
      "index": "02",
      "label": "EVALUATION · 开源版本",
      "source": "Typed Evals · PyPI / GitHub",
      "date": "2026.10.10 · 11:22:16 UTC",
      "zhTitle": "Typed Evals 0.2.1 增加 OpenRouter 决策模型接入",
      "enTitle": "Typed Evals 0.2.1 adds OpenRouter decision-model support",
      "zh": "Typed Evals 发布0.2.1；当天代码增加可配置的后端地址，并提供经 OpenRouter 调用 Microsoft Decision-1 的示例与契约测试。这个 MIT 许可、Alpha 阶段的 Python 工具可评估回答、RAG 依据和智能体执行记录，并以人工标注校准分数。本期记录的是接入更新，不是工具首次发布。校准仍依赖任务相符的标注与留出验证；新增后端支持也不证明评估准确率提升，本刊未独立运行复测。",
      "en": "Typed Evals releases 0.2.1, adding a configurable backend address plus an OpenRouter example for Microsoft Decision-1 and contract tests. The MIT-licensed, Alpha-stage Python toolkit evaluates responses, RAG evidence and recorded agent runs, with optional calibration against human labels. This is an integration update, not the toolkit’s first release. Calibration still needs task-relevant labels and held-out validation. Supporting another backend does not establish higher evaluation accuracy; we have not independently run or reproduced it.",
      "href": "https://pypi.org/project/typed-evals/0.2.1/"
    }
  ]
};

export const issue037: Issue = {
  "number": "037",
  "date": "2026-10-10",
  "readingTime": "约 5 分钟",
  "heading": "让系统更可控，也更可测",
  "noteTitle": "效率的提升，需要把测量条件一起留下。",
  "noteZh": "本期检索窗口为北京时间10月9日10:35至10月10日10:35。入选四条不同的一手发布；ONNX Runtime、Ai2 和 FINAL-Bench 的具体发布时间位于窗口内，OpenAI 更新仅核实到10月9日，小时级边界未能确认。事实层面，这些变化涉及输入建议、推理运行时、算力调度和结构化决策。我们的判断是：更快或更省，只有连同人为确认、兼容约束与测试条件一起说明才有用。数量不足五条时不凑数，也不把旧研究的新报道当成今日首发。",
  "noteEn": "Review window: October 9, 10:35 to October 10, 10:35, Beijing time. Four distinct primary releases are included. ONNX Runtime, Ai2 and FINAL-Bench have timestamps inside the window; OpenAI is verified only to October 9, leaving its hourly boundary unconfirmed. Facts concern input suggestions, inference runtimes, compute scheduling and typed decisions. Our editorial view: efficiency claims are useful alongside human confirmation, compatibility constraints and test conditions. We do not pad the count or treat fresh coverage of older research as a new release.",
  "stories": [
    {
      "index": "01",
      "label": "DEVELOPER TOOLS · 测试版",
      "source": "OpenAI · 官方更新记录",
      "date": "2026.10.09 · 仅核实发布日 / date only",
      "zhTitle": "Codex 测试输入预测，建议仍由用户确认发送",
      "enTitle": "Codex beta predicts the next message, with sending left to the user",
      "zh": "OpenAI 在10月9日更新记录中介绍 Composer predictions：根据当前线程，在输入框提出下一条消息草稿；Tab 接受后仍可修改，不会自动发送。测试版面向支持地区、年满18岁的个人 Pro 用户，需最新版桌面应用及支持的模型和线程类型。预测生成在测试期不计用量，实际发送仍按正常规则计费。",
      "en": "OpenAI’s October 9 release notes describe Composer predictions: a draft next message based on the current thread. Tab accepts a suggestion for review; it does not send automatically. The beta targets adult personal Pro users in supported regions, on the latest desktop app and supported models and thread types. Generating predictions does not consume usage during beta; sent messages follow normal billing.",
      "href": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
    },
    {
      "index": "02",
      "label": "INFRASTRUCTURE · 开源发布",
      "source": "Microsoft · GitHub release",
      "date": "2026.10.09 · 04:51 UTC",
      "zhTitle": "ONNX Runtime 1.31 稳定模型包接口，改进量化推理",
      "enTitle": "ONNX Runtime 1.31 stabilizes model packaging and improves quantized inference",
      "zh": "微软发布 ONNX Runtime 1.31.0，将模型包与 EPContext 数据接口转为稳定接口，改进 CPU 模型加载及 INT4/INT8 混合专家推理，并扩大 CoreML 设备选择支持。发布说明提醒核心与执行插件需匹配算子定义；版本更新不意味着任意模型都会提速，实际收益仍依赖模型、硬件和配置。",
      "en": "Microsoft releases ONNX Runtime 1.31.0 with stable model-package and EPContext data APIs, CPU loading improvements, INT4/INT8 mixture-of-experts optimizations and broader CoreML device selection. Release notes warn that core and execution plugins need matching operator schemas. This is a software release, not evidence that every model becomes faster; gains depend on model, hardware and configuration.",
      "href": "https://github.com/microsoft/onnxruntime/releases/tag/v1.31.0"
    },
    {
      "index": "03",
      "label": "COMPUTE · 机构实测",
      "source": "Ai2 · Hugging Face",
      "date": "2026.10.09 · 15:20:29 UTC",
      "zhTitle": "Ai2 分享 GPU 预算调度实践，区分占用率与利用率",
      "enTitle": "Ai2 shares budget-based GPU scheduling and distinguishes occupancy from utilization",
      "zh": "Ai2 介绍按团队预算、最短运行时间和可抢占时段分配 GPU 的调度实践。机构报告30天测试中交付了应分配 GPU 时数的98%，集群占用率维持98%；调试任务的第90百分位等待由2小时降至30秒。这是该机构自身运行数据，基线样本较少；占用率不等于训练计算利用率，交互会话被抢占也仍是待改善问题。",
      "en": "Ai2 describes GPU scheduling based on team budgets, minimum runtimes and preemptible periods. It reports delivering 98% of owed GPU hours over a 30-day test while maintaining 98% occupancy; debug-job p90 waits fell from two hours to 30 seconds. These are institutional operational measurements with a smaller baseline sample. Occupancy is not compute utilization, and preemption still disrupts interactive sessions.",
      "href": "https://huggingface.co/blog/allenai/impactful-scheduling"
    },
    {
      "index": "04",
      "label": "EVALUATION · 发布方报告",
      "source": "FINAL-Bench · Hugging Face",
      "date": "2026.10.09 · 09:10:40 UTC",
      "zhTitle": "Darwin-27B-ZTC-v2 发布结构化决策评测结果",
      "enTitle": "Darwin-27B-ZTC-v2 reports typed-decision benchmark results",
      "zh": "FINAL-Bench 报告 Darwin-27B-ZTC-v2 在 System One Mosaic 排行榜居首，文章列出覆盖137个基准的排名汇总。模型通过单次前向计算输出结构化判断与概率，而非自由文本。这里记录的是发布方在写作时的榜单快照，本刊未独立复测；该评测不覆盖长篇生成或工具使用，也不能由概率输出直接推断真实业务中的校准可靠性。",
      "en": "FINAL-Bench reports Darwin-27B-ZTC-v2 at the top of the System One Mosaic leaderboard, aggregating rankings across 137 benchmarks. The model produces typed decisions and probabilities in one forward pass rather than free text. This records the publisher’s snapshot, not an independent replication. The benchmark does not cover long-form generation or tool use, and probability output alone does not establish reliable calibration in deployment.",
      "href": "https://huggingface.co/blog/FINAL-Bench/leading-the-system-one-mosaic-benchmark-what-darwi"
    }
  ]
};

export const issue036: Issue = {
  "number": "036",
  "date": "2026-10-09",
  "readingTime": "约 5 分钟",
  "heading": "把能力放进真实工作",
  "noteTitle": "可执行之外，还要可核查。",
  "noteZh": "本期检索窗口为北京时间10月8日10:52至10月9日10:52。四条一手材料的页面发布时间均落在窗口内；不足五条时不凑数。事实层面，企业智能体、本地推理、文档解析与基因注释都在交付更具体的工具。我们的判断是：能力越接近工作现场，权限、运行条件和证据边界越重要。发布方的性能数字不等于独立复测，计算预测也不等于实验确认。ML Intern 的新文章虽标注10月8日，但具体时间已在窗口之外，因此未收入。",
  "noteEn": "Review window: October 8, 10:52 to October 9, 10:52, Beijing time. Page publication timestamps place all four primary sources inside this window; we do not pad the count. The factual developments span enterprise agents, local inference, document parsing and genome annotation. Our editorial view: as tools approach real work, permissions, operating conditions and evidence boundaries matter more. Publisher benchmarks are not independent replications, and computational predictions are not experimental confirmation. The ML Intern article dated October 8 falls outside the window by its timestamp and is excluded.",
  "stories": [
    {
      "index": "01",
      "label": "ENTERPRISE · 产品发布",
      "source": "Google Cloud",
      "date": "2026.10.08 · 12:05 UTC",
      "zhTitle": "Google 发布面向工作的 Gemini 智能体",
      "enTitle": "Google announces the Gemini agent for work",
      "zh": "Google 宣布统一的 Gemini 工作智能体，可规划任务、调用工具并连接企业系统，在文档、邮件和开发环境中完成工作。公告强调模型选择、成本控制及企业管理机制。这是发布方对产品能力的描述；实际接入仍取决于企业配置、授权与可用范围，不能理解为智能体自动拥有全部业务数据或行动权限。",
      "en": "Google announces a unified Gemini agent that plans tasks, invokes tools and connects to enterprise systems across documents, inboxes and development environments. The announcement emphasizes model selection, cost controls and administration. These are publisher descriptions of capabilities. Actual access depends on enterprise configuration, authorization and availability; an agent does not automatically gain all business data or permissions.",
      "href": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/"
    },
    {
      "index": "02",
      "label": "OPEN MODELS · 厂商评测",
      "source": "LightOn · Hugging Face",
      "date": "2026.10.08 · 16:15:53 UTC",
      "zhTitle": "LightOnOCR-3 将文字转录与版面定位合入同一模型",
      "enTitle": "LightOnOCR-3 combines transcription and document layout",
      "zh": "LightOn 发布0.8B、1B与4B三种 OCR 模型，采用 Apache 2.0 许可。除文字转录外，grounding 模式还输出带标签的边界框、图像描述和图表数据。厂商报告4B版本在 olmOCR-Bench 得分86.3，并公开复现材料。该成绩及速度比较来自发布方测试，受页面渲染和评测处理方式影响，不代表所有扫描件都能可靠识别。",
      "en": "LightOn releases 0.8B, 1B and 4B OCR models under Apache 2.0. Alongside transcription, grounding mode returns labeled boxes, image descriptions and chart data. The publisher reports an olmOCR-Bench score of 86.3 for the 4B model and provides reproduction materials. Scores and speed comparisons are vendor tests affected by rendering and evaluation choices, not guarantees for every scanned document.",
      "href": "https://huggingface.co/blog/lightonai/lightonocr-3"
    },
    {
      "index": "03",
      "label": "SCIENCE · 研究发布",
      "source": "HuggingFaceBio · Gener",
      "date": "2026.10.08 · 15:13:19 UTC",
      "zhTitle": "Carbon-A 发布基因注释模型与候选数据库",
      "enTitle": "Carbon-A releases a genome-annotation model and candidate database",
      "zh": "研究团队发布 Carbon-A 及 Carbon Annotation Database，报告在22,617个物种中识别出5.66亿个新的基因候选。模型、训练数据与技术报告开放供检查。团队称已对部分候选开展验证，更多实验结果仍待发布。这里的“候选”是计算预测，不能写成全部基因均已实验证实；技术报告的公开也不等于完成同行评审。",
      "en": "The team releases Carbon-A and the Carbon Annotation Database, reporting 566 million new gene candidates across 22,617 species. Model, training data and a technical report are available for scrutiny. The authors describe validation of some candidates, with further experiments still forthcoming. Candidates are computational predictions, not universally confirmed genes; a public technical report is not evidence of completed peer review.",
      "href": "https://huggingface.co/blog/HuggingFaceBio/carbon-annotator-genbank-genome-annotation"
    },
    {
      "index": "04",
      "label": "LOCAL AI · 开源工具",
      "source": "Base Compute · Hugging Face",
      "date": "2026.10.08 · 19:42:19 UTC",
      "zhTitle": "Superfluid 为同机多智能体推理加入优先调度",
      "enTitle": "Superfluid adds priority scheduling for local multi-agent inference",
      "zh": "Base Compute 发布 Apache 2.0 许可的本地模型服务 Superfluid，支持 llama.cpp、MLX 与 BaseRT，并兼容 OpenAI、Anthropic 和 Ollama 接口。设计重点是让交互请求优先于批处理，并通过日志支持中断恢复。文章的延迟与恢复成绩来自团队指定硬件、模型和并发负载的自测；本刊未复测，也不能由接口兼容推断所有客户端功能均已适配。",
      "en": "Base Compute introduces Superfluid, an Apache 2.0 local model server supporting llama.cpp, MLX and BaseRT, with OpenAI-, Anthropic- and Ollama-compatible APIs. It prioritizes interactive requests over batch work and uses logging for recovery. Latency and recovery results are team-run tests on specified hardware, models and workloads, not independently reproduced here. API compatibility does not establish support for every client feature.",
      "href": "https://huggingface.co/blog/basecompute/superfluid"
    }
  ]
};

export const issue035: Issue = {
  "number": "035",
  "date": "2026-10-08",
  "readingTime": "约 5 分钟",
  "heading": "从回答，到可使用的工具",
  "noteTitle": "好用的界面，需要同样清楚的边界。",
  "noteZh": "本期检索窗口为北京时间10月7日10:49至10月8日10:49。入选四条一手发布，均标注10月7日。Liquid AI 与 NVIDIA 页面元数据给出具体时间，处于窗口内；OpenAI 两篇仅核实到发布日，其小时级边界尚不能完全确认。事实层面，新内容覆盖交互回答、学习规划、边缘决策与专业化推理。我们的判断是，工具越贴近实际任务，越应说明可用范围、实验条件与验证方式。系统卡作为首条的补充材料，不拆成重复新闻；数量不足时不凑数。",
  "noteEn": "Review window: October 7, 10:49 to October 8, 10:49, Beijing time. Four primary publications are dated October 7. Liquid AI and NVIDIA metadata provide times within the window; the two OpenAI articles are verified only to the day, leaving their exact boundary unconfirmed. The factual developments cover interactive answers, learning plans, edge decisions and specialized reasoning. Our editorial view: closer integration with real tasks makes availability, test conditions and verification more important. The system card supports the first story rather than becoming a duplicate item; we do not pad the count.",
  "stories": [
    {
      "index": "01",
      "label": "PRODUCT · 分批推出",
      "source": "OpenAI",
      "date": "2026.10.07 · 来源发布日 / publication date",
      "zhTitle": "GPT-6 与 Intelligent UI 扩展至更多 ChatGPT 用户",
      "enTitle": "GPT-6 and Intelligent UI expand across ChatGPT",
      "zh": "OpenAI 宣布在 Chat 中分批推出 GPT-6 与交互式回答：付费层从10月7日起，Free 与 Go 从次日起扩展。回答可组合文字、图表、按钮和小工具。公告明确本次不更换 Work 或 Codex 的模型。首字响应速度改善属于公司内部评测；分批推出也不等于每个账户立即可用。配套系统卡区分10月 Chat 版本与9月 Work/Codex 版本。",
      "en": "OpenAI announces a staged Chat rollout of GPT-6 and interactive answers: paid tiers start October 7, with Free and Go expanding the next day. Responses can combine text, charts, buttons and small tools. The release explicitly leaves Work and Codex models unchanged. Faster response-start claims come from internal evaluations; staged rollout does not mean immediate access for every account. The accompanying system card distinguishes October Chat models from September Work/Codex versions.",
      "href": "https://openai.com/index/gpt-6-for-everyone/"
    },
    {
      "index": "02",
      "label": "LEARNING · 产品预告",
      "source": "OpenAI",
      "date": "2026.10.07 · 来源发布日 / publication date",
      "zhTitle": "ChatGPT 青少年学习工具更新，College Planner 尚待推出",
      "enTitle": "Teen learning tools expand; College Planner is still forthcoming",
      "zh": "OpenAI 预告 College Planner，将申请要求、截止日期和助学金步骤整理到同一计划，首期面向美国计划申请四年制大学的10至12年级学生。公告还介绍闪卡、测验及已在 iOS 提供的多页连续拍照合并 PDF。College Planner 应写作即将推出；文中学习使用情况属于公司观察，不能据此推断学习成绩已被独立证明提高。",
      "en": "OpenAI previews College Planner, organizing application requirements, deadlines and financial-aid steps in one plan. The initial experience targets US students in grades 10–12 applying to four-year colleges. The announcement also covers flashcards, quizzes and multi-photo PDF capture already available on iOS. College Planner remains forthcoming. Reported learning-use patterns are company observations, not independent evidence of improved academic outcomes.",
      "href": "https://openai.com/index/teens-learn-and-plan/"
    },
    {
      "index": "03",
      "label": "OPEN WEIGHTS · 边缘推理",
      "source": "Liquid AI · Hugging Face",
      "date": "2026.10.07 · 16:54:33 UTC",
      "zhTitle": "Liquid AI 发布开放权重 d1 多模态决策模型",
      "enTitle": "Liquid AI releases open-weight multimodal d1 decision models",
      "zh": "Liquid AI 发布 d1-3B 与实验性的 d1-omni-600M。前者支持文字和图像，后者支持文字与图像或音频；它们通过单次前向计算给出结构化判断。发布方报告 d1-3B 在 Jetson AGX Thor 上单问题延迟16毫秒，属于指定设置下的厂商测试。文章未报告视觉或音频基准，也未给实验模型提供速度数字，不能据此概括所有模态的表现。",
      "en": "Liquid AI releases d1-3B and experimental d1-omni-600M. The former accepts text and images; the latter supports text with images or audio. They make structured decisions in a single forward pass. The publisher reports 16 ms for one d1-3B question on Jetson AGX Thor under its test setup. No vision or audio benchmarks, or speed figures for the experimental model, are reported, limiting cross-modality conclusions.",
      "href": "https://huggingface.co/blog/LiquidAI/open-d1"
    },
    {
      "index": "04",
      "label": "RESEARCH · 厂商研究",
      "source": "NVIDIA · Hugging Face",
      "date": "2026.10.07 · 12:45:31 UTC",
      "zhTitle": "NVIDIA 整理 Nemotron 竞赛级专业化训练与验证流程",
      "enTitle": "NVIDIA details Nemotron specialization and verification for olympiads",
      "zh": "NVIDIA 介绍以 Nemotron 3 为基础、结合微调与生成—验证—修订流程的竞赛研究。文中报告 IOI 2026 得分535.4/600、IMO 得分30/42。IOI 是非官方、未受监督的前瞻测试，不在官方排名内；作者称 IMO 提交由官方评委评分。模型、数据及推理材料可供检查，相关 arXiv 论文不应自动视作已通过同行评审；这些是特定系统的结果，不能简化为基础模型通用能力。",
      "en": "NVIDIA describes competition research combining Nemotron 3 fine-tuning with generate–verify–refine inference. It reports 535.4/600 on IOI 2026 and 30/42 on IMO. The IOI run was unofficial and unsupervised, outside the official ranking; the authors say official IMO graders assessed the submitted proofs. Models, data and inference artifacts support scrutiny. Linked arXiv papers are not automatically peer-reviewed, and these system-level results should not be generalized to the base model.",
      "href": "https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026"
    }
  ]
};

export const issue034: Issue = {
  "number": "034",
  "date": "2026-10-07",
  "readingTime": "约 7 分钟",
  "heading": "模型更大，证据更具体",
  "noteTitle": "发布能力，也要交代它怎样被验证。",
  "noteZh": "本期检索窗口为北京时间10月6日10:17至10月7日10:17。六条一手材料均标注10月6日；Mistral、Google、Microsoft 的页面元数据与 Decisions 公告可核对具体时间，OpenAI 两篇文章仅核实到发布日，不能据此声称小时级边界已全部确认。共同线索是把能力落到具体对象：本地检索、固定选项判断、专业软件流程与可检查的证明。我们的判断是，公开预览、厂商评测和研究材料各有价值，但不能替代真实任务验证与独立审查。",
  "noteEn": "Review window: October 6, 10:17 to October 7, 10:17, Beijing time. All six primary sources are dated October 6. Mistral, Google and Microsoft page metadata and the Decisions announcement provide publication times; the two OpenAI articles were verified only to the day, so their exact 24-hour boundary is not fully established. Our editorial thread is specificity: local retrieval, fixed-choice decisions, professional workflows and inspectable proofs. Previews, vendor evaluations and research artifacts are useful, but do not replace real-task validation and independent review.",
  "stories": [
    {
      "index": "01",
      "label": "MODEL · 公开预览",
      "source": "Mistral",
      "date": "2026.10.06 · 12:00 UTC",
      "zhTitle": "Mistral Large 4 开放 API 预览，权重计划月底发布",
      "enTitle": "Mistral Large 4 enters API preview; weights are planned for month-end",
      "zh": "Mistral 发布 Large 4 公开预览，支持多模态输入。官方模型文档列出1.05万亿总参数、490亿激活参数及100万 token 上下文。公告明确权重计划月底发布，因此当前不能写成权重已经开放。其编程、视觉与工作流表现包含发布方评测与所引用榜单，不能视为所有实际任务的效果保证。",
      "en": "Mistral opens a public API preview of Large 4 with multimodal input. Its model documentation lists 1.05 trillion total parameters, 49 billion active parameters and a one-million-token context. The announcement schedules weights for month-end; they should not be described as already available. Coding, vision and workflow claims combine publisher evaluations and cited rankings, rather than guarantees for every real task.",
      "href": "https://mistral.ai/news/mistral-large-4/"
    },
    {
      "index": "02",
      "label": "ON-DEVICE · 模型发布",
      "source": "Google DeepMind",
      "date": "2026.10.06 · 16:00 UTC",
      "zhTitle": "EmbeddingGemma 2 将文字、图像与音视频映射到统一向量空间",
      "enTitle": "EmbeddingGemma 2 brings multimodal embeddings to local devices",
      "zh": "Google 发布7.4亿参数的 EmbeddingGemma 2，采用 Apache 2.0 许可，可将文字、代码、图像、音频和视频用于跨模态检索。模型采用模块化设计，纯文字路径为2.7亿参数。Google 报告量化版本在 Pixel 11 Pro 上的特定内存测量；这些属于厂商测试，不能外推到任意手机，也不意味着本地运行的应用天然不会上传数据。",
      "en": "Google releases the 740-million-parameter EmbeddingGemma 2 under Apache 2.0 for retrieval across text, code, images, audio and video. Its modular text-only path uses 270 million parameters. Google reports device-specific memory measurements for quantized versions on Pixel 11 Pro. These are vendor tests, not promises for every phone; local inference also does not automatically guarantee that an application never uploads data.",
      "href": "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/"
    },
    {
      "index": "03",
      "label": "API · 公测",
      "source": "OpenAI Developers",
      "date": "2026.10.06 · 20:53 UTC",
      "zhTitle": "Decisions API 进入公测，面向条件判断、选择与评分",
      "enTitle": "Decisions API enters beta for predicates, choices and scores",
      "zh": "OpenAI 宣布由 GPT-6 Luna 驱动的 Decisions API 进入公测，接受文字和图像，返回条件概率、预设选项或数值评分。它把任务限定在预定义输出，适用于路由与分类等工作。公告声称相对通过 Responses API 使用 GPT-6 Luna 最多快10倍；这是厂商性能主张，本刊未独立复测，输出置信度也不能直接当作正确性保证。",
      "en": "OpenAI launches the GPT-6 Luna-powered Decisions API in public beta. It accepts text and images and returns predicate probabilities, predefined choices or numeric scores for tasks such as routing and classification. The announcement claims up to 10× faster decisions than GPT-6 Luna through the Responses API. This is a vendor performance claim, not independently reproduced here; a confidence score is not a correctness guarantee.",
      "href": "https://community.openai.com/t/decisions-api-is-now-available-in-public-beta/1403877"
    },
    {
      "index": "04",
      "label": "SCIENCE · 研究材料",
      "source": "OpenAI",
      "date": "2026.10.06 · 官方发布日",
      "zhTitle": "OpenAI 公开模型生成的数学材料，附部分 Lean 形式化证明",
      "enTitle": "OpenAI publishes model-generated mathematics with Lean proof artifacts",
      "zh": "OpenAI 将内部模型产出的数学结果、修订规则及部分 Lean 形式化证明放入公开仓库，并披露10份推理摘要与计算量估计。发布不等于全部成果已经同行评审。相关独立顾问组同日明确：其建议不构成对成果影响或研究过程的背书，数学共同体仍需评估。这批材料首先提供了可检查的研究对象，而非统一验证结论。",
      "en": "OpenAI publishes mathematical results from an internal model, revision protocols and Lean formalizations for many proofs, alongside ten reasoning summaries and compute estimates. Publication does not mean every result has passed peer review. The independent advisory group states that its advice does not endorse the results’ impact or the process, and that the mathematical community must assess the work. These are inspectable research artifacts, not a blanket verification.",
      "href": "https://openai.com/index/sharing-ai-progress-in-mathematics/"
    },
    {
      "index": "05",
      "label": "COMPUTER USE · 合作研究",
      "source": "OpenAI / Ironclad",
      "date": "2026.10.06 · 官方发布日",
      "zhTitle": "OpenAI 与 Ironclad 用合同流程研究专业软件操作",
      "enTitle": "OpenAI and Ironclad study agents working in professional software",
      "zh": "双方把合同配置、审批规则等流程转成11项研究任务。OpenAI 报告 GPT-6 Astra 的平均评分为55.0%，GPT-5.6 Sol 为41.6%；每次尝试的估计时间分别为19.2与37.0分钟。数字仅覆盖这组合作研究，时间是模拟估计，并非实测客户节省时间。该研究强调检查最终流程是否满足要求，也明确仍需人工监督。",
      "en": "The collaboration turns contracting configuration and approval workflows into eleven research tasks. OpenAI reports mean rubric scores of 55.0% for GPT-6 Astra and 41.6% for GPT-5.6 Sol, with estimated times of 19.2 and 37.0 minutes per attempt. These results cover this research set; times are simulated estimates, not measured customer savings. The work emphasizes checking complete workflows against requirements and retaining human oversight.",
      "href": "https://openai.com/index/advancing-computer-use-with-ironclad/"
    },
    {
      "index": "06",
      "label": "EVALUATION · 研究访谈",
      "source": "Microsoft Research",
      "date": "2026.10.06 · 16:19 UTC",
      "zhTitle": "微软研究访谈：多轮协作与长任务需要更贴近使用场景的评测",
      "enTitle": "Microsoft Research discusses evaluation beyond single-turn benchmarks",
      "zh": "Jennifer Neville 在新发布的研究访谈中讨论多轮对话、协作环境和长任务里的失败，以及从数据与实际需求出发设计评测的方法。节目回顾相关研究，而不是宣布当日发布了一个新模型或统一性能提升。其要点是：单次问答的高分不足以说明智能体能在不断补充条件的真实工作中持续做对。",
      "en": "In a newly published interview, Jennifer Neville discusses failures in multi-turn conversation, collaborative settings and long-horizon tasks, and how to build evaluations around data and actual user needs. The episode revisits research rather than launching a new model or establishing a uniform performance gain. Its central lesson is that strong single-turn scores do not establish reliable work as requirements evolve over time.",
      "href": "https://www.microsoft.com/en-us/research/podcast/what-ai-gets-wrong-and-what-failure-teaches-us/"
    }
  ]
};

export const issue033: Issue = {
  "number": "033",
  "date": "2026-10-06",
  "readingTime": "约 5 分钟",
  "heading": "从能做，到怎样验证",
  "noteTitle": "可靠的 AI，需要可以检查的证据。",
  "noteZh": "本期检索窗口为北京时间10月5日10:52至10月6日10:52，收录四条有明确发布时间的一手材料。未把旧公告的周报转述当成新发布，也未为凑数加入时间无法精确核实的候选。共同线索是验证：代码审查需要可复现的评测，工具需要可靠的运行边界，医疗应用需要与其用途相匹配的临床证据。这是编者的观察；发布说明、厂商案例与实际效果之间仍有距离。",
  "noteEn": "Review window: October 5, 10:52 to October 6, 10:52, Beijing time. Four primary sources have explicit publication timestamps. We excluded weekly recaps of older announcements and candidates whose timing could not be checked precisely. Our editorial thread is verification: code review needs reproducible evaluation, tools need dependable operating boundaries, and medical applications need clinical evidence appropriate to their intended use. This is our interpretation; release notes and vendor case studies do not establish real-world outcomes.",
  "stories": [
    {
      "index": "01",
      "label": "EVALUATION · 研究预览",
      "source": "GitHub",
      "date": "2026.10.05 · 15:59 UTC",
      "zhTitle": "GitHub 发布 ReviewBench，公开 AI 代码审查评测方法",
      "enTitle": "GitHub introduces ReviewBench for evaluating AI code review",
      "zh": "GitHub 发布 ReviewBench 研究预览，包含来自187个仓库、覆盖19种语言的219个公开 PR。基准结合人工、模型和静态分析发现的问题，区分精确率、召回率及问题严重性，并公开评测方法。GitHub 报告独立于数据构建的内部工程师复核一致率为96.6%；这属于发布方的验证结果，不代表所有实际代码审查都达到同样可靠性。",
      "en": "GitHub launches the ReviewBench research preview with 219 public pull requests from 187 repositories across 19 languages. It combines human, model and static-analysis findings, separates precision, recall and severity, and publishes its evaluation method. GitHub reports 96.6% agreement in an internal engineer audit independent of dataset construction. That is a publisher-reported validation result, not a reliability guarantee for every real review.",
      "href": "https://github.blog/ai-and-ml/github-copilot/reviewbench-an-open-benchmark-for-ai-code-review/"
    },
    {
      "index": "02",
      "label": "CODING AGENTS · 官方发布",
      "source": "GitHub / Copilot CLI",
      "date": "2026.10.05 · 19:42 UTC",
      "zhTitle": "Copilot CLI 1.0.92 改进环境选择、上下文保留与连接恢复",
      "enTitle": "Copilot CLI 1.0.92 improves environment selection and session recovery",
      "zh": "官方1.0.92发布说明新增会话前本地／云端环境选择器和配置子命令，并列出上下文压缩保留最新请求、MCP 空闲连接重连等修复。沙箱默认不再传入环境中的 GITHUB_TOKEN，除非明确配置。以上是已发布版本的官方变更记录；本刊没有独立运行该版本，不能据此认定所有平台的相关问题均已消失。",
      "en": "The official 1.0.92 notes add a pre-conversation local/cloud environment picker and configuration subcommands, and describe fixes for retaining the latest request during compaction and reconnecting idle MCP sessions. Sandboxed shells now withhold ambient GITHUB_TOKEN unless explicitly configured. These are published release notes; we have not independently run this version or verified every platform-specific fix.",
      "href": "https://github.com/github/copilot-cli/releases/tag/v1.0.92"
    },
    {
      "index": "03",
      "label": "DEVELOPER SECURITY · 官方更新",
      "source": "GitHub Changelog",
      "date": "2026.10.05 · 22:42 UTC",
      "zhTitle": "GitHub 密钥扫描新增 Lovable 与 Pydantic AI 网关等检测器",
      "enTitle": "GitHub expands secret scanning to Lovable and Pydantic AI gateway keys",
      "zh": "GitHub 公布五类新增密钥检测，涉及 Lovable API、Logfire、Pydantic AI Gateway，以及两类 Supabase 令牌。Lovable 同时加入合作伙伴计划：在公开仓库发现对应密钥时，GitHub 会通知签发方，以便撤销或轮换。检测支持有助于降低 AI 开发工具凭据误提交的风险，但不等于覆盖所有泄露路径，也不保证密钥已自动撤销。",
      "en": "GitHub adds five secret detectors covering Lovable API keys, Logfire tokens, Pydantic AI Gateway keys and two Supabase token types. Lovable also joins the partner program: matching secrets found in public repositories are reported to the issuer for revocation or rotation. Broader detection can reduce exposure from committed AI-tool credentials; it does not cover every leak path or guarantee automatic revocation.",
      "href": "https://github.blog/changelog/2026-10-05-secret-scanning-adds-detectors-for-lovable-supabase-and-more/"
    },
    {
      "index": "04",
      "label": "HEALTH AI · 厂商案例",
      "source": "NVIDIA",
      "date": "2026.10.05 · 13:00 UTC",
      "zhTitle": "NVIDIA 梳理乳腺医疗 AI 应用，明确部分技术仍在研究阶段",
      "enTitle": "NVIDIA surveys breast-care AI, noting that some technologies remain investigational",
      "zh": "NVIDIA 发布 Inception 企业应用综述，涵盖自动超声、乳腺密度评估、数字病理与三维肿瘤可视化。文章介绍 iSono Health、Whiterabbit.ai、Ataraxis AI 和 SimBioSys 的工作，同时注明部分技术尚未获 FDA 商业使用批准。这是厂商对合作生态的介绍，并非当天所有产品的新上市公告或统一临床试验；临床效果与适用范围应按具体产品证据分别判断。",
      "en": "NVIDIA profiles Inception companies working on automated ultrasound, breast-density assessment, digital pathology and 3D tumor visualization: iSono Health, Whiterabbit.ai, Ataraxis AI and SimBioSys. The article explicitly notes that some technologies remain investigational and lack FDA approval for commercial use. This is a vendor ecosystem overview, not a same-day launch of every product or a unified clinical trial; evidence and intended use must be assessed product by product.",
      "href": "https://blogs.nvidia.com/blog/ai-breast-cancer-startups/"
    }
  ]
};

export const issue032: Issue = {
  "number": "032",
  "date": "2026-10-05",
  "readingTime": "约 3 分钟",
  "heading": "两条更新，把运行条件说清楚",
  "noteTitle": "有用的进展，也包括把限制写出来。",
  "noteZh": "本期检索窗口为北京时间10月4日10:22至10月5日10:22。两条一手材料的发布时间分别为10月4日20:32和10月5日07:26（北京时间），均在窗口内。其余候选多为旧公告转述、未证实的发布计划或证据不足的主张，本期不凑数。我们的判断是：让智能体接入本地模型或邮箱之前，应先看清接口、权限和失败恢复方式。项目方的测试与安全设计说明值得参考，但不等于独立验证。",
  "noteEn": "Review window: October 4, 10:22 to October 5, 10:22, Beijing time. The two primary sources were published at 20:32 on October 4 and 07:26 on October 5, Beijing time, both within the window. Other candidates recycled older announcements, described unconfirmed release plans or lacked adequate evidence; this edition stays short. Our editorial view: before connecting agents to local models or email, inspect the interface, permissions and recovery behavior. Maintainer tests and security design notes are useful evidence, but not independent verification.",
  "stories": [
    {
      "index": "01",
      "label": "LOCAL INFERENCE · 维护者发布",
      "source": "Strata / GitHub",
      "date": "2026.10.04 · 12:32 UTC",
      "zhTitle": "Strata 0.1.39 增加并行请求与 Responses API，明确性能取舍",
      "enTitle": "Strata 0.1.39 adds parallel requests and a Responses API with explicit trade-offs",
      "zh": "Strata 发布0.1.39，新增可选并行会话及面向 Codex 的无状态 Responses API，并修复设置内存预算时的提示词处理退化。维护者在 RTX 5070 上测得四路请求使最后一路的等待从11.2秒降至1.8秒，但总解码速度降低11%。这些是项目自测，不能外推到所有硬件；旧显卡与 Intel Arc 路径仍属实验支持，部分设备未由维护者实机验证。接口不支持 previous_response_id、托管工具或推理摘要。",
      "en": "Strata releases 0.1.39 with optional parallel conversations, a stateless Responses API for Codex, and a fix for prompt-processing regressions under a RAM budget. In maintainer tests on an RTX 5070, four concurrent requests reduced the last request’s wait from 11.2 to 1.8 seconds while lowering aggregate decoding speed by 11%. These are project-run measurements, not guarantees across hardware. Older GPU and Intel Arc paths remain experimental, with some devices untested by maintainers. The API excludes previous_response_id, hosted tools and reasoning summaries.",
      "href": "https://github.com/Niko1221/Strata/releases/tag/v0.1.39"
    },
    {
      "index": "02",
      "label": "AGENT CONNECTORS · 作者说明",
      "source": "inboxmcp 作者 / Hugging Face",
      "date": "2026.10.04 · 23:26 UTC",
      "zhTitle": "inboxmcp 公开邮箱智能体设计：只读收信，按连接记录处理进度",
      "enTitle": "inboxmcp details read-only email access and per-agent processing checkpoints",
      "zh": "inboxmcp 作者发布设计说明：托管 MCP 服务通过只读 IMAP 收集新邮件，让用户自己的智能体依据个人规则决定是否提醒；批次领取与完成确认分开，未确认的邮件可在中断后继续处理。作者称工具不能发送、删除或移动邮件，并将邮件正文与用户规则分离。只读并不消除读取敏感邮件或提示注入的风险；这些是作者的实现与安全主张，未经本刊独立审计。当前不解析附件、不提供全文搜索，也不导入启用收集之前的邮件。",
      "en": "The maker of inboxmcp publishes design notes for a hosted MCP service that collects new mail through read-only IMAP and lets a user’s own agent decide when to notify them. Separate batch-claim and completion steps leave unconfirmed messages available after interruption. The author says tools cannot send, delete or move mail, and email content is separated from owner instructions. Read-only access does not remove sensitive-data or prompt-injection risks; these implementation and security claims have not been independently audited here. Attachment parsing, full-text search and importing mail from before collection began are not supported.",
      "href": "https://huggingface.co/blog/dylantom2012/inboxmcp-agent-email-mcp"
    }
  ]
};

export const issue031: Issue = {
  number: "031",
  date: "2026-10-04",
  readingTime: "约 3 分钟",
  heading: "两条消息，让能力接受检验",
  noteTitle: "能运行，还要能反复做对。",
  noteZh: "本期检索窗口为北京时间10月3日10:30至10月4日10:30。两篇一手公告均标注10月3日，但未公开可靠的发布时间与时区，无法逐条确认小时级的24小时边界。其余候选多为旧闻转述或证据不足，本期只收录两条。开放权重让部署更可控，检查最终状态让结果更可核实。我们的判断是：真正有用的能力，需要清楚的使用边界和重复检验；模型会调用工具，也不等于任务已正确完成。",
  noteEn: "Reviewed for the window from 10:30 on October 3 to 10:30 on October 4, Beijing time. Both primary announcements are dated October 3, but reliable publication times and time zones were unavailable, so exact 24-hour inclusion cannot be established. Other candidates were older coverage or lacked sufficient evidence; this edition contains only two items. Open weights offer deployment control; final-state checks make outcomes inspectable. Our editorial view: useful capability needs clear limits and repeated testing. Calling a tool does not establish that the task was completed correctly.",
  stories: [
    {
      index: "01",
      label: "OPEN MODEL · 开放权重",
      source: "Aleph Alpha",
      date: "2026.10.03",
      zhTitle: "Aleph Alpha 开放 Kolibri 1，聚焦德英双语与可控推理",
      enTitle: "Aleph Alpha releases open-weight Kolibri 1 for German-English workloads",
      zh: "Aleph Alpha 以 Apache 2.0 许可发布 Kolibri 1 权重。这个混合专家模型含781亿总参数，每 token 激活约34.6亿参数，支持工具调用和四档推理强度。原生上下文为262,144 token；厂商称已验证可扩展至1,048,576，但建议复杂任务与高效部署使用不超过262,144。扩展效果与性能比较属于厂商测试，不能视为任意任务的保证。",
      en: "Aleph Alpha releases Kolibri 1 weights under Apache 2.0. The German-English mixture-of-experts model has 78.1B total and 3.46B active parameters per token, tool calling and four reasoning-effort levels. Native context is 262,144 tokens; the company reports validated extension to 1,048,576, while recommending at most 262,144 for complex tasks and efficient serving. Context-extension and performance claims are vendor-tested, not guarantees for every task.",
      href: "https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/"
    },
    {
      index: "02",
      label: "AGENT EVALUATION · 团队实验",
      source: "Microsoft / Hugging Face",
      date: "2026.10.03",
      zhTitle: "ThinkingBox 接入 Hugging Face，以数据库最终状态检验智能体",
      enTitle: "ThinkingBox comes to Hugging Face to test agents against final database state",
      zh: "微软与 Hugging Face 介绍 ThinkingBox 的开放评测环境及 OpenEnv 接口：在507种有状态业务流程中，每个任务独立运行20次，检查最终记录、遗漏和额外副作用。新公告强调一次成功与重复可靠性的差别。底层预印本8月已发布、10月1日修订，尚未确认同行评审；结果来自团队构造的模拟流程，不是实际客户业务的成功率，不能把工具正常返回当成任务完成。",
      en: "Microsoft and Hugging Face introduce ThinkingBox's evaluation environment through OpenEnv. Across 507 stateful business workflows, each task runs independently 20 times; checks inspect final records, missing changes and unwanted side effects. The new announcement emphasizes repeatability rather than one successful run. Its underlying preprint appeared in August and was revised October 1; peer review is not established. Team-run results on synthetic workflows do not measure success in real customer operations, and a clean tool response does not prove completion.",
      href: "https://huggingface.co/blog/microsoft/thinkingbox"
    }
  ]
};

export const issue030: Issue = {
  "number": "030",
  "date": "2026-10-03",
  "readingTime": "约 6 分钟",
  "heading": "六条消息，补齐 AI 落地的条件",
  "noteTitle": "能力落地，需要一整套可检查的条件。",
  "noteZh": "本期检索窗口为北京时间10月2日10:23至10月3日10:23；六篇一手文章均标注10月2日，但未取得可靠的小时与时区，不能逐条确认严格落在24小时内。开放模型、本地硬件、决策接口、工程师培训、隐私设计与生产指南，分别补上实际使用的一部分。我们的判断是：AI 的进展也在于让人更容易部署、检查和调整系统。已发布的工具、未来承诺与厂商自测应分开阅读；不把旧评测当作今天的结论，也不用重复消息凑数。",
  "noteEn": "The review window is 10:23 on October 2 to 10:23 on October 3, Beijing time. All six primary articles are dated October 2, but reliable times and time zones were unavailable, so exact 24-hour inclusion cannot be established for each. Open models, local hardware, decision APIs, training, privacy design and production guidance address different practical needs. Our editorial view: progress also means making systems easier to deploy, inspect and adjust. Released tools, future commitments and vendor measurements are distinct evidence; older evaluations should not be presented as current conclusions.",
  "stories": [
    {
      "index": "01",
      "label": "SCIENCE MODELS · 开放模型",
      "source": "Ai2",
      "date": "2026.10.02",
      "zhTitle": "Ai2 开放 AstaBrief 8B，用文献片段生成带引用的科研报告",
      "enTitle": "Ai2 releases AstaBrief 8B for cited scientific reports",
      "zh": "Ai2 开放 AstaBrief 8B 的权重与训练数据，并将其用于 Asta 的 Fast 模式。模型根据研究问题和检索片段一次生成报告。团队报告完整流程平均耗时51.1秒，Thinking 模式为178.5秒。评测大多完成于2025年，尚未针对当前前沿模型重跑，不能据此声称追平今天的最佳模型。",
      "en": "Ai2 releases AstaBrief 8B weights and training data for one-pass, cited reports from questions and retrieved excerpts. It reports average end-to-end times of 51.1 seconds in Fast mode versus 178.5 seconds in Thinking mode. Most evaluation was completed in 2025 and has not been rerun against current frontier models, so this does not establish present-day quality parity.",
      "href": "https://allenai.org/blog/astabrief"
    },
    {
      "index": "02",
      "label": "LOCAL AI · 硬件预告",
      "source": "NVIDIA",
      "date": "2026.10.02",
      "zhTitle": "NVIDIA 预告 64GB 版 DGX Spark，10月23日起上市",
      "enTitle": "NVIDIA announces a 64GB DGX Spark configuration for October 23",
      "zh": "NVIDIA 宣布64GB统一内存版 DGX Spark 将由六家制造商伙伴推出，10月23日起上市，起价4,999美元；保留 GB10 芯片与 DGX 软件栈，并通过 Sync Cluster Assistant 连接两台设备。日期和价格属于发布方预告；双机最高1.7倍性能来自其特定模型测试，不是所有任务的保证。",
      "en": "NVIDIA announces a 64GB unified-memory DGX Spark through six manufacturing partners from October 23, starting at $4,999. It retains the GB10 chip and DGX stack, with Sync Cluster Assistant connecting two systems. Availability and pricing are announced plans; the claimed up-to-1.7× two-system performance comes from a particular NVIDIA test, not every workload.",
      "href": "https://blogs.nvidia.com/blog/local-ai-dgx-spark-64gb-sync/"
    },
    {
      "index": "03",
      "label": "OPEN TOOLS · 维护者公告",
      "source": "ggml-org / Hugging Face",
      "date": "2026.10.02",
      "zhTitle": "llama.cpp 新增决策模型接口，为预设选项直接评分",
      "enTitle": "llama.cpp adds an endpoint that scores predefined decisions",
      "zh": "维护者介绍新的 /v1/systemone 接口：读取输入状态后，对选择、分级评分或是非问题输出概率，适用于路由和智能体步骤判断。首批支持多种文本模型及可读图像的 OpenJev。概率仍是模型判断，阈值应在实际任务中测试；模型许可各异，不能假设全部可不受限制地商用。",
      "en": "Maintainers introduce /v1/systemone to score choice, graded-score and yes/no questions from an input state, supporting routing and agent-step checks. Initial models include text models and image-capable OpenJev. Probabilities remain model judgments, so thresholds need testing on real tasks. Licenses differ; unrestricted commercial use should not be assumed for every model.",
      "href": "https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp"
    },
    {
      "index": "04",
      "label": "AI TRAINING · 人才计划",
      "source": "Anthropic",
      "date": "2026.10.02",
      "zhTitle": "Anthropic 承诺投入1亿美元，培养企业 AI 部署工程师",
      "enTitle": "Anthropic commits $100 million to enterprise AI engineering training",
      "zh": "Anthropic 推出 Claude Frontier Academy，承诺投入1亿美元，目标在2027年底前培养一万名 Frontier Deployed Engineers。课程结合现场培训、考核与12周企业项目实践，首批已在三个城市开展。资金是承诺，人数是未来目标；参与者由组织提名，并非面向所有人的公开报名。",
      "en": "Anthropic launches Claude Frontier Academy with a $100 million commitment and a goal of training 10,000 Frontier Deployed Engineers by the end of 2027. Cohorts in three cities combine in-person assessment with a 12-week workplace residency. The funding is a commitment and the headcount a future target; participation is by organizational nomination.",
      "href": "https://www.anthropic.com/news/claude-frontier-academy"
    },
    {
      "index": "05",
      "label": "PRIVACY · 技术说明",
      "source": "Google Research",
      "date": "2026.10.02",
      "zhTitle": "Google 介绍可审计的联邦学习：加密数据在可信环境中处理",
      "enTitle": "Google details auditable federated learning with trusted execution environments",
      "zh": "Google 介绍基于可信执行环境的联邦学习系统：设备上传加密数据，服务器按预先批准的策略处理，透明日志与可复现构建支持外部核查。Google 称已用于 Gboard 英日语下一词预测。此为新的技术说明，论文更早发布；隐私保证依赖硬件与系统假设，仍存在侧信道等限制。",
      "en": "Google describes federated learning that uploads encrypted device data for server-side processing under preapproved policies in trusted execution environments. Transparency logs and reproducible builds enable external checks. Google says it is used for English and Japanese Gboard prediction. This is a new technical explanation of earlier research; privacy assurances depend on hardware and system assumptions, with side-channel limitations remaining.",
      "href": "https://research.google/blog/toward-provably-private-learning-from-federated-data/"
    },
    {
      "index": "06",
      "label": "MODEL PRACTICE · 生产指南",
      "source": "OpenAI",
      "date": "2026.10.02",
      "zhTitle": "OpenAI 发布 GPT-6 使用指南，强调真实任务的成功率与成本",
      "enTitle": "OpenAI publishes a GPT-6 guide focused on real-task success and cost",
      "zh": "OpenAI 的新指南整理模型选择、推理强度、缓存、上下文压缩及长时间任务管理。建议以真实任务成功率、延迟和每次成功的成本选择配置，并明确任务中途调整、异步工具与并行工作的边界。这是实践指南，不是新模型发布；其中客户案例也不能替代独立评测。",
      "en": "OpenAI publishes guidance on model selection, reasoning effort, caching, compaction and long-running work. It recommends measuring real-task success, latency and cost per successful outcome, with clear boundaries for steering, asynchronous tools and parallel work. This is practical guidance rather than a new model launch, and its customer examples do not replace independent evaluation.",
      "href": "https://openai.com/index/practical-guide-building-gpt-6/"
    }
  ]
};

export const issue029: Issue = {
  "number": "029",
  "date": "2026-10-02",
  "readingTime": "约 5 分钟",
  "heading": "五条消息，让智能体更接近实际工作",
  "noteTitle": "速度之外，把验证留在流程里。",
  "noteZh": "本期检索截至北京时间10月2日16时，重点关注最近24小时；收录的一手文章标注10月1日至2日，但部分未公开小时和时区，不能逐条证明严格落在24小时内。五条消息分别涉及合成训练数据、开放训练设施、语音交互、推理速度和企业应用。我们的判断是：更短的等待值得关注，但任务能否完成、结果如何核实同样重要。厂商性能数字、受控实验和未来采用目标，各有证据边界，不能互相替代。",
  "noteEn": "Reviewed at 16:00 Beijing time on October 2, focusing on the preceding 24 hours. These primary articles are dated October 1–2, but some omit a time and timezone, so strict 24-hour inclusion cannot be established for every item. They cover synthetic training data, open training infrastructure, voice interaction, inference speed, and enterprise use. Our editorial view: shorter waits matter, but so do task completion and verification. Vendor metrics, controlled experiments, and future adoption targets are different kinds of evidence.",
  "stories": [
    {
      "index": "01",
      "label": "AGENT TRAINING · 团队实验",
      "source": "ServiceNow CoreAI / Hugging Face",
      "date": "2026.10.02",
      "zhTitle": "AutoSynthData 从失败任务中生成可验证的企业智能体训练数据",
      "enTitle": "AutoSynthData turns agent failures into verifiable enterprise training tasks",
      "zh": "ServiceNow 介绍用目标模型失败与教师模型成功案例定位能力缺口，再生成并执行检验新的训练任务。团队在 EnterpriseOps Gym 的 Hybrid 实验中报告，合成数据微调使平均 Pass@1 提高7.2个百分点。结果来自团队在特定环境中的实验，并非任意企业流程的效果保证；验证器本身也需检查是否会错误奖励失败。",
      "en": "ServiceNow describes locating capability gaps through a target model's failures and a teacher's successes, then generating and executing checks on new training tasks. The team reports a 7.2-percentage-point mean Pass@1 gain after synthetic-data fine-tuning in EnterpriseOps Gym Hybrid. These are team-run results in a specific environment, not a guarantee across enterprise workflows; verifiers must also be checked for rewarding incorrect outcomes.",
      "href": "https://huggingface.co/blog/ServiceNow-AI/autosynthdata"
    },
    {
      "index": "02",
      "label": "OPEN INFRASTRUCTURE · 系统基准",
      "source": "Ai2 / Hugging Face",
      "date": "2026.10.01",
      "zhTitle": "Olmo-core 3 开放面向大型混合专家模型的训练设施",
      "enTitle": "Olmo-core 3 opens a training stack for large mixture-of-experts models",
      "zh": "Ai2 发布重新设计的 MoE 训练系统，让专家权重常驻 GPU，并优化数据路由与并行。团队报告一项测试把专家数从8增至128时，吞吐量下降不足5%。万亿参数级测试衡量的是系统容量与性能，部分采用随机路由或短时运行，不能解读为已完成同规模模型训练，更不能直接推出模型质量。",
      "en": "Ai2 releases a redesigned MoE training stack that keeps expert weights resident on GPUs and optimizes routing and parallelism. In one team benchmark, increasing experts from 8 to 128 reduced throughput by less than 5%. Trillion-parameter tests assess system capacity and performance; some use random routing or short runs. They do not establish completed training or model quality at that scale.",
      "href": "https://huggingface.co/blog/allenai/olmocore3"
    },
    {
      "index": "03",
      "label": "VOICE AI · 产品公告",
      "source": "Microsoft AI",
      "date": "2026.10.01",
      "zhTitle": "微软推出流式转写与多语言语音模型",
      "enTitle": "Microsoft introduces streaming transcription and multilingual voice models",
      "zh": "微软发布 MAI-Transcribe-2-Streaming，以及 MAI-Voice-2.1 和 Flash 版本。公告称流式转写支持60种语言，先输出临时文字再随上下文修订；语音生成支持23种语言、26个地区版本。延迟与排名数字有测试条件，不能视为所有网络、口音和实际应用的表现保证；语音克隆也需要明确同意与防滥用措施。",
      "en": "Microsoft announces MAI-Transcribe-2-Streaming alongside MAI-Voice-2.1 and its Flash variant. It says transcription supports 60 languages, emitting partial text that is revised with context; speech generation supports 23 languages and 26 locales. Latency and ranking claims depend on test conditions, not every network, accent, or application. Voice cloning also requires consent and safeguards against misuse.",
      "href": "https://microsoft.ai/news/our-first-streaming-transcription-model/"
    },
    {
      "index": "04",
      "label": "INFERENCE · 厂商性能说明",
      "source": "NVIDIA",
      "date": "2026.10.01",
      "zhTitle": "NVIDIA 说明 Blackwell 如何加速 GPT-6 Astra Ultrafast 推理",
      "enTitle": "NVIDIA outlines Blackwell acceleration for GPT-6 Astra Ultrafast",
      "zh": "NVIDIA 表示，Blackwell GPU 与推理软件优化共同支持 GPT-6 Astra Ultrafast，并称 token 生成速度最高为 Astra Standard 的8倍。这里比较的是厂商公布的生成性能，不是整项任务完成时间、正确率或所有请求的固定加速倍数；工具调用与外部服务仍会影响端到端等待。",
      "en": "NVIDIA says Blackwell GPUs and inference-software optimizations support GPT-6 Astra Ultrafast, with token generation up to eight times faster than Astra Standard. This is a vendor-reported generation metric, not total task duration, accuracy, or a fixed speedup for every request. Tool calls and external services still affect end-to-end waiting time.",
      "href": "https://blogs.nvidia.com/blog/gpus-openai-gpt-6-astra-ultrafast/"
    },
    {
      "index": "05",
      "label": "ENTERPRISE · 合作方披露",
      "source": "Anthropic",
      "date": "2026.10.01",
      "zhTitle": "Barclays 扩大 Claude 应用，软件开发采用率目标指向年底",
      "enTitle": "Barclays expands Claude use with a year-end developer adoption target",
      "zh": "Anthropic 宣布 Barclays 扩大合作，涵盖软件开发、旧系统现代化与内部知识检索。公告称已有逾1.6万名员工采用知识助手，并计划到2026年底让 Claude Code 覆盖一半开发人员。已披露的使用规模与未来目标应分开看，公告本身并未独立证明全行生产率或客户体验的改善幅度。",
      "en": "Anthropic announces expanded Barclays collaboration across software development, legacy modernization, and internal knowledge retrieval. It reports more than 16,000 colleagues using a knowledge assistant and targets Claude Code adoption by half of developers by the end of 2026. Reported use and future targets should be distinguished; the announcement does not independently measure bank-wide productivity or customer-experience gains.",
      "href": "https://www.anthropic.com/news/barclays-scales-claude"
    }
  ]
};

export const issue028: Issue = {
  number: "028", date: "2026-09-30", readingTime: "约 4 分钟", heading: "四条消息，从预测到人与工具",
  noteTitle: "让结果带着它的来处。",
  noteZh: "本期选择四条 9 月 29 日的一手信息；部分来源只标日期，无法逐条确认严格的小时级窗口。模型发布、修复案例、理论研究和新书观点分别回答不同的问题。我们的判断是：值得留下的进展不只有更高分数，也包括可复现的步骤、清楚的适用条件，以及对使用方式的反思。没有充分核实的条目暂不收录，不用数量替代可信度。",
  noteEn: "Four primary-source items dated September 29; some provide dates without exact times, so a strict hourly window cannot be confirmed for every item. A model release, a repair workflow, theoretical research, and a new book address different questions. Our editorial judgment is that progress includes reproducible steps, clear conditions, and reflection on use—not only higher scores. Items without sufficient verification are omitted rather than added to meet a quota.",
  stories: [
    { index: "01", label: "TABULAR AI · 开放模型", source: "NVIDIA / Hugging Face", date: "2026.09.29",
      zhTitle: "NVIDIA 发布 Kumo Tabular，用已标注表格直接进行预测",
      enTitle: "NVIDIA releases Kumo Tabular for prediction from labeled tables",
      zh: "NVIDIA 发布面向表格分类与回归的基础模型，提供 2800 万至 2.15 亿参数的三个规模，称预训练仅使用人工生成数据。模型读取带标签的样例行后即可预测新行，无需为每个任务重新训练。厂商报告其在四项基准中领先；这不等于任意业务数据上的效果保证，仍需检查数据质量、任务差异与实际误差。",
      en: "NVIDIA releases a foundation model for tabular classification and regression in three sizes, from 28 million to 215 million parameters, pretrained only on artificial data according to the company. It predicts new rows from labeled examples without task-specific retraining. NVIDIA reports leading results on four benchmarks. This is not a guarantee for every business dataset: data quality, task differences, and real errors still need evaluation.",
      href: "https://huggingface.co/blog/nvidia/kumo-tabular" },
    { index: "02", label: "CODING AGENTS · 工程案例", source: "Hugging Face", date: "2026.09.29",
      zhTitle: "Hugging Face 拆解 Serge 的夜间修复流程，合并仍由维护者决定",
      enTitle: "Hugging Face details Serge's overnight repair loop, with maintainers controlling merges",
      zh: "团队介绍 Serge 如何筛选持续失败的 Transformers 测试、复现问题、检查重复工作、生成补丁并验证后提交 PR。文章称约 80 天内已有 29 项修复被合并。任务运行在隔离环境中，智能体只能推送限定分支和提交 PR，不能自行合并主分支。这是团队项目经验，不是对所有代码库都成立的自主修复成功率。",
      en: "The team describes how Serge selects persistent Transformers test failures, reproduces them, checks for duplicate work, patches, verifies, and opens pull requests. It reports 29 merged fixes over roughly 80 days. Tasks run in isolated environments; the agent can push restricted branches and open PRs, but maintainers control merges. These are project-specific results, not a general autonomous-repair success rate.",
      href: "https://huggingface.co/blog/huggingface/anatomy-of-a-bug-fixing-agent" },
    { index: "03", label: "ALGORITHM RESEARCH · 理论研究", source: "MIT News", date: "2026.09.29",
      zhTitle: "MIT 研究：共用一种招聘算法的影响，取决于具体设计",
      enTitle: "MIT research finds that shared hiring algorithms depend on their design",
      zh: "MIT 介绍发表于 Philosophical Perspectives 的研究，分析多家企业采用同一招聘算法的利弊。研究指出，同质信息可能限制探索，但在所研究的条件下，把多种算法组合成集成模型能缓解这一问题。结论来自形式化分析与特定情境，不能泛化成所有自动招聘系统都公平，也不是对现实招聘效果的全面验证。",
      en: "MIT reports research in Philosophical Perspectives examining the trade-offs when firms share a hiring algorithm. Homogeneous information can limit exploration, while an ensemble of algorithms can address that problem under the studied conditions. Formal analysis in specific settings does not establish that all automated hiring systems are fair or comprehensively validate real-world hiring outcomes.",
      href: "https://news.mit.edu/2026/algorithmic-monoculture-effects-depend-on-details-0929" },
    { index: "04", label: "HUMAN–AI · 新书与作者观点", source: "MIT News", date: "2026.09.29",
      zhTitle: "Sherry Turkle 新书讨论聊天机器人如何影响人与人的交往",
      enTitle: "Sherry Turkle's new book examines chatbots and human relationships",
      zh: "MIT 介绍 Turkle 当天出版的新书 Artificial Intimacy。作者结合访谈与既有材料，担忧持续获得机器的迎合会削弱人们练习真实交流、应对分歧的意愿，并呼吁认真区分模拟的回应与人的关系。这是新书中的论证与作者观点，不应写成适用于每位使用者的已证实因果结论。",
      en: "MIT introduces Turkle's newly published Artificial Intimacy. Drawing on interviews and existing material, she argues that constant affirmation from chatbots may reduce willingness to practice human interaction and navigate disagreement, and urges a distinction between simulated responses and human relationships. These are the book's arguments and the author's views, not established causal conclusions for every user.",
      href: "https://news.mit.edu/2026/when-we-talk-to-machines-sherry-turkle-book-0929" },
  ],
};

export const issue027: Issue = {
  number: "027", date: "2026-09-29", readingTime: "约 4 分钟", heading: "四条新消息，四种证据边界",
  noteTitle: "能力之外，也要看证据。",
  noteZh: "本期选四条 9 月 28 日的一手信息，不用旧闻凑数；来源未全部提供具体时刻，因此无法逐条确认严格的小时级窗口。开放模型、实验室配方、身份管理预览与机器人评测札记，是四种不同阶段的进展。我们的判断是：理解 AI 的变化，需要同时看它能做什么，以及证据支持到哪里。公司自测不是独立复现，动物实验不是临床应用，研究方向也不是已经完成的结果。",
  noteEn: "This edition selects four primary-source updates dated September 28 without padding the count with older news. Not every source supplies a timestamp, so a strict hourly window cannot be confirmed for each item. Open models, laboratory formulations, an identity-management preview, and a robotics research note represent different stages of progress. Our editorial judgment: understanding AI requires asking both what it can do and how far the evidence reaches. Vendor tests are not independent replication, animal experiments are not clinical use, and research directions are not completed results.",
  stories: [
    { index: "01", label: "COMPUTER USE · 开放模型", source: "H Company / Hugging Face", date: "2026.09.28",
      zhTitle: "Holo4 结合界面操作、代码与工具调用，并公开评测轨迹",
      enTitle: "Holo4 combines interface control, code, and tool calls, with public evaluation traces",
      zh: "H Company 发布 Holo4 的 27B 稠密模型与 35B-A3B 混合专家模型，通过 API 和多种权重格式提供使用，并公开可回放的评测轨迹。模型旨在结合图形界面、代码、MCP 与 API 完成任务。性能和成本数据来自团队测试；不同测试框架、版本和任务子集并非严格可比，开放轨迹也不等于在任意真实环境中可靠运行。",
      en: "H Company releases Holo4 as a 27B dense model and a 35B-A3B mixture-of-experts model through an API and several weight formats, alongside replayable evaluation traces. The models combine graphical interfaces, code, MCP, and APIs. Performance and cost figures are team-reported; different harnesses, versions, and task subsets are not strictly comparable. Open traces do not establish reliability in every real environment.",
      href: "https://huggingface.co/blog/Hcompany/holo4" },
    { index: "02", label: "AI FOR SCIENCE · 临床前研究", source: "MIT News", date: "2026.09.28",
      zhTitle: "MIT 用小数据 AI 辅助寻找更耐热的 RNA 配方",
      enTitle: "MIT uses data-efficient AI to help find more heat-stable RNA formulations",
      zh: "MIT 报道，研究者用实验与 AI 迭代优化脂质纳米颗粒配方，使真空干燥后的 RNA 制剂在室温一年或 37°C 两个月后仍保持稳定，并进行了小鼠免疫实验。成果发表于 Nature Biotechnology。这是细胞与动物阶段的研究，不是已获批的人用产品，也不能据此改变现有疫苗的储存要求。",
      en: "MIT reports an experimental and AI-guided search for lipid-nanoparticle formulations. Vacuum-dried RNA preparations remained stable after a year at room temperature or two months at 37°C, followed by immune-response tests in mice. The work appears in Nature Biotechnology. These are cell and animal-stage findings, not an approved human product or a basis for changing existing vaccine-storage requirements.",
      href: "https://news.mit.edu/2026/new-formulation-helps-rna-vaccines-withstand-high-temperatures-0928" },
    { index: "03", label: "AGENT IDENTITY · 产品预览", source: "IBM", date: "2026.09.28",
      zhTitle: "IBM 介绍智能体身份与 NVIDIA OpenShell 的集成",
      enTitle: "IBM details agent-identity integration with NVIDIA OpenShell",
      zh: "IBM 介绍处于公开预览阶段的 Agent Identity，以及 HashiCorp Vault 与 NVIDIA OpenShell 的集成，重点是让智能体带着身份、在最小必要权限内使用资源。公告还涉及身份监测等配套能力。这里描述的是厂商发布的预览与集成方向，不代表所有组件均已全面可用，也不是独立验证的安全保证。",
      en: "IBM describes Agent Identity in public preview and HashiCorp Vault integration with NVIDIA OpenShell, emphasizing identifiable agents and least-privilege resource access. The announcement also covers related identity-monitoring capabilities. These are vendor-announced previews and integrations, not evidence that every component is generally available or an independently verified security guarantee.",
      href: "https://newsroom.ibm.com/blog-building-trust-into-the-next-generation-of-ai-agents" },
    { index: "04", label: "ROBOTICS · 团队研究札记", source: "ProjectSim / Hugging Face", date: "2026.09.28",
      zhTitle: "ProjectSim 梳理机器人评测，追问仿真能否对应现实",
      enTitle: "ProjectSim reviews robotics benchmarks and asks how simulation tracks reality",
      zh: "ProjectSim 的研究札记区分组件、任务、稳健性和真实环境等评测层次，并介绍比较真实场景与重建仿真场景表现的早期工作。重点是检验仿真保真度，而不是把不同排行榜的分数直接互换。文章属于团队方法综述与研究方向说明，尚不能据此断言重建仿真已普遍改善机器人训练。",
      en: "A ProjectSim research note separates component, task, robustness, and real-world evaluation, then outlines early work comparing physical settings with reconstructed simulations. The focus is simulation fidelity rather than treating leaderboard scores as interchangeable. This is a team methodological review and research direction, not proof that reconstructed simulation already improves robot training generally.",
      href: "https://huggingface.co/blog/projectsim/robotics-benchmarking-where-we-are-and-what-comes" },
  ],
};

export const issue026: Issue = {
  number: "026",
  date: "2026-09-24",
  readingTime: "约 5 分钟",
  heading: "五件值得知道的事",
  noteTitle: "不只听见答案，也要辨清边界。",
  noteZh: "本期选五条 9 月 23 日的一手更新；部分来源只标日期，无法精确确认小时级时效。语音模型区分说话者，企业工具整理流程，研究尝试区分自信与正确。我们的共同线索是：AI 越接近日常，越需要明确它识别了什么、遗漏了什么、谁来确认改变。这是编辑归纳。产品参数来自厂商，研究结果有实验范围，合作计划也不是已经完成的突破。",
  noteEn: "Five primary-source updates dated September 23; some sources omit exact publication times. A speech model separates speakers, an enterprise tool organizes processes, and research distinguishes confidence from correctness. Our editorial thread is that everyday AI needs clearer boundaries: what it identifies, what it misses, and who approves changes. Product specifications are vendor-reported, research has experimental limits, and collaboration plans are not completed breakthroughs.",
  stories: [
    {
      index: "01", label: "SPEECH AI · 开放权重", source: "NVIDIA", date: "2026.09.23",
      zhTitle: "Nemotron 3 Diarization 将说话人分离扩展到八个声道",
      enTitle: "Nemotron 3 Diarization supports up to eight speaker channels",
      zh: "NVIDIA 介绍一亿参数的开放权重模型，支持实时与录音中的重叠发言，输出匿名说话人标签和时间段，而不是人物身份或文字转录。最低推荐输入缓冲为 0.32 秒，不包含计算、网络和语音识别耗时。文章报告的误差改善来自所列评测条件，不能等同于任意真实会议的效果保证。",
      en: "NVIDIA presents a 100-million-parameter open-weight model for overlapping speech in live and recorded conversations. It outputs anonymous speaker labels and timestamps—not personal identities or transcripts. The lowest recommended input buffer is 0.32 seconds, excluding computation, networking, and speech recognition. Reported error improvements apply to the disclosed evaluations, not guaranteed performance in every meeting.",
      href: "https://huggingface.co/blog/nvidia/nemotron-diarization"
    },
    {
      index: "02", label: "AI GLASSES · 产品公告", source: "Meta", date: "2026.09.23",
      zhTitle: "Meta 公布音频眼镜与第三代 Ray-Ban Meta",
      enTitle: "Meta announces audio glasses and third-generation Ray-Ban Meta",
      zh: "Meta 在 Connect 公布 Ray-Ban Meta Audio，并称计划 10 月 13 日发货；第三代 Ray-Ban Meta 则于公告当天开售。公司还宣布把个人 AI 智能体 Muse 带到眼镜上。续航和功能表现属于厂商说明，预订、已开售硬件与后续软件能力应分开看，具体供应范围以当地官方页面为准。",
      en: "At Connect, Meta announces Ray-Ban Meta Audio with shipping planned for October 13, while Ray-Ban Meta Gen 3 goes on sale on the announcement date. Meta also announces bringing its personal AI agent Muse to the glasses. Battery and performance claims are vendor-reported; preorders, available hardware, and future software capabilities should be distinguished, with availability checked against local official listings.",
      href: "https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/"
    },
    {
      index: "03", label: "ENTERPRISE AI · 已宣布可用", source: "UiPath", date: "2026.09.23",
      zhTitle: "UiPath Cartographer 将流程知识整理为可审批的工作地图",
      enTitle: "UiPath Cartographer turns process knowledge into an approval-governed map",
      zh: "UiPath 宣布 Cartographer 已可用，通过引导式对话整理文档、步骤、规则与例外，并生成设计资料和实施规格。运行中的判断会成为修改建议，由地图负责人批准或拒绝，而非自行改写流程。减少访谈时间和改善自动化效果是厂商主张，本站未做独立效果测试。",
      en: "UiPath says Cartographer is available now. Guided conversations synthesize documents, steps, rules, and exceptions into a Map of Work with design documents and build specifications. Operational decisions become proposed changes for a named owner to approve or reject, rather than automatic process rewrites. Time savings and automation benefits remain vendor claims, not independently tested TUJL results.",
      href: "https://www.uipath.com/newsroom/uipath-launches-uipath-cartographer-map-of-work"
    },
    {
      index: "04", label: "RESEARCH · 大学报道", source: "UC Riverside", date: "2026.09.23",
      zhTitle: "UCR 研究区分语言模型内部的自信与正确性信号",
      enTitle: "UCR study separates internal signals of confidence and correctness",
      zh: "UCR 报道研究者用稀疏自编码器分析 Llama-3.1-8B 和 Gemma-2-9B 的多项选择回答。在一项选择性作答实验中，准确率由 62% 提高到 81%，代价是只回答约 53% 的问题。大学称论文已获 SIAM 数据挖掘会议接收。结果来自特定模型和实验，不代表所有回答都已可靠，也不是无代价的准确率提升。",
      en: "UCR reports sparse-autoencoder analysis of multiple-choice responses from Llama-3.1-8B and Gemma-2-9B. In one selective-answering experiment, accuracy rose from 62% to 81% while only about 53% of questions were answered. UCR says the paper was accepted by the SIAM data-mining conference. These model-specific experiments do not establish universal reliability or a cost-free accuracy improvement.",
      href: "https://news.ucr.edu/articles/2026/09/23/making-ai-more-trustworthy"
    },
    {
      index: "05", label: "AI FOR SCIENCE · 研究合作", source: "MIT News", date: "2026.09.23",
      zhTitle: "MIT 新任创新研究员将聚焦 AI 与科学发现",
      enTitle: "MIT's next Innovation Fellow will focus on AI and scientific discovery",
      zh: "MIT 宣布计算机科学家 David Siegel 将在 2026–27 学年担任 Innovation Fellow，与 Schwarzman 计算学院及研究人员探索 AI 如何支持科学发现。此项安排强调跨团队合作与研究方向，不是新模型或已验证科学成果的发布；其实际影响仍需后续项目来检验。",
      en: "MIT announces that computer scientist David Siegel will serve as an Innovation Fellow during the 2026–27 academic year, working with the Schwarzman College of Computing and researchers on AI-supported scientific discovery. This is a collaboration and research-direction announcement, not a new model or a validated scientific result; its impact remains to be demonstrated through subsequent work.",
      href: "https://news.mit.edu/2026/mit-welcomes-david-siegel-innovation-fellow-0923"
    }
  ]
};

export const issue025: Issue = {
  number: "025",
  date: "2026-09-23",
  readingTime: "约 5 分钟",
  heading: "五件值得知道的事",
  noteTitle: "让工具接得上，也让主张经得起核对。",
  noteZh: "本期选取 9 月 22 日发布的五条一手信息；部分来源只标日期，不能精确确认小时级时效。共同线索是让 AI 接入已有环境：熟悉的开发接口、可核对的测试、持续的开源维护，以及校园和工厂。这是编辑观察，不是共同研究结论。开发分支不等于稳定发行，签名不等于结果真实，宣布投入也不等于效果已经实现。",
  noteEn: "This edition selects five primary-source items dated September 22; some provide no exact publication time. Our editorial thread is AI connecting with existing environments: familiar APIs, inspectable tests, sustained open-source maintenance, campuses, and factories. This is an editorial interpretation, not a shared research finding. A development branch is not a stable release, a signature does not establish truth, and announced investment does not establish outcomes.",
  stories: [
    {
      index: "01", label: "LOCAL AI · 开发分支", source: "Hugging Face", date: "2026.09.22",
      zhTitle: "Transformers 接入 GGUF 量化推理，先支持 Apple Silicon",
      enTitle: "Transformers adds packed GGUF inference, starting with Apple Silicon",
      zh: "Hugging Face 介绍通过 ggml 内核在 Transformers 中直接运行压缩的 GGUF 权重，保留熟悉的模型加载与生成接口。首批重点是 Apple Silicon 的 MPS 后端及 Qwen3.5 系列；文章要求使用开发主分支，填充与批处理仍有限制。没有兼容内核时会回退到解量化，不能理解为所有硬件和模型都已获得同等支持。",
      en: "Hugging Face describes running packed GGUF weights inside Transformers through ggml kernels while retaining familiar loading and generation APIs. Initial support focuses on Apple Silicon's MPS backend and Qwen3.5 models. The article requires the development main branch and notes padding and batching limits. Without a compatible kernel, loading falls back to dequantization; support is not universal across hardware or models.",
      href: "https://huggingface.co/blog/transformers-llama-cpp-quants"
    },
    {
      index: "02", label: "BENCHMARKS · 开发者发布", source: "Basecompute / Lukas Wesemann", date: "2026.09.22",
      zhTitle: "Compute:Arena 将本地推理成绩与测试条件放在一起",
      enTitle: "Compute:Arena pairs local inference results with their test conditions",
      zh: "开发者发布公开排行榜与命令行工具，为模型文件、量化格式、芯片和运行程序记录身份及哈希，并保存温度、电源和内存等测试条件。测试可离线完成，提交前可查看将公开的数据。作者明确说明：报告签名只能证明签名后未被改动，不能证明机器报告真实；不同运行时的预热与执行顺序也不完全相同。",
      en: "The developer introduces a public leaderboard and CLI that identify model files, quantization formats, chips, and runtime binaries, alongside temperature, power, and memory conditions. Tests can run offline, with public data reviewed before submission. The author explicitly cautions that signatures establish integrity after signing, not truthful machine reports, and that runtime warmup and execution order are not identical.",
      href: "https://huggingface.co/blog/basecompute/local-inference-benchmarks-computearena"
    },
    {
      index: "03", label: "OPEN SOURCE · 维护投入", source: "Hugging Face", date: "2026.09.22",
      zhTitle: "oMLX 维护者加入 Hugging Face，项目继续采用 Apache 2.0",
      enTitle: "oMLX maintainer joins Hugging Face; the project retains Apache 2.0",
      zh: "Hugging Face 宣布 Jun Kim 加入团队，继续领导 oMLX，并获得全职维护与资金支持；项目许可证保持 Apache 2.0。团队还计划简化从 Transformers 模型定义到 MLX 参考实现的过程。此次消息是维护安排和发展方向的公告，不是新模型发布，也不能据此断言推理性能已经提升。",
      en: "Hugging Face announces that Jun Kim is joining the team, continuing to lead oMLX with full-time maintenance and funding while retaining Apache 2.0 licensing. A focus is simplifying the path from Transformers model definitions to reference MLX implementations. This announces maintenance arrangements and direction, not a new model release or an already demonstrated inference-speed improvement.",
      href: "https://huggingface.co/blog/omlx"
    },
    {
      index: "04", label: "EDUCATION · 校企合作", source: "Marist University", date: "2026.09.22",
      zhTitle: "Marist 与 IBM 建立面向跨学科 AI 实践的创新孵化器",
      enTitle: "Marist and IBM launch an incubator for interdisciplinary AI practice",
      zh: "Marist University 宣布与 IBM 建立创新孵化器，校园配置 IBM z17 主机，为学生和教师开发、测试应用提供企业级设备。合作从计算机教育扩展到跨专业研究与实践学习，拟连接教师研究人员及 IBM 专家。公告说明了设施与合作方向，尚不能据此评价学生学习成效或项目长期成果。",
      en: "Marist University announces an innovation incubator with IBM, including an IBM z17 mainframe for students and faculty to develop and test applications. The partnership expands beyond computing education toward interdisciplinary research and hands-on learning, connecting faculty researchers with IBM experts. The announcement establishes facilities and direction, not measured learning gains or long-term project outcomes.",
      href: "https://www.marist.edu/w/marist-ibm-2026"
    },
    {
      index: "05", label: "INDUSTRIAL AI · 产品计划", source: "QAD | Redzone", date: "2026.09.22",
      zhTitle: "QAD 展示跨系统制造业智能层，预计 2027 年春季上市",
      enTitle: "QAD previews a cross-system manufacturing intelligence layer for spring 2027",
      zh: "QAD | Redzone 公布 Manufacturing Intelligence，计划连接制造数据、工作流程与 AI，并扩展到不同厂商的现有系统。公司称将整合 NVIDIA 技术，本次活动提供演示，预计 2027 年春季上市。这里应区分现有平台与新智能层：跨系统行动能力和经营收益属于厂商愿景，本站尚未独立验证。",
      en: "QAD | Redzone unveils Manufacturing Intelligence, intended to connect manufacturing data, workflows, and AI across existing heterogeneous systems. The company plans NVIDIA integration, is demonstrating the concept at its event, and expects market availability in spring 2027. Its existing platform should be distinguished from this new layer: cross-system action and business benefits remain vendor claims, not independently verified TUJL findings.",
      href: "https://www.qad.com/press-release/qad-redzone-unveils-manufacturing-intelligence-and-announces-a-range-of-new-ai-powered-innovation-across-its-platform-outlining-its-vision-for-the-future-of-manufacturing"
    }
  ]
};

export const issue024: Issue = {
  number: "024",
  date: "2026-09-22",
  readingTime: "约 6 分钟",
  heading: "五件值得知道的事",
  noteTitle: "快一点，也要知道为什么。",
  noteZh: "本期五条信息均来自 9 月 21 日发布的一手文章；部分只标日期，无法精确确认小时级时效。分词提速、代码历史检索、跨机体迁移和压缩，都在减少重复工作；工作技能调查则提醒我们保留判断。这是编辑归纳，不是五项研究的共同结论。候选版不等于稳定版，自测不等于独立复现，调查中的担忧也不等于已证实的能力下降。",
  noteEn: "All five items come from primary-source articles dated September 21; some omit exact publication times. Faster tokenization, code-history retrieval, cross-body transfer, and compression seek to reduce repeated work, while a workforce survey highlights judgment. This is our editorial synthesis, not a shared research finding. Candidates are not stable releases, self-tests are not independent replications, and reported concerns do not prove declining ability.",
  stories: [
    {
      index: "01", label: "OPEN SOURCE · 候选版本", source: "Hugging Face", date: "2026.09.21",
      zhTitle: "tokenizers v1 候选版聚焦编码、解码与并行效率",
      enTitle: "tokenizers v1 candidate targets encoding, decoding, and parallel efficiency",
      zh: "Hugging Face 介绍 v1 候选版，目标是在保持 token ID 与现有接口兼容的同时优化缓存、分词和内存分配。团队报告，Apple M4 Max 单线程测试中，十个模型家族的编码速度达到 v0.23 的 3–30 倍。数字来自团队基准，且不包含 Python 封装开销；正式 1.0.0 仍有待完成的工作。",
      en: "Hugging Face describes a v1 candidate designed to preserve token IDs and API compatibility while improving caching, splitting, and allocation. Its benchmarks report 3–30× single-thread encoding speed versus v0.23 across ten model families on an Apple M4 Max. These are team-run measurements excluding Python-wrapper overhead; work remains before stable 1.0.0.",
      href: "https://huggingface.co/blog/tokenizers-v1"
    },
    {
      index: "02", label: "CODING AGENTS · 仓库记忆", source: "Tarek Ziadé / Hugging Face", date: "2026.09.21",
      zhTitle: "relore 将代码历史讨论连接到当前仓库",
      enTitle: "relore connects repository discussions with current code",
      zh: "Hugging Face 介绍 Apache-2.0 工具 relore：索引问题、合并请求与评审，区分维护者决定、贡献者判断和自动评论，并检索正在进行的修复。查询在本地服务，更新索引时访问 GitHub。文章以 Transformers 内部案例展示如何避免重复修复；这是工具介绍与现场案例，不是跨项目效率提升的独立评测。",
      en: "Hugging Face presents Apache-2.0 tool relore, which indexes issues, pull requests, and reviews, distinguishes maintainer decisions from contributor claims and automated comments, and finds fixes already underway. Queries are served locally; ingestion contacts GitHub. A Transformers field example illustrates avoided duplicate work, not independently established productivity gains across projects.",
      href: "https://huggingface.co/blog/huggingface/relore-repository-memory"
    },
    {
      index: "03", label: "ROBOTICS · 研究报道", source: "University of Maryland", date: "2026.09.21",
      zhTitle: "MorFiC 让四足机器人控制策略尝试跨机体迁移",
      enTitle: "MorFiC explores transferring locomotion policies across quadruped bodies",
      zh: "马里兰大学介绍与乔治梅森大学合作的 MorFiC：把机体信息提供给强化学习的评价模块，在一个源机体上训练后测试七个平台，并在真实 Go1、Go2 上免微调部署。大学称论文已获 CoRL 2026 接收。迁移仍依赖机体相似性，对 B1 和 ANYmal 未产生有效运动，不能理解为任意机器人通用控制。",
      en: "UMD reports on MorFiC, developed with George Mason University: morphology information conditions the reinforcement-learning critic, with one source body used for training and seven platforms tested. The policy also ran on real Go1 and Go2 robots without fine-tuning. UMD says the paper was accepted to CoRL 2026. Transfer remains similarity-dependent and failed to produce effective motion on B1 and ANYmal.",
      href: "https://www.cs.umd.edu/article/2026/09/one-robot-many-bodies-new-system-helps-four-legged-robots-adapt"
    },
    {
      index: "04", label: "MODEL COMPRESSION · 团队解读", source: "Multiverse Computing", date: "2026.09.21",
      zhTitle: "Multiverse 解读用组合优化选择要删除的模型层",
      enTitle: "Multiverse explains choosing model blocks through combinatorial optimization",
      zh: "团队新文章解读既有 CBO 研究，将删除哪些 Transformer 模块表示为受约束的二元优化问题，考虑模块之间的相互影响，而非单独排序。作者报告在部分深度压缩设置中优于所测基线，并开放代码。这是既有研究的新解读与作者评测，不是当天首次发表论文，也不意味着普遍无损压缩或已证实量子优势。",
      en: "A new team article explains existing CBO research: block removal becomes constrained binary optimization that accounts for interactions rather than ranking blocks independently. The authors report advantages over tested baselines under some aggressive compression settings and provide code. This is a new explanation of earlier research and author-run results—not a newly published paper, universal lossless compression, or demonstrated quantum advantage.",
      href: "https://huggingface.co/blog/MultiverseComputingCAI/pruning-llms-like-a-physicist-block-removal-as-an"
    },
    {
      index: "05", label: "WORK & AI · 问卷调查", source: "IBM Institute for Business Value", date: "2026.09.21",
      zhTitle: "IBM 调查关注 AI 工作中的判断力与技能担忧",
      enTitle: "IBM survey examines judgment and skills concerns in AI-enabled work",
      zh: "IBM 与 Oxford Economics 于 4–6 月调查 1,500 位人力资源高管和 8,800 名全职员工，新报告称 60% 员工担忧技能退化，71% 人力资源高管把监督、验证和推翻 AI 输出视为最重要技能。这里记录的是受访者意见；调查不能直接证明 AI 导致技能下降，也不代表所有劳动者的情况。",
      en: "IBM and Oxford Economics surveyed 1,500 HR executives and 8,800 full-time employees in April–June. The new report says 60% of employees worry about skills erosion, while 71% of HR executives prioritize supervising, validating, and overriding AI outputs. These are respondents’ views; the survey does not directly establish that AI causes skill decline or represent every worker.",
      href: "https://newsroom.ibm.com/2026-09-21-new-ibm-chro-study-ai-puts-critical-thinking-at-the-center-of-workforce-priorities"
    }
  ]
};

export const issue023: Issue = {
  number: "023",
  date: "2026-09-21",
  readingTime: "约 4 分钟",
  heading: "三条值得留意的更新",
  noteTitle: "从演示走向日常，还需要小修小补。",
  noteZh: "本期精选 9 月 20 日的三条一手更新：视频解码修复、答案置信度研究和手机智能体候选版本。部分文章只提供日期，无法确认小时级发布时间。我们的编辑判断是，可靠性不仅来自新模型，也来自资源估算、结果检查和任务恢复等细节。版本说明核实的是发布内容，不代表本站独立复测；研究自测也不能写成普遍成立的结论。",
  noteEn: "This edition selects three September 20 primary-source updates: a video-decoding fix, answer-confidence research, and a mobile-agent release candidate. Some articles provide dates without exact publication times. Our editorial view is that reliability depends not only on new models but also on resource estimates, result checks, and task recovery. Release notes establish what was announced, not independent testing by TUJL; self-reported research is not a universal finding.",
  stories: [
    {
      index: "01", label: "LOCAL VIDEO · 维护更新", source: "dgrauet / GitHub", date: "2026.09.20",
      zhTitle: "ltx-2-mlx 修正视频解码的自动分块估算",
      enTitle: "ltx-2-mlx fixes automatic tiling estimates for video decoding",
      zh: "项目发布 v0.15.8，说明此次修复针对卷积 VAE 解码：使用测量结果调整分块估算，并在自动处理路径中使用空间分块。这是一项解码流程维护更新，不是新的视频模型发布；发布说明没有给出可推广到所有设备的速度提升数字。",
      en: "Version 0.15.8 updates convolutional VAE decoding with a measured tiling estimate and spatial tiles in the automatic path. This is maintenance of the decoding workflow, not a new video-model launch. The release notes do not establish a speedup that can be generalized across devices.",
      href: "https://github.com/dgrauet/ltx-2-mlx/releases/tag/v0.15.8"
    },
    {
      index: "02", label: "MODEL RESEARCH · 开发者自测", source: "VIDRAFT / FINAL-Bench", date: "2026.09.20",
      zhTitle: "ZTC 发布从模型内部状态读取置信度的探针",
      enTitle: "ZTC releases probes that estimate confidence from model states",
      zh: "VIDRAFT 介绍 Zero-Token Confidence：通过一次前向计算读取隐藏状态，不生成新的文字 token，并发布配套探针。作者报告了答案判断与自评实验，但这些结果来自开发者自测，并非证明模型具有自我认知。文中约 0.06 秒的计时来自 27B 模型、四张 B200 的特定配置，不能直接推算到个人电脑。",
      en: "VIDRAFT introduces Zero-Token Confidence probes that read hidden states in a forward pass without generating new text tokens. The developer reports answer-judging and self-evaluation experiments; these are self-tests, not evidence of model self-awareness. The roughly 0.06-second timing uses a 27B model on four B200 GPUs and should not be extrapolated to a personal computer.",
      href: "https://huggingface.co/blog/FINAL-Bench/ztc"
    },
    {
      index: "03", label: "MOBILE AGENTS · 候选版本", source: "FoneClaw-AI / GitHub", date: "2026.09.20",
      zhTitle: "FoneClaw v0.2.3 候选版本加入定时自动化与任务恢复",
      enTitle: "FoneClaw v0.2.3 candidate adds scheduled automation and recovery",
      zh: "项目发布说明将 v0.2.3 标为候选版本，列出本地定时执行、云端恢复、通知与遗漏任务处理，并更新语音笔记、转写摘要及 Telegram、Discord 连接体验。官方提供 GitHub 发布资产，但 Google Play 提交包仍是候选，不应理解为已经上架。这是项目自述功能，本期未安装或验证其运行可靠性。",
      en: "The project labels v0.2.3 a release candidate, listing local scheduled execution, cloud recovery, notifications, and missed-run handling, plus updates to voice notes, transcription summaries, and Telegram and Discord connectivity. GitHub release assets are available, but the Google Play submission remains a candidate, not a confirmed store launch. These are project-reported features; we have not installed or independently tested them.",
      href: "https://github.com/FoneClaw-AI/foneclaw-android/releases/tag/v0.2.3"
    }
  ]
};

export const issue022: Issue = {
  number: "022",
  date: "2026-09-20",
  readingTime: "约 4 分钟",
  heading: "三条经过核实的信息",
  noteTitle: "看性能数字，也看测量条件。",
  noteZh: "本期收录 9 月 19 日的三条更新，不用旧闻填满版面；部分来源只有日期，无法确认精确的小时级时效。容量规划、上下文筛选实验和评测披露提醒我们：性能数字应当连同条件一起阅读。这是编辑判断。工具估算不是实测保证，社区自测不是独立验证，接触过测试材料的结果也不能视为未见数据上的成绩。",
  noteEn: "This edition contains three September 19 updates rather than padding the page with older news; some sources give dates without exact times. Capacity planning, context-selection experiments, and evaluation disclosures suggest a shared editorial lesson: read performance figures alongside their conditions. Estimates are not guarantees, community self-tests are not independent validation, and results involving test-data exposure are not unseen-data scores.",
  stories: [
    {
      index: "01", label: "LOCAL AI · 容量规划", source: "AlexsJones / GitHub", date: "2026.09.19",
      zhTitle: "llmfit 更新并发容量估算与模型库磁盘规划",
      enTitle: "llmfit adds concurrency estimates and model-library disk planning",
      zh: "llmfit v1.1.16 增加并发会话容量估算、模型库磁盘规划及原生三值模型识别。更新还把 GPU 方案评估改为依据空闲显存，而不是总容量，并修正部分测速计时问题。这些变化服务于本地模型部署规划；估算结果不代表在任意硬件和工作负载下都能达到的吞吐量。",
      en: "llmfit v1.1.16 adds concurrent-session capacity estimates, model-library disk planning, and native ternary-model recognition. GPU planning now uses free VRAM rather than total capacity, alongside benchmark-timing fixes. These are local deployment-planning improvements; estimates do not guarantee throughput across arbitrary hardware and workloads.",
      href: "https://github.com/AlexsJones/llmfit/releases/tag/v1.1.16"
    },
    {
      index: "02", label: "COMMUNITY RESEARCH · 作者自测", source: "corechek / Hugging Face", date: "2026.09.19",
      zhTitle: "社区实验报告：语义筛选减少长上下文推理开销",
      enTitle: "Community experiment reports lower long-context costs with semantic selection",
      zh: "作者在 600 个加入人工干扰段落的问答案例上，用冻结的语义筛选器为 Qwen2.5-7B-Instruct 选择输入，报告输入 token 约减少 41%、含筛选步骤的延迟约降低 45%。这是特定压力测试的作者自测，并非训练加速或独立复现；自然长文基准和匹配的多随机种子对照仍待完成。",
      en: "Across 600 question-answering cases expanded with artificial distractors, the author reports about 41% fewer input tokens and 45% lower latency, including selection, using a frozen semantic selector with Qwen2.5-7B-Instruct. This is an author-run inference stress test, not training acceleration or independent replication. Natural long-document benchmarks and matched multi-seed random controls remain pending.",
      href: "https://discuss.huggingface.co/t/14k-context-stress-test-41-fewer-qwen-tokens-45-lower-latency-and-higher-f1-with-semantic-routing/180635"
    },
    {
      index: "03", label: "EVALUATION · 评测披露", source: "oruk / Hugging Face", date: "2026.09.19",
      zhTitle: "Orukeet 模型卡更新：撤回 Open ASR 提交",
      enTitle: "Orukeet model card records withdrawal of its Open ASR submission",
      zh: "作者模型卡注明，Open ASR 提交于 9 月 19 日撤回，相关 PR 已关闭，研究材料与披露仍保留。模型卡同时说明训练曾使用 LibriSpeech test-other 的全部 2,939 条录音，并用该划分选择检查点。因此，相关公开测试成绩不能解读为未见测试集上的独立排名；本文不推断撤回原因。",
      en: "The author’s model card records a September 19 withdrawal of the Open ASR submission and closure of its PR, while retaining research materials and disclosures. It also discloses training on all 2,939 LibriSpeech test-other recordings and using that split for checkpoint selection. Public-test scores should therefore not be read as independent rankings on unseen data. We do not infer a reason for the withdrawal.",
      href: "https://huggingface.co/oruk/orukeet"
    }
  ]
};

export const issue021: Issue = {
  number: "021",
  date: "2026-09-18",
  readingTime: "约 6 分钟",
  heading: "五件值得知道的事",
  noteTitle: "让能力留下可以检查的过程。",
  noteZh: "本期选取 9 月 17 日发布的五条研究、工程与实践信息；部分来源只标注日期，无法精确确认小时级时效。教师审核、机器人实验、原始会话检索和组织工作流程，都让我们关注同一个问题：结果背后的过程是否可检查。这是编辑判断。研究演示不等于通用能力，厂商经验不是独立因果证据；funes 一文是既有工具的新技术介绍，并非当天首次发布。",
  noteEn: "We selected five research, engineering, and practice updates published on September 17; some sources provide dates without exact times. Teacher review, robotic experiments, original-session retrieval, and organizational workflows raise a shared question for us: can the process behind a result be inspected? This is editorial judgment. Demonstrations are not general capabilities, and vendor experience is not independent causal evidence. The funes article is a new technical introduction to an existing tool, not its initial launch.",
  stories: [
    {
      index: "01", label: "EDUCATION RESEARCH · 交互学习", source: "Google Research", date: "2026.09.17",
      zhTitle: "Google 展示教师参与审核的生成式交互学习实验",
      enTitle: "Google presents teacher-reviewed generative learning interactives",
      zh: "Google Research 发布生成式界面研究实验，并开放超过 30 个英文 STEM 交互示例，面向中学阶段，均经教师审核。教师可通过试点反馈定制需求。研究报告包含早期教师评价，但学生学习增益与课堂参与效果仍计划通过后续实地研究评估，不能把好评等同于已证实的学习提升。",
      en: "Google Research presents a generative-UI experiment and a public library of more than 30 English STEM interactives for middle and high school, reviewed by teachers. A pilot invites custom teaching needs and feedback. Early teacher evaluations are reported, but learning gains and classroom engagement remain subjects for planned field studies; positive reviews do not establish improved student outcomes.",
      href: "https://research.google/blog/the-future-of-practice-enabling-teachers-to-create-learning-interactives-with-generative-ui/"
    },
    {
      index: "02", label: "ROBOTICS · 实验室自动化", source: "MIT News", date: "2026.09.17",
      zhTitle: "MIT 机器人光学实验室演示自动组装、调校与拆解",
      enTitle: "MIT robotic optics lab demonstrates autonomous assembly and alignment",
      zh: "MIT 团队介绍可重新配置的机器人光学实验室，演示组装并精调桌面激光腔、对准光束，以及响应扰动稳定光束。元件装在定制标记外壳中，系统可拆解并重新布置。远程访问应用仍在开发；这是特定光学任务的研究演示，不是通用的自主科学家。团队计划本月在 IROS 介绍详情。",
      en: "MIT describes a reconfigurable robotic optics lab that assembled and tuned a tabletop laser cavity, aligned beams, and stabilized them after disturbances. Components use custom marked housings and can be dismantled and rearranged. Remote-access software is still being developed. This is a demonstration of specific optical tasks, not a general autonomous scientist; the team plans to present details at IROS this month.",
      href: "https://news.mit.edu/2026/robotic-lab-runs-optics-experiments-on-demand-0917"
    },
    {
      index: "03", label: "AGENT TOOLS · 技术介绍", source: "ariG23498 / Hugging Face", date: "2026.09.17",
      zhTitle: "funes 新技术文章解释如何保留编码智能体的原始会话",
      enTitle: "A new funes walkthrough explains original-session memory for coding agents",
      zh: "这篇社区技术介绍解释 funes 如何把多种编码智能体的会话索引到本地 Lance 数据集，通过 recall 与 get 找回原文及上下文，而非在入库时让大模型重写摘要。工具此前已被介绍，本次不是首发。文章描述了分享前的凭据扫描，但本站未独立验证其隐私保障；原始记录仍可能包含敏感信息。",
      en: "This community walkthrough explains how funes indexes sessions from several coding agents into a local Lance dataset, using recall and get to retrieve original passages and context rather than LLM-written summaries at ingestion. The tool predates this article. It describes credential scanning before sharing, but we have not independently validated its privacy safeguards; original traces can still contain sensitive information.",
      href: "https://huggingface.co/blog/ariG23498/funes-lance"
    },
    {
      index: "04", label: "WORKPLACE AI · 厂商经验", source: "Official Microsoft Blog", date: "2026.09.17",
      zhTitle: "微软回顾自身 AI 转型：部署工具之外还要改变工作方式",
      enTitle: "Microsoft reflects on AI adoption beyond deploying tools",
      zh: "微软发布内部 AI 转型经验，回顾仅靠工具部署、培训和使用率推动采用的局限，并强调人在判断与责任中的角色。文章展示团队与智能体协作的案例。这是厂商自身的经验总结与主张，不是独立对照研究，也不能据此保证其他组织会获得同样的效率。",
      en: "Microsoft reflects on its internal AI transformation, describing the limits of treating adoption as tool deployment, training, and usage targets while emphasizing human judgment and accountability. It offers examples of teams working with agents. This is a vendor's account and interpretation, not an independent controlled study or a guarantee of equivalent efficiency elsewhere.",
      href: "https://blogs.microsoft.com/blog/2026/09/17/what-weve-learned-from-microsofts-own-ai-transformation/"
    },
    {
      index: "05", label: "AI INFRASTRUCTURE · 存储计算", source: "Google Cloud release notes", date: "2026.09.17",
      zhTitle: "Google Cloud Z4D 存储优化实例正式可用",
      enTitle: "Google Cloud makes storage-optimized Z4D instances generally available",
      zh: "Compute Engine 更新说明将 Z4D 标为正式可用，面向向量数据库、搜索以及 AI/ML 并行文件系统等高存储密度任务。公告列出最高 3 TB 内存、42,000 GiB 本地 SSD 与 400 Gbps 网络带宽。这些是系列配置上限，不是每种实例都具备，也不是模型训练或推理加速的实测承诺。",
      en: "Compute Engine lists Z4D as generally available for storage-dense workloads including vector databases, search, and AI/ML parallel file systems. The announcement specifies up to 3 TB of memory, 42,000 GiB of local SSD, and 400 Gbps networking. These are series configuration ceilings, not specifications of every instance or measured promises of faster model training or inference.",
      href: "https://docs.cloud.google.com/compute/docs/release-notes"
    }
  ]
};

export const issue020: Issue = {
  number: "020",
  date: "2026-09-17",
  readingTime: "约 6 分钟",
  heading: "五件值得知道的事",
  noteTitle: "能力走出实验，还需要怎样的条件？",
  noteZh: "本期收录 9 月 16 日的五份原始公告；部分来源仅标注日期，不能精确确认小时级时效。浏览器的选择权、推理测试的边界、电力调度与专业工作中的人的角色，是我们读到的共同线索。这是编辑判断，而非同一项研究结论。测试成绩不等于所有场景的表现，合作目标不等于已经取得的成果，教育原则也需要在实际使用中接受检验。",
  noteEn: "This edition draws on five original announcements dated September 16; some sources give dates only, so exact hour-level recency cannot be confirmed. User choice, benchmark boundaries, power flexibility, and people's roles in professional work form our shared thread. This is editorial interpretation, not a single research finding. Test scores do not generalize to every workload, collaboration goals are not completed outcomes, and education principles still need to be tested in practice.",
  stories: [
    {
      index: "01", label: "BROWSER AI · 浏览器", source: "Mozilla", date: "2026.09.16",
      zhTitle: "Firefox Smart Window 测试版引入 Mistral，扩展法语支持",
      enTitle: "Firefox Smart Window beta adds Mistral and French-language support",
      zh: "Mozilla 宣布与 Mistral 合作，将 Mistral Small 4 引入美国和加拿大的 Smart Window 测试版，并将测试版及官方法语支持扩展到法国。用户仍可选择其他模型。更多欧洲地区的扩展属于后续计划；这不是所有 Firefox 用户都已获得的正式版功能。",
      en: "Mozilla announces a Mistral partnership, bringing Mistral Small 4 to Smart Window beta in the US and Canada while expanding beta access and official French-language support to France. Users can still select other models. Further European expansion remains a plan; this is not a generally released feature available to every Firefox user.",
      href: "https://blog.mozilla.org/en/firefox/mozilla-mistral-partnership/"
    },
    {
      index: "02", label: "INFERENCE · 基准测试", source: "NVIDIA Blog", date: "2026.09.16",
      zhTitle: "Vera Rubin NVL72 首次提交 MLPerf 推理预览成绩",
      enTitle: "Vera Rubin NVL72 makes its MLPerf inference preview debut",
      zh: "NVIDIA 发布 MLPerf Inference v6.1 提交结果，称 Vera Rubin NVL72 在 Qwen3-VL 上的吞吐量最高为 GB300 NVL72 的 3.7 倍，在 DeepSeek-R1 上最高为 2.5 倍。这些是厂商提交的特定基准预览成绩，不代表所有模型、延迟目标或实际服务负载都能达到相同增幅。",
      en: "NVIDIA reports its MLPerf Inference v6.1 submissions, with Vera Rubin NVL72 reaching up to 3.7 times GB300 NVL72 throughput on Qwen3-VL and up to 2.5 times on DeepSeek-R1. These are vendor-submitted preview results under specific benchmark conditions, not equivalent gains for every model, latency target, or production workload.",
      href: "https://blogs.nvidia.com/blog/vera-rubin-nvl72-mlperf-inference/"
    },
    {
      index: "03", label: "INFRASTRUCTURE · 能源协同", source: "NVIDIA / AEMA announcement", date: "2026.09.16",
      zhTitle: "Emerald AI、Google 与 NVIDIA 发起弹性用电联盟",
      enTitle: "Emerald AI, Google, and NVIDIA launch a flexible-power alliance",
      zh: "三家公司宣布成立 AI Energy Management Alliance，推动数据中心根据电网条件调整用电。联盟拟建立响应速度、持续时间、可预测性等性能要求，并协作制定技术与运行方案。这是联盟及工作方向的公告，不是已完成的节能测试，也不能据此量化电价或排放下降。",
      en: "The three companies announce the AI Energy Management Alliance to advance data centers that adjust electricity use to grid conditions. It aims to establish performance requirements such as response speed, duration, and predictability, alongside technical and operational approaches. This is an alliance and work-plan announcement, not a completed efficiency trial or quantified reduction in electricity prices or emissions.",
      href: "https://blogs.nvidia.com/blog/ai-energy-management-alliance/"
    },
    {
      index: "04", label: "AI FOR SCIENCE · 研发合作", source: "Novo Nordisk", date: "2026.09.16",
      zhTitle: "诺和诺德与 Anthropic 宣布科学推理和研发合作",
      enTitle: "Novo Nordisk and Anthropic announce an R&D collaboration",
      zh: "诺和诺德宣布将使用 Anthropic 模型与 Claude Science，围绕科学团队提出的药物发现难题、特定研究流程和智能体软件开发开展合作。公告表达的是加速研发的目标，没有在这份消息中提供新药疗效或研发周期缩短的验证结果；不能把合作直接视为临床突破。",
      en: "Novo Nordisk announces work with Anthropic models and Claude Science on drug-discovery challenges identified by its scientific teams, specific research workflows, and agentic software engineering. The announcement states an ambition to accelerate R&D; it does not establish treatment efficacy or a measured reduction in development timelines. The collaboration is not itself a clinical breakthrough.",
      href: "https://www.novonordisk.com/news-and-media/news-and-ir-materials/news-details.html?id=916768"
    },
    {
      index: "05", label: "EDUCATION · 学习设计", source: "Official Microsoft Blog", date: "2026.09.16",
      zhTitle: "微软阐述教育 AI 五项原则，强调学习不能被代做",
      enTitle: "Microsoft outlines five education AI principles centered on learning",
      zh: "微软的新文章将隐私与透明、教师掌握使用决定、支持而非替代学生思考等列入五项原则，并提醒认知任务被外包可能制造已经学会的表象。本文是厂商的设计承诺与观点说明，不是新发布的独立效果试验；文章回顾的既有产品和协议也不应被当作同日首发。",
      en: "Microsoft's new post sets out five principles including privacy and transparency, educator control, and supporting rather than replacing students' thinking. It warns that offloading cognitive work can create an appearance of learning. This is a vendor statement of design commitments and views, not a new independent efficacy trial; existing products and agreements discussed are not same-day launches.",
      href: "https://blogs.microsoft.com/blog/2026/09/16/microsofts-commitment-for-ai-in-education/"
    }
  ]
};

export const issue019: Issue = {
  number: "019",
  date: "2026-09-16",
  readingTime: "约 6 分钟",
  heading: "五件值得知道的事",
  noteTitle: "一次成功之外，是下一次还能不能做好。",
  noteZh: "本期选取 9 月 15 日发布的五条信息；部分原文只有日期，无法精确到小时。重复运行的稳定性、离线训练的成本分配，以及软件的实际开放范围，是今天的共同线索。这是我们的编辑判断，不是同一项实验的结论。研究团队报告的数字均未由本站独立复现；功能公告也不意味着所有账号立即可用。昨日因连接中断未发布的第 018 期一并补入归档，保留原编写日期，不作为今天的新消息。",
  noteEn: "We selected five items published on September 15; some sources provide dates without exact times. Repeatability, moving computation into offline training, and real availability limits connect today's selection. That is our editorial interpretation, not a shared experimental finding. We have not independently reproduced the research results, and announcements do not mean every account has immediate access. Issue 018, delayed by yesterday's connection failure, is added to the archive with its original compilation date, not presented as today's news.",
  stories: [
    {
      index: "01", label: "AGENT RELIABILITY · 智能体稳定性", source: "IBM Research / Hugging Face", date: "2026.09.15",
      zhTitle: "IBM 为 ALTK-Evolve 增加一致性分析，关注重复运行是否都能成功",
      enTitle: "IBM adds consistency analysis to ALTK-Evolve for repeatable agent success",
      zh: "IBM 团队介绍从已有执行轨迹中找出容易变化的决策点，再生成可复用指导的方法。在其 GPT-4.1 与 AppWorld 实验中，五次全部成功的任务比例从 53.0% 升至 69.0%。这是团队自测；Pass⁵ 要求每次都成功，不等于至少一次成功的 Pass@5，也不代表生产环境保证。",
      en: "IBM describes identifying unstable decisions in recorded agent traces and turning them into reusable guidelines. In its GPT-4.1/AppWorld experiment, the share of tasks successful in all five runs rose from 53.0% to 69.0%. These are team-run results. Pass⁵ requires every run to succeed, unlike at-least-once Pass@5, and is not a production guarantee.",
      href: "https://huggingface.co/blog/ibm-research/altk-evolve-consistency"
    },
    {
      index: "02", label: "FINE-TUNING · 参数高效适配", source: "ShadowPEFT authors / Hugging Face", date: "2026.09.15",
      zhTitle: "ShadowPEFT 作者介绍 PEFT 主分支集成，稳定版发布仍待后续",
      enTitle: "ShadowPEFT authors describe PEFT main-branch integration ahead of release",
      zh: "作者发布集成说明：ShadowPEFT 使用单独的影子网络，与冻结的主模型协作，并复用 PEFT 的配置和保存加载接口。文章明确它已合入 main，下一次 PEFT 发布才会包含；当前体验需开发版。文中的 LoRA、DoRA 对比为作者实验，不应把精度、耗时和显存视为全面同时占优。",
      en: "The authors explain a separate shadow network working alongside a frozen backbone through PEFT's configuration and checkpoint interfaces. Their post says integration is on main and scheduled for the next PEFT release; trying it now requires the development version. Comparisons with LoRA and DoRA are author-run experiments, not evidence of simultaneous superiority in accuracy, time, and memory.",
      href: "https://huggingface.co/blog/shadow-llm/shadowpeft-peft"
    },
    {
      index: "03", label: "RETRIEVAL · 搜索研究", source: "Google Research", date: "2026.09.15",
      zhTitle: "Google 介绍 Retrieve-for-Train，将搜索展开的计算移到离线训练",
      enTitle: "Google explains Retrieve-for-Train for efficient query expansion",
      zh: "Google 的新研究解读介绍先用强化学习生成监督数据，再训练轻量扩散检索器，让结果集合兼顾多样性、相关性与数据库依据。团队在时尚和音乐检索设置中报告改善质量与延迟。这是对研究论文的介绍，不是 Google 搜索已全面部署的公告，实验收益也不能直接外推到所有数据库。",
      en: "Google's new research explainer describes using reinforcement learning to synthesize supervision, then training a lightweight diffusion retriever for diverse, aligned, database-grounded result sets. The team reports quality and latency improvements in fashion and music retrieval settings. This explains research, not a general Google Search rollout, and the gains should not be extrapolated to every database.",
      href: "https://research.google/blog/bypassing-inference-bottlenecks-accelerating-complex-ai-search-with-retrieve-for-train/"
    },
    {
      index: "04", label: "WORKSPACE · 第三方连接", source: "Google Workspace Updates", date: "2026.09.15",
      zhTitle: "Gemini in Workspace 增加 MCP 第三方连接，仍受管理员设置管理",
      enTitle: "Gemini in Workspace adds MCP connectors under administrator controls",
      zh: "Google 宣布可通过 MCP 连接 Asana、Atlassian Rovo、HubSpot、Mailchimp、QuickBooks、Monday 和 Salesforce。管理员可按域、组织单位或群组管理连接；启用后，用户可从部分 Workspace 侧边栏及 Chat 访问。公告称快速和定期发布域已可用，但账号方案、组织设置与第三方权限仍需分别满足。",
      en: "Google announces MCP connections to Asana, Atlassian Rovo, HubSpot, Mailchimp, QuickBooks, Monday, and Salesforce. Administrators can manage connectors by domain, organizational unit, or group; enabled users access them from supported Workspace side panels and Chat. Both release tracks are listed as available, but plan eligibility, organizational settings, and third-party permissions still apply.",
      href: "https://workspaceupdates.googleblog.com/2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html"
    },
    {
      index: "05", label: "GMAIL · 可用范围", source: "Google Workspace Updates", date: "2026.09.15",
      zhTitle: "Gmail 搜索 AI 摘要扩大地区范围，英语与方案限制仍在",
      enTitle: "Gmail search AI Overviews expands geographically, with eligibility limits",
      zh: "Google 扩大 Gmail 搜索 AI Overviews 的地区覆盖，面向符合条件、语言设为英语的付费用户，并要求开启相关智能功能。定期发布域计划 9 月 21 日开始推送。个人账号仍排除欧洲经济区、英国、瑞士和日本，因此标题中的“全球”并不等于所有地区和账号无条件开放。",
      en: "Google expands Gmail search AI Overviews to eligible paid users with Gmail set to English and the required smart features enabled. Scheduled Release domains are due to begin rollout on September 21. Personal accounts in the EEA, UK, Switzerland, and Japan remain excluded, so 'global' does not mean unconditional access for every region or account.",
      href: "https://workspaceupdates.googleblog.com/2026/09/gmail-searchs-ai-overviews-now-available-globally.html"
    }
  ]
};

export const issue018: Issue = {
  number: "018",
  date: "2026-09-15",
  readingTime: "约 5 分钟",
  heading: "四条经过核实的信息",
  noteTitle: "走进实际工作，还需要边界与验证。",
  noteZh: "本期收录 9 月 14 日发布的四条信息，不用重复消息补足数量。来源部分仅标注日期，无法精确确认小时级时效。约束采样研究、聚变计算计划、制药案例综述与系统组件更新各有不同的证据范围。我们的判断是：AI 的实用价值不仅在生成答案，还在能否满足条件、接上数据并接受检验。实验表现不是普遍保证，规划不是已建成，厂商案例也不是独立临床证据。",
  noteEn: "This edition includes four items published on September 14 rather than filling space with repeats. Some sources give dates only, so exact hour-level recency cannot be confirmed. Constraint-sampling research, a fusion-computing plan, a pharmaceutical case overview, and system component updates have different scopes of evidence. Our judgment: useful AI must meet conditions, connect to data, and withstand checks—not merely generate answers. Experiments are not universal guarantees, plans are not completed systems, and vendor cases are not independent clinical evidence.",
  stories: [
    {
      index: "01", label: "RESEARCH · 约束生成", source: "MIT News", date: "2026.09.14",
      zhTitle: "MIT 介绍 HardFlow，让生成模型在最终输出满足硬约束",
      enTitle: "MIT presents HardFlow for hard-constrained generative outputs",
      zh: "MIT 介绍一种部署时使用的采样方法：不要求每个中间步骤都满足限制，而是通过轨迹优化约束最终结果，无需重新训练模型。团队在机器人操作、迷宫导航与图像编辑实验中报告满足约束并改善解的质量；报道指向 TPAMI 论文。这是特定实验范围内的研究结果，不是所有现实场景的安全保证。",
      en: "MIT describes a deployment-time sampling method that optimizes the generation trajectory to constrain the final output, without forcing every intermediate step to comply or retraining the model. The team reports constraint satisfaction and better solution quality in manipulation, maze navigation, and image-editing experiments, linking a TPAMI paper. These are scoped research results, not a safety guarantee for every real-world setting.",
      href: "https://news.mit.edu/2026/new-method-enables-ai-safety-critical-situations-0914"
    },
    {
      index: "02", label: "AI FOR SCIENCE · 科学计算", source: "Princeton Plasma Physics Laboratory", date: "2026.09.14",
      zhTitle: "PPPL 与 UKAEA 公布聚变 AI 计算平台互联规划",
      enTitle: "PPPL and UKAEA outline a federation for fusion AI computing",
      zh: "PPPL 发布 9 月 9—10 日研讨会的规划进展，拟将 STELLAR-AI 与 SUNRISE 平台连接，围绕两座聚变实验装置共享数据、训练模型并开发数字孪生。双方还讨论了数据格式与跨硬件任务迁移。消息说的是研究协作方案，不代表互联系统已上线，也不代表商业聚变发电已经实现。",
      en: "PPPL reports planning from a September 9–10 workshop to link STELLAR-AI and SUNRISE, share data from two fusion experiments, train models, and develop digital twins. Discussions also covered data formats and moving workloads across different hardware. This is a research collaboration plan, not confirmation of an operational federation or commercial fusion power.",
      href: "https://www.pppl.gov/news/2026/pppl-and-ukaea-experts-make-plan-connect-research-two-fusion-supercomputers-across"
    },
    {
      index: "03", label: "INDUSTRY · 厂商案例", source: "Microsoft Cloud Blog", date: "2026.09.14",
      zhTitle: "微软发布制药 AI 案例综述，重点转向知识检索与工作流程",
      enTitle: "Microsoft's pharma AI overview focuses on knowledge and workflows",
      zh: "微软的新综述汇集研发知识检索、制造配方管理与企业 AI 平台等案例，强调数据治理与专家监督。文中包含 Amgen 的内部知识助手及 Almirall 的研发检索工具。这是厂商发布的既有案例汇总，而非这些系统同日首次上线；效率和准确率主张来自厂商或客户，不能据此推断药物疗效。",
      en: "Microsoft's new overview brings together R&D knowledge retrieval, manufacturing recipe management, and enterprise AI platforms, emphasizing data governance and expert oversight. Examples include Amgen's knowledge assistant and Almirall's research search tool. This is a vendor compilation of existing cases, not same-day launches. Efficiency and accuracy claims come from vendors or customers and do not establish treatment efficacy.",
      href: "https://www.microsoft.com/en-us/microsoft-cloud/blog/healthcare/2026/09/14/the-ai-shift-is-real-how-pharmaceutical-leaders-are-operationalizing-ai/"
    },
    {
      index: "04", label: "ON-DEVICE AI · 组件更新", source: "Microsoft Support", date: "2026.09.14",
      zhTitle: "Windows 11 26H1 带外更新列出四项 AI 组件版本",
      enTitle: "Windows 11 26H1 out-of-band update lists four AI component revisions",
      zh: "微软 KB5129194 公告将图像搜索、内容提取、语义分析与设置模型列为更新组件，版本为 1.2608.951.0，并明确这些 AI 组件仅适用于 Copilot+ PC。公告同时列出系统修复。这是维护与兼容范围信息，不是新的模型能力评测，也不表示普通 Windows 设备会获得全部 AI 组件。",
      en: "Microsoft's KB5129194 bulletin lists Image Search, Content Extraction, Semantic Analysis, and Settings Model at version 1.2608.951.0, explicitly limiting the AI components to Copilot+ PCs. It also lists system fixes. This is maintenance and compatibility information, not a new model-capability evaluation or a promise that every Windows device receives the AI components.",
      href: "https://support.microsoft.com/en-gb/servicing/os/windows-11/2026/09/kb5129194-windows-11-26h1-security-update"
    }
  ]
};

export const issue017: Issue = {
  "number": "017",
  "date": "2026-09-13",
  "readingTime": "约 4 分钟",
  "heading": "三条经过核实的信息",
  "noteTitle": "数字之外，也要读测量它的方法。",
  "noteZh": "今天只收录三条可核实的研究与学习信息，不用旧闻补足数量。来源均在 9 月 12 日发布介绍或标注评测更新；部分页面没有小时级时间。压缩比例、音乐评分和教学示例已被作者公开，是事实；我们的判断是，读懂统计范围、采样方式与数据划分，比单看一个高分更重要。这不是对实验的独立复现。",
  "noteEn": "Today we include only three verified research and learning items rather than padding the edition with older news. Sources published an introduction or dated evaluation update on September 12; some omit hour-level timestamps. The authors have published compression figures, music evaluations, and learning examples. Our judgment is that scope, sampling, and data splits matter more than a headline score. We have not independently reproduced the experiments.",
  "stories": [
    {
      "index": "01",
      "label": "MODEL COMPRESSION · 模型压缩",
      "source": "weiciao wu / Hugging Face",
      "date": "2026.09.12",
      "zhTitle": "Wringer 报告低比特存储实验，强调压缩不等于推理加速",
      "enTitle": "Wringer reports low-bit storage results, not native low-bit inference",
      "zh": "作者对 Agents-A1-4B 的实验报告称，单轮方案以主体权重 2.655 比特存储，在三项基准上平均保留约 93.7% 的原模型分数。该比特数不包含全部参数，推理仍先还原为 BF16；因此不能据此推断显存占用或速度。结果来自作者自测，原始单次比较没有置信区间。",
      "en": "The author's Agents-A1-4B experiment reports roughly 93.7% mean score retention across three benchmarks with body weights stored at 2.655 bits after one round. That rate excludes some parameters, and inference first restores BF16 weights; it does not establish runtime memory or speed. These are author-run evaluations, with no confidence intervals for the original single-run comparison.",
      "href": "https://huggingface.co/blog/wcamon/wringer-fill-then-wring-a-4b-reasoning-model-at-26"
    },
    {
      "index": "02",
      "label": "MUSIC EVALUATION · 音乐评测",
      "source": "Multimodal Art Projection",
      "date": "2026.09.12",
      "zhTitle": "YuE2 更新音乐生成比较，标明 best-of-8 的评测条件",
      "enTitle": "YuE2 updates its music comparison with explicit best-of-8 conditions",
      "zh": "YuE2 模型卡标注 9 月 12 日更新，比较 17 种设置，使用 192 条 WildSongBench 提示，并公开指标与协议。作者报告的领先结果采用 best-of-8，即多个候选中选优，而非单次生成。它是团队自己的基准结果，不代表任意曲风、每次采样或所有听众的偏好。",
      "en": "YuE2's model card dates a comparison update to September 12, covering 17 settings on 192 WildSongBench prompts and linking metrics and protocols. The authors' leading result uses best-of-8 selection, not a single generation. This is a team-reported benchmark, not a guarantee across musical styles, individual samples, or listener preferences.",
      "href": "https://huggingface.co/m-a-p/YuE2-3B/blob/main/README.md"
    },
    {
      "index": "03",
      "label": "LEARNING RESOURCE · 学习资源",
      "source": "pop123ux / Hugging Face Forums",
      "date": "2026.09.12",
      "zhTitle": "社区作者分享 38 份学习笔记，逐步拆解 Trainer、LoRA 与 GRPO",
      "enTitle": "A community learning project shares 38 notebooks from Trainer to GRPO",
      "zh": "作者在论坛介绍一个含 38 份可运行 notebook 的学习仓库，覆盖分词、手写训练循环、LoRA 和 GRPO，并包含按文章划分训练与测试数据的问答示例。仓库与说明已公开；这是个人学习项目，不是 Hugging Face 官方课程发布，也不代表所有示例已由本站执行验证。",
      "en": "A forum author introduced a learning repository with 38 runnable notebooks on tokenization, manual training loops, LoRA, and GRPO, including a question-answering example with article-level train/test separation. The repository and explanation are public. This is a personal learning project, not an official Hugging Face course release, and we have not executed every example.",
      "href": "https://discuss.huggingface.co/t/38-runnable-notebooks-for-learning-hugging-face-from-trainer-to-grpo-by-removing-the-abstractions/180330"
    }
  ]
};

export const issue016: Issue = {
  "number": "016",
  "date": "2026-09-12",
  "readingTime": "约 6 分钟",
  "heading": "五件值得知道的事",
  "noteTitle": "今天的共同线索，是能力需要一个可以落地、也可以检查的地方。",
  "noteZh": "本期选取 9 月 11 日发布的五条信息；部分来源只提供日期，无法精确到小时。桌面入口、推理硬件、研究数据与训练环境是不同层面的工作。它们已被公开介绍是事实；我们的判断是，真正可用的 AI 还需要权限、数据与评测配合。融资不证明性能，数据集计划不等于已经完成，模型配置也不等于验证结果。",
  "noteEn": "This edition selects five items dated September 11; some sources provide no hour-level timestamp. Desktop access, inference hardware, research data, and training environments address different layers. Their publication is fact; our judgment is that useful AI also depends on permissions, data, and evaluation. Funding does not prove performance, a dataset plan is not a completed resource, and a model configuration is not a validated result.",
  "stories": [
    {
      "index": "01",
      "label": "DESKTOP AI · 桌面入口",
      "source": "Google Workspace",
      "date": "2026.09.11",
      "zhTitle": "Google 发布适用于 Windows 10 和 11 的 Gemini 桌面应用",
      "enTitle": "Google launches the Gemini desktop app for Windows 10 and 11",
      "zh": "Google 公告称，用户可用 Alt + Space 调出 Gemini，借助 Gmail、Drive 信息起草摘要，并生成图像。企业使用仍受 Workspace 管理员的生成式 AI 设置控制。这是产品可用性公告，不是独立的效率评测；接入工作资料前，应确认账号权限与组织设置。",
      "en": "Google says Alt + Space opens Gemini for desktop assistance, including summaries drawing on Gmail and Drive and image generation. Workspace administrators retain control through generative-AI settings. This is an availability announcement, not an independent productivity study; account access and organizational settings still matter before connecting work information.",
      "href": "https://workspaceupdates.googleblog.com/2026/09/the-gemini-desktop-app-is-now-available-for-Windows.html"
    },
    {
      "index": "02",
      "label": "INFERENCE · 推理基础设施",
      "source": "Liberty Global",
      "date": "2026.09.11",
      "zhTitle": "Liberty Global 宣布投资推理硬件公司 Positron AI",
      "enTitle": "Liberty Global announces an investment in Positron AI",
      "zh": "Liberty Global Tech Ventures 宣布投资以存储为优先的 AI 推理软硬件公司 Positron AI，并称参与其 8.75 亿美元融资轮，该轮估值为 50 亿美元。这些金额来自投资方公告。融资体现资本投入，并不能独立证明芯片吞吐量、成本优势或实际交付能力。",
      "en": "Liberty Global Tech Ventures announced an investment in Positron AI, which builds memory-first inference hardware and software. It reports joining an $875 million round valuing the company at $5 billion. These figures come from the investor's announcement. Funding signals capital commitment, not independent proof of throughput, cost advantages, or delivery capacity.",
      "href": "https://libertyglobal.gcs-web.com/news-releases/news-release-details/liberty-global-tech-ventures-invests-ai-inference-hardware-and"
    },
    {
      "index": "03",
      "label": "RESEARCH DATA · 研究数据",
      "source": "Tempus",
      "date": "2026.09.11",
      "zhTitle": "Tempus 计划将十万份全基因组与长期临床信息关联",
      "enTitle": "Tempus plans to link 100,000 whole genomes with longitudinal clinical data",
      "zh": "Tempus 宣布未来数年建设包含十万份全基因组的研究平台，关联去标识化临床信息。公司称初始数据已面向早期参与者提供，计划 2027 年中全面开放；百万份基因组是后续目标。这些规模与时间是计划，不是已完成的数据量，也不构成临床疗效证据。",
      "en": "Tempus announced a multiyear research platform targeting 100,000 whole genomes linked to de-identified clinical information. It says initial data is available to early adopters, with general availability planned for mid-2027; one million genomes is a later goal. These are planned scale and timing, not completed dataset counts or evidence of clinical benefit.",
      "href": "https://investors.tempus.com/node/10676/pdf"
    },
    {
      "index": "04",
      "label": "TRAINING NOTES · 训练观察",
      "source": "Sergio Paniego / Hugging Face",
      "date": "2026.09.11",
      "zhTitle": "训练课程文章梳理智能体强化学习的沙箱与环境",
      "enTitle": "A training-course article maps sandboxes and environments for agent RL",
      "zh": "Sergio Paniego 在课程配套文章中，把任务与验证器、交互接口、隔离运行环境和训练系统区分开来，并介绍 TRL 与 OpenEnv 的组合。文章说明了为什么持续编辑文件、运行测试的智能体需要保存环境状态。这是作者的教学与报告综述，不是新模型发布或独立性能验证。",
      "en": "In a course companion article, Sergio Paniego separates tasks and verifiers, interaction interfaces, isolated execution, and the training system, and discusses combining TRL with OpenEnv. It explains why agents that edit files and run tests need persistent environment state. This is an educational synthesis of reports, not a new model launch or independent performance validation.",
      "href": "https://huggingface.co/blog/sergiopaniego/rl-environments-2026"
    },
    {
      "index": "05",
      "label": "RESEARCH ARTIFACT · 实验模型",
      "source": "Open Athena / Hugging Face",
      "date": "2026.09.11",
      "zhTitle": "Grug 67B 研究检查点公开，作者明确提示尚未充分评测",
      "enTitle": "Grug 67B research checkpoint arrives with explicit evaluation limits",
      "zh": "Open Athena 的 Grug 67B A2B SFT 模型卡公开了研究检查点，并强调只做过初步运行测试和探索性检查，未验证生产适用性。标称 262K 上下文是配置值，长上下文能力尚未测试。该资源适合作为研究线索，不宜根据参数名或少量示例推断可靠性。",
      "en": "Open Athena's Grug 67B A2B SFT model card presents a research checkpoint with only smoke tests and exploratory probes, explicitly not validated for production. The advertised 262K context is a configuration value; long-context performance remains untested. It is a research lead, not a reliability claim supported by its name or a few examples.",
      "href": "https://huggingface.co/open-athena/Grug-67B-A2B-Datakit-SFT-262K-2026.09.11"
    }
  ]
};

export const issue015: Issue = {
  "number": "015",
  "date": "2026-09-10",
  "readingTime": "约 7 分钟",
  "heading": "五件值得知道的事",
  "noteTitle": "今天的共同线索，是让结果带着可以检查的来处。",
  "noteZh": "本期收录 9 月 9 日发布的模型、文档工具、分析平台和评测文章。事实是这些资源与产品公告已经公开；我们的判断是，来源引用、可重复的计算和运行记录，正在成为 AI 进入日常工作的基础。排行榜名次、节省成本和生产可用性各有适用条件，不能只凭一个数字替代具体任务的验证。",
  "noteEn": "This edition covers models, document tools, analytics platforms, and an evaluation article published on September 9. Their publication is fact; our judgment is that citations, repeatable calculations, and operational records are becoming foundations for everyday AI use. Rankings, cost savings, and production readiness each have conditions and cannot replace testing on the actual task.",
  "stories": [
    {
      "index": "01",
      "label": "TIME SERIES · 时间序列",
      "source": "IBM Research",
      "date": "2026.09.09",
      "zhTitle": "IBM 发布约 3.85 亿参数的 Granite 时间序列模型 r2",
      "enTitle": "IBM releases the roughly 385-million-parameter Granite time-series r2 model",
      "zh": "Granite Time Series PatchTST-FM-r2 支持零样本预测、概率预测与缺失值填补，并公开权重、推理流程及复现代码。IBM 报告其在 9 月 8 日的 GIFT-Eval 可复现零样本比较中排名第二，并强调商业友好的许可。排名来自团队所列筛选条件与基准，不能直接外推到任意业务数据。",
      "en": "Granite Time Series PatchTST-FM-r2 supports zero-shot and probabilistic forecasting plus missing-value imputation, with weights, inference pipelines, and reproduction code released. IBM reports second place in its September 8 comparison of replicable zero-shot GIFT-Eval models and highlights commercially friendly licensing. The ranking depends on the stated filters and benchmark; it does not establish performance on arbitrary business data.",
      "href": "https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series"
    },
    {
      "index": "02",
      "label": "DOCUMENT TOOLS · 文档工具",
      "source": "Adobe",
      "date": "2026.09.09",
      "zhTitle": "Acrobat 新增文档转音频、交互报告与企业知识库能力",
      "enTitle": "Acrobat adds document audio, interactive reports, and enterprise knowledge tools",
      "zh": "Adobe 宣布 Productivity Agent 的新功能，可把文档转成音频摘要、播客、可视化报告和演示文稿；企业功能包括 Knowledge Base 与 Analyzer，用于文档集合问答和结构化信息提取。可用功能取决于订阅方案。Adobe 表示回答带可点击引用，读者仍应回到原文核对数字、限定条件和遗漏。",
      "en": "Adobe announced Productivity Agent features for audio summaries, podcasts, visual reports, and presentations. Enterprise capabilities include Knowledge Base and Analyzer for collection-wide questions and structured extraction. Availability depends on the subscription plan. Adobe says answers include clickable citations; readers should still check original documents for figures, qualifications, and omissions.",
      "href": "https://news.adobe.com/news/2026/09/adobe-productivity-agent-in-acrobat-now-transforms-complex-documents"
    },
    {
      "index": "03",
      "label": "ENTERPRISE ANALYTICS · 企业分析",
      "source": "Alteryx / PR Newswire",
      "date": "2026.09.09",
      "zhTitle": "Alteryx 将已有分析流程接入对话智能体与 MCP",
      "enTitle": "Alteryx connects existing analytics workflows to conversational agents and MCP",
      "zh": "Alteryx 公告介绍 Ask Alteryx、Agent Studio、面向 OpenAI 的 Insights 和 MCP Server，让外部智能体调用已有数据、计算与流程，并继承现有权限。公告中的 token 和速度改善来自客户案例及内部测试，不能视为普遍保证；部分后续连接和调度能力仍在计划中。",
      "en": "Alteryx described Ask Alteryx, Agent Studio, Insights for OpenAI, and an MCP Server that lets external agents use existing data, calculations, and workflows under existing permissions. Token and speed improvements in the announcement come from customer examples and internal tests, not universal guarantees. Some expanded connection and scheduling capabilities remain planned.",
      "href": "https://www.prnewswire.com/news-releases/alteryx-launches-new-ai-capabilities-to-bring-governed-analytics-anywhere-work-happens-302872761.html"
    },
    {
      "index": "04",
      "label": "AI OPERATIONS · AI 运维",
      "source": "Red Hat",
      "date": "2026.09.09",
      "zhTitle": "Red Hat AI 3.5 正式发布，增加共享 GPU 管理与运行可见性",
      "enTitle": "Red Hat AI 3.5 reaches general availability with shared-GPU controls and observability",
      "zh": "Red Hat 宣布 AI 3.5 正式可用，整合多租户资源管理、使用情况观察和智能体开发工具。公告区分功能成熟度：部分 Kubernetes 推理支持已正式可用，Amazon EKS 支持属于技术预览，Kubeflow Spark Operator 属于开发者预览。平台提供的控制能力仍需按实际部署配置和验证。",
      "en": "Red Hat announced general availability of AI 3.5, combining multi-tenant resource management, usage visibility, and agent development tools. The release distinguishes maturity levels: some Kubernetes serving support is generally available, Amazon EKS support is a technology preview, and the Kubeflow Spark Operator is a developer preview. Controls still require configuration and validation for the actual deployment.",
      "href": "https://www.redhat.com/en/about/press-releases/red-hat-puts-safety-and-observability-core-enterprise-ai-red-hat-ai-35"
    },
    {
      "index": "05",
      "label": "EVALUATION PRACTICE · 评测实践",
      "source": "Hugging Face Community / Omer Nacar",
      "date": "2026.09.09",
      "zhTitle": "一项阿拉伯语评测复盘强调：分数也受完整调用流程影响",
      "enTitle": "An Arabic evaluation study highlights how the full serving pipeline shapes scores",
      "zh": "Omer Nacar 发布对 HUMAIN M3 预览接口的评测复盘，说明提示格式、输出预算、截断处理、响应解析和计分分母如何影响观察结果。实验在 9 月 5 日进行，文章在 9 月 9 日发表。这是作者研究，未确认同行评议；仅覆盖所选子集，不能当作整个模型或全部阿拉伯语能力的最终评价。",
      "en": "Omer Nacar published an evaluation retrospective on the HUMAIN M3 preview endpoint, examining prompt formatting, output budgets, truncation handling, response parsing, and scoring denominators. Experiments took place on September 5; the article appeared on September 9. This is author-reported research with peer-review status unconfirmed, covering selected subsets rather than a final judgment of the model or all Arabic capabilities.",
      "href": "https://huggingface.co/blog/Omartificial-Intelligence-Space/the-score-is-not-the-model"
    }
  ]
};

export const issue014: Issue = {
  "number": "014",
  "date": "2026-09-09",
  "readingTime": "约 7 分钟",
  "heading": "五件值得知道的事",
  "noteTitle": "今天的共同线索，是让能力更容易被实际使用。",
  "noteZh": "本期五条来源发布于 9 月 8 日，覆盖图像编辑、扩散语言模型、学生编程、天气预测和智能体工具。事实是新产品、访问计划与教程已公开；我们的判断是，速度、数据入口和学习机会共同决定技术能走多远。公司报告的改进仍需按具体任务检验，开放教程也需要读者检查数据、权限和结果。",
  "noteEn": "These five sources appeared on September 8, covering image editing, diffusion language models, student coding, weather forecasting, and agent tools. Products, access programs, and tutorials have been published; our judgment is that speed, data access, and learning opportunities together shape how useful they become. Company-reported gains still need task-specific testing, and open tutorials still call for checking data, permissions, and results.",
  "stories": [
    {
      "index": "01",
      "label": "IMAGE CREATION · 图像创作",
      "source": "OpenAI",
      "date": "2026.09.08",
      "zhTitle": "ChatGPT Images 2.5 推出，强调连续编辑与更快生成",
      "enTitle": "ChatGPT Images 2.5 launches with a focus on editing consistency and speed",
      "zh": "OpenAI 发布 Images 2.5，新增草图参考、模板和图像评论等创作入口，并在 API 提供 Flare 与 Sunburst。公司称相较 Images 2.0，生成延迟最多降低 50%，参考图保真度和多轮编辑一致性也有改善。这些是发布方的测量与主张；具体功能随平台和推出进度而异。",
      "en": "OpenAI released Images 2.5 with sketch references, templates, and image comments, plus Flare and Sunburst API models. The company reports up to 50% lower generation latency than Images 2.0 and improvements in reference fidelity and consistency across edits. These are publisher measurements and claims; individual features vary by platform and rollout.",
      "href": "https://openai.com/index/introducing-chatgpt-images-2-5/"
    },
    {
      "index": "02",
      "label": "MODEL RELEASE · 模型发布",
      "source": "Inception",
      "date": "2026.09.08",
      "zhTitle": "Mercury 2.5 发布，扩散语言模型面向低延迟工作流",
      "enTitle": "Mercury 2.5 brings diffusion language models to latency-sensitive workflows",
      "zh": "Inception 发布 Mercury 2.5，支持可调推理、并行工具调用和符合模式的 JSON，公告给出 260K token 上下文与每秒 1,107 token 的速度。速度来自发布方条件下的测量，不能视为每个请求的保证；同时介绍的 Mercury Voice 和 Router 仍为预览。",
      "en": "Inception released Mercury 2.5 with adjustable reasoning, parallel tool calls, and schema-aligned JSON. Its announcement lists a 260K-token context window and 1,107 tokens per second. That speed reflects publisher measurements under its serving conditions, not a guarantee for every request. The accompanying Mercury Voice and Router remain previews.",
      "href": "https://www.inceptionlabs.ai/blog/introducing-mercury-2-5"
    },
    {
      "index": "03",
      "label": "AI EDUCATION · AI 教育",
      "source": "AWS / About Amazon",
      "date": "2026.09.08",
      "zhTitle": "AWS 将一年免费 Kiro 使用计划扩展至 132 所高校",
      "enTitle": "AWS expands a free year of Kiro access to 132 universities",
      "zh": "AWS 宣布向 18 个国家、132 所高校的符合条件学生提供一年 Kiro 使用权，每月 1,000 credits，无需信用卡，并包含网页入口。项目强调先明确需求、设计和实现步骤，再检查生成结果。适用范围以参与学校与项目资格为准；教学收益的描述来自 AWS，尚非独立学习效果研究。",
      "en": "AWS announced a year of Kiro access for eligible students at 132 universities in 18 countries, with 1,000 monthly credits, no credit card requirement, and web access. The program emphasizes defining requirements and checking generated results. Eligibility depends on participating institutions and program terms; its educational benefits are described by AWS rather than established in an independent learning study.",
      "href": "https://www.aboutamazon.com/news/aws/amazon-expands-free-kiro-access-students-universities"
    },
    {
      "index": "04",
      "label": "SCIENCE WORKFLOW · 科学工作流",
      "source": "Hugging Face / Earthmover",
      "date": "2026.09.08",
      "zhTitle": "Hugging Face 与 Earthmover 发布开源天气模型运行教程",
      "enTitle": "Hugging Face and Earthmover publish a practical guide to open weather models",
      "zh": "双方联合教程用 Earthmover 的 ERA5 数据初始化 Aurora，演示生成预报并与历史再分析资料比较，也提供云端任务运行方式。文章聚焦数据获取和运行门槛，而非发布一个新的天气模型。免费历史数据存在时间滞后，教程中的预测示例不能替代经过验证的业务气象服务。",
      "en": "The joint tutorial initializes Aurora with ERA5 data from Earthmover, demonstrates forecasts and comparisons with historical reanalysis, and offers a cloud-job workflow. It addresses data access and execution barriers rather than announcing a new weather model. Free historical data has a time lag, and tutorial predictions are not a substitute for validated operational forecasting.",
      "href": "https://huggingface.co/blog/hugging-science/earthmover-hf"
    },
    {
      "index": "05",
      "label": "ENGINEERING VIEW · 工程观点",
      "source": "Hugging Face Community / Manoj Yadav",
      "date": "2026.09.08",
      "zhTitle": "社区文章讨论智能体工具层如何连接真实业务",
      "enTitle": "A community essay examines how agent tools connect to business processes",
      "zh": "Manoj Yadav 的文章以发票处理为例，讨论模型如何通过工具和 API 查询状态、准备动作并衔接审批流程。它提醒读者把模型回答能力与系统接入能力一起考虑。这是一篇署名工程观点，不是新产品发布或对某套工具的实测；实际流程仍需根据业务权限与失败处理来设计。",
      "en": "Manoj Yadav uses invoice processing to discuss how tools and APIs let models check status, prepare actions, and connect to approval workflows. The essay asks readers to consider system integration alongside model responses. It is a signed engineering perspective, not a product launch or measured evaluation; real workflows still need permissions and failure handling designed for their setting.",
      "href": "https://huggingface.co/blog/prismberry-technologies/the-tool-layer-is-the-real-power-behind-ai-agents"
    }
  ]
};

export const issue013: Issue = {
  number: "013",
  date: "2026-09-08",
  readingTime: "约 7 分钟",
  heading: "四件值得知道的事",
  noteTitle: "今天的共同线索，是把可以运行与值得信任分开。",
  noteZh: "过去24小时内可核实的新发布主要来自开源社区作者，因此本期只收录四条，不以旧消息凑数。事实是这些工具、数据与文章已经公开；我们的判断是，意图路由、原子安装、真实噪声标注和可组合运行时都在改善工程边界，但作者说明并不等于独立验证。能运行是开始，能复核、能失败得清楚，才更接近可靠。",
  noteEn: "Most verifiable releases in the past 24 hours came from open-source community authors, so this edition carries four items rather than padding the list with older news. The tools, data, and essays are public; our judgment is that intent routing, atomic installation, real-noise annotation, and composable runtimes are improving engineering boundaries, but author accounts are not independent validation. Running is a beginning; being inspectable and failing clearly brings a system closer to reliability.",
  stories: [
    {
      index: "01", label: "AGENT OPERATIONS · 智能体运维", source: "Hugging Face Community / CodeFace", date: "2026.09.07",
      zhTitle: "Aiden 为远程技能安装增加专用路由与原子发布",
      enTitle: "Aiden adds dedicated routing and atomic publication for remote skill installs",
      zh: "CodeFace 团队复盘 Aiden 的一次意图路由问题：远程技能链接可能被当成普通网页抓取，继而走向手工修改。修复后，skill_manage install 会暂存 SKILL.md 与配套文件、验证内容，再以原子方式发布，失败时不留下半成品。这是项目团队的工程说明，不是独立安全审计；它展示的是更明确的操作边界，而非对任意第三方技能的信任保证。",
      en: "The CodeFace team describes an intent-routing problem in Aiden: a remote skill URL could be treated as a page to scrape and lead to manual patching. The new skill_manage install path stages SKILL.md and companion files, validates them, and publishes atomically so failures do not leave a partial install. This is the project's engineering account, not an independent security audit; it clarifies operational boundaries rather than guaranteeing trust in arbitrary third-party skills.",
      href: "https://huggingface.co/blog/NatalieY/aiden-can-now-install-ai-agent-skills-directly"
    },
    {
      index: "02", label: "SPEECH DATA · 语音数据", source: "ARTPARK / IISc community team", date: "2026.09.07",
      zhTitle: "Project Vaani 增加覆盖 58 种印度语言的真实噪声标注层",
      enTitle: "Project Vaani gains a real-world noise annotation layer across 58 Indian languages",
      zh: "团队发布一个建立在 Project Vaani 自发语音之上的人工标注噪声层，报告包含 106,892 个带时间戳的真实环境噪声事件、106 类噪声和 58 种印度语言。它可用于研究噪声鲁棒语音识别与分离。数字来自数据集发布团队，覆盖度、标签一致性及对具体场景的代表性仍需下载后的独立检查。",
      en: "The team released a human-annotated noise layer over spontaneous Project Vaani speech, reporting 106,892 timestamped real-world noise events, 106 noise classes, and 58 Indian languages. It is intended for research on noise-robust speech recognition and separation. The figures come from the dataset team; coverage, label consistency, and representativeness for a particular setting still require independent inspection after download.",
      href: "https://huggingface.co/blog/ARTPARK-IISc/a-real-world-dataset-for-noise-robust-speech-ai"
    },
    {
      index: "03", label: "RL EXPLAINER · 强化学习解读", source: "Hugging Face Community / Sergio Paniego", date: "2026.09.07",
      zhTitle: "一篇社区文章梳理强化学习环境为何在今天更易组合",
      enTitle: "A community essay traces why reinforcement-learning environments are easier to compose today",
      zh: "Sergio Paniego 从 Gym、分布式采样到当前面向语言模型的环境工具，梳理强化学习环境的演进，重点解释标准接口、可扩展算力和开源训练栈如何降低实验门槛。这是一篇历史性与解释性的作者文章，不是新模型发布或效果研究；其价值在于整理工程脉络，具体取舍仍应回到各项目文档和可复现实验。",
      en: "Sergio Paniego traces reinforcement-learning environments from Gym and distributed sampling to current language-model tooling, emphasizing how standard interfaces, scalable compute, and open training stacks lowered experimentation barriers. This is a historical and explanatory author essay, not a new model release or outcomes study; its value is the engineering map, while specific choices should be checked against project documentation and reproducible experiments.",
      href: "https://huggingface.co/blog/sergiopaniego/rl-environments-story"
    },
    {
      index: "04", label: "PARALLEL TOOLING · 并行工具", source: "Hugging Face Community / Rob Tacconelli", date: "2026.09.07",
      zhTitle: "Tolquane 用可视化流程与 Python 组件描述并行任务",
      enTitle: "Tolquane describes parallel tasks with visual flows and Python components",
      zh: "Tolquane 项目介绍一组可组合的 Python 并行编程组件及浏览器流程编辑器，目标是让同一张任务图运行在不同执行后端。作者还提出避免挂起等可靠性主张，但本期未找到独立基准或安全评估，因此不把这些主张视为已证实事实。适合把它看作可测试的社区原型，而不是生产保障。",
      en: "Tolquane presents composable Python building blocks for parallel programs plus a browser flow editor, aiming to run one task graph across different execution backends. The author also makes reliability claims such as avoiding hangs, but this edition found no independent benchmark or security review, so those claims are not treated as established fact. It is best read as a testable community prototype rather than a production guarantee.",
      href: "https://huggingface.co/blog/robtacconelli/tolquane-parallel-programming-in-a-few-clic"
    }
  ]
};

export const issue012: Issue = {
  "number": "012",
  "date": "2026-09-07",
  "readingTime": "约 6 分钟",
  "heading": "三件值得知道的事",
  "noteTitle": "今天的共同线索，是进展越快，越要说清证据来自哪里。",
  "noteZh": "过去24小时可核实的重要发布不多，因此本期只收录三条，不用旧消息凑数。事实是两篇 OpenAI 文章和一个 Gemini CLI 每夜版本在 9 月 6 日发布；我们的判断是，内部指标、署名观点和预发布软件都值得观察，却属于不同类型的证据。读者应分别看待发布方测量、作者预测与可供测试的代码。",
  "noteEn": "Few consequential releases could be verified in the past 24 hours, so this edition contains three rather than padding the list with older news. The fact is that two OpenAI articles and one Gemini CLI nightly build appeared on September 6. Our judgment is that internal metrics, signed perspectives, and prerelease software are all worth observing but are different kinds of evidence. Publisher measurements, forecasts, and testable code should be read differently.",
  "stories": [
    {
      "index": "01",
      "label": "RESEARCH PRACTICE · 研究实践",
      "source": "OpenAI",
      "date": "2026.09.06",
      "zhTitle": "OpenAI 发布内部研究加速观察，称编码智能体已改变研究工作流",
      "enTitle": "OpenAI shares an internal view of research acceleration from coding agents",
      "zh": "OpenAI 发布内部数据，称研究人员更多并发使用编码智能体、提交代码和运行实验，并把“研究实习生”定义为在人类指导下完成边界明确、原本需数日的任务。文章同时承认这些指标仍属早期、研究有多重瓶颈，复杂任务仍需显著人工引导。所有数据来自 OpenAI 内部测量，不能视为独立验证，也不能把代码量直接等同于科学进展。",
      "en": "OpenAI published internal measurements indicating that researchers are using more concurrent coding agents, contributing code, and running experiments. It defines a “research intern” as a system that completes well-defined, multi-day tasks under human direction. The post also calls the measurements preliminary, notes multiple research bottlenecks, and says complex tasks still require substantial steering. These are OpenAI’s internal findings, not independent validation, and more code is not automatically more scientific progress.",
      "href": "https://openai.com/index/research-acceleration-view-inside-openai/"
    },
    {
      "index": "02",
      "label": "ALIGNMENT VIEW · 对齐观点",
      "source": "OpenAI / Jakub Pachocki",
      "date": "2026.09.06",
      "zhTitle": "OpenAI 首席科学家讨论能力增长、监测边界与谨慎扩展",
      "enTitle": "OpenAI’s chief scientist discusses capability growth, monitoring limits, and cautious scaling",
      "zh": "Jakub Pachocki 在一篇署名文章中讨论推理模型能力增长与对齐研究，强调对内部推理的监测正在变难，并认为扩展能力需要与更可靠的监测和安全证据同步。这是作者基于 OpenAI 内部观察提出的观点与预测，不是已经证实的未来路线，也不代表对齐问题已经解决；文章反而明确承认目前仍存在重大不确定性。",
      "en": "In a signed essay, Jakub Pachocki discusses growing reasoning-model capabilities and alignment work, arguing that monitoring internal reasoning is becoming harder and that scaling should be matched by stronger monitoring and safety evidence. These are the author’s views and forecasts based on internal observations, not a proven future trajectory or evidence that alignment is solved; the essay explicitly acknowledges major uncertainty.",
      "href": "https://openai.com/index/an-alien-mind/"
    },
    {
      "index": "03",
      "label": "TOOLING RELEASE · 工具发布",
      "source": "Google Gemini CLI",
      "date": "2026.09.06",
      "zhTitle": "Gemini CLI 发布 0.60.0 每夜预览版本",
      "enTitle": "Gemini CLI publishes the 0.60.0 nightly preview",
      "zh": "Google 的 Gemini CLI 仓库发布 v0.60.0-nightly.20260906.g85aca163f，并将其标记为预发布版本，提供与前一夜版本之间的完整变更链接。每夜构建适合跟踪开发进度和提前测试，不等于稳定版，也可能包含尚未充分验证的变化。普通用户应继续优先选择正式或明确标记的预览版本。",
      "en": "Google’s Gemini CLI repository published v0.60.0-nightly.20260906.g85aca163f as a pre-release, with a full changelog against the previous nightly. Nightly builds are useful for following development and early testing, but they are not stable releases and may contain changes that have not been broadly validated. Most users should prefer stable or explicitly designated preview versions.",
      "href": "https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260906.g85aca163f"
    }
  ]
};

export const issue011: Issue = {
  "number": "011",
  "date": "2026-09-04",
  "readingTime": "约 9 分钟",
  "heading": "六件值得知道的事",
  "noteTitle": "今天的共同线索，是能力之外，工作如何被接续和检查。",
  "noteZh": "本期收录 9 月 3 日发布的模型公告、开源项目和技术实践。事实是这些信息已经公开；我们的判断是，新模型带来的能力需要与可迁移的记录、明确的任务格式、可复现的实验和权限检查一起使用。开放代码方便复核，却不自动等于结果已被独立验证；把工作接起来，也不意味着把判断全部交出去。",
  "noteEn": "This edition covers model announcements, open projects, and technical practices published on September 3. Their publication is fact; our judgment is that new capabilities should be paired with portable records, explicit formats, reproducible experiments, and authorization checks. Open code makes scrutiny easier but does not mean results have been independently validated. Connecting the work does not require handing over every judgment.",
  "stories": [
    {
      "index": "01",
      "label": "MODEL RELEASE · 模型发布",
      "source": "OpenAI",
      "date": "2026.09.03",
      "zhTitle": "GPT-6 Astra 开始分阶段推出，重点扩展电脑与浏览器操作",
      "enTitle": "GPT-6 Astra begins a staged rollout with stronger computer and browser use",
      "zh": "OpenAI 宣布 GPT-6 Astra，强调电脑操作、浏览、编码和专业任务能力。公告称先向部分组织开放，再逐步覆盖指定 ChatGPT 付费方案、API 与 AWS；企业工作区在发布时默认关闭，需管理员启用。性能与对齐改进来自公司评估，不等于每个用户已经可用，也不能视为任何任务都能可靠完成的保证。",
      "en": "OpenAI introduced GPT-6 Astra, emphasizing computer use, browsing, coding, and professional tasks. The announcement describes initial access for selected organizations followed by supported paid ChatGPT plans, the API, and AWS; enterprise access is off by default at launch. Performance and alignment improvements are company evaluations, not evidence that every user already has access or that every task can be completed reliably.",
      "href": "https://openai.com/index/gpt-6-astra/"
    },
    {
      "index": "02",
      "label": "PORTABLE MEMORY · 可迁移记忆",
      "source": "Hugging Face",
      "date": "2026.09.03",
      "zhTitle": "funes 将编码智能体的会话记录转为用户持有的可检索记忆",
      "enTitle": "funes turns coding-agent traces into searchable memory owned by the user",
      "zh": "Hugging Face 介绍 funes：为已有会话建立索引、检索与来源追踪，本地使用 Lance 数据集，也可同步到用户持有、默认私有的 Hub 数据集。项目支持跨机器延续工作，并描述了发布前的秘密扫描。它是工程化记忆工具，不是模型拥有个人回忆的证明；扫描也不能替代用户对敏感内容的检查。",
      "en": "Hugging Face presents funes for indexing, retrieving, and tracing existing agent sessions. Memory uses a local Lance dataset and can sync to a user-owned Hub dataset that is private by default. The project supports continuity across machines and describes secret scanning before publication. This is an engineered retrieval system, not evidence of personal recollection in a model; scanning does not replace reviewing sensitive material.",
      "href": "https://huggingface.co/blog/funes"
    },
    {
      "index": "03",
      "label": "DOCUMENT RETRIEVAL · 文档检索",
      "source": "H company",
      "date": "2026.09.03",
      "zhTitle": "NeoMME 用单一编码器处理多语言文本与图像",
      "enTitle": "NeoMME uses one encoder for multilingual text and images",
      "zh": "H company 发布 NeoMME 的 260M 与 800M 系列及检索版本，以一个双向 Transformer 同时处理文字和原始图像块，并开放模型与 Transformers 实现。作者在文档检索基准上报告了紧凑模型的效率优势。结果来自团队测试及预印本工作，不能直接外推到任意资料库；基础编码器仍需适配具体任务。",
      "en": "H company released the 260M and 800M NeoMME families and retrieval variants, using one bidirectional Transformer for text and raw image patches, with model checkpoints and a Transformers implementation. The authors report efficiency advantages in document-retrieval benchmarks. These are team evaluations and preprint findings, not guarantees for arbitrary collections; the base encoder still needs task-specific adaptation.",
      "href": "https://huggingface.co/blog/Hcompany/neomme"
    },
    {
      "index": "04",
      "label": "SMALL MODELS · 小模型训练",
      "source": "Hugging Face / LiquidAI",
      "date": "2026.09.03",
      "zhTitle": "100 步 GRPO 微调改善小模型的结构化输出，但仍有明显局限",
      "enTitle": "A 100-step GRPO recipe improves structured output while leaving clear limits",
      "zh": "公开教程用约 500 个样本、100 个训练步骤微调 LFM2.5-350M，并在相同推理配置下报告 IFStruct 通过率从 22.6% 升至 29.7%。提升主要来自 JSON，YAML 改善很小。这是可复现配方中的特定实验，不是通用可靠性证明；29.7% 的总通过率也提醒人们，接入下游系统仍需严格校验。",
      "en": "A public tutorial fine-tunes LFM2.5-350M with about 500 samples and 100 steps, reporting an IFStruct pass-rate increase from 22.6% to 29.7% on the same serving setup. Most gains are in JSON, with little change in YAML. This is a specific experiment with a reproducible recipe, not general reliability evidence; the overall pass rate still calls for strict downstream validation.",
      "href": "https://huggingface.co/blog/grpo-with-trl-ifstruct"
    },
    {
      "index": "05",
      "label": "CREATIVE EXPERIMENT · 创作实验",
      "source": "Hugging Face / Sergio Paniego",
      "date": "2026.09.03",
      "zhTitle": "开源实验让编码模型通过 JavaScript 绘制水彩",
      "enTitle": "An open experiment trains a coding model to paint watercolours through JavaScript",
      "zh": "Sergio Paniego 公开使用 TRL 与 OpenEnv 的水彩绘画训练实验：模型输出绘画代码，环境渲染结果，再通过奖励反馈训练。文章提供参考数据、环境、训练脚本和模型，并比较不同奖励组合。它是对既有艺术思路的开放工程实现，不代表模型具有人类审美体验，也不能把评分提高等同于普遍的艺术进步。",
      "en": "Sergio Paniego published a watercolour-training experiment using TRL and OpenEnv: a model writes painting code, the environment renders it, and reward feedback guides training. Reference data, environments, scripts, and models are open, with different reward mixes compared. This is an open engineering implementation of an earlier artistic idea, not evidence of human-like aesthetic experience or universal artistic progress.",
      "href": "https://huggingface.co/blog/train-to-paint-with-code"
    },
    {
      "index": "06",
      "label": "AGENT OPERATIONS · 智能体运维",
      "source": "AWS",
      "date": "2026.09.03",
      "zhTitle": "AgentCore 迁移指南区分更换运行环境与改变决策方式",
      "enTitle": "An AgentCore migration guide separates hosting changes from planning changes",
      "zh": "AWS 发布分阶段迁移指南：先保留 LangGraph 的决策图，将运行、工具和状态迁入 AgentCore；再按需要改为 Strands 的模型驱动规划。指南特别指出，网络、权限、秘密轮换等责任不会自动消失。这是一套参考实现而非成效研究；迁移是否成功，应依据既定任务结果和权限测试，而不是只看回答是否流畅。",
      "en": "AWS published a staged migration guide: first retain a LangGraph decision graph while moving runtime, tools, and state to AgentCore, then optionally adopt model-driven planning with Strands. Network design, permissions, and secret rotation do not automatically disappear. This is a reference implementation rather than an outcomes study; success should be tested against task results and authorization requirements, not fluent replies alone.",
      "href": "https://aws.amazon.com/blogs/machine-learning/migrate-agentic-workloads-to-amazon-bedrock-agentcore/"
    }
  ]
};

export const issue010: Issue = {
  "number": "010",
  "date": "2026-09-03",
  "readingTime": "约 8 分钟",
  "heading": "六件值得知道的事",
  "noteTitle": "今天的共同线索，是从能生成，走向能核对、能接入、能被人使用。",
  "noteZh": "本期六篇来源均发布于 9 月 2 日，涵盖模型发布、早期访问、研究介绍与应用案例；案例所述实践不一定发生在当天。事实是这些信息已被发布，判断则是：能力要在真实工作中留下价值，还需要持续的数据、可复核的检查和适合人的使用方式。Early Access 不等于全面可用，发布方报告也不等于独立验证。",
  "noteEn": "All six sources were published on September 2, spanning a model release, Early Access, research, and application cases; the activities described in those cases did not necessarily happen that day. The fact is that these accounts were published. Our judgment is that useful capabilities also need current data, reproducible checks, and workflows designed for people. Early Access is not general availability, and publisher reports are not independent validation.",
  "stories": [
    {
      "index": "01",
      "label": "MODEL UPDATE · 模型更新",
      "source": "Google",
      "date": "2026.09.02",
      "zhTitle": "Google 发布 Gemini 3.8 Flash，强调编码与多步骤任务改进",
      "enTitle": "Google introduces Gemini 3.8 Flash with a focus on coding and multistep tasks",
      "zh": "Google 发布 Gemini 3.8 Flash，称其改进了软件工程、智能体任务和多步骤推理能力，并继续强调速度与成本。这是公司的模型发布说明；能力提升来自发布方评估，不能直接视为独立验证，也不意味着在每个真实工作流中都优于其他模型。实际采用仍需按任务测试准确性、延迟和费用。",
      "en": "Google introduced Gemini 3.8 Flash, reporting improvements in software engineering, agentic tasks, and multistep reasoning while emphasizing speed and cost. This is a company release: the capability claims come from the publisher rather than independent validation, and do not establish superiority in every real workflow. Adoption still calls for task-specific tests of accuracy, latency, and cost.",
      "href": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    },
    {
      "index": "02",
      "label": "STREAMING AI · 实时数据",
      "source": "IBM Research / Confluent",
      "date": "2026.09.02",
      "zhTitle": "IBM 时间序列模型在 Confluent Cloud 开启早期访问",
      "enTitle": "IBM time-series models enter Early Access on Confluent Cloud",
      "zh": "IBM Research 宣布，面向预测、异常检测等任务的时间序列基础模型已在 Confluent Cloud 开启 Early Access，让模型靠近持续流动的数据运行。文章称 Confluent Platform 支持将随后推出。这是早期访问而非全面正式可用；实时接入也不自动保证预测准确，效果仍取决于数据质量和具体业务。",
      "en": "IBM Research announced Early Access for time-series foundation models on Confluent Cloud, bringing forecasting and anomaly-detection capabilities closer to streaming data. Support for Confluent Platform is described as coming next. Early Access is not general availability, and real-time integration does not itself guarantee accurate forecasts: results remain dependent on data quality and the use case.",
      "href": "https://huggingface.co/blog/ibm-research/real-time-intelligence"
    },
    {
      "index": "03",
      "label": "WORLD MODELS · 世界模型",
      "source": "Puffin-World research team",
      "date": "2026.09.02",
      "zhTitle": "Puffin-World 探索把原生 3D 状态纳入统一多模态模型",
      "enTitle": "Puffin-World explores native 3D states in a unified multimodal model",
      "zh": "Puffin-World 研究团队在项目文章中提出统一感知、模拟、生成与三维重建的框架，显式表示物理、几何和外观状态，并提供项目及代码等入口。其目标是让模型处理的不只是图像表面。本文是作者发布的研究介绍，同行评议状态未获确认；展示结果不等于已经解决普遍可靠的物理模拟。",
      "en": "The Puffin-World team presents a framework unifying perception, simulation, generation, and 3D reconstruction through explicit physical, geometric, and appearance states, with links to project resources and code. The aim is to represent more than image surfaces. This is an author-published research introduction whose peer-review status has not been established here; demonstrations do not amount to generally reliable physical simulation.",
      "href": "https://huggingface.co/blog/KangLiao/puffin-world"
    },
    {
      "index": "04",
      "label": "CONTENT CHECKS · 内容校验",
      "source": "AWS",
      "date": "2026.09.02",
      "zhTitle": "AWS 用视觉推理与确定性比较检查仪表盘内容故障",
      "enTitle": "AWS combines visual reasoning and deterministic checks for dashboard failures",
      "zh": "AWS 介绍内部团队如何用 Amazon Bedrock 监测仪表盘：视觉推理检查内容完整性，智能体提取数据后再以确定性方法比较数值。重点是服务可访问并不代表图表和数字正确。这是单一内部应用案例，而非通用基准；值得借鉴的是把模型理解与可复核的规则校验分开。",
      "en": "AWS describes an internal team's use of Amazon Bedrock to monitor dashboards: visual reasoning checks content integrity, while agentic extraction feeds deterministic numeric comparisons. The distinction matters because reachable infrastructure does not guarantee correct charts or figures. This is one internal case rather than a general benchmark; the transferable pattern is separating model interpretation from reproducible rule-based checks.",
      "href": "https://aws.amazon.com/blogs/machine-learning/how-an-aws-team-detects-dashboard-content-failures-at-scale-using-amazon-bedrock/"
    },
    {
      "index": "05",
      "label": "ACCESSIBLE AI · 无障碍应用",
      "source": "University Startups / g/d/n/a / AWS",
      "date": "2026.09.02",
      "zhTitle": "Trinity 展示面向残障学生升学与生活规划的智能体系统",
      "enTitle": "Trinity presents agent-assisted transition planning for students with disabilities",
      "zh": "合作方介绍 Trinity 如何通过协调器与专门智能体，为残障学生从学校走向继续教育、就业和独立生活提供规划支持，并加入语音功能及教师界面。这是一篇产品与架构案例，不是证明教育成效的独立研究。个性化建议仍需要学生、家庭和教育工作者结合真实条件共同判断。",
      "en": "The partners describe Trinity's use of an orchestrator and specialized agents to support students with disabilities in planning for further education, employment, and independent living, alongside voice features and educator interfaces. This is a product and architecture case, not an independent study establishing educational outcomes. Personalized suggestions still require judgment from students, families, and educators in their actual circumstances.",
      "href": "https://aws.amazon.com/blogs/machine-learning/trinity-agentic-ai-powered-transition-planning-for-students-with-disabilities/"
    },
    {
      "index": "06",
      "label": "SMALL TEAM · 小团队实践",
      "source": "OpenAI / ATV Big Air Tour",
      "date": "2026.09.02",
      "zhTitle": "ATV Big Air Tour 分享用 AI 处理库存与活动信息的经验",
      "enTitle": "ATV Big Air Tour shares AI-assisted inventory and event-administration workflows",
      "zh": "OpenAI 发布 ATV Big Air Tour 的客户案例，介绍小团队把 ChatGPT 用于商品库存、补货准备和活动信息核对。案例将价值落在重复行政工作，而不是取代现场活动本身。节省时间的叙述来自公司与客户，未经独立审计；其他团队能否复制，仍取决于输入质量与人工复核安排。",
      "en": "OpenAI published a customer case describing ATV Big Air Tour's use of ChatGPT for merchandise inventory, reorder preparation, and event-listing checks. The emphasis is on repetitive administration rather than replacing the live events themselves. Time-saving accounts come from the company and customer, not an independent audit; transferability depends on input quality and the team's review process.",
      "href": "https://openai.com/index/atv-big-air-tour/"
    }
  ]
};

export const issue009: Issue = {
  number: "009", date: "2026-09-02", readingTime: "约 10 分钟", heading: "六件值得知道的事",
  noteTitle: "今天的共同线索，是能力开始进入工作流以后，边界也必须成为产品的一部分。",
  noteZh: "过去一天的更新涉及更强模型、医疗数据连接、企业智能体、用量控制、权限设计和药物筛选。事实是这些产品、案例和研究已经发布；我们的判断是，AI 从回答问题走向执行工作时，数据来源、保留规则、预算、访问范围与实验验证不能留到最后补做。模型能力与案例成效多由发布方报告，医疗和药物研究也不等于可直接用于诊疗。",
  noteEn: "The past day brought updates across stronger models, healthcare data connections, enterprise agents, usage controls, permission design, and drug screening. The fact is that these products, cases, and studies were published. Our judgment is that as AI moves from answering questions to executing work, data provenance, retention rules, budgets, access scope, and experimental validation must become part of the product rather than an afterthought. Model capabilities and case outcomes are largely publisher-reported, and healthcare or drug research is not the same as deployable care.",
  stories: [
    { index: "01", label: "MODEL ACCESS · 模型接入", source: "AWS / Anthropic", date: "2026.09.01", zhTitle: "Claude Fable 5.1 登陆 Amazon Bedrock，并附带更严格的数据保留规则", enTitle: "Claude Fable 5.1 arrives on Amazon Bedrock with stricter data-retention rules", zh: "AWS 宣布 Claude Fable 5.1 可通过 Amazon Bedrock 与 Claude Platform on AWS 使用，面向编码、科学研究和长时企业任务。Anthropic 将它列为 Covered Model；Bedrock 默认要求 aws_review 模式，提示和输出最多保留 30 天供 AWS 安全复核。符合 Enterprise Frontier Safeguards 条件的内部用途可选择零数据保留。能力改进来自 Anthropic 与 AWS 的报告。", en: "AWS has made Claude Fable 5.1 available through Amazon Bedrock and Claude Platform on AWS for coding, scientific research, and long-running enterprise work. Anthropic classifies it as a Covered Model: Bedrock normally requires aws_review mode, retaining prompts and outputs for up to 30 days for AWS safety review. Eligible internal use under Enterprise Frontier Safeguards can use zero data retention. Capability improvements are reported by Anthropic and AWS.", href: "https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-1-on-aws/" },
    { index: "02", label: "HEALTHCARE DATA · 医疗数据", source: "OpenAI", date: "2026.09.01", zhTitle: "ChatGPT for Healthcare 增加 Epic 病历连接与九类官方数据源", enTitle: "ChatGPT for Healthcare adds Epic context and nine official data sources", zh: "OpenAI 发布 Epic 电子健康记录集成与 Healthcare Public Data 插件：授权机构可在 ChatGPT 中审阅患者上下文，并查询 PubMed、DailyMed、ClinicalTrials.gov 和 CMS Coverage 等九类官方来源。公司称医生在 27 个临床用例的 4,363 次评分中，将 99.1% 的响应评为安全；这是 OpenAI 的产品评估，不代表独立临床结局研究，输出仍需专业人员复核。", en: "OpenAI introduced an Epic electronic-health-record integration and a Healthcare Public Data plugin, letting authorized organizations review patient context and query nine official sources including PubMed, DailyMed, ClinicalTrials.gov, and CMS Coverage. The company reports that physicians rated 99.1% of responses safe across 4,363 ratings and 27 clinical use cases. This is an OpenAI product evaluation, not an independent patient-outcomes study, and outputs still require professional review.", href: "https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources/" },
    { index: "03", label: "ENTERPRISE AGENTS · 企业智能体", source: "OpenAI", date: "2026.09.01", zhTitle: "三家 AI 原生公司展示把智能体嵌入可重复工作流的方法", enTitle: "Three AI-native companies show how agents become repeatable workflows", zh: "OpenAI 汇总 Basis、Clay 与 Exa Labs 的案例，分别把智能体用于员工入职、账户管理和开发者集成。文章同时引用 Enterprise Signals：AI 使用量前 10% 的企业，每位活跃用户输出 token 数是典型企业的 8.3 倍，1 月时为 2.6 倍。该指标和案例来自 OpenAI 及客户观察，说明采用深度，不直接证明生产率或投资回报。", en: "OpenAI profiles Basis, Clay, and Exa Labs using agents for employee onboarding, account management, and developer integrations. It also cites Enterprise Signals: firms in the top 10% of AI usage now generate 8.3 times as many output tokens per active user as typical firms, up from 2.6 times in January. These OpenAI and customer observations measure usage depth, not productivity or return on investment by themselves.", href: "https://openai.com/index/ai-native-company-workflows/" },
    { index: "04", label: "AI FINOPS · 成本治理", source: "Jamf / AWS", date: "2026.09.01", zhTitle: "Jamf 用分级模型限制把 Bedrock 个人预算变成实时策略", enTitle: "Jamf turns per-user Bedrock budgets into tiered model restrictions", zh: "Jamf 与 AWS 公开一套生产架构：按工程师统计每日 Bedrock 成本，在预算达到 80% 时限制高成本 Opus、达到 100% 时进一步限制 Sonnet，同时保留低成本 Haiku。Athena 计算花费，Lambda 每 15 分钟检查，IAM 策略在无需重新登录的情况下生效，并提供限时例外。这是单一客户方案，阈值与收益需按组织重新设计。", en: "Jamf and AWS describe a production architecture that tracks daily Bedrock cost per engineer, restricts the higher-cost Opus model at 80% of budget, further restricts Sonnet at 100%, and keeps the lower-cost Haiku option available. Athena calculates spend, Lambda checks every 15 minutes, and IAM policies apply without reauthentication, with time-boxed exceptions. This is one customer pattern; thresholds and benefits need redesign for each organization.", href: "https://aws.amazon.com/blogs/machine-learning/tokenomics-at-scale-how-jamf-built-real-time-spend-enforcement-for-amazon-bedrock/" },
    { index: "05", label: "ACCESS CONTROL · 访问控制", source: "AWS", date: "2026.09.01", zhTitle: "Amazon Quick 安全指南把数据塑形、智能体隔离与审批门纳入上线条件", enTitle: "Amazon Quick guidance treats data shaping, agent isolation, and approval gates as production requirements", zh: "AWS 发布从概念验证走向生产的 Amazon Quick 安全实践，以 5,000 名员工、五个部门和三类权限受众的示例说明四种模式：按授权塑形数据集、隔离智能体、分类文档、为外部动作设置人工审批。文章是 AnyCompany 场景的技术指南，不是一次现实部署成效评估，但清楚展示了仅依赖单层权限为何不足。", en: "AWS published production-security guidance for Amazon Quick using a sample organization with 5,000 employees, five departments, and three audience levels. It demonstrates four patterns: shaping datasets around authorization, isolating agents, classifying documents, and placing human approval gates on outbound actions. This is an AnyCompany technical walkthrough rather than a deployment-outcomes study, but it shows why a single permission layer is insufficient.", href: "https://aws.amazon.com/blogs/machine-learning/securing-amazon-quick-from-poc-to-production-agents-flows-and-spaces/" },
    { index: "06", label: "DRUG DISCOVERY · 药物发现", source: "Nature Biotechnology", date: "2026.09.01", zhTitle: "AdaptiveFlow 用自适应筛选缩小 690 亿分子库的搜索空间", enTitle: "AdaptiveFlow narrows the search across a 69-billion-molecule library", zh: "同行评议研究发布开源 AdaptiveFlow，为 690 亿个可对接分子提供筛选就绪数据，并整合超过 1,500 种对接协议。作者报告，自适应预筛在部分设置中可将计算成本降低至多 1,000 倍，并通过生化实验与晶体结构验证了两个靶点的纳摩尔级抑制剂。结果支持早期先导发现，不代表候选物已经证明安全、有效或可成为药物。", en: "A peer-reviewed study introduces the open-source AdaptiveFlow platform with a screening-ready library of 69 billion dockable molecules and more than 1,500 docking protocols. The authors report that adaptive prescreening can reduce computational cost by up to 1,000-fold in some settings, and they validated nanomolar inhibitors for two targets through biochemical assays and crystal structures. This supports early hit discovery; it does not show that candidates are safe, effective, or ready to become medicines.", href: "https://www.nature.com/articles/s41587-026-03217-x" },
  ],
};

export const issue008: Issue = {
  number: "008", date: "2026-09-01", readingTime: "约 9 分钟", heading: "六件值得知道的事",
  noteTitle: "今天的共同线索，是速度增加以后，校验与现实仍然不能被跳过。",
  noteZh: "过去一天的发布从广告平台扩张、机器人研究代码到 AI 辅助科学与临床综述，落在完全不同的场景。事实是这些产品数字、实践文章、社区项目和同行评议成果已经公开；我们的判断是，自动化让生成、试验和传播更快，却没有缩短验证事实、比较基线和回到现实环境的必要过程。商业数字由公司报告，社区文章不是独立审查，医学结果也不是临床部署证明。",
  noteEn: "The past day brought releases spanning advertising expansion, robotics research code, AI-assisted science, and a clinical meta-analysis. The fact is that these product figures, practice essays, community projects, and peer-reviewed findings were published. Our judgment is that automation accelerates generation, experimentation, and distribution, but does not remove the slower work of verifying claims, comparing baselines, and returning to real environments. Business figures are company-reported, community posts are not independent review, and medical results are not proof of clinical deployment.",
  stories: [
    { index: "01", label: "BUSINESS MODEL · 商业模式", source: "OpenAI", date: "2026.08.31", zhTitle: "ChatGPT Ads 年化收入运行率达到 10 亿美元，并扩大自助购买范围", enTitle: "ChatGPT Ads reaches a $1B annualized revenue run rate and expands self-service buying", zh: "OpenAI 称，ChatGPT Ads 上线不到 200 天，年化收入运行率达到 10 亿美元，已有数万家广告主使用；Ads Manager 的自助购买范围扩展至印度、欧洲、中东和北非。公司同时表示广告会明确标注、与回答分离，广告主无法访问私人对话。收入、用户与体验指标均为 OpenAI 自行报告。", en: "OpenAI says ChatGPT Ads reached a $1 billion annualized revenue run rate less than 200 days after launch and is used by tens of thousands of advertisers. Self-service Ads Manager buying is expanding across India, Europe, the Middle East, and North Africa. The company says ads are labeled and separated from answers and that advertisers cannot access private conversations. Revenue, usage, and experience figures are OpenAI-reported.", href: "https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/" },
    { index: "02", label: "ROBOTICS · 机器人", source: "Hugging Face Community", date: "2026.08.31", zhTitle: "VLANeXt 以逐项配方整理视觉—语言—动作模型研究", enTitle: "VLANeXt organizes vision-language-action research as an incremental recipe", zh: "社区项目 VLANeXt 发布面向机器人研究的代码与实验总结，从专用策略模块、动作分块、连续动作建模、多视角输入到世界模型，逐项比较设计选择，并在 LIBERO、LIBERO-plus 与真实机器人实验中测试。它提供可复现实验起点，但仍是作者团队发布的研究项目，基准与实机结果不能自动推广到其他机器人和环境。", en: "The community project VLANeXt publishes code and an experimental recipe for robotics research, comparing dedicated policy modules, action chunking, continuous action modeling, multi-view inputs, and world models across LIBERO, LIBERO-plus, and real-robot experiments. It offers a reproducible starting point, but remains an author-published research project; benchmark and hardware results do not automatically transfer to other robots or environments.", href: "https://huggingface.co/blog/cavanloy/vlanext" },
    { index: "03", label: "PUBLISHING · 技术写作", source: "Hugging Face Community", date: "2026.08.31", zhTitle: "智能体时代的技术写作把稀缺工作重新放在编辑判断上", enTitle: "Technical writing in the agentic era puts the scarce work back on editorial judgment", zh: "一篇社区实践文章提出：智能体让改写段落、重做图表和交互解释变得便宜，真正稀缺的是决定什么值得关注、证据如何呈现，以及对生成文本逐项核对。作者建议把最强结果前置、围绕视觉组织文章，并像审查代码一样追踪逻辑、术语、数字和引用。这是个人工作方法，不是受控研究结论。", en: "A community practice essay argues that agents make rewriting prose, rebuilding charts, and trying interactive explanations cheap; the scarce work is deciding what deserves attention, how evidence should appear, and how generated text is checked. It recommends leading with the strongest result, writing around visuals, and reviewing logic, terms, numbers, and citations as carefully as code. This is a personal workflow, not a controlled research finding.", href: "https://huggingface.co/blog/joelniklaus/technical-writing-in-the-agentic-era" },
    { index: "04", label: "AI FOR SCIENCE · 科学智能", source: "Nature Human Behaviour", date: "2026.08.31", zhTitle: "评论提醒：AI 辅助科学既会变快，也必须保留慢研究", enTitle: "Commentary argues that AI-assisted science will be both fast and necessarily slow", zh: "《Nature Human Behaviour》评论指出，AI 会加速数字化、可扩展且往往集中于特定人群的行为科学研究，但关于人类行为的证据并不总能规模化。作者主张把快速自动化研究与真实环境中的慢速研究连接起来。文章属于同行评议期刊评论，提出的是方法论判断，而非新的实验效果。", en: "A Nature Human Behaviour commentary says AI will accelerate behavioral research that is digital, scalable, and often concentrated in particular populations, while evidence about human behavior cannot always be scaled. The authors call for linking rapid automated work with slower research in real settings. This is a journal commentary making a methodological argument, not reporting a new experimental effect.", href: "https://www.nature.com/articles/s41562-026-02574-6" },
    { index: "05", label: "EARTH SYSTEMS · 地球系统", source: "ECMWF / ESA / npj Climate", date: "2026.08.31", zhTitle: "ECMWF—ESA 报告梳理机器学习进入地球观测与预测的五条路径", enTitle: "An ECMWF–ESA report maps five routes for ML in Earth observation and prediction", zh: "第五届 ECMWF—ESA 机器学习研讨会报告汇总 57 场专家报告与 88 份海报，覆盖地球数字孪生、物理—机器学习混合系统、地球观测、端到端数据同化与预测，以及高性能计算。报告强调 AI 应成为物理建模与数据同化的补充层，而不是替代它们；这是研讨会共识与趋势总结，不是单一系统的性能验证。", en: "A report from the fifth ECMWF–ESA machine-learning workshop synthesizes 57 expert talks and 88 posters across Earth digital twins, hybrid physics–ML systems, Earth observation, end-to-end assimilation and prediction, and high-performance computing. It frames AI as an added layer for physical modeling and data assimilation rather than a replacement. This is a workshop synthesis and trend report, not a performance validation of one system.", href: "https://www.nature.com/articles/s41612-026-01486-6" },
    { index: "06", label: "CLINICAL EVIDENCE · 临床证据", source: "npj Digital Medicine", date: "2026.08.31", zhTitle: "脓毒症预测荟萃分析发现较高区分度，也发现低阳性预测值", enTitle: "A sepsis-prediction meta-analysis finds higher discrimination—and low positive predictive value", zh: "系统综述与网络荟萃分析纳入 53 项研究、超过 700 万次患者入院记录；表现最佳的机器学习模型合并 AUC 为 0.88，敏感度 77.2%、特异度 84.7%，但阳性预测值只有 34.2%。作者还报告极高异质性、较高偏倚风险，并指出现实患者结局是否改善仍未证实，广泛采用前需要标准化外部验证和前瞻性试验。", en: "A systematic review and network meta-analysis covers 53 studies and more than seven million patient admissions. The pooled AUC for the best-performing ML models was 0.88, with 77.2% sensitivity and 84.7% specificity, but positive predictive value was only 34.2%. The authors also report extreme heterogeneity and high risk of bias, with improved real-world outcomes still unproven; standardized external validation and prospective trials are needed before broad adoption.", href: "https://www.nature.com/articles/s41746-026-03168-2" },
  ],
};

export const issue007: Issue = {
  number: "007", date: "2026-08-31", readingTime: "约 9 分钟", heading: "六项新发表的研究",
  noteTitle: "今天的共同线索，是让模型走进具体问题，也让边界留在结果旁边。",
  noteZh: "过去一天重要的产品公告不多，因此本期选择 8 月 30 日正式发表的六项同行评议研究。事实是，AI 方法正在传统工艺、车载安全、临床数据、增材制造、分子模拟和脑电分析中承担越来越具体的任务；我们的判断是，架构名称并不比数据来源、外部验证和简单基线更重要。以下均为论文中的实验结果，医疗项目不是临床诊断工具，实验室与数据集表现也不等于现实部署能力。",
  noteEn: "Major product announcements were limited over the past day, so this edition follows six peer-reviewed studies formally published on August 30. The fact is that AI methods are taking on increasingly specific tasks across traditional crafts, vehicle security, clinical data, additive manufacturing, molecular simulation, and EEG analysis. Our judgment is that architecture names matter less than data provenance, external validation, and simple baselines. All results below come from paper experiments: the medical studies are not clinical diagnostic tools, and laboratory or dataset performance is not deployment performance.",
  stories: [
    { index: "01", label: "CULTURAL HERITAGE · 文化遗产", source: "Scientific Reports", date: "2026.08.30", zhTitle: "卷积网络尝试识别西南地区传统工艺图像", enTitle: "A convolutional network attempts to recognize traditional craft images from southwest China", zh: "研究者提出 SW-CraftNet，并在公开的中国非物质文化遗产图像数据集上区分五大类、20 个子类的西南传统工艺；论文报告准确率 96.83%。这是作者在特定整理数据集上的结果，说明图像检索与数字保存的一种技术路径，并不代表模型能在未经控制的真实场景中普遍识别文化遗产。", en: "Researchers introduce SW-CraftNet and use a public Chinese intangible-cultural-heritage image dataset to distinguish five broad categories and 20 subcategories of traditional crafts from southwest China. The paper reports 96.83% accuracy. This author-reported result on a curated dataset suggests one route for image retrieval and digital preservation; it does not establish universal recognition in uncontrolled settings.", href: "https://www.nature.com/articles/s41598-026-68307-x" },
    { index: "02", label: "VEHICLE SECURITY · 车载安全", source: "Scientific Reports", date: "2026.08.30", zhTitle: "轻量多目标模型检测车载 CAN 总线入侵", enTitle: "A lightweight multi-objective model detects intrusions on vehicle CAN buses", zh: "MOO-IDS 在 ORNL Automotive Dynamometer（ROAD）数据集上兼顾检测表现、模型体积与推理延迟。作者报告加权 F1 为 0.9907、模型大小 0.199 MB，并称延迟有所降低。结果来自已知实验数据和攻击类型，尚不能证明它在不同车辆、未知攻击或生产环境中保持同样表现。", en: "MOO-IDS is designed to balance detection quality, model size, and inference latency on the ORNL Automotive Dynamometer (ROAD) dataset. The authors report a weighted F1 of 0.9907, a 0.199 MB model, and reduced latency. These results cover known experimental data and attack types; they do not establish equal performance across other vehicles, novel attacks, or production systems.", href: "https://www.nature.com/articles/s41598-026-68795-x" },
    { index: "03", label: "CLINICAL RESEARCH · 临床研究", source: "Scientific Reports", date: "2026.08.30", zhTitle: "肺癌预后实验中，简单影像指标胜过更复杂模型", enTitle: "A simple imaging marker outperforms more complex models in a lung-cancer prognosis experiment", zh: "研究比较放射组学、深度学习与常规 PET/CT 指标预测非小细胞肺癌预后，纳入 150 名未治疗患者。模型内部 AUC 为 0.75–0.80，初始外部验证降至 0.58–0.68；在重采样分析中，仅使用总病灶糖酵解量的简单模型以 AUC 0.83 居首。论文说明复杂模型未必优于强基线，也仍只是技术可行性研究。", en: "The study compares radiomics, deep learning, and conventional PET/CT markers for prognosis in 150 treatment-naive patients with non-small-cell lung cancer. Internal AUCs were 0.75–0.80, falling to 0.58–0.68 in the initial external test; under resampled analysis, a simple total-lesion-glycolysis model led with an AUC of 0.83. The work shows why complex models need strong baselines and remains a technical feasibility study, not a clinical tool.", href: "https://www.nature.com/articles/s41598-026-69083-4" },
    { index: "04", label: "MANUFACTURING · 制造", source: "Scientific Reports", date: "2026.08.30", zhTitle: "机器学习预测镁合金增材制造的焊道几何", enTitle: "Machine learning predicts bead geometry in magnesium-alloy additive manufacturing", zh: "研究使用机器学习分析和优化机器人冷金属过渡电弧增材制造中 AZ31 镁合金的焊道几何，把工艺参数与成形结果联系起来。论文展示的是一种面向特定材料、设备和实验条件的过程建模方法；在其他合金、机器或规模上应用前，仍需重新标定和验证。", en: "The study uses machine learning to analyze and optimize bead geometry for AZ31 magnesium alloy in robotic cold-metal-transfer wire-arc additive manufacturing, linking process settings to deposited shape. It demonstrates process modeling for a particular material, machine, and experimental setup; other alloys, equipment, and production scales would require recalibration and validation.", href: "https://www.nature.com/articles/s41598-026-68469-8" },
    { index: "05", label: "AI FOR SCIENCE · 科学智能", source: "Scientific Reports", date: "2026.08.30", zhTitle: "机器学习原子间势加速六氟化硫混合气体的扩散模拟", enTitle: "Machine-learned interatomic potentials accelerate diffusion simulation for an SF₆ gas mixture", zh: "研究把从头算分子动力学与机器学习分子动力学结合，用于刻画 SF₆/N₂ 混合物的扩散行为。这里的 AI 不是生成内容，而是学习近似原子间相互作用，以扩大可模拟的时间和体系尺度；结论仍受训练构型、物理假设和所研究混合物范围约束。", en: "Researchers combine ab initio molecular dynamics with machine-learning molecular dynamics to characterize diffusion in SF₆/N₂ mixtures. Here AI does not generate content; it learns an approximation to interatomic interactions so simulations can reach larger time and system scales. The findings remain bounded by the training configurations, physical assumptions, and mixture conditions studied.", href: "https://www.nature.com/articles/s41598-026-67691-8" },
    { index: "06", label: "EXPLAINABILITY · 可解释性", source: "Scientific Reports", date: "2026.08.30", zhTitle: "CNN 与视觉 Transformer 融合分析精神分裂症脑电数据", enTitle: "CNN–Vision Transformer fusion analyzes EEG data for schizophrenia", zh: "研究将递归图与同步压缩小波变换生成的脑电表示融合，再用 ResNet-18–ViT 和 EfficientNet-B0–ViT 混合架构分类，并加入解释性分析。结果属于回顾性数据集实验；脑电采集差异、样本代表性和外部验证都会影响迁移，因此不能把该模型当作现实诊断能力。", en: "The study fuses EEG representations built from recurrence plots and synchrosqueezed wavelet transforms, then evaluates ResNet-18–ViT and EfficientNet-B0–ViT hybrids with explainability analysis. This is a retrospective dataset experiment. Differences in EEG acquisition, sample representation, and external validation affect transfer, so the model should not be treated as a real-world diagnostic capability.", href: "https://www.nature.com/articles/s41598-026-67643-2" },
  ],
};

export const issue006: Issue = {
  number: "006", date: "2026-08-30", readingTime: "约 7 分钟", heading: "五项新发表的研究",
  noteTitle: "今天的共同线索，是把“有效”放回它发生的范围里。",
  noteZh: "过去一天重要的公司产品公告较少，因此本期不凑数量，转向 8 月 29 日正式发表的五项同行评议研究。事实是这些方法在各自数据集上取得了报告中的结果；我们的判断是，真正有用的信息同时包括样本规模、数据来源和适用边界。医疗与教育研究尤其不能把一次实验直接写成普遍效果或现实诊断能力。",
  noteEn: "Major company product announcements were limited over the past day, so this edition does not pad the count and instead follows five peer-reviewed studies published on August 29. The fact is that these methods produced the reported results on their respective datasets. Our judgment is that sample size, data source, and scope are part of the result, not footnotes. Medical and education studies in particular should not be turned from one experiment into universal effectiveness or real-world diagnostic ability.",
  stories: [
    { index: "01", label: "HUMAN–AI · 人机协作", source: "Scientific Reports", date: "2026.08.29", zhTitle: "试点研究探索实时估计人机协作中的信任变化", enTitle: "A pilot study explores real-time trust estimation in human–AI interaction", zh: "研究者提出一种受量子概率启发的信任估计框架，并把模型输出与 15 名参与者给出的 349 次自评进行比较；报告称两者走势接近，0–100 量表上的平均偏差为 −0.78。论文将其定位为概念验证。样本很小，自评也不等同于客观安全行为，因此不能据此认定系统已能可靠读取用户信任。", en: "Researchers propose a quantum-probability-inspired trust model and compare its estimates with 349 self-reports from 15 participants. They report close tracking and a mean bias of −0.78 on a 0–100 scale. The paper presents a proof of concept: the sample is small, and self-reported trust is not objective safety behavior, so the result does not establish reliable trust reading in real deployments.", href: "https://www.nature.com/articles/s41598-026-67931-x" },
    { index: "02", label: "EDUCATION · 教育", source: "Scientific Reports", date: "2026.08.29", zhTitle: "884 人问卷研究分析生成式 AI 课堂中的学习互动", enTitle: "A survey of 884 students examines learning interaction in GenAI-supported classes", zh: "一项面向中国一所高职院校 884 名学生的问卷研究使用结构方程模型分析英语课堂中的 AI 能力、态度、使用经验、创意任务与学习互动。论文报告 AI 融入和创意任务参与直接预测互动，其余因素通过二者产生间接关系。研究是单校、自陈和观察性设计，只能说明变量关联，不能证明 AI 导致学习提升。", en: "A questionnaire study of 884 students at one Chinese higher vocational college uses structural equation modeling to examine AI competency, attitudes, experience, creative tasks, and interaction in English classes. It reports direct predictive relationships for AI integration and creative-task involvement, with indirect paths for the other factors. The single-site, self-reported, observational design shows associations, not that AI caused better learning.", href: "https://www.nature.com/articles/s41598-026-69180-4" },
    { index: "03", label: "HEALTH AI · 健康 AI", source: "Scientific Reports", date: "2026.08.29", zhTitle: "非接触式心搏信号模型尝试自动划分睡眠阶段", enTitle: "A non-contact ballistocardiogram model attempts automatic sleep staging", zh: "研究使用非接触式单通道心搏冲击图信号、心率与呼吸变异特征，以及双层分类模型，在 15 份独立记录的 16,660 个片段上完成五类睡眠分期；作者报告准确率 82.9%。这是接受后提前公开的同行评议版本，但独立记录数量有限，尚不能替代多导睡眠监测或临床诊断。", en: "The study combines non-contact single-channel ballistocardiogram signals, heart and respiratory variability features, and a two-layer classifier for five-stage sleep classification. Across 16,660 segments from 15 independent recordings, the authors report 82.9% accuracy. This is an accepted peer-reviewed early version, but the small number of independent recordings means it cannot replace polysomnography or clinical diagnosis.", href: "https://www.nature.com/articles/s41598-026-68002-x" },
    { index: "04", label: "MEDICAL IMAGING · 医学影像", source: "Scientific Reports", date: "2026.08.29", zhTitle: "MobileNetV2 与视觉 Transformer 混合模型分类胸部 X 光", enTitle: "A MobileNetV2–Vision Transformer hybrid classifies chest X-rays", zh: "研究在 NIH CXR14 数据集上测试经粒子群优化的 MobileNetV2–ViT 混合架构，对 14 类胸部疾病做多标签分类；五折交叉验证报告平均准确率 94.6%、F1 为 91.1%，并用 Grad-CAM 展示关注区域。这是数据集内实验结果，不是前瞻性临床验证，也不应直接理解为可用于诊断。", en: "Researchers test a particle-swarm-tuned MobileNetV2–ViT hybrid on the NIH CXR14 dataset for 14-label chest-disease classification. Five-fold cross-validation reports 94.6% mean accuracy and a 91.1% F1 score, with Grad-CAM visualizations. These are within-dataset experimental results, not prospective clinical validation or evidence that the model is ready for diagnosis.", href: "https://www.nature.com/articles/s41598-026-68788-w" },
    { index: "05", label: "PREDICTION · 预测", source: "Nature Communications", date: "2026.08.29", zhTitle: "非线性时空因素改善复杂性状的多基因预测", enTitle: "Nonlinear spatiotemporal factors improve polygenic prediction for complex traits", zh: "研究者在 UK Biobank 的 16 项表型上，用梯度提升树先从时间、地点和其他非遗传协变量预测表型，再把该预测加入多基因评分流程。论文报告全部表型均改善，BASIL 方法的 R² 中位提升 7.3%。结果来自特定生物样本库与建模流程，迁移到其他人群前仍需外部验证。", en: "Using 16 UK Biobank phenotypes, researchers first predict traits from time, location, and other nongenetic covariates with gradient-boosted trees, then add that prediction to polygenic-score workflows. The paper reports improvements for all phenotypes and a median 7.3% R² gain with BASIL. Because the finding comes from one biobank and modeling setup, external validation is needed before transfer to other populations.", href: "https://www.nature.com/articles/s41467-026-76154-7" },
  ],
};

export const issue005: Issue = {
  number: "005", date: "2026-08-29", readingTime: "约 8 分钟", heading: "六件值得知道的事",
  noteTitle: "今天的共同线索，是让 AI 经得起日常运行。",
  noteZh: "批量写入、跨可用区部署、资源额度、人工判断和持续维护看似属于不同层次，却都在回答同一个问题：能力如何稳定地进入真实系统。事实是这些 API、产品调整、架构案例和研究结果已经发布；我们的判断是，AI 的下一段进步不仅来自模型更强，也来自边界更清楚、流程更可检查。案例数字与早期研究结论均按发布方报告理解。",
  noteEn: "Batch writes, multi-zone deployment, usage budgets, human judgment, and continuous maintenance may sit at different layers, but they answer the same question: how does capability operate reliably inside real systems? The fact is that these APIs, product changes, architecture cases, and research results were published. Our judgment is that the next stage of AI progress will come not only from stronger models, but also from clearer boundaries and more inspectable processes. Case figures and early research findings remain publisher-reported.",
  stories: [
    { index: "01", label: "SAFETY · 安全", source: "Anthropic Fellows", date: "2026.08.28", zhTitle: "TASTE 基准测试模型判断 AI 安全研究提案的能力", enTitle: "TASTE tests whether models can judge AI-safety research proposals", zh: "Anthropic Fellows 发布 TASTE，以 92 组两两比较测试模型能否判断 AI 安全研究提案。团队估算人类研究者的一致率为 77%，表现最佳的 Fable 5 为 60%。这是规模较小的早期基准，置信区间较宽；结果表明模型仍落后于人类判断，而不是证明某个系统具备可靠的研究评审能力。", en: "Anthropic Fellows released TASTE, a benchmark of 92 pairwise comparisons asking models to judge AI-safety research proposals. The team estimates human researcher agreement at 77%, while the best model, Fable 5, reached 60%. This is a small early benchmark with wide confidence intervals; it suggests a gap from human judgment rather than establishing reliable automated peer review.", href: "https://alignment.anthropic.com/2026/taste/" },
    { index: "02", label: "DATA · 数据", source: "AWS", date: "2026.08.28", zhTitle: "SageMaker Feature Store 新增批量写入与记录发现 API", enTitle: "SageMaker Feature Store adds batch-write and record-discovery APIs", zh: "AWS 为 SageMaker Feature Store 增加 BatchWriteRecord 与 ListRecords。前者单次调用最多可向多个特征组写入 25 条记录，支持部分成功、单条 TTL 与 EventTime 顺序；后者可枚举 Standard 和 In-Memory 层的记录 ID。这是官方产品更新，实际吞吐与成本仍取决于工作负载。", en: "AWS has added BatchWriteRecord and ListRecords to SageMaker Feature Store. One call can write up to 25 records across multiple feature groups, with partial success, per-record TTL, and EventTime ordering; ListRecords enumerates record IDs in the Standard and In-Memory tiers. This is an official product update, while real throughput and cost will depend on the workload.", href: "https://aws.amazon.com/blogs/machine-learning/batch-write-and-discover-records-in-amazon-sagemaker-feature-store/" },
    { index: "03", label: "FORECASTING · 预测", source: "Decathlon / AWS", date: "2026.08.28", zhTitle: "Decathlon 分享用 Chronos-2 规模化运行需求预测的流程", enTitle: "Decathlon details its at-scale demand-forecasting workflow with Chronos-2", zh: "Decathlon 与 AWS 介绍其 Chronos-2 需求预测流程：每个区域最多覆盖 25,000 件商品，同时生成 12 周和 52 周预测；模型约每六个月微调，预测每周批量运行。这是单一企业与供应商联合案例，说明一种工程路径，不代表其他零售场景会得到相同结果。", en: "Decathlon and AWS describe a Chronos-2 demand-forecasting workflow covering up to 25,000 products per zone with 12- and 52-week horizons. Models are fine-tuned roughly every six months and forecasts run in weekly batches. This is a joint customer-and-vendor case that illustrates one engineering path, not a promise of identical results elsewhere.", href: "https://aws.amazon.com/blogs/machine-learning/how-decathlon-runs-demand-forecasting-at-scale-with-chronos-2/" },
    { index: "04", label: "RELIABILITY · 可靠性", source: "Salesforce / AWS", date: "2026.08.28", zhTitle: "SageMaker Inference Components 增加跨可用区平衡策略", enTitle: "SageMaker Inference Components adds availability-zone balancing", zh: "AWS 为 CreateInferenceComponent 新增 SchedulingConfig，可用 AvailabilityZoneBalance 在 SPREAD 与 BINPACK 之间选择，帮助团队在高可用与资源密度之间取舍。Salesforce 案例称通过共置模型将基础设施成本降低 8 倍；这一数字来自客户案例，应按其特定架构与流量条件理解。", en: "AWS has added SchedulingConfig to CreateInferenceComponent, using AvailabilityZoneBalance to choose between SPREAD and BINPACK placement for different reliability and density goals. A Salesforce case reports an 8× infrastructure-cost reduction from model co-hosting; that figure belongs to the customer's specific architecture and traffic conditions.", href: "https://aws.amazon.com/blogs/machine-learning/spreading-the-load-how-salesforce-met-multi-az-ha-with-sagemaker-inference-components/" },
    { index: "05", label: "PRODUCTIVITY · 效率", source: "Google Labs", date: "2026.08.28", zhTitle: "Gemini Notebook 改用五小时刷新一次的弹性额度", enTitle: "Gemini Notebook moves to flexible limits that refresh every five hours", zh: "Google Labs 调整 Gemini Notebook 的使用额度：计算相关上限从每日刷新改为每五小时刷新，并会依据提示复杂度、对话长度、来源数量与功能而变化；视频概览和幻灯片等任务可排队延后生成并发送通知。更新计划 9 月 2 日开始推出，属于产品公告。", en: "Google Labs is changing Gemini Notebook's compute limits from daily resets to refreshes every five hours, with consumption varying by prompt complexity, chat length, source count, and feature. Video Overviews and Slide Decks can be deferred and notify users when ready. The product change is scheduled to begin rolling out on September 2.", href: "https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/" },
    { index: "06", label: "MODERNIZATION · 现代化", source: "AWS", date: "2026.08.28", zhTitle: "AWS 展示把持续现代化嵌入 CI/CD 的自建方案", enTitle: "AWS demonstrates a do-it-yourself continuous-modernization pipeline", zh: "AWS 发布一套用 AWS Transform custom、GitHub Actions 与 Dependabot 构建持续现代化流水线的技术方案，示例覆盖依赖修复、自动文档、跨仓库变换与知识复用。文章明确示例在非交互模式中使用信任全部工具的参数，并提醒生产环境先审查安全策略；这是技术演示，不是无人监督变更的普遍背书。", en: "AWS has published a technical pattern combining AWS Transform custom, GitHub Actions, and Dependabot for dependency remediation, automatic documentation, cross-repository transformations, and knowledge reuse. The walkthrough explicitly uses a trust-all-tools flag for non-interactive runs and advises reviewing security policy before production use. It is a demonstration, not a general endorsement of unsupervised changes.", href: "https://aws.amazon.com/blogs/devops/build-your-own-continuous-modernization-pipeline-with-aws-transform-custom/" },
  ],
};

export const issue004: Issue = {
  number: "004", date: "2026-08-28", readingTime: "约 8 分钟", heading: "六件值得知道的事",
  noteTitle: "今天的共同线索，是 AI 正在靠近具体而完整的任务。",
  noteZh: "从一次需要独创性的学生作业，到旅行预订、可信内容阅读、视频制作、创意团队协作和全球地理预测，今天的发布都把模型放进了更长的工作链。事实是这些产品、研究和方案已经发布；我们的判断是，真正值得观察的变化，是系统是否保留来源、人类复核与结果边界。研究指标和案例数据仍应按发布方报告理解。",
  noteEn: "From a student assignment that rewards originality to travel booking, trusted-source reading, video production, creative-team orchestration, and planetary prediction, today's releases place models inside longer chains of work. The fact is that these products, studies, and patterns were published. Our judgment is that the important change is whether systems preserve sources, human review, and clear limits on their results. Research metrics and case figures remain publisher-reported.",
  stories: [
    { index: "01", label: "EDUCATION · 教育", source: "Bocconi University / OpenAI", date: "2026.08.27", zhTitle: "随机实验区分 ChatGPT 与批判性思维训练的互补作用", enTitle: "A randomized experiment separates the effects of ChatGPT and critical-thinking training", zh: "博科尼大学研究者与 OpenAI Economic Research 对超过 1,000 名一年级学生开展随机实验。官方摘要称，ChatGPT 访问提高了作业质量与连贯性，因果推理训练则带来更多独特想法，两者结合时效果并存。研究使用特定商业案例和评分方法，结论不应自动推广到所有课程。", en: "Researchers at Bocconi University, working with OpenAI Economic Research, ran a randomized experiment with more than 1,000 first-year students. The published summary reports that ChatGPT access improved quality and coherence, while causal-reasoning training produced more distinctive ideas, with both effects appearing together. The study used one business case and evaluation design, so its findings should not be generalized automatically to every course.", href: "https://openai.com/index/what-students-gain-from-chatgpt-critical-thinking-training/" },
    { index: "02", label: "SEARCH · 搜索", source: "Google", date: "2026.08.27", zhTitle: "Google Search 的 AI Mode 增加旅行价格追踪与预订入口", enTitle: "Google adds travel tracking and booking actions to AI Mode in Search", zh: "Google 将航班价格提醒直接加入 Search 的 AI Mode，并新增积分或里程价格查看与酒店预订入口。用户可在对话中描述时间与目的地，再从 300 多家航空公司和旅行网站的合作数据中比较选项；价格与库存仍会实时变化，最终信息应以预订页面为准。", en: "Google is bringing flight-price alerts into AI Mode in Search, alongside points-or-miles views and hotel-booking entry points. Users can describe dates and destinations conversationally and compare options sourced from more than 300 airline and travel partners. Prices and availability remain dynamic, so final details should be confirmed on the booking page.", href: "https://blog.google/products-and-platforms/products/search/book-travel-ai-mode/" },
    { index: "03", label: "KNOWLEDGE · 知识", source: "Google Labs", date: "2026.08.27", zhTitle: "Gemini Notebook 推出面向授权内容的 Expert Intelligence", enTitle: "Gemini Notebook introduces Expert Intelligence for licensed, trusted sources", zh: "Google Labs 发布 Expert Intelligence，让用户在 Gemini Notebook 中调用合作作者、出版物与领域专家的内容，包括用户已购买的部分书籍。该功能强调来源与授权关系，但“可信”仍不等同于无误；阅读者仍需区分原文、摘要和模型生成的解释。", en: "Google Labs has introduced Expert Intelligence, which lets Gemini Notebook draw from participating authors, publications, and domain experts, including selected titles a user has purchased. The feature emphasizes source and licensing relationships, but trusted does not mean infallible; readers should still distinguish original material, summaries, and model-generated interpretation.", href: "https://blog.google/innovation-and-ai/products/gemini-notebook/expert-intelligence-leading-sources/" },
    { index: "04", label: "CREATION · 创作", source: "Google Labs", date: "2026.08.27", zhTitle: "Google Flow 增加首尾帧控制与更高分辨率导出", enTitle: "Google Flow adds start-and-end frame control and higher-resolution export", zh: "Google 为 Flow 的视频编辑工作流加入首尾帧控制、1080p 与 4K 导出，以及低额度 360p 草稿后放大到 720p 的流程。官方称这些更新基于 Gemini Omni 1.1 Flash，可帮助维持人物与叙事连续性；实际一致性与质量仍取决于素材、提示和生成结果。", en: "Google has added start-and-end frame control, 1080p and 4K export, and a lower-credit 360p drafting flow that can upscale selected clips to 720p in Flow. Google says the Gemini Omni 1.1 Flash updates help maintain character and narrative continuity; actual consistency and quality still depend on source material, prompts, and generated output.", href: "https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/" },
    { index: "05", label: "WORKFLOW · 工作流", source: "AWS / fal", date: "2026.08.27", zhTitle: "AWS 展示带人工复核节点的智能体创意工作流", enTitle: "AWS demonstrates agentic creative workflows with human review gates", zh: "AWS 发布一套由 Amazon Quick、Skills、MCP 与 fal 组成的创意工作流方案，示例涵盖八格分镜和音乐视频概念。设计重点不是单次生成速度，而是保留上下文、支持长任务，并在关键节点加入人工批准。这是一篇技术方案演示，不是生产效果的独立评测。", en: "AWS has published a creative-workflow pattern combining Amazon Quick, Skills, MCP, and fal, demonstrated through an eight-panel storyboard and a music-video concept. The design focuses on preserving context, supporting long-running jobs, and inserting human approval at key gates rather than merely accelerating one generation step. It is a technical demonstration, not an independent production benchmark.", href: "https://aws.amazon.com/blogs/machine-learning/build-agentic-creative-workflows-with-amazon-quick-and-fal/" },
    { index: "06", label: "RESEARCH · 研究", source: "Google Research", date: "2026.08.27", zhTitle: "Google Research 发布自动化地理预测流程的实验系统 PPE", enTitle: "Google Research introduces an experimental planetary prediction engine", zh: "Google Research 发布实验性的 Planetary Prediction Engine，可从自然语言问题开始，自动完成地理数据发现、特征工程、模型训练、评估与报告。团队报告其在多项公开任务上改善基线，并在一项疾病传播预测中取得 83.3% 的 Recall@10；PPE 仍是早期研究系统，数字来自研究团队测试，不能替代领域专家和正式决策流程。", en: "Google Research has introduced the experimental Planetary Prediction Engine, which moves from a natural-language question through geospatial data discovery, feature engineering, model training, evaluation, and reporting. The team reports improvements across public tasks and 83.3% Recall@10 in one disease-spread forecast. PPE remains early-stage research; the figures are team-reported and the system does not replace domain experts or formal decision processes.", href: "https://www.research.google/blog/planetary-prediction-engine-automating-global-models-via-earth-ai/" },
  ],
};

export const issue003: Issue = {
  number: "003", date: "2026-08-27", readingTime: "约 8 分钟", heading: "六件值得知道的事",
  noteTitle: "今天的共同线索，是把模型能力变成可用的工作方法。",
  noteZh: "语音被整理成结构化文字，学习被延伸到课堂之外，非工程团队开始参与软件建设，检索与微调工具继续细化，企业知识也跨越账户边界被调用。事实是这些产品、指南与案例已经发布；我们的判断是，今天值得关注的并非单一跑分，而是能力如何进入流程。案例数字来自发布方，不能自动外推到其他组织。",
  noteEn: "Speech becomes structured text, learning extends beyond the classroom, non-engineering teams participate in software delivery, retrieval and fine-tuning tools grow more precise, and enterprise knowledge crosses account boundaries. The fact is that these products, guides, and case studies were published. Our judgment is that today's signal lies less in a single score than in how capability enters a workflow. Case-study figures come from the publishers and should not be generalized automatically.",
  stories: [
    { index: "01", label: "AUDIO · 音频", source: "Google", date: "2026.08.26", zhTitle: "Google 发布 Gemini 3.5 Transcribe 实时转写模型", enTitle: "Google introduces the Gemini 3.5 Transcribe real-time speech model", zh: "Google 发布面向实时语音交互的 Gemini 3.5 Transcribe，可把原始音频直接整理为带格式的文字，并针对噪声、专业术语与口语停顿进行处理。Google 称这是其目前最精确的语音转文字模型；该表述与相关质量结果来自厂商评测，仍需结合语言、口音和场景独立验证。", en: "Google has introduced Gemini 3.5 Transcribe for real-time voice interactions. It converts raw audio into formatted text while handling noise, specialist vocabulary, and spoken disfluencies. Google calls it its most precise speech-to-text model to date; that description and the supporting quality results are vendor evaluations that still need independent testing across languages, accents, and settings.", href: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/" },
    { index: "02", label: "EDUCATION · 教育", source: "OpenAI", date: "2026.08.26", zhTitle: "OpenAI 发布关于 ChatGPT 持续学习使用方式的新报告", enTitle: "OpenAI reports on how ChatGPT is used for continuous learning", zh: "OpenAI 发布一份关于学生和教育者如何在课堂之外使用 ChatGPT 的报告。其隐私保护分析称，各年龄段用户每周约有 7,000 万次对话用于检验知识；美国学年期间，与课业相关的消息每周峰值超过 4.6 亿条。这些统计由 OpenAI 基于自身平台数据得出，反映使用规模而非学习成效。", en: "OpenAI has released a report on how students and educators use ChatGPT beyond the classroom. Its privacy-preserving analysis reports roughly 70 million weekly conversations across age groups devoted to testing knowledge, while U.S. classwork-related messages peak above 460 million per week during the school year. These are OpenAI platform statistics and measure usage, not learning outcomes.", href: "https://openai.com/index/learning-never-stops/" },
    { index: "03", label: "ADOPTION · 应用", source: "loveholidays / OpenAI", date: "2026.08.26", zhTitle: "loveholidays 分享让非工程团队参与软件交付的 Codex 案例", enTitle: "loveholidays details a Codex rollout beyond its engineering teams", zh: "在线旅游公司 loveholidays 介绍了将 Codex 扩展到数据、产品与其他业务团队的做法。案例称一年内 AI 辅助代码变更占比从 7% 升至 79%，部署频率提高 73%，同时工程团队规模未增加。这些数字来自客户与供应商联合案例，不能视为普遍基准。", en: "Online travel company loveholidays describes expanding Codex across data, product, and other business teams. The case study reports AI-assisted code changes rising from 7% to 79% in a year and deployment frequency increasing 73% without engineering-team growth. These are customer-and-vendor case figures, not general benchmarks.", href: "https://openai.com/index/loveholidays/" },
    { index: "04", label: "RETRIEVAL · 检索", source: "Hugging Face", date: "2026.08.26", zhTitle: "Sentence Transformers 增加多向量嵌入模型训练指南", enTitle: "Sentence Transformers adds a guide to training multi-vector embedding models", zh: "Hugging Face 发布使用 Sentence Transformers 训练与微调多向量嵌入模型的实践指南，涵盖数据格式、损失函数、评估器与索引优化。作者还在医学问答检索数据上比较了六个起点；这些结果是单一配方和数据集下的实测，不代表所有检索任务。", en: "Hugging Face has published a practical guide to training and fine-tuning multi-vector embedding models with Sentence Transformers, covering data formats, losses, evaluators, and index optimization. The author also compares six starting points on a medical question-retrieval setup; those measurements belong to one recipe and dataset, not every retrieval task.", href: "https://huggingface.co/blog/train-multi-vector-encoder" },
    { index: "05", label: "TRAINING · 训练", source: "AWS", date: "2026.08.26", zhTitle: "AWS 梳理监督微调数据的格式与质量检查", enTitle: "AWS outlines formatting and quality checks for supervised fine-tuning data", zh: "AWS 发布监督微调数据准备系列的第一篇，区分持续预训练、监督微调与强化微调，并给出格式一致性、质量筛选和训练/评估拆分建议。这是一篇以 Amazon Nova 与 Bedrock 文档为例的技术指南，而非新模型发布或效果保证。", en: "AWS has published the first part of a data-preparation series for supervised fine-tuning. It distinguishes continued pre-training, supervised fine-tuning, and reinforcement fine-tuning, then covers format consistency, quality filtering, and train/evaluation splits. This is technical guidance illustrated with Amazon Nova and Bedrock documentation, not a model launch or a performance guarantee.", href: "https://aws.amazon.com/blogs/machine-learning/preparing-data-for-supervised-fine-tuning-part-1-formatting-and-quality/" },
    { index: "06", label: "GOVERNANCE · 治理", source: "AWS", date: "2026.08.26", zhTitle: "Bedrock AgentCore 展示跨账户访问知识库的架构", enTitle: "AWS shows how AgentCore can access knowledge bases across accounts", zh: "AWS 发布一套跨账户架构，让一个账户中的 AgentCore 智能体访问另一账户里由 Amazon Redshift Serverless 支撑的 Bedrock Knowledge Base，而无需复制源数据。文章重点是权限边界、请求流程和两种通用编排模型的选择，属于可复用的技术方案。", en: "AWS has published a cross-account architecture in which an AgentCore agent accesses a Bedrock Knowledge Base backed by Amazon Redshift Serverless in another account without copying source data. The article focuses on permission boundaries, request flow, and choosing between two generally available orchestration models; it is a reusable technical pattern.", href: "https://aws.amazon.com/blogs/machine-learning/connect-amazon-bedrock-agentcore-to-cross-account-knowledge-bases/" },
  ],
};

export const issue002: Issue = {
  number: "002", date: "2026-08-26", readingTime: "约 7 分钟", heading: "五件值得知道的事",
  noteTitle: "今天的共同线索，是 AI 正在进入系统的内部。",
  noteZh: "从专用推理芯片，到权限内的工作区管理、可验证的可观测性、带来源治理的报告，以及由智能体辅助处理运维事件，今天的发布都在回答同一个问题：AI 如何从生成答案，走向在真实系统里完成可检查的工作。这里的性能与成效数字主要来自发布方自测或案例陈述，仍需在更多独立场景中验证。",
  noteEn: "From custom inference silicon to permission-aware administration, verifiable observability, governed reporting, and agent-assisted operations, today's releases ask the same question: how does AI move from generating answers to doing inspectable work inside real systems? Performance and outcome figures here are largely vendor tests or case-study claims and still need broader independent validation.",
  stories: [
    { index: "01", label: "INFRASTRUCTURE · 基础设施", source: "OpenAI", date: "2026.08.25", zhTitle: "OpenAI 公布首款自研推理芯片 Jalapeño 的首批测试", enTitle: "OpenAI publishes first results for its custom Jalapeño inference chip", zh: "OpenAI 公布其首款自研推理芯片 Jalapeño 的首批测量结果，并计划于年底前开始部署。公司称，在 InferenceX 的公开模型测试中，该系统同时改善了吞吐、功耗与延迟；1.5–1.9 倍每瓦工作量及 1.7–3.6 倍更低端到端延迟等数字来自 OpenAI 的测试，应视为厂商报告，尚待更广泛的独立复现。", en: "OpenAI has published the first measured results for Jalapeño, its first custom inference chip, and plans to begin deploying it by year-end. On public-model tests using InferenceX, the company reports gains across throughput, power, and latency. Figures such as 1.5–1.9× more work per watt and 1.7–3.6× lower end-to-end latency are OpenAI-reported and await broader independent replication.", href: "https://openai.com/index/jalapeno-first-results/" },
    { index: "02", label: "WORKSPACE · 工作空间", source: "OpenAI", date: "2026.08.25", zhTitle: "ChatGPT Work 与 Codex 新增权限感知的 Admin 插件", enTitle: "OpenAI introduces a permission-aware Admin plugin for ChatGPT Work and Codex", zh: "OpenAI 推出 Admin 插件，让管理员在对话中查看采用率与额度、管理成员和群组、排查权限，并处理部分用量请求。官方说明称，插件沿用用户现有角色与工作区策略，不扩大访问权限；较大影响的操作仍可在应用前复核。", en: "OpenAI has introduced an Admin plugin for reviewing adoption and credits, managing members and groups, diagnosing access, and handling supported usage requests from ChatGPT Work or Codex. OpenAI says it preserves existing roles and workspace policies rather than granting wider access, with review available for broader-impact actions.", href: "https://openai.com/index/introducing-admin-plugin/" },
    { index: "03", label: "OBSERVABILITY · 可观测性", source: "AWS", date: "2026.08.25", zhTitle: "Amazon OpenSearch Service 用 MCP Apps 把追踪图带进智能体对话", enTitle: "Amazon OpenSearch Service brings trace views into agent conversations with MCP Apps", zh: "AWS 宣布 Amazon OpenSearch Service 支持 MCP Apps。工具调用可在 AI 助手内返回交互式追踪瀑布图、服务拓扑和日志模式，便于工程师核对智能体给出的根因判断；数据仍保留在客户自己的 AWS 账户中。", en: "AWS says Amazon OpenSearch Service now supports MCP Apps, allowing tool calls to return interactive trace waterfalls, service maps, and log-pattern views inside an AI assistant. The goal is to make an agent's root-cause hypothesis easier to verify while keeping customer data in the customer's AWS account.", href: "https://aws.amazon.com/blogs/machine-learning/agentic-observability-with-amazon-opensearch-service-mcp-apps/" },
    { index: "04", label: "ENTERPRISE · 企业", source: "AWS", date: "2026.08.25", zhTitle: "Amazon Quick Desktop 演示带来源与权限治理的 AI 周报流程", enTitle: "Amazon Quick Desktop demonstrates governed, source-linked AI reporting", zh: "AWS 发布一套技术方案，把 Amazon Quick Desktop 与 FSx for NetApp ONTAP、S3 访问点和 Slack 组合，用于生成可追溯来源、遵循 IAM 权限的周报。文中“从数小时缩短到数分钟”属于方案方描述，实际收益取决于文件结构、权限设计与工作流。", en: "AWS published a technical pattern combining Amazon Quick Desktop with FSx for NetApp ONTAP, S3 access points, and Slack to produce source-traceable reports under IAM controls. The claim that weekly preparation can fall from hours to minutes is solution-reported; real gains depend on document structure, permissions, and workflow design.", href: "https://aws.amazon.com/blogs/machine-learning/governed-reports-with-amazon-quick-desktop-and-amazon-fsx-for-netapp-ontap/" },
    { index: "05", label: "OPERATIONS · 运维", source: "Mary Kay / AWS", date: "2026.08.25", zhTitle: "Mary Kay 分享由智能体分诊基础设施事件的运维架构", enTitle: "Mary Kay details an agent-assisted architecture for triaging infrastructure events", zh: "Mary Kay 与 AWS 介绍了一套由 AWS DevOps Agent、Amazon Bedrock、Strands SDK 和 AgentCore 组成的运维流程：系统调查事件、分类路由，再由专用智能体提出或执行受控修复。案例称部分事件可在两分钟内形成并合并拉取请求、单次成本约 0.16–0.50 美元；这些是单一企业案例数据，不代表普遍结果。", en: "Mary Kay and AWS describe an operations pipeline built with AWS DevOps Agent, Amazon Bedrock, the Strands SDK, and AgentCore: events are investigated and routed before specialized agents propose or execute controlled fixes. The case study reports some pull requests reaching merge in under two minutes at roughly $0.16–$0.50 per action. These are single-company case results, not general benchmarks.", href: "https://aws.amazon.com/blogs/industries/how-mary-kay-built-self-triaging-operations-with-amazon-bedrock-2/" },
  ],
};

export const issue001: Issue = {
  number: "001", date: "2026-08-25", readingTime: "约 9 分钟", heading: "六件值得知道的事",
  noteTitle: "这一期的共同线索，是 AI 正在离开单一的聊天框。",
  noteZh: "一个模型进入开发流程，一套硬件开始按智能体的真实工作方式被测量，一家专业信息公司选择拥有自己的模型。它们指向同一件事：AI 的竞争正在从“谁回答得更好”，走向“谁能在具体系统里更可靠、更经济地完成工作”。",
  noteEn: "A model enters a development workflow, hardware is measured against realistic agent behavior, and a professional-information company chooses to own its model. Together they point beyond better answers toward reliable, economical work inside real systems.",
  stories: [
    { index: "01", label: "PRODUCT · 产品", source: "OpenAI", date: "2026.08.24", zhTitle: "GPT‑5.6 系列进入 Kiro，强调更好的开发成本效率", enTitle: "GPT‑5.6 comes to Kiro with a focus on developer price-performance", zh: "OpenAI 与 AWS 将 GPT‑5.6 Sol、Terra 和 Luna 引入软件开发智能体 Kiro。官方测试称，Terra 在 Terminal-Bench 2.1 的成功任务上实现约 82% 的成本下降；这是一项由合作方公布的测试结果。", en: "OpenAI and AWS brought GPT‑5.6 Sol, Terra, and Luna to Kiro. Partner testing reports roughly an 82% cost reduction for successful Terra tasks on Terminal-Bench 2.1.", href: "https://openai.com/index/gpt-5-6-in-kiro/" },
    { index: "02", label: "INFRASTRUCTURE · 基础设施", source: "NVIDIA", date: "2026.08.24", zhTitle: "NVIDIA 公布面向智能体负载的 Vera Rubin 能效预览", enTitle: "NVIDIA previews Vera Rubin efficiency for agentic workloads", zh: "NVIDIA 使用真实编码智能体会话回放测试新平台，并称特定设置下每兆瓦吞吐量最高提升 30 倍；结果由 NVIDIA 测量，尚待审核。", en: "NVIDIA tested the platform with coding-agent session replays and reports up to 30× throughput per megawatt in a specific setup; the measurements are vendor-reported and pending review.", href: "https://developer.nvidia.com/blog/nvidia-vera-rubin-and-blackwell-set-a-new-standard-for-agentic-ai-performance-per-watt/" },
    { index: "03", label: "INDUSTRY · 行业", source: "Thomson Reuters", date: "2026.08.24", zhTitle: "汤森路透发布自研专业领域大模型 Thomson", enTitle: "Thomson Reuters launches its in-house professional model, Thomson", zh: "汤森路透宣布首个自主开发的大语言模型 Thomson，并计划开放一个小型权重版本供学术与非商业研究使用。", en: "Thomson Reuters introduced Thomson, its first in-house large language model, and plans a smaller open-weight edition for academic and non-commercial research.", href: "https://www.thomsonreuters.com/en/press-releases/2026/august/thomson-reuters-leverages-its-world-class-data-assets-to-launch-its-own-frontier-model" },
    { index: "04", label: "NETWORKING · 网络", source: "NVIDIA", date: "2026.08.24", zhTitle: "Spectrum-X 面向超大规模 AI 集群重新设计以太网", enTitle: "Spectrum-X reworks Ethernet for giga-scale AI clusters", zh: "NVIDIA 介绍面向大型 AI 数据中心的 Spectrum-X 多平面网络设计；文中性能数据来自厂商集群测试与模拟。", en: "NVIDIA detailed a multiplane Spectrum-X design for large AI data centers; its performance figures come from vendor tests and simulations.", href: "https://developer.nvidia.com/blog/giga-scale-ai-ethernet-evolution-spectrum-x-ethernet-rewrites-rules/" },
    { index: "05", label: "ACCESSIBILITY · 无障碍", source: "Google DeepMind", date: "2026.08.12", zhTitle: "Google 将手语转文字模型带入手机输入场景", enTitle: "Google brings sign-language-to-text into everyday phone input", zh: "Google DeepMind 发布多语种手语转文字模型 SL2T，并首先在 Pixel 11 的 Gboard 与 Live Transcribe 中提供美式手语转英文功能。", en: "Google DeepMind introduced SL2T, first supporting ASL-to-English input in Gboard and Live Transcribe on Pixel 11.", href: "https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/" },
    { index: "06", label: "SCIENCE · 科学", source: "Google DeepMind", date: "2026.08", zhTitle: "WeatherNext 用统一模型预测气旋路径、强度与风场", enTitle: "WeatherNext forecasts cyclone tracks, intensity, and wind structure", zh: "Google DeepMind 与气象机构发表 WeatherNext 研究，并开放模型与代码；实际预警仍应以当地官方气象部门为准。", en: "Google DeepMind and weather agencies published WeatherNext research and released model code and weights; official local weather services remain the source for warnings.", href: "https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/" },
  ],
};
