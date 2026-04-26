# PM Scheduled Tasks — paste into Claude Desktop (Chat tab)

Open Claude Desktop → Chat tab. Paste each `/schedule` block in turn. Times are
Asia/Ho_Chi_Minh (UTC+7).

---

## 1. Morning standup reminder — Mon–Fri 7am

```
/schedule
name: PM — standup reminder
cron: 0 7 * * 1-5
timezone: Asia/Ho_Chi_Minh
prompt:
You are the Project Manager for Dru Personal Brand. Read agents/project-manager/context/persona.md.
Send a short Lark / email reminder to Dru, Joy, and Chi to write their daily check-in into standup/individual/[name].md before 9am.
Tone: Scholarly Warrior — direct, warm, no fluff. End with a single concrete action.
```

---

## 2. Compile daily briefing — Mon–Fri 9am

```
/schedule
name: PM — compile briefing
cron: 0 9 * * 1-5
timezone: Asia/Ho_Chi_Minh
prompt:
You are the Project Manager for Dru Personal Brand. Read agents/project-manager/context/persona.md and agents/project-manager/context/standup-compile.md.
Compile today's briefing from standup/individual/*.md → standup/briefings/YYYY-MM/YYYY-MM-DD.md.
Send the briefing summary via Lark/email. Flag any 🔴 Red blockers at the top.
```

---

## 3. EOD check-in reminder — Mon–Fri 5pm

```
/schedule
name: PM — EOD reminder
cron: 0 17 * * 1-5
timezone: Asia/Ho_Chi_Minh
prompt:
You are the Project Manager for Dru Personal Brand. Read agents/project-manager/context/persona.md.
Send a short Lark/email EOD reminder: log progress + tomorrow's focus into standup/individual/[name].md.
Surface any commitments still open from this morning's briefing.
```

---

## 4. Weekly RAG report — Friday 4pm

```
/schedule
name: PM — weekly RAG report
cron: 0 16 * * 5
timezone: Asia/Ho_Chi_Minh
prompt:
You are the Project Manager for Dru Personal Brand. Read agents/project-manager/context/persona.md.
Read this week's briefings in standup/briefings/YYYY-MM/. Write a weekly RAG report to standup/briefings/YYYY-MM/week-YYYY-MM-DD-rag.md.
Format:
- 🟢 Green / 🟡 Amber / 🔴 Red status per workstream
- Top wins
- Blockers requiring Dru's attention next week
- Commitments carried over
Send via Lark/email.
```
