# Intro
This is the code snippet to use osc from processing, you can use input values from mouse and keyboard via OSC to control the sonic pi sounds. 
Steps: 
1. Open the processing file and run the sketch
2. Open Sonic Pi, add the code below and run it

```ruby
live_loop :foo do
  use_real_time
  a, b, c = sync "/osc*/trigger/prophet"
  
  # Map a (mouseX) to MIDI note range
  note = (40 + (a / 640.0) * 60).to_i
  
  # Map b (mouseY) to cutoff frequency
  cutoff = (60 + (b / 480.0) * 60).to_i
  
  
  synth :prophet, note: note, cutoff: cutoff, sustain: c
  ##| puts "Note: #{note}, Cutoff: #{cutoff}, Sustain: #{c}"
  sleep 0.5
end
```

3. Now use the graphical window sharing by processing to control the sonic pi sounds.

> Note: make sure you click on "Allow Incoming OSC" in Sonic Pi, you can find it in the menu IO>Allow Incoming OSC
> <img width="654" alt="Screenshot 2025-05-04 at 2 11 37 PM" src="https://github.com/user-attachments/assets/a307f417-901f-4371-acb6-07b46ab4801a" />


It should look like this: 



https://github.com/user-attachments/assets/36700413-2de1-4dda-bbff-f21f114df131


