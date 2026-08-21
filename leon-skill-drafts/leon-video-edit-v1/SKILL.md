---
name: leon-video-edit-v1
description: Use when editing Leon raw talking-head videos, rough-cutting pauses and filler words, generating speech-aligned subtitles, burning captions, appending outro clips, or preparing publish-ready short-video MP4 files.
---

# Leon Video Edit V1

Use this skill for Leon口播视频剪辑交付。

It is separate from:

- `leon-video-script-v1`: writes scripts.
- `leon-cover-design-v1`: creates covers and title cards.
- `leon-content-review-v1`: reviews content quality.

This skill edits the actual recorded video.

## Core Principle

Final subtitles must come from speech recognition on the edited video.

The original口播文稿 is not a subtitle timeline.

Use the original口播文稿 only to:

- correct ASR typos
- correct brand names, numbers, and industry terms
- guide semantic line breaks
- compare whether the spoken wording is close to the intended script

Never paste the original script directly onto the video by estimated timing.

## Required Input

When possible, use:

1. Raw Leon video.
2. Latest original口播文稿.
3. Latest outro file, usually `/Users/waholisa/Downloads/片尾.mov`.

If no口播文稿 is available, generate subtitles from speech only and warn that typo risk is higher.

## Editing Workflow

1. Inspect the raw video format, duration, frame rate, and audio.
2. Rough cut:
   - remove obvious meaningless long pauses
   - remove `嗯`, `呃`, `啊`, repeated restarts, and dead air
   - keep natural breathing and thinking rhythm
   - do not over-tighten Leon into an unnatural machine-gun pace
3. Export a clean body video.
4. Run speech recognition on the clean body video, not on the raw video.
5. Align recognized text with the original口播文稿 for correction.
6. Build single-line subtitle cues using the real speech timestamps.
7. Burn subtitles onto the clean body video.
8. Prepare the outro:
   - use the latest Leon-provided outro
   - preserve animation
   - preserve the original outro sound
   - remove visible `AI生成` text if present
   - keep black background, avatar, and like/follow/comment buttons clear
9. Append outro to the subtitled body video.
10. Extract QA screenshots from:
    - opening
    - one data-heavy section
    - one brand/SKU section
    - one late-video section
    - outro
11. If subtitles are early or late, redo recognition/alignment from the clean body video.

## Subtitle Timing Rule

Subtitle timing follows Leon's actual spoken speed.

Do not use:

- raw-video timing after rough cutting
- fixed average reading speed
- estimated timing from the script
- old SRT files from previous edits

If a body video is re-cut, regenerate subtitles from the new body video.

The final subtitle timing must be created from the clean edited body video.

The original口播文稿 is a wording and line-break reference, not a timeline.

When building burned subtitle overlays, preserve every real timing gap.

Do not drop small gaps such as `0.03s`.

Those tiny gaps accumulate across a long video and can make subtitles appear one or more seconds too early.

The subtitle overlay duration must match the clean body video duration.

Target mismatch:

- ideal: under `0.03s`
- acceptable: under `0.1s`

If the SRT looks correct but the final MP4 is early or late, inspect the overlay/concat duration logic, not only the SRT.

Append transparent blank frames at the end of the overlay if needed so the overlay and body video end together.

## Subtitle Text Rule

ASR provides timing.

Original口播文稿 provides correct wording.

Correct ASR mistakes using the original稿, especially:

- Action
- MR.DIY
- SKU
- 货号
- 品类
- 单支装
- 最大支装
- 宠物梳子
- 枕芯
- 进一两包
- 供应商
- 后Action时代

Do not replace Leon's actually spoken wording with a sentence he did not say.

If spoken wording and original稿 differ slightly, keep the spoken meaning and only fix clear typo/term errors.

## Subtitle Line-Break Rule

Every subtitle cue must be one visual line.

No automatic wrapping is allowed.

Preferred length:

- 4-12 Chinese characters per cue
- English/brand terms count by visual width, not character count

If one spoken sentence is long, split it into natural adjacent cues.

Good:

```text
他干的第一件事
反而是砍货
```

Bad:

```text
他干的第一件事反而是砍货
```

Never split words or brand names:

Bad:

```text
Acti
on
```

Good:

```text
Action
```

## Subtitle Visual Style

Canvas:

- 9:16
- 1080×1920

Position:

- lower 25% zone
- around y=1450 as baseline reference
- never cover Leon's mouth
- never touch the bottom control-safe area

Font:

- 思源黑体 常规
- fallback: Noto Sans CJK SC Regular

White text:

- white
- regular weight
- black shadow at about 60% opacity
- no heavy black stroke by default

Yellow emphasis:

- `#FACC15`
- slightly larger than white text
- same bottom baseline as white text

## Yellow Emphasis Rule

Choose yellow emphasis from:

- Leon's stressed words
- words after a meaningful pause
- core data
- core business judgment
- strong contrast words
- brand/category terms when needed

Limits:

- yellow text cannot exceed half of a line
- one line can have at most two non-contiguous yellow groups
- do not highlight three separate fragments in one line
- do not highlight just for decoration

## Outro Rule

Use the newest Leon-provided outro unless Leon gives a different file.

Default:

`/Users/waholisa/Downloads/片尾.mov`

Required:

- preserve the `叮` sound
- preserve animation
- crop to vertical clean version
- remove visible `AI生成`
- avatar and buttons should be substantially visible, not tiny
- no duplicated blurred horizontal background unless Leon explicitly wants that effect

## QA Checklist

Before delivery, verify:

- final video opens correctly
- audio exists through body and outro
- subtitles follow the edited video, not raw video
- no obvious ASR typo remains in key terms
- no subtitle line wraps into two lines
- no subtitle line exceeds the intended visual width
- yellow emphasis baseline aligns with white text
- outro has sound
- outro visual is clean and large enough

For problem reports such as “字幕跟不上”:

1. Identify whether current subtitles were created from raw timing or edited-body timing.
2. Re-run recognition on the edited body video.
3. Re-align with the口播文稿 for typos and line breaks.
4. Re-burn subtitles.
5. Inspect whether subtitle overlay gaps were preserved.
6. Re-check the exact complained timestamp in the final MP4 frame, not only in SRT.

Minimum timestamp QA:

- one opening point
- one middle data/case point
- one late-video transition point
- every user-reported timestamp

For each QA point, verify all three layers:

1. SRT cue text and time.
2. Subtitle overlay cue order and duration.
3. Final MP4 frame and audio.

## Deliverables

Return:

- final MP4 path
- corrected SRT path if generated
- QA screenshot paths if useful
- short note on what was cut and verified

Do not overwhelm Leon with processing internals unless debugging is needed.
