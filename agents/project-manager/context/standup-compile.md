# Standup Compile Workflow

## Trigger
Scheduled 9am Asia/Ho_Chi_Minh, Mon–Fri. Also runs on "compile standup" or "what's the briefing".

## Steps
1. Read all files in standup/individual/
2. Extract: name, date, focus items, blockers from each
3. Write compiled briefing to standup/briefings/YYYY-MM/YYYY-MM-DD.md:

```
# Daily Briefing — YYYY-MM-DD

## Team focus
{for each person: name → focus items}

## Blockers
{list all blockers, or "None"}

## PM notes
{any patterns, risks, or priorities worth flagging}
```

4. Send Lark/email notification with briefing summary
