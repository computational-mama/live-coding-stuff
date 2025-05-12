```ruby
#--------sending OSC--using IP-----#

receiver_ip = "169.254.94.52"

farmao = (ring :C4, :Eb4, :G4, :B4, :C5, :B4, :G4, :Eb4)

use_osc receiver_ip, 7000

live_loop :oscTest do
  s = 0.25
  use_random_seed 456767
  melody = []
  8.times do
    note = farmao.choose
    melody.push([note, s])
  end
  melody.each do |note, s|
    play note
    osc "/note", note
    osc "/note_length", s
    sleep s
  end
end
```

```ruby
##-------locally sending OSC--------##

bell = "/Users/nanditi/Documents/Music/SFX/one bell.wav"
stone = "/Users/nanditi/Documents/Music/SFX/vice stonerub.wav"

use_osc "localhost", 3333
live_loop :oscTest do
  use_random_seed 7667766
  s = [0.125, 0.25, 0.50].choose
  16.times do
    r = [0.125, 0.25, 0.5].choose
    n = [bell, stone, :tabla_na, :tabla_ghe3, :perc_snap].choose
    co = rrand(30, 100)
    sus = rrand(0, 0.25)
    a = rrand(3.6, 4.6)
    sample n, release: r, cutoff: co, sustain: sus, amp: a
    osc "co", co
    osc "/sus", sus
    osc "/color", a
    sleep s
  end
  end
```
